const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Show the loader container
    const loaderContainer = document.querySelector("#loaderContainer");
    loaderContainer.style.display = "flex";
    const loginPage = document.querySelector('#loginPage');
    loginPage.style.display = 'none';
  

    try {
      // Send a POST request to the API endpoint
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        // Delay redirecting to the homepage
        setTimeout(function () {
          document.location.replace("/");
        }, 2000); // Change the timeout value to the desired duration of the loader
      } else {
        alert(response.statusText);
        location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
      // Hide the loader container if an error occurs
      loaderContainer.style.display = "none";
    }
  }
};


const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".login-form").addEventListener("submit", loginFormHandler);

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);

document.querySelector(".login-form").addEventListener("reset", loginFormHandler);

document.querySelector(".signup-form").addEventListener("logout", signupFormHandler);
