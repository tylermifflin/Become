const submitFormHandler = async (event) => {
   
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
    const end_date = document.querySelector('#end_date').value.trim();
 
  
    if (title && description && end_date) {
      try {

        const response = await fetch('/api/goals', {
          method: 'POST',
          body: JSON.stringify({ title, description, end_date }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          console.log(response.data);
          document.location.replace('/goals');
        } else {
          console.error('Failed to create goal');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  const deleteButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const confirmation = confirm('Are you sure you want to delete this goal?');
      if (confirmation) {
        try {
          const response = await fetch(`/api/goals/${id}`, {
            method: 'DELETE',
          });
  
          if (response.ok) {
            window.location.reload();
          } else {
            console.error('Failed to delete goal');
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  
  document.querySelector('#add-goal-form').addEventListener('submit', submitFormHandler);
  
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', deleteButtonHandler);
  });
  
  