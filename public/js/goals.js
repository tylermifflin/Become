// Attach event listener to delete buttons
const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const confirmation = confirm('Are you sure you want to delete this goal?');
        if (confirmation) {
            const form = button.parentNode;
            form.submit();
        }
    });
});

// Attach event listener to add goal button
const addGoalForm = document.getElementById('add-goal-form');
const addGoalButton = document.getElementById('add-goal-btn');
addGoalButton.addEventListener('click', (event) => {
    event.preventDefault();
    // Perform validation checks here
    addGoalForm.submit();
});
