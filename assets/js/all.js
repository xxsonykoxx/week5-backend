"use strict";

/*・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ*/
var nav = document.getElementById('nav');
nav.addEventListener('click', function (e) {
  // e.preventDefault();
  var links = document.querySelectorAll('.nav-link');
  links.forEach(function (i) {
    i.classList.remove('active');
  });
  e.target.classList.add("active");
}, true);
/*・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ・*:..｡o○☆*ﾟ*/
// const admin = document.getElementById('admin');
// const assignment = document.getElementById('assignment');
// admin.addEventListener('click',function(){
//  location.href='./admin.html';
// })
// assignment.addEventListener('click',function(){
//   location.href='./index.html';
//  })
"use strict";

var user_reply = document.getElementById('user_reply');
var buttons = document.getElementById('buttons');
CKEDITOR.replace('editor1');
var reply_btn = document.getElementById('reply_btn');
var ckeditor = document.getElementById('ckeditor');
reply_btn.addEventListener('click', function () {
  user_reply.style.display = "none";
  buttons.style.display = "none";
  ckeditor.style.display = "block";
});
var return_btn = document.getElementById('return_btn');
var edit_btn = document.getElementById('edit_btn');
return_btn.addEventListener('click', returnFunc);
edit_btn.addEventListener('click', returnFunc);

function returnFunc() {
  user_reply.style.display = "block";
  buttons.style.display = "flex";
  ckeditor.style.display = "none";
}
//# sourceMappingURL=all.js.map
