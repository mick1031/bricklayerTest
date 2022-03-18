function newBox() {
    var box = document.createElement('div');
    box.className = 'box';
    return box;
}

var bricklayer = new Bricklayer(document.querySelector('.bricklayer'));

bricklayer.on("afterAppend", function (e) {
    var el = e.detail.item;
    el.classList.add('is-append');
    setTimeout(function () {
      el.classList.remove('is-append');
    }, 500);
  });

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

function addImage(index) {

    if (index < 10) {
        var box = newBox();
        const img = $(`<img style="display:none;" src="${imgs[index]}">`).on(
            'load', 
            (e) => {
                $(e.target).show()
                    .addClass('is-append');
                
                setTimeout(() => { $(e.target).removeClass('is-append') }, 1200);

                index = index + 1;
                setTimeout(() => { addImage(index) }, 700);

            }
        );
        
        $(box).append(img);
        bricklayer.append(box);

    }
}

addImage(0)