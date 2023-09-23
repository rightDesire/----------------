const api = () =>
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())
  .catch(error => console.log("Ошибка: ", error))

const getData = () => api();

export { getData }
