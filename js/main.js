AOS.init();

const labels = [
  "JAN-2025",
  "FEB-2025",
  "MAR-2025",
  "APR-2025",
  "MAY-2025",
  "JUN-2025",
  "JUL-2025",
  "AUG-2025",
  "SEP-2025",
  "OCT-2025",
  "NOV-2025",
  "DEC-2025",
  "JAN-2026",
  "FEB-2026",
  "MAR-2026",
  "APR-2026",
  "MAY-2026",
  "JUN-2026",
  "JUL-2026",
  "AUG-2026",
  "SEP-2026",
  "OCT-2026",
  "NOV-2026",
  "DEC-2026",
  "JAN-2027",
  "FEB-2027",
  "MAR-2027",
  "APR-2027",
  "MAY-2027",
  "JUN-2027",
  "JUL-2027",
  "AUG-2027",
  "SEP-2027",
  "OCT-2027",
  "NOV-2027",
  "DEC-2027",
];
const data = Array.from(
  { length: 36 },
  (_, i) => 70 + Math.round((30 / 35) * i)
);
const maxSupply = 100;
const currentDate = new Date();

// Calculate the active month index based on the current date
const startYear = 2025;
const startMonth = 0; // January 2025
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth(); // Get the current month (0-11)

// Calculate the index in the labels array
const yearsPassed = currentYear - startYear;
const activeMonthIndex = yearsPassed * 12 + currentMonth;

const chart = document.getElementById("chart");

for (let i = 20; i <= maxSupply; i += 20) {
  let line = document.createElement("div");
  line.className = "grid-line";
  line.style.bottom = `${(i / maxSupply) * 100}%`;
  chart.appendChild(line);
}

labels.forEach((label, index) => {
  let bar = document.createElement("div");
  bar.className = "bar";
  if (index === activeMonthIndex) {
    bar.classList.add("active");
  }
  bar.style.height = `${(data[index] / maxSupply) * 100}%`;

  let barLabel = document.createElement("div");
  barLabel.className = "bar-label";
  barLabel.innerText = label;

  let verticalLine = document.createElement("div");
  verticalLine.className = "vertical-line";
  verticalLine.style.left = `${(index / labels.length) * 100}%`;
  chart.appendChild(verticalLine);

  bar.appendChild(barLabel);
  chart.appendChild(bar);
});

$(".faq-card .question").click(function (e) {
  e.preventDefault();
  if ($(this).parent().hasClass("question_opened")) {
    $(this).parent().removeClass("question_opened");
    $(this).next().css("max-height", "0px");
  } else {
    $(".question_opened").find(".answer").css("max-height", "0px");
    $(".question_opened").removeClass("question_opened");
    $(this).parent().addClass("question_opened");
    var heightinside = $(this).next().find(".in").height() + 50;
    $(this)
      .next()
      .css("max-height", heightinside + "px");
  }
});

$(".navbar .lines").click(function (e) {
  e.preventDefault();
  if ($(this).parent().parent().parent().hasClass("active")) {
    $(this).parent().parent().parent().removeClass("active");
  } else {
    $(this).parent().parent().parent().addClass("active");
  }
});

document
  .getElementById("languageSelector")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("languageDropdown").classList.toggle("show");

    $(".navbar.active .left-side").animate(
      {
        scrollTop: $(".navbar.active .left-side")[0].scrollHeight,
      },
      1000
    );
  });

document.querySelectorAll(".dropdown a").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    $(".navbar").removeClass("active");

    let selectedLang = this.getAttribute("data-lang");
    document.getElementById("languageSelector").innerHTML =
      this.innerText +
      `<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.99995 11.1301C8.67995 11.1301 8.34993 11.007 8.10993 10.7611L0.369941 3.0215C-0.120059 2.5291 -0.120059 1.7309 0.369941 1.2387C0.859941 0.746604 1.65997 0.746604 2.14997 1.2387L8.99995 8.08721L15.8499 1.23901C16.3399 0.746805 17.14 0.746805 17.63 1.23901C18.12 1.73111 18.12 2.5294 17.63 3.0217L9.88996 10.7614C9.63996 11.0072 9.31995 11.1301 8.99995 11.1301Z"/>
        </svg>`;

    document.getElementById("languageDropdown").classList.remove("show");

    // Call Google Translate API (if you integrate it)
    googleTranslate(selectedLang);
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  if (!document.querySelector(".languge").contains(event.target)) {
    document.getElementById("languageDropdown").classList.remove("show");
  }
});

// Function to handle Google Translate API (optional)
function googleTranslate(lang) {
  let translateElement = document.querySelector(".goog-te-combo"); // Google Translate dropdown
  if (translateElement) {
    translateElement.value = lang;
    translateElement.dispatchEvent(new Event("change")); // Simulate user changing language
  } else {
    console.error("Google Translate dropdown not found.");
  }
}

$(".scroll").click(function (e) {
  e.preventDefault();
  $("nav").removeClass("nav_active");
  var nameof = "." + $(this).attr("name");
  $(".navbar").removeClass("active");
  $("html, body").animate(
    {
      scrollTop: $(nameof).offset().top - 150,
    },
    1000
  );
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to adjust scroll position
  function adjustScroll() {
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop - 100, // Move 100px up
            behavior: "smooth",
          });
        }, 100); // Small delay to allow page rendering
      }
    }
  }

  // Apply on page load
  adjustScroll();

  // Apply on link click within the page
  document.querySelectorAll('a[href^="index.html#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default jump

      const targetId = this.getAttribute("href").split("#")[1];
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });

        // Update URL without jumping
        history.pushState(null, null, `#${targetId}`);
      }
    });
  });
});
