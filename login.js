(function(){
  if(localStorage.getItem('sw_demo_access') === '1'){
    window.location.replace('index.html');
  }
})
();

window.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('login-form');
  const user = document.getElementById('login-user');
  const pass = document.getElementById('login-pass');
  const err = document.getElementById('login-error');
  const USER_ID = 'dhruv@123';
  const PASSCODE = 'demo123';
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const uid = (user.value||'').trim();
    const pwd = (pass.value||'').trim();
    if(uid === USER_ID && pwd === PASSCODE){
      localStorage.setItem('sw_demo_access','1');
      localStorage.setItem('sw_demo_user', uid);
      window.location.replace('index.html');
    } else {
      err.textContent = 'Invalid user or passcode';
    }
  });
});

