function highlight(table) {
  // ваш код...
  for (let tr of table.querySelectorAll('tbody > tr')) {
    if (!tr.cells[3].hasAttribute('data-available')) {
      tr.setAttribute('hidden', '');
    }
    
    if (tr.cells[3].getAttribute('data-available') == 'true') {
      tr.classList.add('available');
    } else {
      tr.classList.add('unavailable');
    }

    if (tr.cells[2].textContent == 'm') {
      tr.classList.add('male');
    } else if (tr.cells[2].textContent == 'f') {
      tr.classList.add('female');
    }

    let age = +tr.cells[1].textContent;
    if (!isNaN(age) && age < 18) {
      tr.style.cssText += 'text-decoration: line-through';
    }
  }
}
