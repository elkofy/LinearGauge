/*class Jauge{
    constructor(id, values){
        this.id = id;
        this.options = options;
    }
 static getid() {
   console.log('passed');
}
}
let test = new Jauge('test','ouai');
console.log(Jauge.getid());*/



function getNode(n, v) {
  n = document.createElementNS("http://www.w3.org/2000/svg", n);
  for (var p in v)
    n.setAttributeNS(
      null,
      p.replace(/[A-Z]/g, function (m, p, o, s) {
        return "-" + m.toLowerCase();
      }),
      v[p]
    );
  return n;
}

function draw(id) {
  var canva = document.getElementById(id);
  console.log(canva);
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.appendChild(getNode("rect", { width: 200, height: 20, fill: "#ff0000" }));
}

const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
cir1.setAttribute("cx", 0);
cir1.setAttribute("cy", 0);
cir1.setAttribute("r", 50);
// Add to a parent node; document.documentElement should be the root svg element.
// Acquiring a parent element with document.getElementById() would be safest.
draw("gauge");

function add_svg2() {
  var svgns = "http://www.w3.org/2000/svg";

  let valeref = {
    perf: document.getElementById("perf").value,
    reg: document.getElementById("reg").value,
    nat: document.getElementById("nat").value,
    inter: document.getElementById("inter").value,
  };
  var defs = document.createElementNS(svgns, "defs");

  var newDiv = document.createElement("div");
  const svg1 = document.createElementNS(svgns, "svg");
  var shapeR = document.createElementNS(svgns, "rect");
  var shapeRgrad = document.createElementNS(svgns, "linearGradient");

  var shapeN = document.createElementNS(svgns, "rect");
  var shapeNgrad = document.createElementNS(svgns, "linearGradient");

  var shapeI = document.createElementNS(svgns, "linearGradient");

  var stops = [
    {
      color: "#F9F871",
      offset: "0%",
    },
    {
      color: "#FF814C",
      offset: "30%",
    },
    {
      color: "#FFFFFF",
      offset: "60%",
    },
  ];
  for (var i = 0, length = stops.length; i < length; i++) {
    // Create a <stop> element and set its offset based on the position of the for loop.
    var stop = document.createElementNS(svgns, "stop");
    stop.setAttribute("offset", stops[i].offset);
    stop.setAttribute("stop-color", stops[i].color);

    // Add the stop to the <lineargradient> element.
    shapeRgrad.appendChild(stop);
  }

  shapeRgrad.id = "Gradient";
  shapeRgrad.setAttribute("x1", "0");
  shapeRgrad.setAttribute("x2", "1");
  shapeRgrad.setAttribute("y1", "0");
  shapeRgrad.setAttribute("y2", "0");
  defs.appendChild(shapeRgrad);

  shapeR.setAttribute("fill", "url(#Gradient)");
  let calcR = (200 / 43) * valeref.reg;
  let strR = calcR.toString() + "px";
  console.log(strR);
  shapeR.setAttribute("width", strR);
  shapeR.setAttribute("height", "40px");

  var stops2 = [
    {
      color: "#FF814C",
      offset: "0%",
    },
    {
      color: "#9320FF",
      offset: "30%",
    },
    {
      color: "#FFFFFF",
      offset: "60%",
    },
  ];
  for (var i = 0, length = stops2.length; i < length; i++) {
    // Create a <stop> element and set its offset based on the position of the for loop.
    var stop2 = document.createElementNS(svgns, "stop");
    stop2.setAttribute("offset", stops2[i].offset);
    stop2.setAttribute("stop-color", stops2[i].color);
    // Add the stop to the <lineargradient> element.
    shapeNgrad.appendChild(stop2);
  }

  shapeNgrad.id = "Gradient2";
  shapeNgrad.setAttribute("x1", "0");
  shapeNgrad.setAttribute("x2", "1");
  shapeNgrad.setAttribute("y1", "0");
  shapeNgrad.setAttribute("y2", "0");
  defs.appendChild(shapeNgrad);

  shapeN.setAttribute("fill", "url(#Gradient2)");
  let calcN = (200 / 43) * valeref.nat;
  let strN = calcN.toString() + "px";
  console.log(strN);
  shapeN.setAttribute("width", strN);
  shapeN.setAttribute("height", "40px");
  shapeN.setAttributeNS(null, "x", 45);

  //shapeN.x1.baseVal.value =;
  //shapeN.x2.baseVal.value =(200/43)*(valeref.nat);

  svg1.appendChild(defs);
  svg1.appendChild(shapeR);
  svg1.appendChild(shapeN);
  newDiv.setAttribute("id", "jauge2");

  newDiv.appendChild(svg1);
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

//------------------------------------------------------------------------

function addsvg() {
  let valeref = {
    perf: document.getElementById("perf").value,
    reg: document.getElementById("reg").value,
    nat: document.getElementById("nat").value,
    inter: document.getElementById("inter").value,
    etreg: document.getElementById("etreg").value,
    etinter: document.getElementById("etinter").value,
  };

  add_svg2();
  console.log(
    "valeujauge",
    Number.parseFloat(valeref.inter) +
      Math.round(2 * valeref.etinter) -
      (Number.parseFloat(valeref.reg) - Math.round(2 * valeref.etreg))
  );

  console.log("round", Math.round(2 * valeref.etinter));

  let valeurjauge =
    Number.parseFloat(valeref.inter) +
    Math.round(2 * valeref.etinter) -
    (Number.parseFloat(valeref.reg) - Math.round(2 * valeref.etreg));
  var newDiv = document.createElement("div");
  const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var shape = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  var fondjauge = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );
  var shapeR = document.createElementNS("http://www.w3.org/2000/svg", "line");
  var shapeN = document.createElementNS("http://www.w3.org/2000/svg", "line");
  var shapeI = document.createElementNS("http://www.w3.org/2000/svg", "line");
  var textR = document.createElementNS("http://www.w3.org/2000/svg", "text");

  textR.setAttributeNS(null, "font-size", "10");
  textR.setAttributeNS(null, "y", 93);
  textR.innerHTML = "regional";
  textR.setAttributeNS(null, "x", 23);
  //console.log(textNode)
  //textR.setAttribute('dx','22');
  //textR.appendChild(textNode);
  console.log(valeurjauge);
  shapeR.x1.baseVal.value = (220 / valeurjauge) * (valeref.reg - valeurjauge);
  shapeR.x2.baseVal.value = (220 / valeurjauge) * (valeref.reg - valeurjauge);
  console.log(valeurjauge * valeref.reg);

  shapeR.y1.baseVal.value = 75;
  shapeR.y2.baseVal.value = 23;
  shapeR.setAttribute("stroke", "purple");
  shapeR.setAttribute("stroke-width", "2");

  shapeN.x1.baseVal.value = (220 / valeurjauge) * (valeref.nat - valeurjauge);
  shapeN.x2.baseVal.value = (220 / valeurjauge) * (valeref.nat - valeurjauge);

  shapeN.y1.baseVal.value = 75;
  shapeN.y2.baseVal.value = 23;
  shapeN.setAttribute("stroke", "green");
  shapeN.setAttribute("stroke-width", "2");

  shapeI.x1.baseVal.value = (200 / valeurjauge) * (valeref.inter - valeurjauge);
  shapeI.x2.baseVal.value = (200 / valeurjauge) * (valeref.inter - valeurjauge);

  shapeI.y1.baseVal.value = 75;
  shapeI.y2.baseVal.value = 23;
  shapeI.setAttribute("stroke", "yellow");
  shapeI.setAttribute("stroke-width", "2");

  shape.x.baseVal.value = 25;
  shape.y.baseVal.value = 25;
  shape.ry.baseVal.value = 2;

  shape.width.baseVal.value = 2 * 45;
  shape.height.baseVal.value = 2 * 25;

  shape.x.baseVal.value = 0;
  shape.y.baseVal.value = 25;
  shape.ry.baseVal.value = 2;

  shape.width.baseVal.value =
    (200 / valeurjauge) * (valeref.perf - valeurjauge);
  console.log("valeurbleu", (220 / valeurjauge) * (valeref.perf - valeurjauge));
  shape.height.baseVal.value = 2 * 25;

  fondjauge.x.baseVal.value = 0;
  fondjauge.ry.baseVal.value = 2;

  fondjauge.y.baseVal.value = 25;
  fondjauge.width.baseVal.value = 200;
  fondjauge.height.baseVal.value = 2 * 25;

  //shape.r.baseVal.value = 20;
  shape.setAttribute("fill", "#A7C7E7");
  fondjauge.setAttribute("fill", "grey");

  svg1.appendChild(fondjauge);

  svg1.appendChild(shape);
  svg1.appendChild(shapeR);
  svg1.appendChild(shapeI);
  svg1.appendChild(shapeN);

  svg1.appendChild(textR);

  newDiv.setAttribute("id", "jauge1");

  newDiv.appendChild(svg1);
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

function grad_one() {
  
var refs = {
  Perf: document.getElementById("perf").value,
  Reg: document.getElementById("reg").value,
  Nat: document.getElementById("nat").value,
  Inter: document.getElementById("inter").value,
};
  var svgns = "http://www.w3.org/2000/svg";

  var newDiv = document.createElement("div");
  var defs = document.createElementNS(svgns, "defs");
  const svg1 = document.createElementNS(svgns, "svg");
  var shapeR = document.createElementNS(svgns, "rect");
  var shapeRgrad = document.createElementNS(svgns, "linearGradient");
  var defs = document.createElementNS(svgns, "defs");
  var shapeC = document.createElementNS(svgns, "line");
  var polygon = document.createElementNS(svgns, "polygon");
  
var cursorvalue =Math.round( (140*Number.parseInt(refs.Perf) )/Number.parseInt(refs.Reg));

  var array = arr = [
                      [ cursorvalue   ,70   ], 
                      [ cursorvalue-5 ,80   ],
                      [ cursorvalue+5 ,80   ],
                    ];
  
  for (value of array) {
    var point = svg1.createSVGPoint();
    point.x = value[0];
    point.y = value[1];
    polygon.points.appendItem(point);
  }

  let stops = [
    {
      color: "#ffffff",
      offset: "0%",
    },
    {
      color: "#ffffd9",
      offset: "45%",
    },
        {
      color: "#fffd00",
      offset: "70%",
    },
    {
      color: "#ffe341",
      offset: "150%",
    },
  ];

  shapeC.x1.baseVal.value = 140;
  shapeC.x2.baseVal.value = 140;

  console.log( (140*Number.parseInt(refs.Perf) )/Number.parseInt(refs.Reg))
  console.log('perf',refs.Perf)
  shapeC.y1.baseVal.value = 75;
  shapeC.y2.baseVal.value = 23;
  shapeC.setAttribute("stroke", "red");
  shapeC.setAttribute("stroke-width", "2");
  shapeC.setAttribute("stroke-dasharray", "5");

  for (var i = 0, length = stops.length; i < length; i++) {
    // Create a <stop> element and set its offset based on the position of the for loop.
    let stop = document.createElementNS(svgns, "stop");
    stop.setAttribute("offset", stops[i].offset);
    stop.setAttribute("stop-color", stops[i].color);

    // Add the stop to the <lineargradient> element.
    shapeRgrad.appendChild(stop);
  }

  shapeRgrad.id = "Gradient";
  shapeRgrad.setAttribute("x1", "0");
  shapeRgrad.setAttribute("x2", "1");
  shapeRgrad.setAttribute("y1", "0");
  shapeRgrad.setAttribute("y2", "0");
  defs.appendChild(shapeRgrad);

  shapeR.setAttribute("fill", "url(#Gradient)");
  let calcR = (200 / 43) * refs.Reg;
  let strR = calcR.toString() + "px";
  console.log(strR);
  shapeR.setAttribute("width", strR);
  shapeR.setAttribute("height", "40px");
  shapeR.setAttribute("stroke", "black");

  shapeR.setAttribute("stroke-width", "2");

  shapeR.x.baseVal.value = 0;
  shapeR.ry.baseVal.value = 2;

  shapeR.y.baseVal.value = 25;
  shapeR.width.baseVal.value = 200;
  shapeR.height.baseVal.value = 2 * 25;

  svg1.appendChild(defs);
  svg1.appendChild(shapeR);
  svg1.appendChild(polygon);

  newDiv.appendChild(svg1);
  console.log(stops)

  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  console.log('1')

}

function grad_two() {
  
var refs = {
  Perf: document.getElementById("perf").value,
  Reg: document.getElementById("reg").value,
  Nat: document.getElementById("nat").value,
  Inter: document.getElementById("inter").value,
};
  var svgns = "http://www.w3.org/2000/svg";

  var newDiv = document.createElement("div");
  var defs = document.createElementNS(svgns, "defs");
  const svg1 = document.createElementNS(svgns, "svg");
  var shapeR = document.createElementNS(svgns, "rect");
  var shapeRgrad = document.createElementNS(svgns, "linearGradient");
  var defs = document.createElementNS(svgns, "defs");
  var shapeC = document.createElementNS(svgns, "line");
  var shapeC2 = document.createElementNS(svgns, "line");
var shapeC = document.createElementNS(svgns, "line");
  var shapeC2 = document.createElementNS(svgns, "line");
  var shapeRindic = document.createElementNS(svgns, "line");
  var shapecurs2_ = document.createElementNS(svgns, "line");
  var shapecurs2_2 = document.createElementNS(svgns, "line");

  var newText = document.createElementNS(svgns,"text");
  newText.setAttributeNS(null,"x",50);     
newText.setAttributeNS(null,"y",100); 
newText.setAttributeNS(null,"font-size","12");
newText.setAttributeNS(null,"font-family","Verdana");
newText.setAttributeNS(null,"fill","white");


var textNode = document.createTextNode(refs.Reg.toString() );
newText.appendChild(textNode);

var newText2 = document.createElementNS(svgns,"text");
newText2.setAttributeNS(null,"x",130);     
newText2.setAttributeNS(null,"y",100); 
newText2.setAttributeNS(null,"font-size","12");
newText2.setAttributeNS(null,"font-family","Verdana");
newText2.setAttributeNS(null,"fill","white");


var textNode2 = document.createTextNode(refs.Nat.toString());
newText2.appendChild(textNode2);


  var polygon = document.createElementNS(svgns, "polygon");
  var cursorvalue = Math.round(((Number.parseInt(refs.Perf)-Number.parseInt(refs.Reg))*80)/(Number.parseInt(refs.Nat)-Number.parseInt(refs.Reg))+60)

  var array = arr = [
                      [ cursorvalue   ,35   ], 
                      [ cursorvalue-8 ,19   ],
                      [ cursorvalue+8 ,19   ],
                    ];
  
  for (value of array) {
    var point = svg1.createSVGPoint();
    point.x = value[0];
    point.y = value[1];
    polygon.points.appendItem(point);
  }
  polygon.setAttributeNS(null,"fill","white");
  polygon.setAttributeNS(null,"stroke","black");

  let stops = [
    {
      color: "#fffe85",
      offset: "0%",
    },
    {
      color: "#F9F871",
      offset: "30%",
    },
        {
      color: "#FF814C",
      offset: "70%",
    },
    {
      color: "#ff7ab6",
      offset: "150%",
    },
  ];



 shapeC.x1.baseVal.value = 60;
  shapeC.x2.baseVal.value = 60;

  shapeC2.x1.baseVal.value = 60;
  shapeC2.x2.baseVal.value = 60;

  shapeC.y1.baseVal.value = 69;
  shapeC.y2.baseVal.value = 86;
  shapeC2.y1.baseVal.value = 70;
  shapeC2.y2.baseVal.value = 85;

  shapeC.setAttribute("stroke", "black");
  shapeC.setAttribute("stroke-width", "8");

  shapeC2.setAttribute("stroke", "white");
  shapeC2.setAttribute("stroke-width", "5");

  shapecurs2_.x1.baseVal.value = 140;
  shapecurs2_.x2.baseVal.value = 140;

  shapecurs2_2.x1.baseVal.value = 140;
  shapecurs2_2.x2.baseVal.value = 140;

  shapecurs2_.y1.baseVal.value = 69;
  shapecurs2_.y2.baseVal.value = 86;
  shapecurs2_2.y1.baseVal.value = 70;
  shapecurs2_2.y2.baseVal.value = 85;

  shapecurs2_.setAttribute("stroke", "black");
  shapecurs2_.setAttribute("stroke-width", "8");

  shapecurs2_2.setAttribute("stroke", "white");
  shapecurs2_2.setAttribute("stroke-width", "5");




  for (var i = 0, length = stops.length; i < length; i++) {
    // Create a <stop> element and set its offset based on the position of the for loop.
    let stop = document.createElementNS(svgns, "stop");
    stop.setAttribute("offset", stops[i].offset);
    stop.setAttribute("stop-color", stops[i].color);
    // Add the stop to the <lineargradient> element.
    shapeRgrad.appendChild(stop);
  }

  shapeRgrad.id = "Gradient";
  shapeRgrad.setAttribute("x1", "0");
  shapeRgrad.setAttribute("x2", "1");
  shapeRgrad.setAttribute("y1", "0");
  shapeRgrad.setAttribute("y2", "0");
  defs.appendChild(shapeRgrad);

  shapeR.setAttribute("fill", "url(#Gradient)");
  let calcR = (200 / 43) * refs.Reg;
  let strR = calcR.toString() + "px";
  console.log(strR);
  shapeR.setAttribute("width", strR);
  shapeR.setAttribute("height", "40px");
  shapeR.setAttribute("stroke", "black");

  shapeR.setAttribute("stroke-width", "2");

  shapeR.x.baseVal.value = 0;
  shapeR.ry.baseVal.value = 2;

  shapeR.y.baseVal.value = 25;
  shapeR.width.baseVal.value = 200;
  shapeR.height.baseVal.value = 2 * 25;

  svg1.appendChild(defs);
  svg1.appendChild(shapeR);

  svg1.appendChild(polygon);
  svg1.appendChild(shapeRindic);
  svg1.appendChild(shapeC);
  svg1.appendChild(shapeC2);
  svg1.appendChild(shapecurs2_);
  svg1.appendChild(shapecurs2_2);

  svg1.appendChild(newText2);
  svg1.appendChild(newText);





  newDiv.appendChild(svg1);
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  console.log(stops)

  console.log('2')
}

function grad_three() {
  
var refs = {
  Perf: document.getElementById("perf").value,
  Reg: document.getElementById("reg").value,
  Nat: document.getElementById("nat").value,
  Inter: document.getElementById("inter").value,
};
  var svgns = "http://www.w3.org/2000/svg";

  var newDiv = document.createElement("div");
  var defs = document.createElementNS(svgns, "defs");
  const svg1 = document.createElementNS(svgns, "svg");
  var shapeR = document.createElementNS(svgns, "rect");
  var shapeRgrad = document.createElementNS(svgns, "linearGradient");
  var defs = document.createElementNS(svgns, "defs");
  var shapeC = document.createElementNS(svgns, "line");
  var polygon = document.createElementNS(svgns, "polygon");
  var cursorvalue = Math.round(((Number.parseInt(refs.Perf)-Number.parseInt(refs.Nat))*80)/(Number.parseInt(refs.Inter)-Number.parseInt(refs.Nat))+60)

  var array = arr = [
                      [ cursorvalue   ,70   ], 
                      [ cursorvalue-5 ,80   ],
                      [ cursorvalue+5 ,80   ],
                    ];
  
  for (value of array) {
    var point = svg1.createSVGPoint();
    point.x = value[0];
    point.y = value[1];
    polygon.points.appendItem(point);
  }

  let stops = [
    {
      color: "#fc9c74",
      offset: "0%",
    },
    {
      color: "#FF814C",
      offset: "30%",
    },
        {
      color: "#FF00BC",
      offset: "70%",
    },
    {
      color: "#bc75ff",
      offset: "150%",
    },
  ];
  console.log(stops)

  shapeC.x1.baseVal.value = 140;
  shapeC.x2.baseVal.value = 140;

  console.log( (140*Number.parseInt(refs.Nat) )/Number.parseInt(refs.Reg))
  console.log('perf',refs.Nat)
  shapeC.y1.baseVal.value = 75;
  shapeC.y2.baseVal.value = 23;
  shapeC.setAttribute("stroke", "red");
  shapeC.setAttribute("stroke-width", "2");
  shapeC.setAttribute("stroke-dasharray", "5");

  for (var i = 0, length = stops.length; i < length; i++) {
    // Create a <stop> element and set its offset based on the position of the for loop.
    let stop = document.createElementNS(svgns, "stop");
    stop.setAttribute("offset", stops[i].offset);
    stop.setAttribute("stop-color", stops[i].color);
    // Add the stop to the <lineargradient> element.
    shapeRgrad.appendChild(stop);
  }

  shapeRgrad.id = "Gradient";
  shapeRgrad.setAttribute("x1", "0");
  shapeRgrad.setAttribute("x2", "1");
  shapeRgrad.setAttribute("y1", "0");
  shapeRgrad.setAttribute("y2", "0");
  defs.appendChild(shapeRgrad);

  shapeR.setAttribute("fill", "url(#Gradient)");
  let calcR = (200 / 43) * refs.Reg;
  let strR = calcR.toString() + "px";
  console.log(strR);
  shapeR.setAttribute("width", strR);
  shapeR.setAttribute("height", "40px");
  shapeR.setAttribute("stroke", "black");

  shapeR.setAttribute("stroke-width", "2");

  shapeR.x.baseVal.value = 0;
  shapeR.ry.baseVal.value = 2;

  shapeR.y.baseVal.value = 25;
  shapeR.width.baseVal.value = 200;
  shapeR.height.baseVal.value = 2 * 25;

  svg1.appendChild(defs);
  svg1.appendChild(shapeR);
  svg1.appendChild(polygon);

  newDiv.appendChild(svg1);
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  console.log('3')

}

function grad_four() {

  console.log('4')

  
}



function gradientgauge() {
 
var refs = {
  Perf: document.getElementById("perf").value,
  Reg: document.getElementById("reg").value,
  Nat: document.getElementById("nat").value,
  Inter: document.getElementById("inter").value,
};

   if (refs.Perf<refs.Reg) {
    grad_one();
  } else if(refs.Perf<refs.Nat && refs.Perf>refs.Reg) {
    grad_two();
  }
  else if(refs.Perf<refs.Inter && refs.Perf>refs.Nat){
    grad_three();
  }
  else if(refs.Perf>refs.Inter){
    grad_four();
  }

}
gradientgauge();
