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
