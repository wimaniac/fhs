const signupBtn = document.getElementById('signupBtn');
const signinBtn = document.getElementById('signinBtn');
const nameField = document.getElementById('nameFiled');
const forgetpassword=document.getElementById('forget-password')
const btnSignup=document.getElementById('btnSignup')
const btnSignin=document.getElementById('btnSignin')
const btnSigninFB=document.getElementById('btnSigninFB')
const signupTerm=document.getElementById('signupTerm')
signupBtn.addEventListener('click', () => {
  nameField.style.display = 'block';
  btnSignup.style.display = 'block';
  signupTerm.style.display = 'block';
  forgetpassword.style.display = 'none';
  btnSignin.style.display = 'none';
  btnSigninFB.style.display = 'none';
});

signinBtn.addEventListener('click', () => {
  nameField.style.display = 'none';
  btnSignup.style.display = 'none';
  forgetpassword.style.display = 'block';
  btnSignin.style.display = 'block';
  btnSigninFB.style.display = 'block';
  signupTerm.style.display = 'none';
});