document.getElementById('generateButton').addEventListener('click', function() {

    var randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById('result').textContent = randomNumber;
});
