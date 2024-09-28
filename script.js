// Sticky Navbar Functionality
window.onscroll = function() {
    stickyNavbar();
    handleBackToTopButton();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Slider for Homepage Banner
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Testimonial Slider
let testimonialIndex = 0;
showTestimonial(testimonialIndex);

function showTestimonial(index) {
  const testimonials = document.getElementsByClassName('testimonial');
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = 'none';
  }
  testimonials[index].style.display = 'block';
}

function autoSlideTestimonials() {
  testimonialIndex++;
  if (testimonialIndex >= document.getElementsByClassName('testimonial').length) {
    testimonialIndex = 0;
  }
  showTestimonial(testimonialIndex);
}

// Automatically slide testimonials every 3 seconds
setInterval(autoSlideTestimonials, 3000);

// Back-to-Top Button
function handleBackToTopButton() {
    var backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.classList.add('show-back-to-top');
    } else {
        backToTopButton.classList.remove('show-back-to-top');
    }
}

document.querySelector('.back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Chat Functionality
function openChat() {
    document.getElementById("chatModal").style.display = "block";
}

function closeChat() {
    document.getElementById("chatModal").style.display = "none";
}

// Function to toggle chat modal
function toggleChat() {
    const chatModal = document.getElementById("chatModal");
    if (chatModal.classList.contains('show')) {
        chatModal.classList.remove('show');
        chatModal.classList.add('hide');
        setTimeout(() => {
            chatModal.style.display = "none";
        }, 300);
    } else {
        chatModal.style.display = "block";
        chatModal.classList.remove('hide');
        chatModal.classList.add('show');
    }
}

// Function to send a message in chat
function sendMessage() {
    const userMessage = document.getElementById("userMessage");
    const chatMessages = document.getElementById("chatMessages");

    if (userMessage.value.trim() === "") return; // Do not send empty messages

    // Display user message
    const userMessageElement = document.createElement("p");
    userMessageElement.textContent = userMessage.value;
    userMessageElement.classList.add('user-message');
    chatMessages.appendChild(userMessageElement);

    // Predefined bot responses
    const responses = [
        "Hello! How can we help you?",
        "Our support team will reach out shortly.",
        "Please provide more details."
    ];

    // Simulate a bot response after a short delay
    setTimeout(() => {
        const botMessageElement = document.createElement("p");
        botMessageElement.textContent = responses[Math.floor(Math.random() * responses.length)];
        botMessageElement.classList.add('bot-message'); // Adding class for bot message styling
        chatMessages.appendChild(botMessageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
    }, 1000);

    // Clear input field
    userMessage.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
}

// search.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const navbarLinks = document.querySelectorAll('.navbar-center a');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        navbarLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                link.style.display = 'inline'; // Show link
            } else {
                link.style.display = 'none'; // Hide link
            }
        });
    });
});
