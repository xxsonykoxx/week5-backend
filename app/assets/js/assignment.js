const user_reply = document.getElementById('user_reply');
const buttons = document.getElementById('buttons');


CKEDITOR.replace('editor1');
const reply_btn = document.getElementById('reply_btn');
const ckeditor = document.getElementById('ckeditor');

reply_btn.addEventListener('click',function() { 
  user_reply.style.display = "none";
  buttons.style.display = "none";
  ckeditor.style.display = "block";
})

const return_btn = document.getElementById('return_btn');
const edit_btn = document.getElementById('edit_btn');

return_btn.addEventListener('click', returnFunc);
edit_btn.addEventListener('click',returnFunc);

function returnFunc () {
  user_reply.style.display = "block";
  buttons.style.display = "flex";
  ckeditor.style.display = "none";
}