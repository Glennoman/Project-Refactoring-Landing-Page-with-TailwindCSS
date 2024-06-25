document.addEventListener("DOMContentLoaded", function () {
  const data = [
    {
      name: "June Cha",
      position: "Software Engineer",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "This platform is an absolute game-changer for competitive programmers. The extensive range of problems and challenges offered here truly hones your skills and prepares you for any coding competition. With detailed solutions and an active community, it's the perfect environment to sharpen your coding prowess.",
    },
    {
      name: "Iida Niskanen",
      position: "Data Engineer",
      photo: "https://randomuser.me/api/portraits/women/67.jpg",
      text: "I can't express enough how valuable this platform has been for me. As someone deeply passionate about algorithms and data structures, I've found the diverse set of problems here both stimulating and enriching. The intuitive interface and seamless experience make it my go-to destination for honing my problem-solving skills.",
    },
    {
      name: "Renee Sims",
      position: "Cloud engineer",
      photo: "https://randomuser.me/api/portraits/women/8.jpg",
      text: "If you're serious about excelling in competitive coding, look no further. This platform not only provides a comprehensive set of problems but also fosters a supportive community where you can exchange ideas and strategies. It's been instrumental in my journey towards becoming a better competitive coder.",
    },
    {
      name: "Sasha Ho",
      position: "Phd student",
      photo: "https://randomuser.me/api/portraits/women/46.jpg",
      text: "I've tried numerous competitive programming platforms, but none come close to the quality and depth offered here. From beginner-friendly challenges to advanced algorithmic puzzles, there's something for everyone. The platform's commitment to excellence is evident in every aspect, making it my preferred choice for honing my coding skills.",
    },
    {
      name: "Veeti Seppanen",
      position: "Frontend developer",
      photo: "https://randomuser.me/api/portraits/men/97.jpg",
      text: "As a seasoned programmer, I'm always on the lookout for platforms that challenge and inspire me. This platform exceeds all expectations with its vast array of problems and unparalleled learning resources. Whether you're a novice or a seasoned coder, you'll find endless opportunities to push your boundaries and elevate your skills.",
    },
  ];

  let currentIndex = 0;

  function createTestimonials(data) {
    const testimonialContainer = document.getElementById("testimonial-content"); // Select the container where testimonials will be injected.
    testimonialContainer.innerHTML = ""; // Clear any existing content in the container.

    // Loop through each item in the data array and create a testimonial element for each.
    data.forEach((item, index) => {
      const testimonial = document.createElement("div"); // Create a new div element for each testimonial.
      testimonial.classList.add("testimonial"); // Add the testimonial class to each div.

      // Set the first testimonial as active by adding'active' class.
      if (index === 0) {
        testimonial.classList.add("active");
      }

      // Inject content into the testimonial div.
      testimonial.innerHTML = `
        <p>"${item.text}"</p>
        <img src="${item.photo}" alt="Profile picture of ${item.name}">
        <h3>${item.name}</h3>
        <p>${item.position}</p>
      `;

      // Append the created testimonial to the testimonial container.
      testimonialContainer.appendChild(testimonial);
    });
  }

  // Function to display the testimonial based on index
  function showTestimonial(index) {
    const testimonials = document.querySelectorAll(".testimonial");
    testimonials[currentIndex].classList.remove("active");
    currentIndex = index;
    testimonials[currentIndex].classList.add("active");
  }

  // Event listener for the "Next" button
  document.getElementById("next").addEventListener("click", function () {
    // Shows the next testimonial by incrementing the index.
    showTestimonial((currentIndex + 1) % data.length);
  });

  // Event listener for the "Previous" button
  document.getElementById("prev").addEventListener("click", function () {
    // Shows the previous testimonial
    showTestimonial((currentIndex - 1 + data.length) % data.length);
  });

  // Automatically change testimonials every 3 seconds
  setInterval(function () {
    // Moves to the next testimonial automatically
    showTestimonial((currentIndex + 1) % data.length);
  }, 3000);

  // Call the function to create testimonials and inject in DOM.
  createTestimonials(data);

  // Select element with the id "year"
  const yearElement = document.getElementById("year");
  // Current year
  const currentYear = new Date().getFullYear();
  // Set current year as text
  yearElement.textContent = currentYear;

  // Selecting form element
  const form = document.querySelector(".contactForm");

  // Event listener for form submission
  form.addEventListener("submit", function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Clear existing messages
    clearErrors();

    // Validate the form
    const isValid = validateForm();

    // If form is valid, can submit it or process further
    if (isValid) {
      alert("Form submitted succesfully!");
    }
  });

  // Function to clear error messages
  function clearErrors() {
    // Select all elemenvts with the class "error-message"
    const errorMessages = document.querySelectorAll(".error-message");

    // Hide all error messages and remove class
    errorMessages.forEach(function (error) {
      error.style.display = "none";
    });

    // Select all elements with the class "error"
    const errorFields = document.querySelectorAll(".error");
    errorFields.forEach(function (field) {
      field.classList.remove("error");
    });
  }

  // Function to validate the form of fields
  function validateForm() {
    let isValid = true; // Set form to valid

    // Validate name
    const name = document.getElementById("name");
    if (name.value.trim() === "") {
      showError(name, "Name is required");
      isValid = false;
    }

    const email = document.getElementById("email");
    if (email.value.trim() === "") {
      showError(email, "Email is required.");
      isValid = false;
    } else if (!validateEmail(email.value)) {
      showError(email, "Please enter a valid email address.");
      isValid = false;
    }
    // Validate message
    const message = document.getElementById("message");

    //check if email input field is empty or consists of whitespace.
    if (message.value.trim() === "") {
      showError(message, "Message is required");
      isValid = false;
    }
    return isValid;
  }

  // Function to show error message
  function showError(input, message) {
    // Find error message div linked with input field
    const errorDiv = document.getElementById(`${input.id}-error`);
    errorDiv.textContent = message; // Set the error message
    errorDiv.style.display = "block"; // Display error message
    input.classList.add("error"); //Add error class to input field

    // Add event listener to remove error message on focus
    input.addEventListener("focus", function () {
      errorDiv.style.display = "none"; // Hide error message
      input.classList.remove("error"); // Remove error class
    });
  }

  // Function validate email with regular expression
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const submit = document.getElementById("swal");

  submit.addEventListener("click", function () {
    if (validateForm()) {
      Swal.fire({
        title: "Thank you for reaching out!",
        text: "Form submitted succesfully",
        icon: "success",
      });
      // }).then(() => {
      //   // Reset the form after successful submission
      //   document.getElementById("contactForm").reset();
      // });
    } else {
      swal.fire({
        title: "Oops!",
        text: "Please fill in all required fields correctly.",
        icon: "error",
      });
    }
  });
});
