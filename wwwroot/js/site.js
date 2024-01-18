// Mathilda Eriksson DT191G

document.addEventListener("DOMContentLoaded", function() {
    const greetElement = document.getElementById('timeBasedGreeting');

    if (greetElement) { // Check if the element exists
        const currentHour = new Date().getHours();
        let greetingMessage;

        if (currentHour < 12) {
            greetingMessage = 'Godmorgon!';
        } else if (currentHour < 18) {
            greetingMessage = 'Goddag!';
        } else {
            greetingMessage = 'Godkväll!';
        }

        greetElement.textContent = greetingMessage;
    }
});