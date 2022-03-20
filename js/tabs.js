const tabButtons = document.querySelectorAll(".design-list__item");
const tabDescriptions = document.querySelectorAll(".design__descr");
const tabImages = document.querySelectorAll(".design-images");
const tabMainImages = document.querySelectorAll(".design-block__img");
const tabTitles = document.querySelectorAll(".design__title");

const changeContent = (array, value) => {
  array.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove("hidden");
    } else {
      elem.classList.add("hidden");
    }
  });
};

//отображение и скрытие подчеркивания при нажатии на кнопку
tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", (e) => {
    const dataValue = tabButton.dataset.tabsHandler;

    tabTitles.forEach((title, indexTitle) => {
      //ДОМАШНЕЕ ЗАДАНИЕ ДЕНЬ 1
      if (index === indexTitle) {
        title.classList.remove("hidden");
        document.title = title.innerText; // УСЛОЖНЕННОЕ ЗАДАНИЕ ДЕНЬ 1
      } else {
        title.classList.add("hidden");
      }
    });

    changeContent(tabDescriptions, dataValue);
    changeContent(tabImages, dataValue);
    changeContent(tabMainImages, dataValue);

    tabButtons.forEach((btn) => {
      if (btn === e.target) {
        btn.classList.add("design-list__item_active");
      } else {
        btn.classList.remove("design-list__item_active");
      }
    });
  });
});
