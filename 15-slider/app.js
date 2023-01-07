// const imgs = [
//     './img-1.jpeg',
//     './img-2.jpeg',
//     './person-1.jpeg',
// ];
const slides = document.querySelectorAll(".slide");

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
let counter = 0;

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
nextBtn.addEventListener("click", function () {
  counter++;
  imgSlider();
});
prevBtn.addEventListener("click", function () {
  counter--;
  imgSlider();
});
prevBtn.style.display = "none";
function imgSlider() {
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

// nextBtn.addEventListener('click',function(){
//     counter++
//     if(counter>=imgs.length){
//     counter= 0;
//     }
//     renderSlide(counter);

// });
// prevBtn.addEventListener('click',function(){
//     counter--
//     if(counter<0){
//     counter= imgs.length-1;
//     }
//     renderSlide(counter);

// });
// function renderSlide(counter){
//     slide.innerHTML = `<img src=${imgs[counter]} class="slide-img" alt="">`
// };
