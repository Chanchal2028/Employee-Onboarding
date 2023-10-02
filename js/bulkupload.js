document.getElementById('closeUploadCard').addEventListener('click', function() {
    // Hide the card by setting its display property to 'none'
    document.querySelector('.upload-card').style.display = 'none';
  });

  // Function to handle the Reset button click
  document.getElementById('resetButton').addEventListener('click', function() {
    // Add your reset logic here, for example, clearing input fields
    document.getElementById('fileInput').value = ''; // Clear the file input
  });

  // Function to handle the Submit button click
  document.getElementById('submitButton').addEventListener('click', function() {
    // Add your submit logic here, for example, sending the data to a server
    alert('Data submitted successfully!'); // Display a message for demonstration
  });
