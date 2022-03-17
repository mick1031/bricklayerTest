$(window).load(function () {
    const bricklayer = new Bricklayer(document.querySelector('.bricklayer'));

    bricklayer.on("breakpoint", function (e) {
        console.log(e.detail.columnCount);
    })
    
    let count = bricklayer.columnCount;
    let length = 10;

    const flags = getFlags(count, length);
    const arr = getArr(flags, length);
    const result = getData(arr);

    showImage(result, 0);
})

function showImage(arr, index)
{
    const img = document.getElementById("image" + (arr[index] + 1));
    if(img != null){
        img.style.visibility = 'visible';
        img.classList.add('show');
    }

    if(index<arr.length-1){
        index = index + 1;
        setTimeout(() => {showImage(arr, index)}, 500)
    }

}

function getFlags(count, length) {
    let result = [];
    let flag = 0;
    let mark = 1;

    for (let i = 0; i < length; i++) {
        result.push(flag);
        flag = flag + mark;
        if (flag == count - 1) {
            result.push(flag);
            mark = -1;
        } else if (flag == 0) {
            result.push(flag);
            mark = 1;
        }
    }

    return result;
}

function getArr(flags, length) {
    let result = [];

    for (let i = 0; i < flags.length; i++) {
        result[i] = [];
    }

    for (let i = 0; i < length; i++) {
        result[flags[i]].push(i);
    }
    return result;
}

function getData(arr) {
    let result = [];
    let count = arr.length;
    let max = 0;

    for (let i = 0; i < count; i++) {
        max = Math.max(arr[i].length, max);
    }

    for (let i = 0; i < max; i++) {
        for (let j = 0; j < count; j++) {
            if (arr[j][i] != undefined) {
                result.push(arr[j][i]);
            }
        }
    }
    return result;
}