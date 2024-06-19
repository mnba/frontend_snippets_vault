// Created by Aakaanksha 💕

const baseUrl = 'https://www.google.com/search?igu=1&gws_rd=ssl&q=';

/*
<!--
🍧 Google Clone 🤗💕💕

🍧 Coded by: Aakaanksha Vashisht💕
🍧 Thanks to: Sick L̲̅i̲̅n̲̅e̲̅ B̶r̶o̶🌡️ for help.
🍧
🍧 Date of submission: 18-July-2020
🍧
❌ Don't copy(❌) without permission
🍧 Owner: Aakaanksha💕©️
🍧
🍧 Made with alot of hardwork & love♥️😍
🍧 Hope you'll love it:   
   (🍧🍰🍬🍨🍦🍭🍧🍰🍨🍬🍭🍦)
   ----------------------------
-->
*/


document.addEventListener("DOMContentLoaded", () => {

  const burger_btn = document.getElementById('burger_btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const input = document.getElementById('mySearch');
  const mainContainer = document.getElementById('mainContainer');
  const myFrame = document.getElementById('myFrame');
  const allBtn = document.getElementById('allBtn');
  const imagesBtn = document.getElementById('imagesBtn');
  const me = document.getElementById('me');

  burger_btn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar_open');
    overlay.classList.toggle('overlay_open');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar_open');
    overlay.classList.toggle('overlay_open');
  });

  input.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
      if(input.value == '')
          return;
      mainContainer.style.display='none';
      myFrame.style.display='block';
      myFrame.setAttribute('src', baseUrl+input.value);
      console.log('Google Clone By: Aakaanksha💕');
  for(let i=0; i<=1000; i++)
      console.log('\n');
    }

  });
  
  allBtn.addEventListener('click', () => {
    allBtn.classList.add('active');
    imagesBtn.classList.remove('active');
  });
  
  imagesBtn.addEventListener('click', () => {
    allBtn.classList.remove('active');
    imagesBtn.classList.add('active');
  });
  
  me.addEventListener('click',()=>{
      
      swal("Follow me 😳🤗💕", "",
  "success").then(()=>{
      window.location.href = "https://www.sololearn.com/Profile/12942084/?ref=app";
  });
      
  });

});
