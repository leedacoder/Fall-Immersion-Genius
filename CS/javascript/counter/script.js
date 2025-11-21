function $(id) {
    return document.getElementById(id);
}
function counter ()
        counter_number = $('counter-number');
        number2= $("number2");
        counter_number.innerHTMl = parseInt(number2.innerHTML) + 2;
        counter_number.innerHTML = parseInt(counter_number.innerHTMl) + 1;
