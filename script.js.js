function enrollNow() {
    alert('Thank you for your interest! Enrollment opens soon.');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
});
