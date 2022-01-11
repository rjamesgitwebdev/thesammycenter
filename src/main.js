// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  let navMobileMenu = document.getElementById("navMobile");
  navMobileMenu.className.indexOf("w3-show") == -1
    ? (navMobileMenu.className += " w3-show")
    : (navMobileMenu.className = navMobileMenu.className.replace(
        " w3-show",
        ""
      ));
}

// Get contact form

const contactForm = document.getElementById("contact-form");

// onclick listener and stop page reload

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const contactFormData = new FormData(contactForm);

  postData(contactFormData);
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

//give treasure accordion
const accColl = document.getElementsByClassName("accordion");

for (let i = 0; i < accColl.length; i++) {
  accColl[i].addEventListener("click", function () {
    let nextContent = this.nextElementSibling;
    nextContent.className.indexOf("w3-show") == -1
      ? (nextContent.className += " w3-show")
      : (nextContent.className = nextContent.className.replace(" w3-show", ""));
    closeAccordions(i);
  });
}

function closeAccordions(indie) {
  let nextDiv = [];

  for (let i = 0; i < accColl.length; i++) {
    nextDiv.push(accColl[i].nextElementSibling);
  }

  nextDiv.splice(indie, 1);

  for (let i = 0; i < nextDiv.length; i++) {
    nextDiv[i].className = nextDiv[i].className.replace("w3-show", "");
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
      collText = this.innerHTML = "Learn More";
    } else {
      content.style.display = "block";
      collText = this.innerHTML = "Close";
    }
  });
}

/* giveEducation carousel */
const Carousel = {
  arrowHTMLCollection: document.getElementsByName("position"),
  leftArrow: document.getElementById("leftArrow"),
  rightArrow: document.getElementById("rightArrow"),
  getArrowArray: function () {
    return Array.from(this.arrowHTMLCollection);
  },
  currentArrayIndex: function () {
    let currentIndex = null;
    this.getArrowArray().forEach((element, index) => {
      if (element.checked) {
        currentIndex = index;
      }
    });
    return currentIndex;
  },
  nextArrayIndex: function () {
    return this.currentArrayIndex() + 1;
  },
  previousArrayIndex: function () {
    return this.currentArrayIndex() - 1;
  },
  moveCarousel: function (direction) {
    let useArrowArray = this.getArrowArray();

    if (this.nextArrayIndex() >= 6) {
      this.rightArrow.style.visibility = "hidden";
    } else if (this.previousArrayIndex() < 1) {
      this.leftArrow.style.visibility = "hidden";
    } else {
      this.rightArrow.style.visibility = "visible";
      this.leftArrow.style.visibility = "visible";
    }

    if (direction == "right") {
      (useArrowArray[this.currentArrayIndex()].checked = "false"),
        (useArrowArray[this.nextArrayIndex()].checked = "true");
    } else {
      useArrowArray[this.currentArrayIndex()].checked = "false";
      useArrowArray[this.previousArrayIndex()].checked = "true";
    }
  },
};

Carousel.rightArrow.addEventListener("click", function () {
  Carousel.moveCarousel("right");
});

Carousel.leftArrow.addEventListener("click", function () {
  Carousel.moveCarousel("left");
});
