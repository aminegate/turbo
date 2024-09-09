document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.navItem');
    const loginBackground = document.querySelector('.loginBackground');

    const images = [
        'url("assets/images/login/LoginBack.jpg")',
        'url("assets/images/login/LoginBack2.jpg")',
        'url("assets/images/login/LoginBack7.jpg")',
        'url("assets/images/login/LoginBack3.jpg")',
        'url("assets/images/login/LoginBack5.jpg")',
        'url("assets/images/login/LoginBack6.jpg")',
        'url("assets/images/login/LoginBack9.jpg")',
        'url("assets/images/login/LoginBack10.jpg")',
        'url("assets/images/login/LoginBack11.jpg")',
        'url("assets/images/login/LoginBack12.jpg")',
        'url("assets/images/login/LoginBack13.jpg")',
        'url("assets/images/login/LoginBack14.jpg")',
        'url("assets/images/login/LoginBack15.jpg")',
        'url("assets/images/login/LoginBack16.jpg")',
        'url("assets/images/login/LoginBack17.jpg")'
    ];

  navItems.forEach((item) => {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('activey'));

            // Add active class to the clicked item
            this.classList.add('activey');

            // Change the background image based on the clicked item
            const index = this.getAttribute('data-index');
            loginBackground.style.backgroundImage = images[index];
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.navLink');
    const loginBackground = document.querySelector('.imageLogin');

    const images = [
        'url("assets/images/login/loginLeftImg.jpg")',
        'url("assets/images/login/loginLeftImg2.png")',
        'url("assets/images/login/loginLeftImg3.png")'
        
 
    ];

  navItems.forEach((item) => {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('activey'));

            // Add active class to the clicked item
            this.classList.add('activey');

            // Change the background image based on the clicked item
            const index = this.getAttribute('data-index');
            loginBackground.style.backgroundImage = images[index];
        });
    });
});




    $(document).ready(function() {
        
       $('.service-caption span').hover(
            function() {
                // On hover, move the wave and change opacity
                $(this).closest('.service').find('.wave').css('top', '0%');
                $(this).closest('.service').find('.offer, .safe, .fast, .star').css('opacity', '0');
                $(this).closest('.service').find('.offer-white, .safe-white, .fast-white, .star-white').css('opacity', '1');
            },
            function() {
                // On hover out, reset the wave's position and opacity
                $(this).closest('.service').find('.wave').css('top', '110%');
                $(this).closest('.service').find('.offer, .safe, .fast, .star').css('opacity', '1');
                $(this).closest('.service').find('.offer-white, .safe-white, .fast-white, .star-white').css('opacity', '0');
            }
        );
        
          // Function to handle login
    function handleLogin(event) {
        event.preventDefault(); // Prevent form submission

        var enteredUsername = $('#username').val();
        var enteredPassword = $('#password').val();
        var rememberMe = $('#offer').is(':checked'); // Check if the Remember Me checkbox is checked

        // Fake credentials for demonstration
        var correctUsername = 'admin';
        var correctPassword = 'admin';

        if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
            // If "Remember Me" is checked, save credentials in localStorage
            if (rememberMe) {
                localStorage.setItem('username', enteredUsername);
                localStorage.setItem('password', enteredPassword);
            } else {
                // Clear stored credentials if "Remember Me" is not checked
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            // Redirect to the main page
            window.location.href = 'main.html';
        } else {
            // Show error message if credentials are incorrect
            $('#errorMessage').show();
        }
    }

    // Auto-fill the username and password if they are stored
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        $('#username').val(localStorage.getItem('username'));
        $('#password').val(localStorage.getItem('password'));
        $('#offer').prop('checked', true); // Set the Remember Me checkbox as checked
    }

    // Attach the function to the form's submit event
    $('#loginForm').on('submit', handleLogin);
        
        
 function showPageAfterLoader() {
        // Show the loader on page load
        $('#loader').show();

        // Disable scroll during the loader is visible
        $('#targetLoader').css('overflow', 'hidden');

        // After 3.5 seconds, hide the loader and show the content
        setTimeout(function() {
            $('#loader').fadeOut('slow', function() {
                // Remove the hidden-content class and add visible-content
                $('#pageWithLoader').removeClass('hidden-content').addClass('visible-content').hide().fadeIn('slow');
                
                // Enable scroll after content is visible
                $('#targetLoader').css('overflow', 'auto');
            });
        }, 3500); // 3.5 seconds delay
    }

    // Call the function to start the process
    showPageAfterLoader();
        
  $('.category-checkbox').change(function() {
        var $this = $(this); // Reference to the current checkbox
        var $label = $this.closest('label');
        var subcatego = $label.find('.subcatego');
        var downIcon = $label.find('i.fa-sort-down');
        var upIcon = $label.find('i.fa-sort-up');

        // If the checkbox is checked
        if ($this.is(':checked')) {
            // Close all subcategories and reset icons
            $('.subcatego').not(subcatego).slideUp('fast');
            $('.category-checkbox').not($this).prop('checked', false); // Uncheck other checkboxes
            
            $('i.fa-sort-down').show(); // Show all down icons
            $('i.fa-sort-up').hide(); // Hide all up icons

            // Open the current subcategory and switch icons
            subcatego.stop(true, true).slideDown('fast');
            downIcon.hide(); // Hide the down icon for the current category
            upIcon.show(); // Show the up icon for the current category
        } else {
            // Close the current subcategory and reset icons
            subcatego.stop(true, true).slideUp('fast');
            downIcon.show(); // Show the down icon for the current category
            upIcon.hide(); // Hide the up icon for the current category
        }
    });


        
});


