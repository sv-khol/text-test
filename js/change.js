let size_h1 = document.querySelector('#h1');

size_h1.onchange = function () {
    let h1 = document.querySelector('.h1');
    h1.style.fontSize = this.value + 'px';
}

let size_h2 = document.querySelector('#h2');

size_h2.onchange = function () {
    let h2 = document.querySelector('.h2');
    h2.style.fontSize = this.value + 'px';
}

let size_text = document.querySelector('#text');

size_text.onchange = function () {
    let text = document.querySelector('.main_text');
    text.style.fontSize = this.value + 'px';
}

let size_notice = document.querySelector('#notice');

size_notice.onchange = function () {
    let notice = document.querySelector('.notice');
    notice.style.fontSize = this.value + 'px';
}

let font = document.querySelector('#font');

font.onchange = function () {
    let body = document.querySelector('body');
    body.style.fontFamily = this.value;
}