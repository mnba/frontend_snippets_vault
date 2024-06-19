//ells_disks
let cont = document.getElementById('container');
let plist = cont.children; //.childNodes;
//document.getElementsByClassName('disk');
for (var i = 0; i < plist.length; i++)
{ 
 console.log(plist[i].id);
}

//document.getElementsByClassName('disk');
//querySelector('disk');
console.log('len=', typeof plist.length);
for(let eld of plist){
  console.log(' x.id=', eld.id);
}

document.addEventListener('click', ((e)=>{
    console.log('disk№-', this.id);
}).bind(this));
