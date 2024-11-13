let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showNextTestimonial() {
    testimonials[currentTestimonialIndex].style.transform = 'translateX(-100%)';
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
    testimonials[currentTestimonialIndex].style.transform = 'translateX(0)';
}

setInterval(showNextTestimonial, 1000);
