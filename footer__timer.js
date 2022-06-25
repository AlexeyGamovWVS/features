const dateBox = document.querySelector('.date');

function credit(box) {
  const date = new Date();
  box.textContent = date.getFullYear();
}

credit(dateBox);
