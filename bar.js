

var width=1000
var height=500


var heightBar=40



			 
var data = [
  {name: "Sverige",    value:  4},
  {name: "Danmark",    value:  8},
  {name: "Polen",     value: 15},
  {name: "Jarrah",   value: 16},
  {name: "Shephard", value: 23},
  {name: "Kwon",     value: 42},
  {name: "Locke",    value:  4},
  {name: "tai",    value:  8},
  ];


var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 40};

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
       y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  x.domain(data.map(function(d) { return d.name; }));
    y.domain([0, d3.max(data, function(d) { return d.value; })])
     

    
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10))
        .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d,i) { return x(d.name); })
      .attr("y", function(d) { return y(d.value); })
      .attr('fill','blue')
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.value); })
        ; 
                      
                      

