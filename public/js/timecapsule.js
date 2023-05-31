// Attach event listener to delete buttons
const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const confirmation = confirm('Are you sure you want to delete this time capsule?');
        if (confirmation) {
            const form = button.parentNode;
            form.submit();
        }
    });
});

// Attach event listener to create time capsule button
const createTimeCapsuleForm = document.getElementById('create-timecapsule-form');
const createTimeCapsuleButton = document.getElementById('create-timecapsule-btn');
createTimeCapsuleButton.addEventListener('click', (event) => {
    event.preventDefault();
    // Perform validation checks here
    createTimeCapsuleForm.submit();
});
