// from data.js
var tableData = data;

function generateTable(table, data) {
  var tableHtml = d3.select("tbody")
  tableHtml.html("")
  for (let element of data) {
    // add a row 
    let row = table.insertRow();
    for (key in element) {
      // creates a new cell
      let cell = row.insertCell();
      // creates a new text node
      let text = document.createTextNode(element[key]);
      // appends the text node to the cell
      cell.appendChild(text);
    }
  }
};
// grab table and pass that to our function
let table = document.querySelector("tbody");
generateTable(table, tableData);

// --- another way -----
// tableData.forEach((weatherReport) => {
//   var row = d3.select("tbody").append("tr");
//   Object.entries(weatherReport).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });


function filter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  input = d3.select("#datetime");
  inputValue = input.property("value");
  filterByDate = tableData.filter(date => date.datetime === inputValue);
  console.log("filter", filterByDate);
  generateTable(table, filterByDate);
};
// --------------------------------------------------------
button = d3.select("#filter-btn");

button.on("click", filter);


reset = d3.select("#reset-btn");
reset.on("click", function () {
  generateTable(table, tableData);
});