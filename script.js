console.log("script.js is running")

let cells = document.getElementsByTagName("td");
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("mouseover", function() {
    this.style.backgroundColor = "red";
  });

  cells[i].addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
  });
}

//fetch("http://localhost:3000/pizza")
//.then(response => response.json())
//.then(data => console.log(data))


//let cells = document.querySelectorAll("#myTable tbody tr td");
//cells.forEach(function(cell) {
//    cell.addEventListener("click", function() {
//        console.log("Cell clicked: " + cell.innerHTML);


fetch("http://localhost:3000/Pizza")
.then(response => response.json())
.then(data => {
    //console.log(data)
    //const pizzaData = data;
    //console.log(pizzaData)
    const tableRows = document.querySelectorAll("tbody tr");
    const detailsContainer = document.getElementById("pizza-details");

    tableRows.forEach(row => {
      row.addEventListener("click", () => {
        const pizzaId = parseInt(row.dataset.pizzaId);
        
        const pizza = data.find(pizza => pizza.id === pizzaId);
    

        if (pizza) {
          detailsContainer.innerHTML = `
            <h2>${pizza.name}</h2>
            <p><strong>Toppings:</strong> ${pizza.toppings.join(", ")}</p>
            <p><strong>Recipe:</strong> ${pizza.recipes}</p>
          `;
        }
      });
    });
  })
