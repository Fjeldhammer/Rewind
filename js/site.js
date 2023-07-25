function getValues() {

    let userString = document.getElementById('userString').value;

    let revString = reverseString(userString);

    displayString(revString);
}

function reverseString(input) { // input = 'apple'

    let strArray = input.split(''); // strArray = ['a', 'p', 'p', 'l', 'e']
    let reversedArray = [];

    for (let index = strArray.length - 1; index >= 0; index = index - 1) {

        let letter = strArray[index];

        reversedArray.push(letter);
        
    }

    let revString = reversedArray.join('');

    return revString;

}

function displayString(output) {

    document.getElementById('results').textContent = output;

    let alertBox = document.getElementById('alert');

    alertBox.classList.remove('invisible');
}
