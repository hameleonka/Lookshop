(function () {
    var carouselContent = document.querySelector(".carousel-content");
    var carouselFirstItem = document.querySelector(".carousel-content .item");
    var carouselArrowPrevious = document.querySelector(".carousel-nav-arrows .arrow-previous");
    var carouselArrowNext = document.querySelector(".carousel-nav-arrows .arrow-next");
    var iconArrowPrevious = document.querySelector(".carousel-nav-arrows .arrow svg");
    var iconArrowNext = document.querySelector(".arrow-next svg");


    var ItemMarginRight = parseFloat(window.getComputedStyle(carouselFirstItem, null).getPropertyValue("margin-right"));
    var shiftItem = carouselFirstItem.offsetWidth + ItemMarginRight;
    var viewportWidth = document.documentElement.clientWidth;
    var numberOfItems = 13;
    var carouselContentWidth = numberOfItems * carouselFirstItem.offsetWidth + (numberOfItems-1) * ItemMarginRight;
    console.log(shiftItem);
    console.log(carouselContentWidth);


    carouselArrowPrevious.addEventListener("click", function (event) {
            event.preventDefault();
        carouselArrowPrevious.classList.add('arrow-active');
        iconArrowPrevious.classList.add('icon-arrow-active');
        carouselArrowNext.classList.remove('arrow-active');
        iconArrowNext.classList.remove('icon-arrow-active');
        var carouselFirstItemBeforeClickMarginLeft = parseFloat(window.getComputedStyle(carouselFirstItem, null).getPropertyValue("margin-left"));
        console.log (carouselFirstItemBeforeClickMarginLeft);
        var carouselFirstItemAfterClickMarginLeft = carouselFirstItemBeforeClickMarginLeft + shiftItem;
        console.log (carouselFirstItemAfterClickMarginLeft);
        if (carouselFirstItemAfterClickMarginLeft >= ItemMarginRight ) {
            carouselFirstItem.style.marginLeft= ItemMarginRight + "px";
            carouselArrowPrevious.classList.remove('arrow-active');
            iconArrowPrevious.classList.remove('icon-arrow-active');
            carouselArrowNext.classList.add('arrow-active');
            iconArrowNext.classList.add('icon-arrow-active');
        } else {
            carouselFirstItem.style.marginLeft= carouselFirstItemAfterClickMarginLeft + "px";
        }
        });

    carouselArrowNext.addEventListener("click", function (event) {
        event.preventDefault();
        carouselArrowNext.classList.add('arrow-active');
        iconArrowNext.classList.add('icon-arrow-active');
        carouselArrowPrevious.classList.remove('arrow-active');
        iconArrowPrevious.classList.remove('icon-arrow-active');
        var carouselFirstItemBeforeClickMarginLeft = parseFloat(window.getComputedStyle(carouselFirstItem, null).getPropertyValue("margin-left"));
        console.log (carouselFirstItemBeforeClickMarginLeft);
        var carouselFirstItemAfterClickMarginLeft = carouselFirstItemBeforeClickMarginLeft - shiftItem;
        console.log (carouselFirstItemAfterClickMarginLeft);
        if (Math.abs(carouselFirstItemAfterClickMarginLeft)  >= (carouselContentWidth - viewportWidth)) {
            console.log('greater');
            carouselFirstItem.style.marginLeft= -(carouselContentWidth - viewportWidth + ItemMarginRight) + "px";
            carouselArrowNext.classList.remove('arrow-active');
            iconArrowNext.classList.remove('icon-arrow-active');
            carouselArrowPrevious.classList.add('arrow-active');
            iconArrowPrevious.classList.add('icon-arrow-active');
        } else {
        carouselFirstItem.style.marginLeft= carouselFirstItemAfterClickMarginLeft + "px"};
    });
}());






