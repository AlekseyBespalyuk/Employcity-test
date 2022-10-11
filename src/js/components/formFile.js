const fileName = () => {
  const file = document.querySelector("input[type=file]"),
    fileName = document.querySelector(".file__text");
  file.addEventListener("change", function () {
    let fileVal = file.value.split("\\").pop();
    fileName.innerHTML = fileVal;
  });
};

fileName();
