// custom-checkout.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to hide shipping details
    function hideShippingDetails() {
      // Replace "shipping-method" and "shipping-address" with the actual classes or IDs used in your theme
      var shippingMethodSection = document.querySelector('.shipping-method');
      var shippingAddressSection = document.querySelector('.shipping-address');
  
      if (shippingMethodSection) {
        shippingMethodSection.style.display = 'none';
      }
  
      if (shippingAddressSection) {
        shippingAddressSection.style.display = 'none';
      }
    }
  
    // Run the function when the DOM is ready
    hideShippingDetails();
  });
  