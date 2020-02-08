window.onload = function () {

    var buttons = document.querySelector('.buttons')
    var clear = document.getElementById('clear');
    var answer = document.getElementById('input');

    // clicking on each button
    buttons.addEventListener('click', function (e) {


        // get value of button
        var v = e.target.innerHTML;

        if (v === '=') {
            try {
                answer.innerHTML = eval(answer.innerHTML);
            } catch (e) {
                answer.innerHTML = e.message;
            }
        } else {
            answer.innerHTML += v;
        }

    });

    // clear the answer field
    clear.addEventListener('click', function () {
        answer.innerHTML = '';
    });

};

