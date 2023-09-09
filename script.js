const dayElem = document.getElementById("currentDay");
const timeElem = document.getElementById("currentTime");

function displayDateTime() {
  const currentDate = new Date();

  const dayOfWeek = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const currentTimeInMilliseconds = currentDate.toISOString();

  dayElem.textContent = `Current Day of the week: ${dayOfWeek}`;

  timeElem.textContent = `Current UTC Time: ${currentTimeInMilliseconds}`;
}

setInterval(displayDateTime, 1000);

displayDateTime();
