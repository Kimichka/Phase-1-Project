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

