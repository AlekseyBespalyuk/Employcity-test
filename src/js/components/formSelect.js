const customSelect = () => {
  const selectBtn = document.querySelector(".select__btn"),
    selectList = document.querySelector(".select__list"),
    selectItem = selectList.querySelectorAll(".select__item"),
    selectInput = document.querySelector(".select__input");

  const openCloseSelect = () => {
    selectList.classList.toggle("select__list_visible");
    selectBtn.classList.toggle("select__btn_active");
  };
  selectBtn.addEventListener("click", function () {
    openCloseSelect();
  });

  selectItem.forEach((e) => {
    e.addEventListener("click", function () {
      selectBtn.innerText = this.innerText;
      selectInput.value = this.dataset.value;
      openCloseSelect();
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target !== selectBtn) {
      selectList.classList.remove("select__list_visible");
      selectBtn.classList.remove("select__btn_active");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab" || e.key === "Escape") {
      selectList.classList.remove("select__list_visible");
      selectBtn.classList.remove("select__btn_active");
    }
  });
};

customSelect();
