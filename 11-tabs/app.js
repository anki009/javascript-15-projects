const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
  }
  //hide aticles other than than target
  articles.forEach(function (article) {
    article.classList.remove("active");
  });
  const ele = document.getElementById(id);
  ele.classList.add("active");
});
