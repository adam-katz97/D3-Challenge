// @TODO: YOUR CODE HERE!
var svgWidth = 500;
var svgHeight = 550;
var chartMargin = {
    top: 30,
    right: 30,
    bottom: 100,
    left: 50
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
        data.abbr = String(data.abbr)
        
    })
    console.log(data.income)
    
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
    var circlesGroup = chartGroup.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
      return xLinearScale(d.income);
    })
    .attr("cy", function(d) { 
      return yLinearScale(d.obesity);
    })
    .attr("r", "15")
    .attr("fill", "blue")
    .attr("opacity", ".5")
    // .append("text")
    .text(function(d){
      return d.abbr
    })
    // .append("text")
    // .attr("dx", function(d) {
    //   return xLinearScale(d.income);
    // })
    // .attr("dy", function(d) { 
    //   return yLinearScale(d.obesity);
    // })
    // .text(function (data){
    //   return data.abbr
    // })

    
    


    chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - chartMargin.left - 3)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .attr("class", "axisText")
    .text("Obesity");

    chartGroup.append("text")
    .attr("transform", `translate(${width / 2}, ${height + chartMargin.top + 30})`)
    .attr("class", "axisText")
    .text("Income");










    
}).catch(function(error) {
    console.log(error);
  });
  

