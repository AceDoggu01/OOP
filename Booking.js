let selectedBarber = null;
let selectedTimeSlot = null;
let firstName = document.getElementById("customer-firstname").value;
let lastName = document.getElementById("customer-lastname").value;
let email = document.getElementById("customer-email").value;
let phoneNum = document.getElementById("customer-phone").value;
let service = document.getElementById("service").value;

    

    function selectSlot(barberName, timeSlot) {
    selectedBarber = barberName;
    selectedTimeSlot = timeSlot;
    event.preventDefault();
    }
    function submitBooking(){
        if(!firstName || !lastName || !email || !phoneNum || !service){
            alert(`Please make sure you've inputted everything that is needed`)
        }     
    }
        function submitBooking() {
            if (!selectedBarber || !selectedTimeSlot) {
                alert("Please select a barber and time slot.");
                return;
            }

            const message = `Your appointment with ${selectedBarber} at ${selectedTimeSlot} has been confirmed!`;
            document.getElementById("confirmation-message").innerText = message;
            // document.getElementById("booking-popup").style.display = "block";
        }

        function closePopup() {
            document.getElementById("booking-popup").style.display = "none";
        }

  
  //Function to validate and submit appointment
  function submitBooking() {
    const form = document.getElementById('form');
    const firstName = form.elements['firstname'].value;
    const lastName = form.elements['lastname'].value;
    const email = form.elements['email'].value;
    const phone = form.elements['phone'].value;
    const service = form.elements['service'].value;
    const appointmentDate = form.elements['appointmentDate'].value;
  
    // Validate form data (add validation as needed)
    let isValid = true;
    const errorElement = document.getElementById('error');
    // errorElement.textContent = ''; // Clear previous errors
  
    if (!firstName || !lastName) {
      isValid = false;
      errorElement.textContent = 'Please enter your full name.';
    }
    // ... (add validation for email, phone, etc.) ...
  
    if (!isValid) {
      return; // Prevent form submission if not valid
    }
  
    // Submit booking data to server (replace with your backend logic)
    console.log(`Submitting appointment for ${firstName} ${lastName}`);
    console.log(`Barber: ${selectedBarber}`);  
}
function submitBooking() {
    // ... (existing validation logic) ...
  
    // Assuming successful submission (replace with actual backend logic)
    if (isValid) {
      // Display confirmation popup
      const popup = document.getElementById('booking-popup');
      popup.style.display = 'block';
  
      // Update confirmation message
      const confirmationMessage = document.getElementById('confirmation-message');
      confirmationMessage.textContent = `You have successfully booked an appointment with ${selectedBarber} on ${appointmentDate} at ${selectedSlot}.`;
    }
}
function submitBooking() {
    // ... (existing validation logic) ...
  
    if (isValid) {
      // Assuming successful submission (replace with actual backend logic)
      const popup = document.getElementById('booking-popup');
      popup.style.display = 'block';
  
      const confirmationMessage = document.getElementById('confirmation-message');
      confirmationMessage.innerHTML = `
        <p><strong>Booking Confirmed!</strong></p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Barber:</strong> ${selectedBarber}</p>
        <p><strong>Date:</strong> ${appointmentDate}</p>
        <p><strong>Time:</strong> ${selectedSlot}</p>
      `;
    }
  }