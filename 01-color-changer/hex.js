const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colors = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0 - 3
  let color='#'
  for(let i=0; i<6;i++){
    color += hex[getrandomNum()]
  }
//   const randomNumber = getrandomNum();
  document.body.style.backgroundColor = color;
  colors.textContent = color;
});

function getrandomNum(){
    return Math.floor(Math.random() * hex.length);
}