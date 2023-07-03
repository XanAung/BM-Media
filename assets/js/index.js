// const scrWidth = document.getElementById("screenWidth");

let curIndex = 0;
let setCurIndex = false;
let changeSlide = val => {
    setCurIndex = true;
    curIndex = parseInt(val);
    document.slide.src = `./assets/images/${curIndex + 1}.jpg`;
};

let slideradios = document.getElementsByName("slideradios");
let autoSlide = () => {
    if (!setCurIndex) {
        curIndex = curIndex < 4 ? curIndex += 1 : 0;
        slideradios[curIndex].checked = true;
        document.slide.src = `./assets/images/${curIndex + 1}.jpg`;
    } else {
        setCurIndex = false;
    }

    setTimeout("autoSlide()", 3000);
}

// let onresize = () => {
//     width = document.body.clientWidth;
//     height = document.body.clientHeight;
//     scrWidth.innerHTML = width + " px";
// };

// window.addEventListener("resize", onresize);
// window.onload = onresize;
window.onload = autoSlide;

let sortDown = document.querySelector('.nav-sort-down');
let changeSortDown = (ele) => {
    if(ele.checked) {
        sortDown.classList.add('sort-up');
    } else {
        sortDown.classList.remove('sort-up');
    }
};