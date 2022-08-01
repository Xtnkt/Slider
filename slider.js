let sliderWithCats = {
    showPrevBtn: document.getElementById("show-prev"),
    showNextBtn: document.getElementById("show-next"),
    slideImg: document.getElementById("slide-img"),
    imgUrls: [],
    currentImgIndex: 0,

    start: function () {
        let that = this;
        
        // subscribe to events
        this.showPrevBtn.addEventListener("click", function (e){    
            that.onShowPrevBtnClick(e);
        } );
        this.showNextBtn.addEventListener("click",function (e){    
            that.onShowNextBtnClick(e);
        } );    

        this.imgUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtcyTT7He-EZLjY4tHhPN03LbgwNIfhVaEg&usqp=CAU");
        this.imgUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspoyykuoWEV7lhE4iK5NZwGmyRsem6U1WIA&usqp=CAU");
        this.imgUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPt5jAysp-aA0DFzaajX_mQLuMh12XXrVqxw&usqp=CAU");
        this.imgUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAmLYgBhAeOB2UzoP1pw7_C7-3ow9TZYF-w&usqp=CAU");
    
        this.slideImg.src = this.imgUrls[this.currentImgIndex];
        this.showPrevBtn.disabled = true;
    },

    onShowPrevBtnClick: function (e) {
        this.currentImgIndex--;
        this.slideImg.src = this.imgUrls[this.currentImgIndex];
        this.showNextBtn.disabled = false;

        if (this.currentImgIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    },

    onShowNextBtnClick: function (e) {
        this.currentImgIndex++;
        this.slideImg.src = this.imgUrls[this.currentImgIndex];
        this.showPrevBtn.disabled = false;

        if (this.currentImgIndex === (this.imgUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    }
}