import { getData } from './api.js'
import { createRow, addRow } from './create.js'

getData()
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (i < 5) {
        addRow(createRow(data[i], 'blue'))
        continue
      }

      if (data[i].symbol === 'usdt') {
        addRow(createRow(data[i], 'green'))
        continue
      }

      if (i >= 5) {
        addRow(createRow(data[i]))
        continue
      }
    }
  })
  .catch(() => alert('Не удалось загрузить данные. Попробуйте обновить страницу'));
