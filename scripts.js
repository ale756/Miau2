document.addEventListener("DOMContentLoaded", () => {
    const drinksContainer = document.getElementById('drinks-container');

    // Aquí se cargará la información desde la API en el futuro
    // Por ejemplo, podríamos usar fetch para obtener datos de la API de TheCocktailDB:
    /* */

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(response => response.json())
        .then(data => {
            data.drinks.forEach(drink => {
                const drinkElement = document.createElement('div');
                drinkElement.classList.add('drink');
                
                drinkElement.innerHTML = `
                    <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                    <h2>${drink.strDrink}</h2>
                `;
                
                drinksContainer.appendChild(drinkElement);
            });
        })
        .catch(error => console.error('Error fetching the drinks:', error));
   
});
