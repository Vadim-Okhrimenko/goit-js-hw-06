const formAccess = document.querySelector(".login-form");

formAccess.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені");
  }

  console.log(
    `Email: ${email.value}, 
     Password: ${password.value}
     `
  );

  evt.currentTarget.reset();
}
