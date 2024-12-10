// button.onclick = function(){
//     const form = document.getElementById('form');

//     // Add an event listener to catch form submission
//     form.addEventListener('submit', function(event) {
//         // Prevent form submission
//         event.preventDefault();

//         // Check all fields
//         const firstName = document.getElementById("firstname").value.trim();
//         const lastName = document.getElementById("lastname").value.trim();
//         const email = document.getElementById("email").value.trim();
//         const phone = document.getElementById("phone").value.trim();
//         const appointmentDate = document.getElementById("appointmentdate").value.trim();
//         const appointmentTime = document.getElementById("appointmenttime").value.trim();

//         if (!firstName || !lastName || !email || !phone || !appointmentDate || !appointmentTime) {
//             // Show an alert if any field is empty
//             alert('All fields are required! Please fill out all fields.');
//             return;
//         }

//         // If all fields are filled, proceed with the form submission
//         alert('Form submitted successfully!');
//         // Uncomment the line below to actually submit the form after validation
//         form.submit();
//     });
// }
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form values
    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    // const appointmentDate = document.getElementById('appointmentdate').value.trim();
    // const appointmentTime = document.getElementById('appointmenttime').value.trim();
    // const barber = document.getElementById('barber').value;
    const service = document.getElementById('service').value;

    // Validate form fields
    if (!firstName || !lastName || !email || !phone || !service) {
        document.getElementById('error').textContent = 'All fields are required!';
        return;
    }

    // Clear error message
    document.getElementById('error').textContent = '';

    // Confirmation message
    alert(`
        Appointment Details:
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
    `);

    // Optionally, submit form data to the server
    // form.submit();
});