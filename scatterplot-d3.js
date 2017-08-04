var numbers = [ 5, 4, 10, 1 ],
    data = [
        { date: new Date('2014-01-01'), amount: 10 },
        { date: new Date('2014-02-01'), amount: 20 },
        { date: new Date('2014-03-01'), amount: 40 },
        { date: new Date('2014-04-01'), amount: 80 }
    ];

var width = 350,
    height = 120,
    margin = { top: 10, right: 50, bottom: 30, left: 50 };

var x = d3.scaleTime()
        .range([0, width])
        .domain(d3.extent(data, function(d) { return d.date; }));
var xAxis = d3.axisBottom(x)
        .ticks(4);

var y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, function(d) { return d.amount; })]);

var yAxis = d3.axisLeft(y)
        .tickFormat(d3.format('$,d'))
        .ticks(5);

var svg = d3.select('body')
        .append('svg')        // create an <svg> element
         .attr('width', width + margin.left + margin.right)
         .attr('height', height + margin.top + margin.bottom)
        .append('g')
         .attr('transform', "translate("+margin.left+","+margin.top+")");

svg.append('g')            // create a <g> element
    .attr('class', 'x axis') // specify classes
    .attr('transform', "translate("+0+","+height+")")
    .call(xAxis);            // let the axis do its thing

svg.append('g')
    .attr('class', 'y axis')
    .call(yAxis);

var circles = svg.selectAll('circle')
        .data(data);

circles.enter()
    .append("circle")
     .attr("r", 5)
     .attr("cx", function(d, i) { return x(d.date); })
     .attr("cy", function(d, i) { return y(d.amount); });


/*
var line = d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.amount); })

svg.append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line);
*/
//<circle r="5" cx="0" cy="105" />
