// find elements
let showPrevBtn = document.getElementById("show-prev");
let showNextBtn = document.getElementById("show-next");
let slideImg = document.getElementById("slide-img");

// subscribe to events
showPrevBtn.addEventListener("click", onShowPrevBtnClick);
showNextBtn.addEventListener("click", onShowNextBtnClick);

//create images array
let imgUrls = [];
imgUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtcyTT7He-EZLjY4tHhPN03LbgwNIfhVaEg&usqp=CAU");
imgUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspoyykuoWEV7lhE4iK5NZwGmyRsem6U1WIA&usqp=CAU");
imgUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPt5jAysp-aA0DFzaajX_mQLuMh12XXrVqxw&usqp=CAU");
imgUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAmLYgBhAeOB2UzoP1pw7_C7-3ow9TZYF-w&usqp=CAU");

let currentImgIndex = 0;

slideImg.src = imgUrls[currentImgIndex];
showPrevBtn.disabled = true;

//function definitions
function onShowPrevBtnClick() {
    currentImgIndex--;
    slideImg.src = imgUrls[currentImgIndex];
    showNextBtn.disabled = false;

    if(currentImgIndex === 0 ){
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick() {
    currentImgIndex++;
    slideImg.src = imgUrls[currentImgIndex];
    showPrevBtn.disabled = false;

    if(currentImgIndex === (imgUrls.length - 1) ){
        showNextBtn.disabled = true;
    }
}