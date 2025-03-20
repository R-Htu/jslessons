const lessonNav = document.getElementById('lesson-nav-btn');
const navUl = document.getElementById('nav-ul');
const closeBtn = document.getElementById('close-btn');


lessonNav.addEventListener('click', () => {

    navUl.style.display = (navUl.style.display === 'block') ? 'none' : 'block';

 /* if (navUl.style.display === 'block') {
    navUl.style.display = 'none';
  } else {
    navUl.style.display = 'block';
  }*/
});


closeBtn.addEventListener('click', () => {
  navUl.style.display = 'none';
});

window.addEventListener('click', (e) => {
            if (!lessonNav.contains(e.target) && !navUl.contains(e.target)) {
                navUl.style.display = 'none';
            }
});