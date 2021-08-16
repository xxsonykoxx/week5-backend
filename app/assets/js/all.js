
/*・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ*/

const nav = document.getElementById('nav');
nav.addEventListener('click',function(e){
  // e.preventDefault();
  let links = document.querySelectorAll('.nav-link');
  links.forEach( i => {
    i.classList.remove('active')
  });
   e.target.classList.add("active");
},true );

/*・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ*/

// const admin = document.getElementById('admin');
// const assignment = document.getElementById('assignment');
// admin.addEventListener('click',function(){
//  location.href='./admin.html';
// })
// assignment.addEventListener('click',function(){
//   location.href='./index.html';
//  })