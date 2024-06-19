// Created by David Dolejší

alert("New feature: Rotate the globe by your finger");

const { mat4, vec3 } = glMatrix;

onload = preload;

function preload() {
    const loader = Loader();
    loader.addImage("earth_daymap", "https://raw.githubusercontent.com/DonDejvo/DonDejvo/main/2k_earth_daymap.jpg");
    loader.addImage("earth_nightmap", "https://raw.githubusercontent.com/DonDejvo/DonDejvo/main/2k_earth_nightmap.jpg");
    loader.load()
        .then((resources) => main(resources));
}

function main(resources) {
    const canvas = this.document.querySelector("canvas");
    canvas.width = innerWidth;
    canvas.height = innerWidth;
    const gl = canvas.getContext("webgl");

    //gl.viewport(0, 0, 150, 300)

    const program = createProgram(gl, document.getElementById("texture-light-vertex").innerHTML, document.getElementById("texture-light-fragment").innerHTML);
    const programInfo = {
        program: program,
        attribs: {
            pos: getAttrib(gl, program, "a_pos", 3),
            normal: getAttrib(gl, program, "a_normal", 3),
            uv: getAttrib(gl, program, "a_uv", 2)
        },
        uniforms: {
            proj: getUniform(gl, program, "u_proj", "mat4"),
            view: getUniform(gl, program, "u_view", "mat4"),
            world: getUniform(gl, program, "u_world", "mat4"),
            ambientColor: getUniform(gl, program, "u_ambientColor", "vec3"),
            ambient: getUniform(gl, program, "u_ambient", "vec3"),
            fogColor: getUniform(gl, program, "u_fogColor", "vec4"),
            fogNear: getUniform(gl, program, "u_fogNear", "float"),
            fogFar: getUniform(gl, program, "u_fogFar", "float"),
            worldInverseTranspose: getUniform(gl, program, "u_worldInverseTranspose", "mat4"),
            difuseColor: getUniform(gl, program, "u_difuseColor", "vec3"),
            difuse: getUniform(gl, program, "u_difuse", "vec3"),
            specularColor: getUniform(gl, program, "u_specularColor", "vec3"),
            specular: getUniform(gl, program, "u_specular", "vec3"),
            shininess: getUniform(gl, program, "u_shininess", "float"),
            lightPosition: getUniform(gl, program, "u_worldLightPos", "vec3"),
            cameraPosition: getUniform(gl, program, "u_worldCameraPos", "vec3"),
            difuseMap: getUniform(gl, program, "u_difuseMap", "int"),
            specularMap: getUniform(gl, program, "u_specularMap", "int"),
        }
    };

    const geometry = generateSphereGeometry(36, 36);
    
    const posBuffer = initBuffer(gl, gl.ARRAY_BUFFER, new Float32Array(geometry.positions));
    const normalBuffer = initBuffer(gl, gl.ARRAY_BUFFER, new Float32Array(geometry.normals));
    const uvBuffer = initBuffer(gl, gl.ARRAY_BUFFER, new Float32Array(geometry.uv));

    const projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix, Math.PI / 3, canvas.width / canvas.height, 0.1, 100);

    const camera = {
        position: vec3.fromValues(0, 0, 5),
        center: vec3.fromValues(0, 0, 0),
        up: vec3.fromValues(0, 1, 0)
    };

    const lightPosition = vec3.fromValues(-2, 5, 15);
    const color = [.9, .9, .9];
    const shininess = 12;

    let rotY = 0.3;
    let rotX = 0.3;
    let posZ = 0;
    let startY = 0;
    let isMousePressed = false;
    let isDay = true;

    const fogColor = [0.05, 0.05, 0.1, 1];
    const fogNear = 100;
    const fogFar = 100;

    const texture = createTexture(gl, {
        filter: "linear"
    });

    updateTexture(gl, texture, resources["earth_daymap"]);

    requestAnimationFrame(animate);
    
    addEventListener("touchstart", handleTouchstart);
    addEventListener("touchmove", handleTouchmove);
    addEventListener("touchend", () => isMousePressed = false);
    addEventListener("mousedown", handleMousedown);
    addEventListener("mousemove", handleMousemove);
    addEventListener("mouseup", () => isMousePressed = false);

    function animate() {
        
        const state = Math.abs(rotY % (4 * Math.PI)) > 2 * Math.PI;
        if(state != isDay) {
            isDay = state;
            updateTexture(gl, texture, resources[isDay ? "earth_nightmap" : "earth_daymap"]);
        }
        
        if(!isMousePressed) {
            rotY += 0.006;
        }

        const viewMatrix = mat4.create();
        mat4.lookAt(viewMatrix, camera.position, camera.center, camera.up);

        const worldMatrix = mat4.create();
        mat4.translate(worldMatrix, worldMatrix, [0, 0, posZ]);
        mat4.rotateX(worldMatrix, worldMatrix, rotX);
        mat4.rotateY(worldMatrix, worldMatrix, rotY);
        mat4.scale(worldMatrix, worldMatrix, [2, 2, 2]);

        const worldInverseTranspose = mat4.create();
        mat4.invert(worldInverseTranspose, worldMatrix);
        mat4.transpose(worldInverseTranspose, worldInverseTranspose);

        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(...fogColor);

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.useProgram(program);
        
        bindAttrib(gl, posBuffer, programInfo.attribs.pos);
        bindAttrib(gl, normalBuffer, programInfo.attribs.normal);
        bindAttrib(gl, uvBuffer, programInfo.attribs.uv);
        
        supplyUniform(gl, programInfo.uniforms.proj, projectionMatrix);
        supplyUniform(gl, programInfo.uniforms.view, viewMatrix);
        supplyUniform(gl, programInfo.uniforms.world, worldMatrix);
        supplyUniform(gl, programInfo.uniforms.fogColor, fogColor);
        supplyUniform(gl, programInfo.uniforms.ambientColor, color);
        supplyUniform(gl, programInfo.uniforms.ambient, [0.1, 0.1, 0.1]);
        supplyUniform(gl, programInfo.uniforms.fogNear, fogNear);
        supplyUniform(gl, programInfo.uniforms.fogFar, fogFar);
        supplyUniform(gl, programInfo.uniforms.worldInverseTranspose, worldInverseTranspose);
        supplyUniform(gl, programInfo.uniforms.difuse, [1, 1, 1]);
        supplyUniform(gl, programInfo.uniforms.difuseColor, color);
        supplyUniform(gl, programInfo.uniforms.specular, [0.5, 0.5, 0.5]);
        supplyUniform(gl, programInfo.uniforms.specularColor, [1, 0.9, 0.4]);
        supplyUniform(gl, programInfo.uniforms.lightPosition, lightPosition);
        supplyUniform(gl, programInfo.uniforms.cameraPosition, camera.position);
        supplyUniform(gl, programInfo.uniforms.shininess, shininess);
        supplyUniform(gl, programInfo.uniforms.difuseMap, 0);
        supplyUniform(gl, programInfo.uniforms.specularMap, 1);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, texture);

        gl.drawArrays(gl.TRIANGLES, 0, geometry.count);

        requestAnimationFrame(animate);
    }
    
    function handleTouchstart(e) {
        isMousePressed = true;
        scroll(e.changedTouches[0].pageX, true);
    }
    
    function handleTouchmove(e) {
        scroll(e.changedTouches[0].pageX);
    }

    function handleMousedown(e) {
        isMousePressed = true;
        scroll(e.pageX, true);
    }

    function handleMousemove(e) {
        if(isMousePressed) {
            scroll(e.pageX);
        }
    }

    function scroll(y, first = false) {
        if(!first) {
            rotY += (y - startY) * 0.02;
        }
        startY = y;
    }
}

function generateSphereGeometry(divX, divY) {
    const posCache = [];
    const uvCache = [];
    const normalCache = [];
    for(let i = 0; i <= divY; ++i) {
        const angle1 = i / divY * Math.PI;
        const sin1 = Math.sin(angle1);
        const cos1 = Math.cos(angle1);
        for(let j = 0; j <= divX; ++j) {
            const angle2 = j / divX * 2 * Math.PI;
            const sin2 = Math.sin(angle2);
            const cos2 = Math.cos(angle2);
            const pos = [
                sin1 * cos2,
                cos1,
                sin1 * sin2
            ];
            const normal = [...pos];
            const uv = [
                1 - j / divX,
                i / divY
            ];
            posCache.push(pos);
            normalCache.push(normal);
            uvCache.push(uv);
        }
    }
    const positions = [];
    const uv = [];
    const normals = [];
    for(let i = 0; i < divY; ++i) {
        for(let j = 0; j < divX; ++j) {
            const p1 = i * (divX + 1) + j;
            const p2 = p1 + (divX + 1);
            const indices = [p1, p2, p1 + 1, p1 + 1, p2, p2 + 1];
            for(let idx of indices) {
                positions.push(...posCache[idx]);
                uv.push(...uvCache[idx]);
                normals.push(...normalCache[idx]);
            }
        }
    }
    return {
        positions: positions,
        uv: uv,
        normals: normals,
        count: positions.length / 3
    };
}

function generatePlaneGeometry(divX, divZ) {
    const posCache = [];
    const uvCache = [];
    const normalCache = [[0, 1, 0]];
    for(let i = 0; i <= divZ; ++i) {
        for(let j = 0; j <= divX; ++j) {
            const pos = [
                -1 + 2 * j / divX,
                0,
                -1 + 2 * i / divZ
            ];
            const uv = [
                j / divX,
                i / divZ
            ];
            posCache.push(pos);
            uvCache.push(uv);
        }
    }
    const positions = [];
    const uv = [];
    const normals = [];
    for(let i = 0; i < divZ; ++i) {
        for(let j = 0; j < divX; ++j) {
            const p1 = i * (divX + 1) + j;
            const p2 = p1 + (divX + 1);
            const indices = [p1, p2, p1 + 1, p1 + 1, p2, p2 + 1];
            for(let idx of indices) {
                positions.push(...posCache[idx]);
                uv.push(...uvCache[idx]);
                normals.push(...normalCache[0]);
            }
        }
    }
    return {
        positions: positions,
        uv: uv,
        normals: normals,
        count: positions.length / 3
    };
}

function generateCubeGeometry() {
    const positions = [
        // Front face
            -1.0, -1.0, 1.0,
            1.0, -1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            -1.0, 1.0, 1.0,
            -1.0, -1.0, 1.0,
            // Back face
            -1.0, -1.0, -1.0,
            -1.0, 1.0, -1.0,
            1.0, 1.0, -1.0,
            1.0, 1.0, -1.0,
            1.0, -1.0, -1.0,
            -1.0, -1.0, -1.0,
            // Top face
            -1.0, 1.0, -1.0,
            -1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, -1.0,
            -1.0, 1.0, -1.0,
            // Bottom face
            -1.0, -1.0, -1.0,
            1.0, -1.0, -1.0,
            1.0, -1.0, 1.0,
            1.0, -1.0, 1.0,
            -1.0, -1.0, 1.0,
            -1.0, -1.0, -1.0,
            // Right face
            1.0, -1.0, -1.0,
            1.0, 1.0, -1.0,
            1.0, 1.0, 1.0,
            1.0, 1.0, 1.0,
            1.0, -1.0, 1.0,
            1.0, -1.0, -1.0,
            // Left face
            -1.0, -1.0, -1.0,
            -1.0, -1.0, 1.0,
            -1.0, 1.0, 1.0,
            -1.0, 1.0, 1.0,
            -1.0, 1.0, -1.0,
            -1.0, -1.0, -1.0,
    ];
    const normals = [
        // Front face
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            // Back face
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            // Top face
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            // Bottom face
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            // Right face
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            // Left face
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
    ];
    const uv = [
        // Front face
            0, 1,
            1, 1,
            1, 0,
            1, 0,
            0, 0,
            0, 1,
            // Back face
            1, 1,
            1, 0,
            0, 0,
            0, 0,
            0, 1,
            1, 1,
            // Top face
            0, 0,
            0, 1,
            1, 1,
            1, 1,
            1, 0,
            0, 0,
            // Bottom face
            0, 1,
            1, 1,
            1, 0,
            1, 0,
            0, 0,
            0, 1,
            // Right face
            1, 1,
            1, 0,
            0, 0,
            0, 0,
            0, 1,
            1, 1,
            // Left face
            0, 1,
            1, 1,
            1, 0,
            1, 0,
            0, 0,
            0, 1,
    ];
    return {
        positions: positions,
        uv: uv,
        normals: normals,
        count: positions.length / 3
    };
}

function Loader() {
    const toLoad = [];
    return {
        add(name, type, path) {
            toLoad.push({name: name, type: type, path: path});
        },
        addImage(name, path) {
            this.add(name, "image", path);
        },
        load() {
            let loadedCounter = 0;
            const loaded = {};
            return new Promise((resolve) => {
                const cb = (elem, data) => {
                    loaded[elem.name] = data;
                    ++loadedCounter;
                    if(loadedCounter == toLoad.length) {
                        resolve(loaded);
                    }
                }
                for(const elem of toLoad) {
                    switch(elem.type) {
                        case "image":
                            this.loadImage(elem.path)
                                .then((data) => cb(elem, data));
                            break;
                    }
                }
            });
        },
        loadImage(src) {
            const image = new Image();
            image.src = src;
            image.crossOrigin = "";
            return new Promise((resolve) => {
                image.onload = () => resolve(image);
            });
        }
    }
}

function createShader(gl, type, src) {
    const id = gl.createShader(type);
    gl.shaderSource(id, src);
    gl.compileShader(id);
    if(!gl.getShaderParameter(id, gl.COMPILE_STATUS)) {
        console.log(gl.getShaderInfoLog(id));
        throw new Error("GLShaderError");
    }
    return id;
}

function createProgram(gl, vs, fs) {
    const program = gl.createProgram();
    const vertShader = createShader(gl, gl.VERTEX_SHADER, vs);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fs);
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.log(gl.getProgramInfoLog(program));
        throw new Error("GLProgramError");
    }
    return program;
}

function getAttrib(gl, program, name, size) {
    return {
        location: gl.getAttribLocation(program, name),
        size: size
    };
}

function bindAttrib(gl, buffer, attrib) {
    if(attrib.location === -1) {
        return;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(attrib.location);
    gl.vertexAttribPointer(attrib.location, attrib.size, gl.FLOAT, false, 0, 0);
}

function getUniform(gl, program, name, type) {
    return {
        location: gl.getUniformLocation(program, name),
        type: type
    };
}

function supplyUniform(gl, uniform, value) {
    if(uniform.location === -1) {
        return;
    }
    switch(uniform.type) {
        case "float":
            gl.uniform1f(uniform.location, value);
            break;
        case "vec2":
            gl.uniform2fv(uniform.location, value);
            break;
        case "vec3":
            gl.uniform3fv(uniform.location, value);
            break;
        case "vec4":
            gl.uniform4fv(uniform.location, value);
            break;
        case "mat2":
            gl.uniformMatrix2fv(uniform.location, false, value);
            break;
        case "mat3":
            gl.uniformMatrix3fv(uniform.location, false, value);
            break;
        case "mat4":
            gl.uniformMatrix4fv(uniform.location, false, value);
            break;
        case "int":
            gl.uniform1i(uniform.location, value);
            break;
    }
}

function initBuffer(gl, target, data, usage = undefined) {
    if(usage === undefined) {
        usage = gl.STATIC_DRAW;
    }
    const id = gl.createBuffer();
    gl.bindBuffer(target, id);
    gl.bufferData(target, data, usage);
    gl.bindBuffer(target, null);
    return id;
}

function createTexture(gl, params = {}) {
    const filter = (() => {
        switch(params.filter) {
            case "nearest": return gl.NEAREST;
            case "linear": return gl.LINEAR;
            case "nearest_mipmap_nearest": return gl.NEAREST_MIPMAP_NEAREST;
            case "linear_mipmap_nearest": return gl.LINEAR_MIPMAP_NEAREST;
            case "nearest_mipmap_linear": return gl.NEAREST_MIPMAP_LINEAR;
            case "linear_mipmap_linear": return gl.LINEAR_MIPMAP_LINEAR;
            default: return gl.NEAREST;
        }
    })();
    const wrap = (() => {
        switch(params.wrap) {
            case "clamp_to_edge": return gl.CLAMP_TO_EDGE;
            case "repeat": return gl.REPEAT;
            default: return gl.CLAMP_TO_EDGE;
        }
    })();

    const id = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, id);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255, 255]));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);

    return id;
}

function updateTexture(gl, texture, image) {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    if(isPowerOf2(image.width) && isPowerOf2(image.height)) {
        gl.generateMipmap(gl.TEXTURE_2D);
    }
}

function isPowerOf2(value) {
    return (value & (value - 1)) === 0;
}