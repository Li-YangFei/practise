import Swiper from "./touch(ES6).js"

let swiper = new Swiper("#box")
swiper.on("swiperLeft", () => {
    console.log("left")
})
swiper.on("swiperRight", () => {
    console.log("right")
})

let onLeft = () => console.log("left 2")
swiper.on("swiperLeft", onLeft)