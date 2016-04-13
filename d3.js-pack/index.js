var w = d3.select('body').style('width').replace('px', '');
var h = d3.select('body').style('height').replace('px', '');

var svg = d3.select('svg');

var data = {
    name: "root",
    children:[
        {
            name:"Hello", size:15, count:300, size2: 40, count2:100
        },
        {    
            name:"a2z",
            children:
            [
                {
                    name:"a", size:15, count:5, size2: 40, count2:50
                },
                {
                    name:"b", size:5, count:40, size2: 40, count2:500
                },
                {
                    name:"c", size:5, count:120, size2: 40, count2:15
                }
            ]
        },
        {
            name:"world", size:20,  count:40, size2: 40, count2:5
        },
        {
            name:"hoge",
            children:[
                {
                    name:"hoge1", size:10, count:50, size2: 400, count2:15
                }
                ,
                {
                    name:"hoge2", size:10, count:25, size2: 400, count2:15
                }
                
            ]
        }
    ]
};

var retSize = function(d){ return d.size };
var retCount = function(d){ return d.count };
var retSize2 = function(d){ return d.size2 };
var retCount2 = function(d){ return d.count2 };

var circleStyle = {
    cx: F('x'),
    cy: F('y'),
    r: F('r')   
};

var textStyle = {
    x: F('x'),
    y: F('y')
};


var pack = d3.layout.pack().size([637,637]);

var circleGroup = svg.selectAll("g")
        .data(pack.value(retSize).nodes(data))
        .enter()
        .append("g");

var moeverfillStyle = {
    fill: "red" 
};
var moutfillStyle = {
    "fill":function(d){return d.children ? "#7f7f7f ":" #6baed6 ";}  
}

var circle = circleGroup.append('circle')
        .attr({
            class:F('name'),
            "fill-opacity":0.5,
            "stroke-width":2,            
            fill: function(d){return d.children ? "#7f7f7f ":" #6baed6 ";},
            stroke:function(d){return d.children ? "red":"yellow";},
        })
        .attr(circleStyle)
        .on("mouseover", function(){
            d3.select("." + d3.select(this).attr('class')).attr(moeverfillStyle);
        })
        .on("mouseout", function(){
            d3.select("." + d3.select(this).attr('class')).attr(moutfillStyle);
        });

var text = circleGroup.append('text')
    .attr({
        fill: "white",
        "text-anchor": "middle",
        "alignment-baseline": "middle"
    })
    .attr(textStyle)
.text(function(d){ return d.children ? "" : d.name ;})


/*var style1 = function() {
    circleGroup.data(pack.value(retCount).nodes(data));
    circle.transition().attr(circleStyle).duration(1000);
    text.transition().attr(textStyle).duration(1000);    
}
var style2 = function() {
    circleGroup.data(pack.value(retSize).nodes(data));
    circle.transition().attr(circleStyle).duration(1000);
    text.transition().attr(textStyle).duration(1000);    
}
var style3 = function() {
    circleGroup.data(pack.value(retCount2).nodes(data));
    circle.transition().attr(circleStyle).duration(1000);
    text.transition().attr(textStyle).duration(1000);    
}
var style4 = function() {
    circleGroup.data(pack.value(retSize2).nodes(data));
    circle.transition().attr(circleStyle).duration(1000);
    text.transition().attr(textStyle).duration(1000);    
}

setInterval(toggle(style1, style2, style3, style4) , 2000);*/
    

    

