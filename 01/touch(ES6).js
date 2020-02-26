// ES6 改写

class Swiper {
    constructor(node) {
        // 未绑定参数，抛出异常
        if (!node) throw new Error('需要绑定 DOM 元素')

        let root = typeof node === 'string' ? document.querySelector(node) : node;

        let eventHub = {
            'swiperLeft': [],
            'swiperRight': []
        }
        let initX
        let newX
        let clock
        root.addEventListener('touchstart', function (e) {
            initX = e.changedTouches[0].pageX
        })
        root.addEventListener('touchmove', function (e) {
            if (clock) {
                clearTimeout(clock)
            }
            clock = setTimeout(() => {
                newX = e.changedTouches[0].pageX
                if (newX - initX > 0) {
                    eventHub['swiperRight'].forEach(fn => fn())
                } else {
                    eventHub['swiperLeft'].forEach(fn => fn())
                }
            }, 100)
        })
        this.on = function (type, fn) {
            if (eventHub[type]) {
                eventHub[type].push(fn);
            }

        }
    }
}
export default Swiper