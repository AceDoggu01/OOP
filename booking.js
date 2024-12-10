button
button.onclick = function(){
    const form = document.getElementById('form');

        // Add an event listener to catch form submission
        form.addEventListener('submit', function(event) {
            // Prevent form submission
            event.preventDefault();

            // Check all fields
            const firstName = document.getElementById("firstname").value.trim();
            const lastName = document.getElementById("lastname").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const appointmentDate = document.getElementById("appointmentdate").value.trim();
            const appointmentTime = document.getElementById("appointmenttime").value.trim();

            if (!firstName || !lastName || !email || !phone || !appointmentDate || !appointmentTime) {
                // Show an alert if any field is empty
                alert('All fields are required! Please fill out all fields.');
                return;
            }

            // If all fields are filled, proceed with the form submission
            alert('Form submitted successfully!');
            // Uncomment the line below to actually submit the form after validation
            form.submit();
        });
}
