 // Toggle between Sign In and Sign Up forms
        function showSignIn(e) {
            if (e) e.preventDefault();
            document.getElementById('signinForm').classList.remove('hidden');
            document.getElementById('signupForm').classList.add('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function showSignUp(e) {
            if (e) e.preventDefault();
            document.getElementById('signinForm').classList.add('hidden');
            document.getElementById('signupForm').classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Toggle password visibility
        function togglePassword(fieldId, button) {
            const field = document.getElementById(fieldId);
            if (field.type === 'password') {
                field.type = 'text';
                button.textContent = '👀';
            } else {
                field.type = 'password';
                button.textContent = '🕶️';
            }
        }

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

        // Handle Sign In form submission (no backend)
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('signin-email').value;
            const password = document.getElementById('signin-password').value;
            
            alert('Welcome back!');
        });

        // Handle Sign Up form submission (no backend)
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const phone = document.getElementById('signup-phone').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            alert('Account created successfully!');
        });

        // Check URL hash on page load
        window.addEventListener('load', function() {
            if (window.location.hash === '#signup') {
                showSignUp();
            } else {
                showSignIn();
            }
        });