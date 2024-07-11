document.addEventListener('DOMContentLoaded', function() {
  toggleCompanyInput(); // Set initial state based on current select value
});


// contact us button ----------------------------------------------
document.getElementById("scrollButton").addEventListener("click", function () {
  const targetSection = document.getElementById("contact");
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
});


// PHOTO GALLERY SECTION ------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery_img');
  const dotsContainer = document.querySelector('.gallery_dots');
  let currentImageIndex = 0;

  // Create dots
  images.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => navigateGallery(idx - currentImageIndex));
    dotsContainer.appendChild(dot);
  });

  function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, idx) => {
      if (idx === currentImageIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function navigateGallery(step) {
    currentImageIndex = (currentImageIndex + step + images.length) % images.length;
    const newTranslateX = -currentImageIndex * 100;
    document.querySelector('.gallery_slider').style.transform = `translateX(${newTranslateX}%)`;
    updateDots();
  }

  document.getElementById('next_button').addEventListener('click', () => navigateGallery(1));
  document.getElementById('prev_button').addEventListener('click', () => navigateGallery(-1));

  updateDots(); // Initial update for dots
});



// SERVICES LIST SECITON ----------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".service_list_item_title");
  
    titles.forEach((title) => {
      title.addEventListener("click", function () {
        const content = this.nextElementSibling; // Get the content div immediately following this title
        const currentlyActiveContent = document.querySelector(".service_list_item_content:not(.hidden)");
  
        // Check if the current item is already open, and we're closing it
        if (!content.classList.contains("hidden")) {
          content.classList.add("hidden");
          content.style.maxHeight = null;
          this.querySelector(".down_arrow").classList.remove("rotated");
          return; // Exit early since we're closing this item
        }
  
        // If there's an open item and it's not the current one, close it
        if (currentlyActiveContent && currentlyActiveContent !== content) {
          currentlyActiveContent.classList.add("hidden");
          currentlyActiveContent.style.maxHeight = null;
          currentlyActiveContent.previousElementSibling.querySelector(".down_arrow").classList.remove("rotated");
        }
  
        // Open the clicked item
        content.classList.remove("hidden");
        content.style.maxHeight = content.scrollHeight + "px";
        this.querySelector(".down_arrow").classList.add("rotated");
      });
    });
  });


// CONTACT FORM FUNCIONALITY -------------------------------------------
  function toggleCompanyInput() {
    var selectType = document.getElementById('typeSelector');
    var companyInput = document.getElementById('companyNameGroup');
    if (selectType.value === 'Unternehmen') {
        companyInput.classList.remove('hidden_box'); // Show the company input
        companyInput.classList.add('form_box');
    } else {
        companyInput.classList.add('hidden_box'); // Hide the company input
        companyInput.classList.remove('form_box');
    }
}