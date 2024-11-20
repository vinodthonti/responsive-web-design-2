
function animateNumber(element, start, end, duration, addPlus = false) {
    let current = start;
    const increment = (end - start) / duration;
    const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(interval); 
        }
        element.textContent = Math.floor(current);
    }, 1);

    
    if (addPlus) {
        setTimeout(() => {
            const awardsSymbol = document.getElementById('awards-symbol');
            awardsSymbol.textContent = '+';
        }, duration); 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('#about-stats');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { 
                animateNumber(document.getElementById('customers'), 0, 920, 1000);  
                animateNumber(document.getElementById('keywords'), 0, 8630, 1000);  
                animateNumber(document.getElementById('projects'), 0, 570, 1000);  
                animateNumber(document.getElementById('awards'), 0, 40, 1000, true); 
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });  

    observer.observe(statsSection);
});

    const countrySelect = document.getElementById('country-select');
    const flagImage = document.getElementById('flag');

    countrySelect.addEventListener('change', function() {
        if (countrySelect.value === 'usa') {
            flagImage.src = 'images/usa_image.png'; 
        } else {
            flagImage.src = 'images/uk_image.png'; 
        }
    });



