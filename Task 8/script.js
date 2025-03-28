document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    function validateField(id) {
      let field = document.getElementById(id);
      let errorSpan = field.nextElementSibling;
      if (field.value.trim() === "") {
        errorSpan.style.visibility = "visible";
        isValid = false;
      } else {
        errorSpan.style.visibility = "hidden";
      }
    }

    validateField("firstName");
    validateField("lastName");
    validateField("email");
    validateField("password");
    validateField("rePassword");
    validateField("age");
    validateField("phone");
    validateField("address");
    validateField("state");

    let password = document.getElementById("password").value;
    let rePassword = document.getElementById("rePassword").value;
    let rePasswordError =
      document.getElementById("rePassword").nextElementSibling;
    if (password !== rePassword || password === "") {
      rePasswordError.style.visibility = "visible";
      isValid = false;
    } else {
      rePasswordError.style.visibility = "hidden";
    }

    if (isValid) {
      alert("Registration Successful!");
    }
  });
