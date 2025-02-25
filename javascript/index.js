



document.addEventListener('scroll',()=>{

    const $access = document.querySelector('.access__title');
    const $backimg = document.querySelector('.background-img');
    const $contact = document.querySelector('.contact__title');
    accessTop = $access.getBoundingClientRect().top + $access.clientHeight*0.6;
    contactTop = $contact.getBoundingClientRect().top + $contact.clientHeight*0.6;

    if(window.innerHeight>accessTop) {
        $backimg.classList.add('block');
    } else {
        $backimg.classList.remove('block')
    }
    
    if(window.innerHeight>contactTop) {
        $backimg.classList.remove('block');
    }
})

const $humburger = document.querySelector('.humburger');
const $menu = document.querySelector('.menu');
const $humburgerLine = document.querySelectorAll('.humburger__component')

$humburger.addEventListener('click',()=>{
    $menu.classList.toggle('opacity');
    $humburgerLine[0].classList.toggle('rotate');
    $humburgerLine[1].classList.toggle('none');
    $humburgerLine[2].classList.toggle('rotate2');
})


document.addEventListener('scroll',()=>{
    
    const $humburger = document.querySelector('.humburger');
    const $title = document.querySelector('.title');
    const $informationTitle = document.querySelector('.information__title');
    const $sideBar = document.querySelector('.sidebar');
    const informationTitleTop = $informationTitle.getBoundingClientRect().top + $informationTitle.clientHeight*0.6;



    if(window.innerHeight > informationTitleTop) {
        $humburger.classList.add('opacityOnly');
        $title.classList.add('opacityOnly');
        $sideBar.classList.add('opacityOnly')
    } 

    if(window.innerHeight < informationTitleTop) {
        $humburger.classList.remove('opacityOnly');
        $title.classList.remove('opacityOnly');
        $sideBar.classList.remove('opacityOnly');
    } 


})


document.addEventListener('scroll',()=>{
    const $mainVisual = document.querySelectorAll('.header__img');
    let scrollY = window.scrollY/12
    let index = 0
    let $width = document.documentElement.clientWidth

    while($mainVisual.length>index) {
        if($width>400) {
            $mainVisual[index].style.width= 33.33333+scrollY+'%';
        } else {
            $mainVisual[index].style.width=100-scrollY+'%'
        }

        index++
    }
})


document.addEventListener('scroll',()=>{
    const $galleryImges = document.querySelectorAll('.js-gallery__img-wrapper');

    for (let index = 0; index < $galleryImges.length; index++) {
        const $galleryImgesTopElement = $galleryImges[index].getBoundingClientRect().top + $galleryImges[index].clientHeight*0.6;

        if(window.innerHeight > $galleryImgesTopElement) {
            $galleryImges[index].classList.add('block-transform');
        }
    }
})




