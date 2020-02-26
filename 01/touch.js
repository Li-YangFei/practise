

let Swiper = (function () {
    // 3. 初始化一些变量
    let root = document
    let eventHub = {
        'swiperLeft': [],
        'swiperRight': []
    }
    // 初始化一个容器，用来放置手势库里面的一些手势，及对应的函数
    // 2.要返回方法，必然要定义
    function bind(node) {
        root = node;

    }

    function on(type, fn) {
        if (eventHub[type]) {
            eventHub[type].push(fn)
        }

    }
    var initX
    var newX
    var clock
    root.addEventListener('touchstart', function (e) {
        initX = e.changedTouches[0].pageX;
    })
    root.addEventListener('touchmove', function (e) {
        if (clock) {
            clearTimeout(clock);
        }
        clock = setTimeout(() => {
            newX = e.changedTouches[0].pageX
            if (newX - initX > 0) {
                eventHub["swiperRight"].forEach(fn => fn())
            } else {
                eventHub['swiperLeft'].forEach(fn => fn())
            }
        }, 100)
    })
    return {
        bind: bind,
        on: on
    }
})()

Swiper.bind(document.querySelector('#box'))
Swiper.on('swiperLeft', function () {
    console.log('left');
})
Swiper.on('swiperRight', function () {
    console.log('right');
})