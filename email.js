const emailForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
const sendEmail = (e) => {
    e.preventDefault();
    contactMessage.style.opacity = 0;
    contactMessage.textContent = "Sending Message... ✉️"
    contactMessage.offsetHeight;
    setTimeout(() => {
        contactMessage.style.opacity = 1;
    }, 10);
    // serviceid , templateid, #form, publickey
    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, '#contact-form', process.env.PUBLIC_KEY).then(()=> {
        // show message sent to user
        contactMessage.style.opacity = 0;
        setTimeout(() => {
            contactMessage.textContent = "Message Sent Successfully ✅";
            
            // Fade it back in
            contactMessage.style.opacity = 1;
        }, 500);

        setTimeout(() => {
            contactMessage.style.opacity = 0;  // Fade out the message
        }, 4000);
        // Remove message after 5 secs
        setTimeout(()=> {
            contactMessage.textContent = '';
        }, 5000);

        // Clear input form
        emailForm.reset()
    })
}

emailForm.addEventListener('submit', sendEmail);
