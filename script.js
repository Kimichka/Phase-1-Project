let cells = document.getElementsByTagName("td");
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("mouseover", function() {
    this.style.backgroundColor = "#990257";});
  cells[i].addEventListener("mouseout", function() {
    this.style.backgroundColor = "";});}

fetch("http://localhost:3000/Pizza")
.then(response => response.json())
.then(data => {
  const tableRows = document.querySelectorAll("tbody tr");
  const detailsContainer = document.getElementById("pizza-details");

  tableRows.forEach(row => {
    row.addEventListener("click", () => {
      const pizzaId = parseInt(row.cells[0].getAttribute("data-pizza-id"));
      const pizza = data.find(pizza => pizza.id === pizzaId);
      if (pizza) {
        const pizzaDetails = document.createElement("div");
        pizzaDetails.innerHTML = `
          <h2>${pizza.name}</h2>
          <p><strong>Toppings:</strong> ${pizza.toppings.join(", ")}</p>
          <p><strong>Recipe:</strong> ${pizza.recipe}</p>`;
          detailsContainer.innerHTML = "";
          detailsContainer.appendChild(pizzaDetails);} 
          else {detailsContainer.innerHTML = "";}});});})