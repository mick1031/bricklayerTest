function newBox() {
    var box = document.createElement('div');
    box.className = 'box';
    return box;
}

var bricklayer = new Bricklayer(document.querySelector('.bricklayer'))

const imgs = [
    "./images/06.jpg",
    "./images/03.jpg",
    "./images/04.jpg",
    "./images/02.jpg",
    "./images/01.jpg",
    "./images/07.jpg",
    "./images/10.jpg",
    "./images/05.jpg",
    "./images/08.jpg",
    "./images/09.jpg",
];

setTimeout(() => { addImage(0) }, 700);

function addImage(index) {

    $('img').show();
    $('img').addClass('is-append');
    

    if (index < 10) {
        var box = newBox();
        box.innerHTML = `<img style="display:none;" src="${imgs[index]}">`;
        bricklayer.append(box);

        index = index + 1;
        setTimeout(() => { addImage(index) }, 700);
    }
    else
    {
        setTimeout(() => { $('img').removeClass('is-append'); }, 1000);
    }
}