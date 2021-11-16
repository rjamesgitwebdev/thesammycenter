// Change style of navbar on scroll
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  var navbar = document.getElementById("myNavbar");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
  } else {
    navbar.className = navbar.className.replace(
      " w3-card w3-animate-top w3-white",
      ""
    );
  }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Image slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
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

function accordion(id,btnId) {
  var x = document.getElementById(id);
  var btn = document.getElementById(btnId);
  console.log(btn);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }

  if (btn.className.indexOf("w3-block") == -1){
    btn.className += " w3-block";
  } else {
    btn.className = btn.className.replace(" w3-block", "");
  }

}

