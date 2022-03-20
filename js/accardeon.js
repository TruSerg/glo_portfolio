const accardeon = document.querySelector(".feature-list");
const accordeonButons = document.querySelectorAll(".feature__link");

accordeonButons.forEach((btn) => {
  btn.addEventListener("click", () => {
    accordeonButons.forEach((button) => {
      button.classList.remove("feature__link_active");
      button.nextElementSibling.classList.add("hidden");
    });

    btn.classList.toggle("feature__link_active");
    btn.nextElementSibling.classList.toggle("hidden");
  });
});
