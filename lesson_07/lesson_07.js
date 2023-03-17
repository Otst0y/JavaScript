function addText() {
    let elements = document.getElementsByTagName('li');
    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = 'Custom text';
    }
}

function outputLi() {
    let elements = document.getElementsByTagName('li');
    alert(elements.length);
}