const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeslideindex = 0
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
console.log(slidesLength) 
upButton.addEventListener('click',()=> changeSlide('up'))
downButton.addEventListener('click',()=> changeSlide('down'))


const changeSlide=(direction) => {
    console.log("button works")
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up')
    {
        console.log(activeslideindex)
        activeslideindex++
        if(activeslideindex > slidesLength - 1)
        {
            activeslideindex = 0
        }
    }
    else if(direction === 'down')
    {
        console.log(activeslideindex)
        activeslideindex--
        if(activeslideindex < 0)
        {
            activeslideindex = slidesLength - 1
        }
    }
    slideRight.style.transform = `translateY(-${activeslideindex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeslideindex * sliderHeight}px)`;
}