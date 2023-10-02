function updateClock() {
    const now = new Date();
    const timeElement = document.getElementById('time');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const timeString = `${hours}:${minutes}`;
    timeElement.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock
updateClock();
