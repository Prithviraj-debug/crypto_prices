const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.querySelector('.card-container');
    data.forEach(coin => {
      const card = document.createElement('div');
      card.classList.add('card');
      const cardContent = `
        <img src="${coin.image}" alt="${coin.name}">
        <h2>${coin.name}</h2>
        <p>Price: <span class="price">INR ${coin.current_price.toFixed(2)}</span></p>
      `;
      card.innerHTML = cardContent;
      cardContainer.appendChild(card);
    });
  })
  .catch(error => console.error(error));
