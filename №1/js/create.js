const tableBody = document.querySelector('.table__body')

const createRow = (({id, symbol, name}, className) => {
  const row = document.createElement('tr')
  row.classList.add('table__row')
  row.innerHTML =
  `<td class="table__cell">${id}</td>
  <td class="table__cell">${symbol}</td>
  <td class="table__cell">${name}</td>`
  if (className !== undefined) row.classList.add(`table__row--${className}`)
  return row
})

const addRow = (row) => {
  tableBody.appendChild(row);
}

export { createRow, addRow }
