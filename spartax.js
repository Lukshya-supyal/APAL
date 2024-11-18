
function displayGreeting() {
    const greetingElement = document.createElement('h3');
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour < 12) {
        greetingMessage = "Good Morning!";
    } else if (currentHour < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }

    greetingElement.textContent = greetingMessage;
    document.querySelector('.hero').appendChild(greetingElement);
}


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

   
    localStorage.setItem('contactFormData', JSON.stringify({ name, email, message }));


    alert("Thank you for your message, " + name + "! We will get back to you soon.");
    this.reset(); 
});


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


function init() {
    displayGreeting();
}

document.addEventListener('DOMContentLoaded', init);