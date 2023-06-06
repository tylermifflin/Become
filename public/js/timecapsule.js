// setting up an event listener for the new timecapsule post form
const newTimeCapsuleFormHandler = async (event) => {
    event.preventDefault();
    
    // get the title and content from the form
    const title = document.querySelector('#timecapsule-title').value.trim();
    const description = document.querySelector('#timecapsule-content').value.trim();
    const end_date = document.querySelector('#end_date').value.trim();
    
    
    // if both title and content exist, send a POST request to the API endpoint
    if (title && description && end_date) {
        const newTimeCapsule = await fetch(`/api/timeCapsule`, {
        method: 'POST',
        body: JSON.stringify({ title, description, end_date }),
        headers: { 'Content-Type': 'application/json' },
        });
    
        // if the response is okay, reload the page
        if (newTimeCapsule.ok) {
        document.location.replace('/timecapsule');
        } else {
        alert('Unsuccessful time capsule post. Please try again.');
        }
    }
    };

    // setting up event listener for the delete button
    const deleteTimeCapsule = async (event) => {
        if (event.target.hasAttribute('data-id')) {
            const id = event.target.getAttribute('data-id');
            const deletetimecapsule = await fetch(`/api/timeCapsules/${id}`, {
                method: 'DELETE',
            });
            // if the response is okay, reload the page
            if (deletetimecapsule.ok) {
                document.location.replace('/timecapsule');
            } else {
                alert('Unsuccessful time capsule deletion. Please try again.');
            }
        }
    };

    document 
        .querySelector('.new-timecapsule-form')
        .addEventListener('submit', newTimeCapsuleFormHandler);
        
    document
       .querySelector('.delete-timecapsule')
       .addEventListener('click', deleteTimeCapsule);
