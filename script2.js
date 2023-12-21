//Client-Side Code

const section = document.querySelector("section");
const popup = document.getElementById("myPopup");
const close = document.querySelector(".close");
const s2 = document.querySelector(".s2").textContent;
const s3 = document.querySelector(".s3").textContent;

close.addEventListener("click", function() {
  popup.style.display = "none";

  if (window.innerWidth < 1024) {
    section.style.display = "block";
  }
  if (window.innerWidth >= 1024) {
    section.style.display = "flex";
  }
});

const button = document.getElementById("myButton");
const emailInput = document.getElementById('email');
let emails;

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const error = document.querySelector("input");
  const errorText = document.querySelector(".error-message");

  function validateEmail(emails) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(String(emails).toLowerCase())) {
      console.log("Email is valid", emails);
      section.style.display = "none";
      popup.style.display = "block";
      document.querySelector(".s1").innerHTML = s2 + " " + emails + s3;

      // Reset the form
      form.reset();
      error.style.backgroundColor = "hsl(0, 0%, 100%)";
      errorText.style.display = "none";
    } else {
      console.log("Email is invalid");
      errorText.style.display = "block";
      error.style.backgroundColor = "hsl(4, 77%, 71%)";
    }
  }

  if (validateEmail(emails)) {
    console.log("Email is valid", emails);
  } else {
    //console.log("Email is invalid");
  }
});

button.addEventListener("click", function(event) {
  emails = emailInput.value;
  fetch('https://little-loops-hide.loca.lt/', {  // Modify the URL here
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ emails })
  })
  .then(response => {
    // I'd Handle the server response here
    if (response.ok) {
      // The email was successfully processed on the server
      console.log('Email sent successfully');
    } else {
      // I'd Handle errors or other non-successful responses
      console.error('Error sending email');
    }
  })
  .catch(error => {
    // Handle any network or other errors
    console.error('Network error:', error);
  });
});