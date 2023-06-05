const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (email.value === "") {
    alert(`Error! You must fill ${email.name} field!`);
  } else if (password.value === "") {
    alert(`Error! You must fill ${password.name} field!`);
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
    formLogin.reset();
  }
}
