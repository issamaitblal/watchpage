document.addEventListener('DOMContentLoaded', function() {

    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    
    const colorOptions = document.querySelectorAll('.color-option');
    const productImages = document.querySelectorAll('.product-images img');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            
           
            colorOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            
            productImages.forEach(img => {
                img.classList.remove('active');
                if(img.getAttribute('data-color') === color) {
                    img.classList.add('active');
                }
            });
        });
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

  
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

});
