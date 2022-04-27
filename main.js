const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ol');

button.addEventListener('click', function(event) {
    event.preventDefault();
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    var ch = document.createElement('input');
    ch.type = 'checkbox'
    li.appendChild(ch);
    const x = document.createElement('button');
    x.textContent = "X";
    li.appendChild(x);

    ch.addEventListener('change', function(check) {
    check.preventDefault();
    if (this.checked) {
        li.textContent = input.value + ': DONE!';
    }
    console.log('bruh')
});

    x.addEventListener('click', function(remove) {
    remove.preventDefault();
    var xbutton = document.querySelector('li')
        xbutton.parentNode.removeChild(xbutton);
        return false;
});
});








