const eyePass = document.getElementById('eyePass');
const input = document.getElementById('password');
let isOpened = false;
input.setAttribute('type', 'text');
eyePass.addEventListener('click', () => {
  if (!isOpened) {
    eyePass.setAttribute('src', './src/icons8-eye-30.png');
    input.setAttribute('type', 'text');
    isOpened = true;
  } else {
    eyePass.setAttribute('src', './src/icons8-closed-eye-50.png');
    input.setAttribute('type', 'password');
    console.log(input.value);
    isOpened = false;
  }
  return isOpened;
});
