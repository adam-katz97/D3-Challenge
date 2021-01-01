// @TODO: YOUR CODE HERE!
d3.csv("assets/data/data.csv").then((data)=> {
    console.log(data.length);
    
    show(data);
}).catch(function(error) {
    console.log(error);
  });
  

function show(data){
    var svg = d3.select("#scatter").append("svg")
    var svgWidth = 960;
    var svgHeight = 660;
    var chartMargin = {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
      };
      var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
      var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;
      
      
      

    

    var inc = [];
    var ob = []; 
    abv=[]
    for (i=0; i<data.length; i++){
        inc.push(data[i].income)
        ob.push(data[i].obesity)
        abv.push(data[i].abbr)
    }
    console.log(inc)
    console.log(ob)
    console.log(abv)

}