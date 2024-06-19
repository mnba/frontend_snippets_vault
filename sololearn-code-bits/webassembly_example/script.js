// Created by ChillPill

/*
we can get a wasm file from the wat file using the wabt tools. (wabbit)

to install wabt:
sudo apt install wabt

to convert wat text to binary wasm:
wat2wasm file.wat

*/
/*wasm file content below*/
const wasm_bytecode = 
new Uint8Array(
[
0x0,0x61,0x73,0x6d,0x1,0x0,0x0,0x0,0x1,0x9,0x2,0x60,0x1,0x7f,0x0,0x60,0x0,0x1,0x7f,0x3,0x4,0x3,0x0,0x1,0x1,0x5,0x3,0x1,0x0,0x1,0x6,0xb,0x2,0x7f,0x1,0x41,0x0,0xb,0x7f,0x1,0x41,0x0,0xb,0x7,0x16,0x3,0x4,0x70,0x75,0x73,0x68,0x0,0x0,0x3,0x70,0x6f,0x70,0x0,0x1,0x5,0x65,0x6d,0x70,0x74,0x79,0x0,0x2,0xa,0x35,0x3,0x17,0x0,0x23,0x0,0x20,0x0,0x36,0x2,0x0,0x41,0x4,0x23,0x0,0x6a,0x24,0x0,0x23,0x1,0x41,0x1,0x6a,0x24,0x1,0xb,0x15,0x0,0x23,0x0,0x41,0x4,0x6b,0x24,0x0,0x23,0x1,0x41,0x1,0x6b,0x24,0x1,0x23,0x0,0x28,0x2,0x0,0xb,0x5,0x0,0x23,0x1,0x45,0xb]
)
onload = async function(){
    //create: module, object; take WASM-exported functions
    const {instance, module} = await WebAssembly.instantiate(wasm_bytecode,{});
    const { push, pop, empty} = instance.exportsl
    
    //use: call the code
    for(let i=100;i--;) 
      push(i);
    while(!empty()) 
      document.body.innerText += " "+pop();
}
/* wat file - webassembly text*/
/*
(module
(memory $stack 1)
(global $ptr (mut i32) (i32.const 0))
(global $index (mut i32) (i32.const 0))
(func $push (param $pushedValue i32)
    global.get $ptr
    local.get $pushedValue
    i32.store
    i32.const 4
    global.get $ptr
    i32.add
    global.set $ptr
    global.get $index
    i32.const 1
    i32.add
    global.set $index
)
(func $pop (result i32)
    global.get $ptr
    i32.const 4
    i32.sub
    global.set $ptr
    global.get $index
    i32.const 1
    i32.sub
    global.set $index
    global.get $ptr
    i32.load
)
(func $empty (result i32)
    global.get $index
    i32.eqz
)
(export "push" (func $push))
(export "pop" (func $pop))
(export "empty" (func $empty))
)

*/




