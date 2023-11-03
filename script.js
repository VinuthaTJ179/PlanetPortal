document.addEventListener('DOMContentLoaded', function () {
    const text = 'Mercury'; // The text you want to "type"
    const container = document.getElementById('dynamic-letters-container');

    // Split the text into individual characters
    const characters = text.split('');

    // Function to create and animate dynamic letters with a slower transition
    function createDynamicLetters() {
        characters.forEach((character, index) => {
            setTimeout(function () {
                const letter = document.createElement('span');
                letter.classList.add('dynamic-letter');
                letter.textContent = character;
                container.appendChild(letter);

                // Apply typing animation with slower transition
                setTimeout(function () {
                    letter.style.opacity = 1;
                }, index * 490; // Adjust the time delay for slower typing speed
            }, index * 490); // Adjust the time delay for slower typing speed
        });
    }

    createDynamicLetters();
});
