

//login page
/**************************************************************************************************/
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

// Jquery Start
/*****************************************************************************************************************/

$(document).ready(function() {
 // When a category is clicked
    $('.goToCategoTarget').click(function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        var categoryId = $(this).data('category'); // Get the category ID

        // Check if the clicked subcategory is currently visible
        var $subcategory = $('#subcategory-' + categoryId);
        
        if ($subcategory.is(':visible')) {
            // If it is visible, slide it up (hide) with 500ms duration
            $subcategory.slideUp(300);
        } else {
            // Hide all other subcategories with 500ms duration
            $('.subcategory').slideUp(300);
            // Show the subcategory for the clicked category with 500ms duration
            $subcategory.slideDown(300);
        }
    });
    
      // Function to get the search term from the URL
    function getSearchTerm() {
      const params = new URLSearchParams(window.location.search);
      return params.get('q'); // Assuming the query parameter for the search term is 'q'
    }

    // Get the search term and display it
    const searchTerm = getSearchTerm();
    if (searchTerm) {
      $('#search-term').text(searchTerm);
    } else {
      $('#search-term').text('Aucun terme de recherche trouvé.');
    }

   


      // Check if the URL contains the hash for the empty div (e.g., #scroll-target)
      if (window.location.hash === '#scroll-target') {
        setTimeout(function() {
          $('html, body').animate({
            scrollTop: $('#scroll-target').offset().top 
          }, 500, function() {
            // After scrolling, remove the hash from the URL using history.replaceState
            history.replaceState("", document.title, window.location.pathname);
          });
        }, 100); // Small delay to ensure the page is ready
      }
    
       (function() {
      // Get the current year
      var currentYear = new Date().getFullYear();
      // Update the copyright year in the footer
      $('#copyright-year').text(currentYear);
    })();
    

    
  function handleColorChange() {
    // When a color option is clicked
    $(".color-option").on("click", function () {
      // Unselect currently selected color options
      $(".color-option").removeClass("is-selected");
      $(this).addClass("is-selected");

      // Get the selected color
      const color = $(this).data("color");

      // Change the primary color in the CSS
      $(":root").css("--primary-color", color);

      // Save the selected color in localStorage
      localStorage.setItem("selectedColor", color);
    });

    // When the page loads, retrieve the saved color from localStorage
    const savedColor = localStorage.getItem("selectedColor");

    if (savedColor) {
      // Apply the saved color
      $(":root").css("--primary-color", savedColor);

      // Find the corresponding color option and mark it as selected
      $(".color-option").each(function () {
        if ($(this).data("color") === savedColor) {
          $(this).addClass("is-selected");
        }
      });
    }
  }

  // Call the function to initialize the color change functionality
  handleColorChange();

    
$(function() {
  function initializeScrollProgress() {
    var $progressPath = $('.progress-wrap path');

    if ($progressPath.length === 0) {
      console.warn('SVG path not found');
      return;
    }

    var pathLength = $progressPath.get(0).getTotalLength();

    // Initial setup of progress path
    $progressPath.css({
      'transition': 'none',
      'stroke-dasharray': pathLength + ' ' + pathLength,
      'stroke-dashoffset': pathLength
    });
    $progressPath.get(0).getBoundingClientRect();

    // Apply transition
    $progressPath.css({
      'transition': 'stroke-dashoffset 10ms linear'
    });

    // Function to update progress based on scroll
    function updateProgress() {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      $progressPath.css('stroke-dashoffset', progress);
    }

    // Initial progress update
    updateProgress();

    // Bind scroll event to update progress and handle progress wrap activation
    $(window).on('scroll', function() {
      updateProgress();
      if ($(this).scrollTop() > 50) {
        $('.progress-wrap').addClass('active-progress');
      } else {
        $('.progress-wrap').removeClass('active-progress');
      }
    });

    // Smooth scroll to top on progress wrap click
    $('.progress-wrap').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 550);
      return false;
    });
  }
  // Check if we are on the specific page
    if ($('body').attr('id') === 'targetLoader'){ // Replace 'specific-page-class' with the class or ID unique to your page
    initializeScrollProgress();
  }

});
/**
    
    $(function() {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  // Array of event dates (MM/DD/YYYY)
  const events = [
    { id: "1", date: "09/30/2024" },
    { id: "2", date: "10/25/2024" },
    { id: "3", date: "11/15/2024" },
    { id: "4", date: "10/10/2024" },
    { id: "5", date: "10/01/2024" }
  ];

  // Iterate through each event
  events.forEach(event => {
    const countDown = new Date(event.date).getTime();
    const interval = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDown - now;

      if (distance < 0) {
        clearInterval(interval);
        $(`#days${event.id}`).text("0");
        $(`#hours${event.id}`).text("0");
        $(`#minutes${event.id}`).text("0");
        $(`#seconds${event.id}`).text("0");
      } else {
        $(`#days${event.id}`).text(Math.floor(distance / day));
        $(`#hours${event.id}`).text(Math.floor((distance % day) / hour));
        $(`#minutes${event.id}`).text(Math.floor((distance % hour) / minute));
        $(`#seconds${event.id}`).text(Math.floor((distance % minute) / second));
      }
    }, 1000);
  });
});

    
$(function() {
  $(".quantity").each(function() {
    const $quantityContainer = $(this);
    const $minusBtn = $quantityContainer.find(".minus");
    const $plusBtn = $quantityContainer.find(".plus");
    const $inputBox = $quantityContainer.find(".input-box");

    updateButtonStates();

    $quantityContainer.on("click", function(event) {
      const $target = $(event.target);
      if ($target.hasClass("minus")) {
        decreaseValue();
      } else if ($target.hasClass("plus")) {
        increaseValue();
      }
    });

    $inputBox.on("input", handleQuantityChange);

    function updateButtonStates() {
      const value = parseInt($inputBox.val());
      $minusBtn.prop("disabled", value <= 1);
      $plusBtn.prop("disabled", value >= parseInt($inputBox.attr("max")));
    }

    function decreaseValue() {
      let value = parseInt($inputBox.val());
      value = isNaN(value) ? 1 : Math.max(value - 1, 1);
      $inputBox.val(value);
      updateButtonStates();
      handleQuantityChange();
    }

    function increaseValue() {
      let value = parseInt($inputBox.val());
      value = isNaN(value) ? 1 : Math.min(value + 1, parseInt($inputBox.attr("max")));
      $inputBox.val(value);
      updateButtonStates();
      handleQuantityChange();
    }

    function handleQuantityChange() {
      let value = parseInt($inputBox.val());
      value = isNaN(value) ? 1 : value;

      // Execute your code here based on the updated quantity value
      console.log("Quantity changed:", value);
    }
  });
});

**/
    
    

    
    
  
// category tab       
function initializeTabs() {
    let currentIndex = 0;
    const $tabs = $('.tab-content-catego');
    const tabCount = $tabs.length;

    function showTab(index) {
        $tabs.removeClass('active').eq(index).addClass('active');
    }

    function navigateTab(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = tabCount - 1; // Loop to the last tab
        } else if (currentIndex >= tabCount) {
            currentIndex = 0; // Loop to the first tab
        }
        showTab(currentIndex);
    }

    $('.tab-header .fa-arrow-right').on('click', function () {
        navigateTab(1); // Move to the next tab
    });

    $('.tab-header .fa-arrow-left').on('click', function () {
        navigateTab(-1); // Move to the previous tab
    });

    // Initialize the first tab
    showTab(currentIndex);
}

// Call the function to initialize tabs
initializeTabs();
        
        
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

      /**  
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
    });  **/


    
        
});


