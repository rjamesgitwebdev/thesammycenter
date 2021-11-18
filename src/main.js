// Change style of navbar on scroll

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Get contact form

const contactForm = document.getElementById("contact-form");

// onclick listener and stop page reload

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formattedFormData = new FormData(contactForm);

  postData(formattedFormData);
});

//POST data and return reponse

async function postData(formattedFormData) {
  const response = await fetch("../componets/contact-form.php", {
    method: "POST",
    body: formattedFormData,
  });

  const data = await response.text();
  console.log(data);

  const thankYouMsg = document.getElementById("thank-you");

  contactForm.style.display = "none";

  thankYouMsg.classList.remove("w3-hide");
}



function accordion(id, btnId) {
  var x = document.getElementById(id);
  var btn = document.getElementById(btnId);
  if (x.className.indexOf("w3-show active") == -1) {
    x.className += " w3-show";
    x.className += " active";
  } else {
    x.className = x.className.replace(" w3-show active", "");
    


  }

  if (btn.className.indexOf("w3-block") == -1) {
    btn.className += " w3-block";
  } else {
    btn.className = btn.className.replace(" w3-block", "");
  }
}




