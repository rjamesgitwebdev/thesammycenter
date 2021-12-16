
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



function accordion(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show open") == -1) {
    x.className += " w3-show open";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

//learn more dropdown
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/* giveEducation carousel */

const LeftArrow= document.getElementById('leftArrow');
const RightArrow = document.getElementById('rightArrow');
const radioColl = document.getElementsByName('position');
var startingRadio = 3;

LeftArrow.addEventListener("click", function(){
  startingRadio--;
  radioColl[startingRadio].checked = "true";
});

RightArrow.addEventListener("click", function(){
  startingRadio++;
  radioColl[startingRadio].checked = "true";
});

