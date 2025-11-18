
    // Swiper initialization
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            968: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close sidebar when clicking on a link
    const sidebarLinks = document.querySelectorAll('.sidebar-items a, .sidebar-buttons a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.checked = false;
            document.body.style.overflow = 'auto';
        });
    });

    // Handle review form submission
    const reviewForm = document.getElementById('hotelReviewForm');
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        alert('Thank you for review');
        
        // Reset form
        reviewForm.reset();
    });