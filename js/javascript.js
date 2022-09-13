/* BACKGROUND SIZE
   ========================================================================== */
   const updateBgShape = () => {
    const bg = document.querySelector('.js-background');
    const shape = document.querySelector('.js-shape');
  
    bg.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
    shape.setAttribute('points', `0 0 ${window.innerWidth} 0 0 ${window.innerHeight}`);
    mta.triggerEvent("onBrowserLoad");
  }
  
  
  
  /* FORM VALIDATION
     =================================================================== */
  const loginPanel = document.querySelector('.js-login');
  const loginForm = document.querySelector('.js-form');
  const inputUser = document.querySelector('.js-user');
  const inputPass = document.querySelector('.js-pass');
  const revealPass = document.querySelector('.js-reveal');
  const submitLogin = document.querySelector('.js-submit');
  
  /**
   * Check if the input passed as argument is empty
   */
  const isInputEmpty = element => !element.value;
  
  /**
   * Validate if either inputs were filled
   */
  const validateSubmition = () => {
    (isInputEmpty(inputUser) | isInputEmpty(inputPass))
      ? loginPanel.classList.add('has-error')
      : loginPanel.classList.remove('has-error');
  
    isInputEmpty(inputUser)
      ? inputUser.classList.add('has-error')
      : inputUser.classList.remove('has-error');
  
    isInputEmpty(inputPass)
      ? inputPass.classList.add('has-error')
      : inputPass.classList.remove('has-error');
  }
  
  /**
   * Toggle `.is-filled` class if the input is not empty
   */
  const handleInputChange = element => {
    element.target.value != ''
      ? element.target.classList.add('is-filled')
      : element.target.classList.remove('is-filled');
  }
  
  /**
   * Toggle input type to reveal password
   */
  const revealPassword = element => {
    inputPass.type == 'password'
      ? inputPass.type = 'text'
      : inputPass.type = 'password';a
  }
  
  /**
   * Form submition handler
   */
  const handleLoginForm = event => {
    event.preventDefault();
    document.documentElement.classList.add('f-submitted');
    //mta.triggerEvent("onPressLogin", document.getElementById("usernameInput").value, document.getElementById("password").value);
    setTimeout(() => document.documentElement.classList.remove('f-submitted'), 1000)
    //setTimeout(() => location.reload(), 1000)
  }
  
  function onUserChange() {
      mta.triggerEvent("onClientChangeNick", document.getElementById("usernameInput").value);
  }
  
  
  
  
  /* EVENT LISTENERS
     ========================================================================== */
  inputUser.addEventListener('change', handleInputChange);
  inputUser.addEventListener('input', onUserChange);
  inputPass.addEventListener('change', handleInputChange);
  revealPass.addEventListener('click', revealPassword);
  //submitLogin.addEventListener('click', validateSubmition);
  loginForm.addEventListener('submit', handleLoginForm);
  
  window.addEventListener('resize', updateBgShape);
  window.onload = updateBgShape();