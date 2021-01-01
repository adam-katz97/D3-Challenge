// @TODO: YOUR CODE HERE!
var svgWidth = 500;
var svgHeight = 500;
var chartMargin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
    };
var width = svgWidth - chartMargin.left - chartMargin.right;
var height = svgHeight - chartMargin.top - chartMargin.bottom;
var svg = d3.select("#scatter").append("svg").attr("height", svgHeight).attr("width", svgWidth);
var chartGroup = svg.append("g").attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

d3.csv("assets/data/data.csv").then((data)=> {
    console.log(data);
    data.forEach(function (data){
        data.income = +data.income
        data.obesity = +data.obesity
    })
    
    var xLinearScale = d3.scaleLinear()
    .domain([0, d3.max(
      data.map(function (d) { 
        return d.income;
      })
    )]
    )
    .range([0, width]);

    var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(data.map(
      function (d) {
        return d.obesity;
      }
    ))]
    )
    .range([height, 0]);
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);
    chartGroup.append("g").attr("transform", `translate(0, ${height})`).call(bottomAxis);

    chartGroup.append("g").call(leftAxis);







    
}).catch(function(error) {
    console.log(error);
  });
  

