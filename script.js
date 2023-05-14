console.log("script.js is running")


fetch("http://localhost:3000/pizza")
.then(response => response.json())
.then(data => console.log(data))


let cells = document.querySelectorAll("#myTable tbody tr td");
cells.forEach(function(cell) {
    cell.addEventListener("click", function() {
        console.log("Cell clicked: " + cell.innerHTML);
    });
});