function makeDiagonalRed(table) {
  // ваш код...
  
  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    let cell = row.cells[i];
    if (cell) {
      cell.style.backgroundColor = 'red';
    }
  }
}
