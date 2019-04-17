// Image generator.
function imgGenerator(targetValue = '', srcValue = '', altValue = '', defaulClassValue = '', personalClassValue = '', idValue = '') {
    targetValue.setAttribute('src', srcValue);
    targetValue.setAttribute('alt', altValue);
    targetValue.classList.add(defaulClassValue, personalClassValue);
    targetValue.setAttribute('id', idValue);
    return targetValue;
}

// Image adder.
function imgAdded(target, element) {
    target.appendChild(element, target);
}

let _loadedImages = 0;

const _imageObjs = [
    image1 = {
        bodyVal:'img',
		src:'background.jpg',
		idVal:'js-background-img',
        defaulClass:'ui-position',
        personalClass:'ui-background-relative',
        altInformation:'banner background image',
    },
    image2 = {
        bodyVal:'img',
		src:'product.png',
		idVal:'js-product-position',
        defaulClass:'ui-position',
        personalClass:'ui-product-position',
        altInformation:'banner product image',
    },
    image3 = {
        bodyVal:'img',
		src:'first-line.png',
		idVal:'js-firstline-move',
        defaulClass:'ui-position',
        personalClass:'ui-firstline-position',
        altInformation:'first title',
    },
    image4 = {
        bodyVal:'img',
		src:'second-line.png',
		idVal:'js-secondline-move',
        defaulClass:'ui-position',
        personalClass:'ui-secondline-position',
        altInformation:'second title',
    },
    image5 = {
        bodyVal:'img',
		src:'third-line.png',
		idVal:'js-thirdline-move',
        defaulClass:'ui-position',
        personalClass:'ui-thirdline-position',
        altInformation:'third title',
    },
    image6 = {
        bodyVal:'img',
		src:'final-line.png',
		idVal:'js-finalline-move',
        defaulClass:'ui-position',
        personalClass:'ui-finalline-position',
        altInformation:'final line',
    },
    image7 = {
        bodyVal:'img',
		src:'action-hover.png',
		idVal:'js-actionHover-scale',
        defaulClass:'ui-position',
        personalClass:'ui-action-normal',
        altInformation:'hover action',
    },
    image8 = {
        bodyVal:'img',
		src:'action-normal.png',
		idVal:'js-actionNormal-scale',
        defaulClass:'ui-position',
        personalClass:'ui-action-normal',
        altInformation:'normal action',
    },
];
const _readyToLoad = [];
const bannerContent = document.getElementById('js-banner-content');

this.addEventListener('DOMContentLoaded', preloadImages);

function preloadImages() {
    for (let i = 0; i < _imageObjs.length; i++) {
        const _tempImage = document.createElement(_imageObjs[i].bodyVal);
        imgGenerator(_tempImage, _imageObjs[i].src, _imageObjs[i].altInformation, _imageObjs[i].defaulClass, _imageObjs[i].personalClass, _imageObjs[i].idVal)
        _tempImage.addEventListener('load', trackProgress);
        _readyToLoad.push(_tempImage);
    }
};

function trackProgress(){
    _loadedImages++;
    if(_loadedImages == _imageObjs.length) init();
};

function init(){
    _readyToLoad.forEach(element => {
        imgAdded(bannerContent, element);
    });
    initAnimations();
};

function initAnimations(){
    const _firstAnim = new TimelineMax();
    const timing = 0.5;
    
    _firstAnim.to('#js-background-img',1,{opacity:1}, '+=' + timing);
    _firstAnim.to('#js-product-position',1,{opacity:1, top: 3 + 'px', left: 1 + 'px'}, '+=' + timing);
    _firstAnim.to('#js-finalline-move',1,{opacity:1, left: 54 + 'px', bottom: 9 + 'px'}, '-=' + timing);

    _firstAnim.to('#js-firstline-move',1,{opacity:1, left: 127 + 'px', top: 1 + 'px'}, '+=' + timing);
    _firstAnim.to('#js-secondline-move',1,{opacity:1, left: 118 + 'px', top: 36 + 'px'}, '+=' + timing);
    _firstAnim.to('#js-thirdline-move',1,{opacity:1, left: 115 + 'px', top: 73 + 'px'}, '+=' + timing);

    _firstAnim.to('.ui-action-normal',1,{opacity:1, scale: 1, left: 0 + 'px', top: 150 + 'px', onComplete:actionsButton}, '+=' + timing);
};

function actionsButton(){
    _btnExit.addEventListener('mouseover', () => { TweenMax.to('#js-actionNormal-scale',.10,{ opacity:0 })});
    _btnExit.addEventListener('mouseout', () => { TweenMax.to('#js-actionNormal-scale',.10,{ opacity:1 })});
};