function getValues() {

    let userString = document.getElementById('userString').value;

    let revString = reverseString(userString);

    displayString(revString);
}

function reverseString(input) {

    let revString = '';

    for (let index = input.length - 1; index >= 0; index = index - 1) {

        let letter = input[index];

        revString = revString + letter;

    }

    return revString;
}

function displayString(output) {

    document.getElementById('results').textContent = output;

    let alertBox = document.getElementById('alert');

    alertBox.classList.remove('invisible');
}
