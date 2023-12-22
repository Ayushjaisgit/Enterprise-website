window.onscroll = function () {
  scrollFunction();
  scrollFunctionBTT(); // back to top button
};

window.onload = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 30) {
    document.getElementById("navbarExample").classList.add("top-nav-collapse");
  } else if (document.documentElement.scrollTop < 30) {
    document
      .getElementById("navbarExample")
      .classList.remove("top-nav-collapse");
  }
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", () => {
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
  });
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// Hover on desktop
function toggleDropdown(e) {
  const _d = e.target.closest(".dropdown");
  let _m = document.querySelector(".dropdown-menu", _d);

  setTimeout(
    function () {
      const shouldOpen = _d.matches(":hover");
      _m.classList.toggle("show", shouldOpen);
      _d.classList.toggle("show", shouldOpen);

      _d.setAttribute("aria-expanded", shouldOpen);
    },
    e.type === "mouseleave" ? 300 : 0
  );
}

// On hover
const dropdownCheck = document.querySelector(".dropdown");

if (dropdownCheck !== null) {
  document
    .querySelector(".dropdown")
    .addEventListener("mouseleave", toggleDropdown);
  document
    .querySelector(".dropdown")
    .addEventListener("mouseover", toggleDropdown);

  // On click
  document.querySelector(".dropdown").addEventListener("click", (e) => {
    const _d = e.target.closest(".dropdown");
    let _m = document.querySelector(".dropdown-menu", _d);
    if (_d.classList.contains("show")) {
      _m.classList.remove("show");
      _d.classList.remove("show");
    } else {
      _m.classList.add("show");
      _d.classList.add("show");
    }
  });
}

/* Card Slider - Swiper */
var cardSlider = new Swiper(".card-slider", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Image Slider - Swiper */
var imageSlider = new Swiper(".image-slider", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 50,
  slidesPerView: 5,
  breakpoints: {
    // when window is <= 575px
    575: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window is <= 767px
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window is <= 991px
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window is <= 1199px
    1199: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

/* Back To Top Button */
// Get the button
// myButton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// function scrollFunctionBTT() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     myButton.style.display = "block";
//   } else {
//     myButton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

document.getElementById("form").addEventListener("submit", function (e) {
  var clientName = document.getElementById("clientName").value.trim();
  var clientContact = document.getElementById("Contact-no").value.trim();
  var clientAddress = document.getElementById("Address").value.trim();


  if (clientName && clientContact && clientAddress != "") {
    e.preventDefault(); // Prevent the default form submission

    document.getElementById("message").textContent = "Submitting..";
    document.getElementById("message").style.display = "block";
    document.getElementById("submit-button").disabled = true;

    // Collect the form data
    var formData = new FormData(this);
    var keyValuePairs = [];
    for (var pair of formData.entries()) {
      keyValuePairs.push(pair[0] + "=" + pair[1]);
    }

    var formDataString = keyValuePairs.join("&");

    // Send a POST request to your Google Apps Script
    fetch(
      "https://script.google.com/macros/s/AKfycbzpdI9vAzgS4xnsO6LF9_FEfyvyXLZp-51JV3cXhkZ_ahqyT4QZbkjJY6DbaS4j7J4lHg/exec",
      {
        redirect: "follow",
        method: "POST",
        body: formDataString,
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      }
    )
      .then(function (response) {
        // Check if the request was successful
        if (response) {
          return response; // Assuming your script returns JSON response
        } else {
          throw new Error("Failed to submit the form.");
        }
      })
      .then(function (data) {
        var clientName = document.getElementById("clientName").value.trim();
        var clientContact = document.getElementById("Contact-no").value.trim();
        var clientAddress = document.getElementById("Address").value.trim();

        if (clientName === "") {
          alert("Please enter your Name");
          e.preventDefault();
        }
        if (clientContact === "") {
          alert("Please enter your Contact-no ");
          e.preventDefault();
        }
        if (clientAddress === "") {
          alert("Please enter your Address");
          e.preventDefault();
        }

        if (clientName && clientContact && clientContact != "")
          // Display a success message
          document.getElementById("message").textContent =
            "Data submitted successfully!";
        document.getElementById("message").style.display = "block";
        document.getElementById("message").style.backgroundColor = "green";
        document.getElementById("message").style.color = "beige";
        document.getElementById("submit-button").disabled = false;
        document.getElementById("form").reset();

        setTimeout(function () {
          document.getElementById("message").textContent = "";
          document.getElementById("message").style.display = "none";
        }, 2600);
      })
      .catch(function (error) {
        // Handle errors, you can display an error message here
        console.error(error);
        document.getElementById("message").textContent =
          "An error occurred while submitting the form.";
        document.getElementById("message").style.display = "block";
      });
  }else {
	alert("Please Enter All the Required Field ")
  }
});
function openWhatsApp() {
	var phoneNumber = '7654924493'; // Replace with your phone number
	var message = 'Hello!'; // Replace with your message
	var url = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
	window.open(url, '_blank');
  }