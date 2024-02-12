function locomotive()
{
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();  

//canvas - 
function canvas()
{
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    https://zelt.app/assets/img/home/hero/sequence/1.webp
    https://zelt.app/assets/img/home/hero/sequence/2.webp
    https://zelt.app/assets/img/home/hero/sequence/3.webp
    https://zelt.app/assets/img/home/hero/sequence/4.webp
    https://zelt.app/assets/img/home/hero/sequence/5.webp
    https://zelt.app/assets/img/home/hero/sequence/6.webp
    https://zelt.app/assets/img/home/hero/sequence/7.webp
    https://zelt.app/assets/img/home/hero/sequence/8.webp
    https://zelt.app/assets/img/home/hero/sequence/9.webp
    https://zelt.app/assets/img/home/hero/sequence/10.webp
    https://zelt.app/assets/img/home/hero/sequence/11.webp
    https://zelt.app/assets/img/home/hero/sequence/12.webp
    https://zelt.app/assets/img/home/hero/sequence/13.webp
    https://zelt.app/assets/img/home/hero/sequence/14.webp
    https://zelt.app/assets/img/home/hero/sequence/15.webp
    https://zelt.app/assets/img/home/hero/sequence/16.webp
    https://zelt.app/assets/img/home/hero/sequence/17.webp
    https://zelt.app/assets/img/home/hero/sequence/18.webp
    https://zelt.app/assets/img/home/hero/sequence/19.webp
    https://zelt.app/assets/img/home/hero/sequence/20.webp
    https://zelt.app/assets/img/home/hero/sequence/21.webp
    https://zelt.app/assets/img/home/hero/sequence/22.webp
    https://zelt.app/assets/img/home/hero/sequence/23.webp
    https://zelt.app/assets/img/home/hero/sequence/24.webp
    https://zelt.app/assets/img/home/hero/sequence/25.webp
    https://zelt.app/assets/img/home/hero/sequence/26.webp
    https://zelt.app/assets/img/home/hero/sequence/27.webp
    https://zelt.app/assets/img/home/hero/sequence/28.webp
    https://zelt.app/assets/img/home/hero/sequence/29.webp
    https://zelt.app/assets/img/home/hero/sequence/30.webp
    https://zelt.app/assets/img/home/hero/sequence/31.webp
    https://zelt.app/assets/img/home/hero/sequence/32.webp
    https://zelt.app/assets/img/home/hero/sequence/33.webp
    https://zelt.app/assets/img/home/hero/sequence/34.webp
    https://zelt.app/assets/img/home/hero/sequence/35.webp
    https://zelt.app/assets/img/home/hero/sequence/36.webp
    https://zelt.app/assets/img/home/hero/sequence/37.webp
    https://zelt.app/assets/img/home/hero/sequence/38.webp
    https://zelt.app/assets/img/home/hero/sequence/39.webp
    https://zelt.app/assets/img/home/hero/sequence/40.webp
    https://zelt.app/assets/img/home/hero/sequence/41.webp
    https://zelt.app/assets/img/home/hero/sequence/42.webp
    https://zelt.app/assets/img/home/hero/sequence/43.webp
    https://zelt.app/assets/img/home/hero/sequence/44.webp
    https://zelt.app/assets/img/home/hero/sequence/45.webp
    https://zelt.app/assets/img/home/hero/sequence/46.webp
    https://zelt.app/assets/img/home/hero/sequence/47.webp
    https://zelt.app/assets/img/home/hero/sequence/48.webp
    https://zelt.app/assets/img/home/hero/sequence/49.webp
    https://zelt.app/assets/img/home/hero/sequence/50.webp
    https://zelt.app/assets/img/home/hero/sequence/51.webp
    https://zelt.app/assets/img/home/hero/sequence/52.webp
    https://zelt.app/assets/img/home/hero/sequence/53.webp
    https://zelt.app/assets/img/home/hero/sequence/54.webp
    https://zelt.app/assets/img/home/hero/sequence/55.webp
    https://zelt.app/assets/img/home/hero/sequence/56.webp
    https://zelt.app/assets/img/home/hero/sequence/57.webp
    https://zelt.app/assets/img/home/hero/sequence/58.webp
    https://zelt.app/assets/img/home/hero/sequence/59.webp
    https://zelt.app/assets/img/home/hero/sequence/60.webp
    https://zelt.app/assets/img/home/hero/sequence/61.webp
    https://zelt.app/assets/img/home/hero/sequence/62.webp
    https://zelt.app/assets/img/home/hero/sequence/63.webp
    https://zelt.app/assets/img/home/hero/sequence/64.webp
    https://zelt.app/assets/img/home/hero/sequence/65.webp
    https://zelt.app/assets/img/home/hero/sequence/66.webp
    https://zelt.app/assets/img/home/hero/sequence/67.webp
    https://zelt.app/assets/img/home/hero/sequence/68.webp
    https://zelt.app/assets/img/home/hero/sequence/69.webp
    https://zelt.app/assets/img/home/hero/sequence/70.webp
    https://zelt.app/assets/img/home/hero/sequence/71.webp
    https://zelt.app/assets/img/home/hero/sequence/72.webp
    https://zelt.app/assets/img/home/hero/sequence/73.webp
    https://zelt.app/assets/img/home/hero/sequence/74.webp
    https://zelt.app/assets/img/home/hero/sequence/75.webp
    https://zelt.app/assets/img/home/hero/sequence/76.webp
    https://zelt.app/assets/img/home/hero/sequence/77.webp
    https://zelt.app/assets/img/home/hero/sequence/78.webp
    https://zelt.app/assets/img/home/hero/sequence/79.webp
    https://zelt.app/assets/img/home/hero/sequence/80.webp
    https://zelt.app/assets/img/home/hero/sequence/81.webp
    https://zelt.app/assets/img/home/hero/sequence/82.webp
    https://zelt.app/assets/img/home/hero/sequence/83.webp
    https://zelt.app/assets/img/home/hero/sequence/84.webp
    https://zelt.app/assets/img/home/hero/sequence/85.webp
    https://zelt.app/assets/img/home/hero/sequence/86.webp
    https://zelt.app/assets/img/home/hero/sequence/87.webp
    https://zelt.app/assets/img/home/hero/sequence/88.webp
    https://zelt.app/assets/img/home/hero/sequence/89.webp
    https://zelt.app/assets/img/home/hero/sequence/90.webp
    https://zelt.app/assets/img/home/hero/sequence/91.webp
    https://zelt.app/assets/img/home/hero/sequence/92.webp
    https://zelt.app/assets/img/home/hero/sequence/93.webp
    https://zelt.app/assets/img/home/hero/sequence/94.webp
    https://zelt.app/assets/img/home/hero/sequence/95.webp
    https://zelt.app/assets/img/home/hero/sequence/96.webp
    https://zelt.app/assets/img/home/hero/sequence/97.webp
    https://zelt.app/assets/img/home/hero/sequence/98.webp
    https://zelt.app/assets/img/home/hero/sequence/99.webp
    https://zelt.app/assets/img/home/hero/sequence/100.webp
    https://zelt.app/assets/img/home/hero/sequence/101.webp
    https://zelt.app/assets/img/home/hero/sequence/102.webp
    https://zelt.app/assets/img/home/hero/sequence/103.webp
    https://zelt.app/assets/img/home/hero/sequence/104.webp
    https://zelt.app/assets/img/home/hero/sequence/105.webp
    https://zelt.app/assets/img/home/hero/sequence/106.webp
    https://zelt.app/assets/img/home/hero/sequence/107.webp
    https://zelt.app/assets/img/home/hero/sequence/108.webp
    https://zelt.app/assets/img/home/hero/sequence/109.webp
    https://zelt.app/assets/img/home/hero/sequence/110.webp
    https://zelt.app/assets/img/home/hero/sequence/111.webp
    https://zelt.app/assets/img/home/hero/sequence/112.webp
    https://zelt.app/assets/img/home/hero/sequence/113.webp
    https://zelt.app/assets/img/home/hero/sequence/114.webp
    https://zelt.app/assets/img/home/hero/sequence/115.webp
    https://zelt.app/assets/img/home/hero/sequence/116.webp
    https://zelt.app/assets/img/home/hero/sequence/117.webp
    https://zelt.app/assets/img/home/hero/sequence/118.webp
    `;
    return data.split("\n")[index];
  }

  const frameCount = 118;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `.page1>canvas`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: ".page1>canvas",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas();  

//animation reverse - 
var last_scroll = 0;
var scroll_brand_img = document.querySelectorAll(".scroll_brand_in img");
if(scroll_brand_img)
{
  window.addEventListener("scroll", ()=>
  {
    var current_scroll = window.scrollY;
    if(current_scroll > last_scroll)
    {
      scroll_brand_img.forEach(function(elem)
      {
        elem.classList.remove("reverse");
      })
    }
    else 
    {
      scroll_brand_img.forEach(function(elem)
      {
        elem.classList.add("reverse");
      })
    }
    last_scroll = current_scroll;
  })
}

//testimonial mouse move
var testimonial_in = document.querySelector(".testimonial_in");
var testimonial_mouse = document.querySelector(".testimonial_mouse");

testimonial_in.addEventListener("mousemove",(event)=>{

  testimonial_mouse.style.opacity = 1;

  const rect = testimonial_in.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;

  testimonial_mouse.style.top = offsetY + "px";
  testimonial_mouse.style.left = offsetX + "px";
})  

testimonial_in.addEventListener("mouseout",(event)=>{

  testimonial_mouse.style.opacity = 0;
}) 

//page animation
var tl = gsap.timeline({
  duration:0.2,
  scrollTrigger:{
    trigger:".page4",
    scroller:"#main",
    start:"top 80%",
    end:"bottom bottom",
    scrub:0.2,
    /* markers:true, */
  }
},"a1")

tl.from(".page4_content > h1",{
  y:"40px",
  opacity:0,
},"a1")

tl.from(".page4_content > p",{
  y:"40px",
  opacity:0,
},"a1")

tl.from(".page4_promo > img:nth-child(1)",{
  x:"-140px",
  opacity:0,
},"a1")

tl.from(".page4_promo > img:nth-child(2)",{
  x:"140px",
  opacity:0,
},"a1")


gsap.from(".scroll_brand > h4",{
  opacity:0,
  y: "50px",
  duration: 1,
  scrollTrigger: {
    scrub:1,
    scroller:"#main",
    trigger:".scroll_brand",
    start:"top center",
    end:"bottom center",
  }
})

var tl2 = gsap.timeline({
  duration: 0.3,
  scrollTrigger:{
    trigger:".product_overview",
    scroller:"#main",
    start:"top 80%",
    end:"bottom bottom",
    scrub:0.3,
   /*  markers:true, */
  }
},"a2")

tl2.from(".product_overview > h1",{
  opacity:0,
  y:30,
},"a2")

tl2.from(".product_overview_in_mid > img",{
  opacity:0,
  scale:0,
},"a2")

var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:".why_zelt",
    scroller:"#main",
    start:"top bottom",
    end:"bottom bottom",
    scrub: true,
  }
},"a4")

tl3.from(".why_zelt > h1",{
  opacity:0,
  y: 40,
},"a4")

tl3.from(".why_zelt_feature_left",{
  opacity:0,
  x: -240,
},"a4")

tl3.from(".why_zelt_feature_right",{
  opacity:0,
  x: 240,
},"a4")

gsap.from(".data_driven_item",{
  y: 40,
  opacity:0,
  duration:0.2,
  stagger: 0.2,
  scrollTrigger:{
    trigger:".data_driven",
    scroller:"#main",
    start:"top bottom",
    end:"bottom 80%",
    scrub:0.1,
  }
})

var tl5 = gsap.timeline({
  duration: 0.2,
  scrollTrigger:{
    trigger:".footer_in",
    scroller:"#main",
    start: "top 80%",
    end:"bottom 80%",
    scrub:0.01
  }
},"a5")

tl5.from(".footer_in > h1",{
  y: 40,
  opacity: 0,
},"a5")

tl5.from(".footer_in > a",{
  y: 20,
  opacity: 0,
},"a5")

tl5.from(".footer_item",{
  y: 20,
  opacity: 0,
  stagger: 0.01,
},"a5")
