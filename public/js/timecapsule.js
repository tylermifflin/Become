// Attach event listener to delete buttons
const deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const confirmation = confirm("Are you sure you want to delete this time capsule?");
    if (confirmation) {
      const form = button.parentNode;
      form.submit();
    }
  });
});

// Attach event listener to create time capsule button
const createTimeCapsuleForm = document.getElementById("create-timecapsule-form");
const createTimeCapsuleButton = document.getElementById("create-timecapsule-btn");
createTimeCapsuleButton.addEventListener("click", (event) => {
  event.preventDefault();
  // Perform validation checks here
  createTimeCapsuleForm.submit();
});

const countdownBtns = document.querySelectorAll("#countdown-btn");
countdownBtns.forEach(function (countdownBtn) {
  const endDate = new Date(countdownBtn.getAttribute("data-end-date")).getTime();
  const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = endDate - now;
    if (distance < 0) {
      clearInterval(countdownInterval);
      countdownBtn.innerHTML = "Unlock Time Capsule";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      countdownBtn.innerHTML =
        "Time Capsule Locked for: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }
  }, 1000);
});


const renderContent = async (event) => {
  const renderTo = document.querySelector("#timecapsule-content");
    const content = event.target.getAttribute("data-unlock-content");
    console.log(content);
      renderTo.innerHTML = content;
  };

document.querySelector(".active-btn").addEventListener("click", renderContent);




