const rangeValue = () => {
  const range = document.querySelector('input[type=range]'),
        rangePercent = document.querySelector('.range__percent');
  range.oninput = function() {
    rangePercent.innerHTML = range.value + '%';
  };
};

rangeValue();
