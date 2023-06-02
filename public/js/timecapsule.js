// setting up an event listener for the new timecapsule post form
const newTimeCapsuleFormHandler = async (event) => {
    event.preventDefault();
    
    // get the title and content from the form
    const title = document.querySelector('#timecapsule-title').value.trim();
    const content = document.querySelector('#timecapsule-content').value.trim();
    
    // if both title and content exist, send a POST request to the API endpoint
    if (title && content) {
        const response = await fetch(`/api/timecapsules`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
        });
    
        // if the response is okay, reload the page
        if (response.ok) {
        document.location.replace('/timecapsule');
        } else {
        alert('Failed to create time capsule');
        }
    }
    }