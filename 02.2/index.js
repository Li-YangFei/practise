class Carousel {
  constructor(root) {
    this.root = root;
    this.dotCt = root.querySelector(".dots");
    this.dots = Array.from(root.querySelectorAll(".dots > span"));
    this.imgs = Array.from(root.querySelectorAll(".panels>a"));
    this.pre = root.querySelector(".pre");
    this.next = root.querySelector(".next");
    this.bind();
  }
  bind() {
    // function(e) 注意this的指向问题
    this.dotCt.onclick = e => {
      if (e.target.tagName !== "SPAN") return;
      let index = this.dots.indexOf(e.target);
      this.setDots(index);
      this.setImg(index);
    };
    this.pre.onclick = () => {
      let index = this.dots.indexOf(document.querySelector(".dots .active"));
      index = (index - 1 + this.dots.length) % this.dots.length;
      this.setDots(index);
      this.setImg(index);
    };
    this.next.onclick = () => {
      let index = this.dots.indexOf(document.querySelector(".dots .active"));
      index = (index + 1) % this.dots.length;
      this.setDots(index);
      this.setImg(index);
    };
  }
  setDots(index) {
    // console.log(index);
    this.dots.forEach(dot => dot.classList.remove("active"));
    this.dots[index].classList.add("active");
  }
  setImg(index) {
    this.imgs.forEach(img => (img.style.zIndex = 1));
    this.imgs[index].style.zIndex = 10;
  }
}

new Carousel(document.querySelector(".carousel"));
