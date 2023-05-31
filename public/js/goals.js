document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const titleInput = document.querySelector('#title');
    const descriptionInput = document.querySelector('#description');
    const endDateInput = document.querySelector('#end_date');
  
    const newGoal = {
      title: titleInput.value.trim(),
      description: descriptionInput.value.trim(),
      end_date: endDateInput.value.trim()
    };
  
    if (newGoal.title && newGoal.description && newGoal.end_date) {
      try {
        const response = await axios.post('/goals', newGoal);
        // Handle successful response
        console.log(response.data);
        // Reload the page to display the newly added goal
        window.location.reload();
      } catch (error) {
        // Handle error
        console.error(error);
      }
  
      titleInput.value = '';
      descriptionInput.value = '';
      endDateInput.value = '';
    }
  });
  