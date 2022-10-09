const form = document.querySelector(".login-form");

function formInput(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Please, fill this form correctly");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
  }
  event.currentTarget.reset();
}
form.addEventListener("submit", formInput);
