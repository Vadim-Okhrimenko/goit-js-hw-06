const formAccess = document.querySelector(".login-form");

formAccess.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені");
  } else {
    const formData = new FormData(evt.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
  }
  evt.currentTarget.reset();
}
