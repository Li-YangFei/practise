const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

$('.carousel .dots').onclick = function (e) {
    if (e.target.tagName !== 'SPAN') return
    let index = Array.from($$('.carousel .dots span')).indexOf(e.target)
    setDots(index)
    setImgs(index)
}

$('.pre').onclick = function (e) {
    let index = Array.from($$('.carousel .dots span')).indexOf($('.carousel .dots .active'))
    index = (index - 1 + Array.from($$('.carousel .dots span')).length) % Array.from($$('.carousel .dots span')).length
    setDots(index)
    setImgs(index)
}


$('.next').onclick = function (e) {
    let index = Array.from($$('.carousel .dots span')).indexOf($('.carousel .dots .active'))
    console.log(index)
    index = (index + 1) % $$('.carousel .dots span').length
    console.log('heo' + index)
    setDots(index)
    setImgs(index)
}

// 封装

function setDots(index) {
    $$('.carousel .dots span').forEach(dot => dot.classList.remove('active'))
    $$('.carousel .dots span')[index].classList.add('active')
}

function setImgs(index) {
    $$('.carousel .panels a').forEach(img => img.style.zIndex = 1)
    $$('.carousel .panels a')[index].style.zIndex = 10
}