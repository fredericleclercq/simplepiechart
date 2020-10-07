document.addEventListener('DOMContentLoaded', function () {

    let pie = document.querySelectorAll('.piechart');
    for (let k = 0; k < pie.length; k++) {
        parts = pie[k].querySelectorAll('.part');
        let cumul = 0;
        let list = [];
        for (let j = 0; j < parts.length; j++) {
            let value = parts[j].getAttribute('data-percent');
            let color = parts[j].getAttribute('data-color');
            list.push(color + ' 0 ' + (parseInt(value) + cumul) + "%");
            cumul += parseInt(value);
        }
        pie[k].style.backgroundImage = `conic-gradient(${list.join()})`;
    }

});