const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach(button => {
  button.addEventListener('click', async (e) => {
    const timeCapsuleId = e.target.dataset.id;
    try {
      const response = await fetch(`/api/timecapsule/${timeCapsuleId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        location.reload();
      } else {
        throw new Error('Failed to delete time capsule');
      }
    } catch (err) {
      console.error(err);
    }
  });
});