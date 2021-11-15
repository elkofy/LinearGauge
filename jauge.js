//------------------------------------------------------------------------
function grad_one() {
  var refs = {
    Perf: document.getElementById("perf").value,
    Reg: document.getElementById("reg").value,
    Nat: document.getElementById("nat").value,
    Inter: document.getElementById("inter").value,
  };
  var svgns = "http://www.w3.org/2000/svg";
  var newDiv = document.createElement("div");
  let defs = document.createElementNS(svgns, "defs");
  var svg1 = document.createElementNS(svgns, "svg");
  var shapeR = document.createElementNS(svgns, "rect");
  var shapeRgrad = document.createElementNS(svgns, "linearGradient");
  var shapeMK = document.createElementNS(svgns, "line");
  var polygon = document.createElementNS(svgns, "polygon");
  var cursorvalue = Math.round(
    (140 * Number.parseInt(refs.Perf)) / Number.parseInt(refs.Reg)
  );

  var newText2 = document.createElementNS(svgns, "text");
  newText2.setAttributeNS(null, "x", 130);
  newText2.setAttributeNS(null, "y", 87);
  newText2.setAttributeNS(null, "font-size", "11");
  newText2.setAttributeNS(null, "font-family", "Montserrat");
  newText2.setAttributeNS(null, "font-weight", "800");
  newText2.setAttributeNS(null, "fill", "white");
  // newText2.classList.add("text");
  // newText2.classList.add("shadow");

  var textNode2 = document.createTextNode(refs.Reg.toString());
  newText2.appendChild(textNode2);

  var txtindic = document.createElementNS(svgns, "text");
  txtindic.setAttributeNS(null, "x", 120);
  txtindic.setAttributeNS(null, "y", 50);
  txtindic.setAttributeNS(null, "font-size", "11");
  txtindic.setAttributeNS(null, "font-family", "Montserrat");
  txtindic.setAttributeNS(null, "font-weight", "800");
  txtindic.setAttributeNS(null, "fill", "white");
  txtindic.classList.add("shadow");
  // txtindic.classList.add("text");

  var txtindicNode = document.createTextNode("Régional");
  txtindic.appendChild(txtindicNode);

  var array = (arr = [
    [cursorvalue, 35],
    [cursorvalue - 8, 19],
    [cursorvalue + 8, 19],
  ]);

  for (value of array) {
    var point = svg1.createSVGPoint();
    point.x = value[0];
    point.y = value[1];
    polygon.points.appendItem(point);
  }
  polygon.setAttributeNS(null, "fill", "white");
  polygon.setAttributeNS(null, "stroke", "black");

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

  shapeMK.x1.baseVal.value = 140;
  shapeMK.x2.baseVal.value = 140;
  shapeMK.y1.baseVal.value = 68;
  shapeMK.y2.baseVal.value = 75;
  shapeMK.setAttributeNS(null, "stroke", "black");
  shapeMK.setAttributeNS(null, "stroke-width", "3");

  // shapeMK.classList.add("black-stroke");

  for (var i = 0, length = stops.length; i < length; i++) {
    // Create a <stop> element and set its offset based on the position of the for loop.
    let stop = document.createElementNS(svgns, "stop");
    stop.setAttribute("offset", stops[i].offset);
    stop.setAttribute("stop-color", stops[i].color);

    // Add the stop to the <lineargradient> element.
    shapeRgrad.appendChild(stop);
  }

  shapeRgrad.id = "Gradient2";
  shapeRgrad.setAttribute("x1", "0");
  shapeRgrad.setAttribute("x2", "1");
  shapeRgrad.setAttribute("y1", "0");
  shapeRgrad.setAttribute("y2", "0");
  defs.appendChild(shapeRgrad);

  shapeR.setAttribute("fill", "url(#Gradient2)");
  let calcR = (200 / 43) * refs.Reg;
  let strR = calcR.toString() + "px";
  shapeR.setAttribute("width", strR);
  shapeR.setAttribute("height", "40px");

  shapeR.x.baseVal.value = 5;
  shapeR.ry.baseVal.value = 2;

  shapeR.y.baseVal.value = 25;
  shapeR.width.baseVal.value = 200;
  shapeR.height.baseVal.value = 2 * 25;

  svg1.appendChild(defs);
  svg1.appendChild(shapeR);
  svg1.appendChild(polygon);
  svg1.appendChild(shapeMK);
  svg1.appendChild(newText2);
  svg1.appendChild(txtindic);

  svg1.classList.add("svg-size");

  newDiv.appendChild(svg1);
  var currentDiv = document.getElementById("jauge");
  currentDiv.innerHTML = "";

  currentDiv.append(newDiv);
  console.log("1");
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
  let defs = document.createElementNS(svgns, "defs");
  var svg1 = document.createElementNS(svgns, "svg");
  var shapeR = document.createElementNS(svgns, "rect");
  var shapeRgrad = document.createElementNS(svgns, "linearGradient");
  var shapeC = document.createElementNS(svgns, "line");
  var shapeC2 = document.createElementNS(svgns, "line");
  var shapeC = document.createElementNS(svgns, "line");
  var shapeRindic = document.createElementNS(svgns, "line");
  var newText = document.createElementNS(svgns, "text");
  var txtindic = document.createElementNS(svgns, "text");

  newText.setAttributeNS(null, "x", 50);
  newText.setAttributeNS(null, "y", 87);
  newText.setAttributeNS(null, "font-size", "11");
  newText.setAttributeNS(null, "font-family", "Montserrat");
  newText.setAttributeNS(null, "font-weight", "800");
  newText.setAttributeNS(null, "fill", "white");
  // newText.classList.add("text");


  txtindic.setAttributeNS(null, "x", 35);
  txtindic.setAttributeNS(null, "y", 54);

  txtindic.setAttributeNS(null, "font-size", "11");
  txtindic.setAttributeNS(null, "font-family", "Montserrat");
  txtindic.setAttributeNS(null, "font-weight", "800");
  txtindic.setAttributeNS(null, "fill", "white");

  txtindic.classList.add("shadow");

  var txtindicNode = document.createTextNode("Régional");
  txtindic.appendChild(txtindicNode);

  var txtindic2 = document.createElementNS(svgns, "text");
  txtindic2.setAttributeNS(null, "x", 120);
  txtindic2.setAttributeNS(null, "y", 54);
  txtindic2.setAttributeNS(null, "font-size", "11");
  txtindic2.setAttributeNS(null, "font-family", "Montserrat");
  txtindic2.setAttributeNS(null, "font-weight", "800");
  txtindic2.setAttributeNS(null, "fill", "white");
  // txtindic2.classList.add("text");
  txtindic2.classList.add("shadow");

  var txtindic2Node = document.createTextNode("National");
  txtindic2.appendChild(txtindic2Node);

  var textNode = document.createTextNode(refs.Reg.toString());
  newText.appendChild(textNode);

  var newText2 = document.createElementNS(svgns, "text");
  newText2.setAttributeNS(null, "x", 130);
  newText2.setAttributeNS(null, "y", 87);
  newText2.setAttributeNS(null, "font-size", "11");
  newText2.setAttributeNS(null, "font-family", "Montserrat");
  newText2.setAttributeNS(null, "font-weight", "800");
  newText2.setAttributeNS(null, "fill", "white");
  //newText2.setAttributeNS(null, "-webkit-filter", "drop-shadow( 1px 2px 3px rgba(0.4, 0.8, 0.6, .9))");

  // newText2.classList.add("text");
 newText2.classList.add("shadow");

  var textNode2 = document.createTextNode(refs.Nat.toString());
  newText2.appendChild(textNode2);

  var polygon = document.createElementNS(svgns, "polygon");
  var cursorvalue = Math.round(
    ((Number.parseInt(refs.Perf) - Number.parseInt(refs.Reg)) * 80) /
      (Number.parseInt(refs.Nat) - Number.parseInt(refs.Reg)) +
      60
  );

  var array = (arr = [
    [cursorvalue, 35],
    [cursorvalue - 8, 19],
    [cursorvalue + 8, 19],
  ]);

  for (value of array) {
    var point = svg1.createSVGPoint();
    point.x = value[0];
    point.y = value[1];
    polygon.points.appendItem(point);
  }

  polygon.setAttributeNS(null, "fill", "white");
  polygon.setAttributeNS(null, "stroke", "black");

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
  shapeC.y1.baseVal.value = 68;
  shapeC.y2.baseVal.value = 75;

  shapeC.setAttributeNS(null, "stroke", "black");
  shapeC.setAttributeNS(null, "stroke-width", "3");

  shapeC2.x1.baseVal.value = 140;
  shapeC2.x2.baseVal.value = 140;
  shapeC2.y1.baseVal.value = 68;
  shapeC2.y2.baseVal.value = 75;

  shapeC2.setAttributeNS(null, "stroke", "black");
  shapeC2.setAttributeNS(null, "stroke-width", "3");
  for (var i = 0, length = stops.length; i < length; i++) {
    // Create a <stop> element and set its offset based on the position of the for loop.
    let stop = document.createElementNS(svgns, "stop");
    stop.setAttribute("offset", stops[i].offset);
    stop.setAttribute("stop-color", stops[i].color);
    // Add the stop to the <lineargradient> element.
    shapeRgrad.appendChild(stop);
  }

  shapeRgrad.id = "Gradient3";
  shapeRgrad.setAttribute("x1", "0");
  shapeRgrad.setAttribute("x2", "1");
  shapeRgrad.setAttribute("y1", "0");
  shapeRgrad.setAttribute("y2", "0");
  defs.appendChild(shapeRgrad);

  shapeR.setAttribute("fill", "url(#Gradient3)");
  let calcR = (200 / 43) * refs.Reg;
  let strR = calcR.toString() + "px";

  shapeR.setAttribute("width", strR);
  shapeR.setAttribute("height", "40px");

  shapeR.ry.baseVal.value = 2;
  

  shapeR.y.baseVal.value = 25;
  shapeR.x.baseVal.value = 5;

  shapeR.width.baseVal.value = 200;
  shapeR.height.baseVal.value = 2 * 25;

  svg1.appendChild(defs);
  svg1.appendChild(shapeR);

  svg1.appendChild(polygon);
  svg1.appendChild(shapeRindic);
  svg1.appendChild(shapeC);
  svg1.appendChild(shapeC2);

  svg1.appendChild(txtindic);
  svg1.appendChild(txtindic2);

  svg1.appendChild(newText2);
  svg1.appendChild(newText);

  svg1.classList.add("svg-size");

  newDiv.appendChild(svg1);
  var currentDiv = document.getElementById("jauge");
  currentDiv.innerHTML = "";
  currentDiv.append(newDiv);

  console.log(stops);

  console.log("2");
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
  var svg1 = document.createElementNS(svgns, "svg");
  var shapeR = document.createElementNS(svgns, "rect");
  var shapeRgrad = document.createElementNS(svgns, "linearGradient");
  let defs = document.createElementNS(svgns, "defs");
  var polygon = document.createElementNS(svgns, "polygon");
  var cursorvalue =
    ((Number.parseFloat(refs.Perf) - Number.parseFloat(refs.Nat)) * 80) /
      (Number.parseFloat(refs.Inter) - Number.parseFloat(refs.Nat)) +
    60;
  var shapeC = document.createElementNS(svgns, "line");
  var shapeC2 = document.createElementNS(svgns, "line");
  var newText = document.createElementNS(svgns, "text");

  newText.setAttributeNS(null, "x", 50);
  newText.setAttributeNS(null, "y", 87);
  newText.setAttributeNS(null, "font-size", "11");
  newText.setAttributeNS(null, "font-family", "Montserrat");
  newText.setAttributeNS(null, "font-weight", "800");
  newText.setAttributeNS(null, "fill", "white");
  // newText.classList.add("text");
  // newText.classList.add("shadow");

  var txtindic = document.createElementNS(svgns, "text");
  txtindic.setAttributeNS(null, "x", 35);
  txtindic.setAttributeNS(null, "y", 54);
  txtindic.setAttributeNS(null, "font-size", "11");
  txtindic.setAttributeNS(null, "font-family", "Montserrat");
  txtindic.setAttributeNS(null, "font-weight", "800");
  txtindic.setAttributeNS(null, "fill", "white");
  // txtindic.classList.add("shadow");
  // txtindic.classList.add("text");

  var txtindicNode = document.createTextNode("National");
  txtindic.appendChild(txtindicNode);

  var txtindic2 = document.createElementNS(svgns, "text");
  txtindic2.setAttributeNS(null, "x", 110);
  txtindic2.setAttributeNS(null, "y", 54);
  txtindic2.setAttributeNS(null, "font-size", "11");
  txtindic2.setAttributeNS(null, "font-family", "Montserrat");
  txtindic2.setAttributeNS(null, "font-weight", "800");
  txtindic2.setAttributeNS(null, "fill", "white");
  // txtindic2.classList.add("text");
  // txtindic2.classList.add("shadow");

  var txtindic2Node = document.createTextNode("International");
  txtindic2.appendChild(txtindic2Node);

  var textNode = document.createTextNode(refs.Nat.toString());
  newText.appendChild(textNode);

  var newText2 = document.createElementNS(svgns, "text");
  newText2.setAttributeNS(null, "x", 130);
  newText2.setAttributeNS(null, "y", 87);
  newText2.setAttributeNS(null, "font-size", "11");
  newText2.setAttributeNS(null, "font-family", "Montserrat");
  newText2.setAttributeNS(null, "font-weight", "800");
  newText2.setAttributeNS(null, "fill", "white");
  // newText2.classList.add("shadow");
  // newText2.classList.add("text");

  var textNode2 = document.createTextNode(refs.Inter.toString());
  newText2.appendChild(textNode2);

  var array = (arr = [
    [cursorvalue, 35],
    [cursorvalue - 8, 19],
    [cursorvalue + 8, 19],
  ]);

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
      color: "#930391",
      offset: "150%",
    },
  ];

  shapeC.x1.baseVal.value = 60;
  shapeC.x2.baseVal.value = 60;
  shapeC.y1.baseVal.value = 69;
  shapeC.y2.baseVal.value = 75;

  // shapeC.classList.add("black-stroke");
  shapeC.setAttributeNS(null, "stroke", "black");
  shapeC.setAttributeNS(null, "stroke-width", "3");

  shapeC2.x1.baseVal.value = 140;
  shapeC2.x2.baseVal.value = 140;
  shapeC2.y1.baseVal.value = 69;
  shapeC2.y2.baseVal.value = 75;

  shapeC2.setAttributeNS(null, "stroke", "black");
  shapeC2.setAttributeNS(null, "stroke-width", "3");

  for (var i = 0, length = stops.length; i < length; i++) {
    // Create a <stop> element and set its offset based on the position of the for loop.
    let stop = document.createElementNS(svgns, "stop");
    stop.setAttribute("offset", stops[i].offset);
    stop.setAttribute("stop-color", stops[i].color);
    // Add the stop to the <lineargradient> element.
    shapeRgrad.appendChild(stop);
  }
  polygon.setAttributeNS(null, "fill", "white");
  polygon.setAttributeNS(null, "stroke", "black");
  shapeRgrad.id = "Gradient4";
  shapeRgrad.setAttribute("x1", "0");
  shapeRgrad.setAttribute("x2", "1");
  shapeRgrad.setAttribute("y1", "0");
  shapeRgrad.setAttribute("y2", "0");
  defs.appendChild(shapeRgrad);

  shapeR.setAttribute("fill", "url(#Gradient4)");
  let calcR = (200 / 43) * refs.Reg;
  let strR = calcR.toString() + "px";
  console.log(strR);
  shapeR.setAttribute("width", strR);
  shapeR.setAttribute("height", "40px");

  shapeR.x.baseVal.value = 5;
  shapeR.ry.baseVal.value = 2;

  shapeR.y.baseVal.value = 25;
  shapeR.width.baseVal.value = 200;
  shapeR.height.baseVal.value = 2 * 25;

  svg1.appendChild(defs);
  svg1.appendChild(shapeR);
  svg1.appendChild(polygon);
  svg1.appendChild(shapeC);
  svg1.appendChild(shapeC2);
  svg1.appendChild(newText);
  svg1.appendChild(newText2);
  svg1.appendChild(txtindic);
  svg1.appendChild(txtindic2);

  svg1.classList.add("svg-size");

  newDiv.appendChild(svg1);
  var currentDiv = document.getElementById("jauge");
  currentDiv.innerHTML = "";
  currentDiv.append(newDiv);
}

function grad_four() {
  var refs = {
    Perf: document.getElementById("perf").value,
    Reg: document.getElementById("reg").value,
    Nat: document.getElementById("nat").value,
    Inter: document.getElementById("inter").value,
    Record: document.getElementById("record").value,
  };

  var svgns = "http://www.w3.org/2000/svg";
  var newDiv = document.createElement("div");
  var svg1 = document.createElementNS(svgns, "svg");
  var shapeR = document.createElementNS(svgns, "rect");
  var shapeRgrad = document.createElementNS(svgns, "linearGradient");
  let defs = document.createElementNS(svgns, "defs");
  var polygon = document.createElementNS(svgns, "polygon");
  var cursorvalue = Math.round(
    ((Number.parseInt(refs.Perf) - Number.parseInt(refs.Inter)) * 140) /
      (Number.parseInt(refs.Record) - Number.parseInt(refs.Inter)) +
      60
  );
  var shapeC = document.createElementNS(svgns, "line");
  var newText = document.createElementNS(svgns, "text");

  newText.setAttributeNS(null, "x", 50);
  newText.setAttributeNS(null, "y", 87);
  newText.setAttributeNS(null, "font-size", "11");
  newText.setAttributeNS(null, "font-family", "Montserrat");
  newText.setAttributeNS(null, "font-weight", "800");
  newText.setAttributeNS(null, "fill", "white");

   //newText.classList.add("shadow");
  // newText.classList.add("text");

  var txtindic = document.createElementNS(svgns, "text");
  txtindic.setAttributeNS(null, "x", 30);
  txtindic.setAttributeNS(null, "y", 54);
  txtindic.setAttributeNS(null, "font-size", "11");
  txtindic.setAttributeNS(null, "font-family", "Montserrat");
  txtindic.setAttributeNS(null, "font-weight", "800");
  txtindic.setAttributeNS(null, "fill", "white");
  // txtindic.classList.add("text");
  // txtindic.classList.add("shadow");

  var txtindicNode = document.createTextNode("International");
  txtindic.appendChild(txtindicNode);

  var textNode = document.createTextNode(refs.Inter.toString());
  newText.appendChild(textNode);
  var array = (arr = [
    [cursorvalue, 35],
    [cursorvalue - 8, 19],
    [cursorvalue + 8, 19],
  ]);

  for (value of array) {
    var point = svg1.createSVGPoint();
    point.x = value[0];
    point.y = value[1];
    polygon.points.appendItem(point);
  }

  let stops = [
    {
      color: "#ff976b",
      offset: "0%",
    },
    {
      color: "#FF00BC",
      offset: "30%",
    },

    {
      color: "#3b056e",
      offset: "70%",
    },
    {
      color: "#3b056e",
      offset: "100%",
    },
  ];

  shapeC.x1.baseVal.value = 60;
  shapeC.x2.baseVal.value = 60;
  shapeC.y1.baseVal.value = 69;
  shapeC.y2.baseVal.value = 75;

  shapeC.setAttributeNS(null, "stroke", "black");
  shapeC.setAttributeNS(null, "stroke-width", "3");

  for (var i = 0, length = stops.length; i < length; i++) {
    // Create a <stop> element and set its offset based on the position of the for loop.
    let stop = document.createElementNS(svgns, "stop");
    stop.setAttribute("offset", stops[i].offset);
    stop.setAttribute("stop-color", stops[i].color);
    // Add the stop to the <lineargradient> element.
    shapeRgrad.appendChild(stop);
  }
  polygon.setAttributeNS(null, "fill", "white");
  polygon.setAttributeNS(null, "stroke", "black");
  
  shapeRgrad.id = "Gradient5";
  shapeRgrad.setAttribute("x1", "0");
  shapeRgrad.setAttribute("x2", "1");
  shapeRgrad.setAttribute("y1", "0");
  shapeRgrad.setAttribute("y2", "0");
  defs.appendChild(shapeRgrad);

  shapeR.setAttribute("fill", "url(#Gradient5)");
  let calcR = (200 / 43) * refs.Reg;
  let strR = calcR.toString() + "px";
  console.log(strR);
  shapeR.setAttribute("width", strR);
  shapeR.setAttribute("height", "40px");

  shapeR.x.baseVal.value = 5;
  shapeR.ry.baseVal.value = 2;

  shapeR.y.baseVal.value = 25;
  shapeR.width.baseVal.value = 200;
  shapeR.height.baseVal.value = 2 * 25;

  svg1.appendChild(defs);
  svg1.appendChild(shapeR);
  svg1.appendChild(polygon);
  svg1.appendChild(shapeC);
  svg1.appendChild(newText);
  svg1.appendChild(txtindic);

  svg1.classList.add("svg-size");

  newDiv.appendChild(svg1);
  var currentDiv = document.getElementById("jauge");
  currentDiv.innerHTML = "";

  currentDiv.append(newDiv);
  console.log("4");
}

function grad_five() {
  var refs = {
    Perf: document.getElementById("perf").value,
    Reg: document.getElementById("reg").value,
    Nat: document.getElementById("nat").value,
    Inter: document.getElementById("inter").value,
    Record: document.getElementById("perf").value,
  };

  var svgns = "http://www.w3.org/2000/svg";
  var newDiv = document.createElement("div");
  var svg1 = document.createElementNS(svgns, "svg");
  var shapeR = document.createElementNS(svgns, "rect");
  var shapeRgrad = document.createElementNS(svgns, "linearGradient");
  let defs = document.createElementNS(svgns, "defs");
  var polygon = document.createElementNS(svgns, "polygon");
  var cursorvalue = Math.round(
    ((Number.parseInt(refs.Perf) - Number.parseInt(refs.Inter)) * 140) /
      (Number.parseInt(refs.Record) - Number.parseInt(refs.Inter)) +
      60
  );
  var newText2 = document.createElementNS(svgns, "text");
  var shapeC = document.createElementNS(svgns, "line");
  var shapeC2 = document.createElementNS(svgns, "line");

  newText2.setAttributeNS(null, "x", cursorvalue - 14);
  newText2.setAttributeNS(null, "y", 15);

  newText2.setAttributeNS(null, "font-size", "11");
  newText2.setAttributeNS(null, "font-family", "Montserrat");
  newText2.setAttributeNS(null, "font-weight", "800");
  newText2.setAttributeNS(null, "fill", "white");

  //newText2.classList.add("text");
  //newText2.classList.add("shadow");

  var textNode2 = document.createTextNode("Record !");
  newText2.appendChild(textNode2);
  var array = (arr = [
    [cursorvalue, 35],
    [cursorvalue - 8, 19],
    [cursorvalue + 8, 19],
  ]);

  var txtindic = document.createElementNS(svgns, "text");
  txtindic.setAttributeNS(null, "x", 30);
  txtindic.setAttributeNS(null, "y", 54);

  txtindic.setAttributeNS(null, "font-size", "11");
  txtindic.setAttributeNS(null, "font-family", "Montserrat");
  txtindic.setAttributeNS(null, "font-weight", "800");
  txtindic.setAttributeNS(null, "fill", "white");

  //txtindic.classList.add("text");
  //txtindic.classList.add("shadow");

  var txtindicNode = document.createTextNode("International");
  txtindic.appendChild(txtindicNode);

  var newText = document.createElementNS(svgns, "text");
  newText.setAttributeNS(null, "x", 50);
  newText.setAttributeNS(null, "y", 87);
  newText.setAttributeNS(null, "font-size", "11");
  newText.setAttributeNS(null, "font-family", "Montserrat");
  newText.setAttributeNS(null, "font-weight", "800");
  newText.setAttributeNS(null, "fill", "white");

  // newText.classList.add("text");
  // newText.classList.add("shadow");

  var textNode = document.createTextNode(refs.Inter.toString());
  newText.appendChild(textNode);
  for (value of array) {
    var point = svg1.createSVGPoint();
    point.x = value[0];
    point.y = value[1];
    polygon.points.appendItem(point);
  }

  shapeC.x1.baseVal.value = 60;
  shapeC.x2.baseVal.value = 60;
  shapeC.y1.baseVal.value = 68;
  shapeC.y2.baseVal.value = 75;
  shapeC.setAttributeNS(null, "stroke", "black");
  shapeC.setAttributeNS(null, "stroke-width", "3");
  // newText.classList.add("text");

  let stops = [
    {
      color: "#ff976b",
      offset: "0%",
    },
    {
      color: "#FF00BC",
      offset: "30%",
    },

    {
      color: "#3b056e",
      offset: "70%",
    },
    {
      color: "#3b056e",
      offset: "100%",
    },
  ];

  for (var i = 0, length = stops.length; i < length; i++) {
    // Create a <stop> element and set its offset based on the position of the for loop.
    let stop = document.createElementNS(svgns, "stop");
    stop.setAttribute("offset", stops[i].offset);
    stop.setAttribute("stop-color", stops[i].color);
    // Add the stop to the <lineargradient> element.
    shapeRgrad.appendChild(stop);
  }
  polygon.setAttributeNS(null, "fill", "white");
  polygon.setAttributeNS(null, "stroke", "black");
  shapeRgrad.id = "Gradient6";
  shapeRgrad.setAttribute("x1", "0");
  shapeRgrad.setAttribute("x2", "1");
  shapeRgrad.setAttribute("y1", "0");
  shapeRgrad.setAttribute("y2", "0");
  defs.appendChild(shapeRgrad);

  shapeR.setAttribute("fill", "url(#Gradient6)");
  let calcR = (200 / 43) * refs.Reg;
  let strR = calcR.toString() + "px";
  shapeR.setAttribute("width", strR);
  shapeR.setAttribute("height", "40px");

  shapeR.x.baseVal.value = 5;
  shapeR.ry.baseVal.value = 2;
  shapeR.y.baseVal.value = 25;
  shapeR.width.baseVal.value = 200;
  shapeR.height.baseVal.value = 50;

  svg1.appendChild(defs);
  svg1.appendChild(shapeR);
  svg1.appendChild(polygon);
  svg1.appendChild(newText2);
  svg1.appendChild(shapeC);
  svg1.appendChild(shapeC2);
  svg1.appendChild(newText);
  svg1.appendChild(txtindic);

  svg1.classList.add("svg-size");

  newDiv.appendChild(svg1);
  var currentDiv = document.getElementById("jauge");
  currentDiv.innerHTML = "";
  currentDiv.append(newDiv);
  console.log("5");
}

function gradientgauge() {
  let refs = {
    Perf: parseFloat(document.getElementById("perf").value),
    Reg: parseFloat(document.getElementById("reg").value),
    Nat: parseFloat(document.getElementById("nat").value),
    Inter: parseFloat(document.getElementById("inter").value),
    Record: parseFloat(document.getElementById("record").value),
  };

  if (refs.Perf < refs.Reg) {
    grad_one();
  } else if (refs.Perf < refs.Nat && refs.Perf >= refs.Reg) {
    grad_two();
  } else if (refs.Perf < refs.Inter && refs.Perf >= refs.Nat) {
    grad_three();
  } else if (refs.Perf > refs.Inter ) {
    if (refs.Perf > refs.Record) {
      grad_five();
    } else {
      grad_four();
    }
  }
}



function legend() {
  var svgns = "http://www.w3.org/2000/svg";

  var div = document.getElementById("legende");
  var svg1 = document.createElementNS(svgns, "svg");

  var legreg = document.createElementNS(svgns, "rect");
  var legnat = document.createElementNS(svgns, "rect");
  var leginter = document.createElementNS(svgns, "rect");

  var legregtxt = document.createElementNS(svgns, "text");
  var legnattxt = document.createElementNS(svgns, "text");
  var legintertxt = document.createElementNS(svgns, "text");

  legreg.setAttribute("width", "15px");
  legreg.setAttribute("height", "15px");
  legreg.setAttribute("fill", "#F9F871");

  legreg.x.baseVal.value = 0;
  legreg.y.baseVal.value = 25;
  legreg.ry.baseVal.value = 2;

  legnat.setAttribute("width", "15px");
  legnat.setAttribute("height", "15px");
  legnat.setAttribute("fill", "#FF814C");

  legnat.x.baseVal.value = 0;
  legnat.y.baseVal.value = 55;
  legnat.ry.baseVal.value = 2;

  leginter.setAttribute("width", "15px");
  leginter.setAttribute("height", "15px");
  leginter.setAttribute("fill", "#FF00BC");

  leginter.x.baseVal.value = 0;
  leginter.y.baseVal.value = 85;
  leginter.ry.baseVal.value = 2;

  legnattxt.setAttributeNS(null, "x", 20);
  legnattxt.setAttributeNS(null, "y", 67);
  legnattxt.setAttributeNS(null, "font-size", "12");
  legnattxt.setAttributeNS(null, "font-family", "Montserrat");
  legnattxt.setAttributeNS(null, "fill", "white");

  var legnattxtnode = document.createTextNode("National");
  legnattxt.appendChild(legnattxtnode);

  legregtxt.setAttributeNS(null, "x", 20);
  legregtxt.setAttributeNS(null, "y", 38);
  legregtxt.setAttributeNS(null, "font-size", "12");
  legregtxt.setAttributeNS(null, "font-family", "Montserrat");
  legregtxt.setAttributeNS(null, "fill", "white");

  var legregtxtnode = document.createTextNode("Régional");
  legregtxt.appendChild(legregtxtnode);

  legintertxt.setAttributeNS(null, "x", 20);
  legintertxt.setAttributeNS(null, "y", 98);
  legintertxt.setAttributeNS(null, "font-size", "12");
  legintertxt.setAttributeNS(null, "font-family", "Montserrat");
  legintertxt.setAttributeNS(null, "fill", "white");

  var legintertxtnode = document.createTextNode("International");
  legintertxt.appendChild(legintertxtnode);

  svg1.setAttribute("width", "150px");
  svg1.setAttribute("height", "100px");

  svg1.appendChild(legintertxt);

  svg1.appendChild(legnattxt);
  svg1.appendChild(legregtxt);

  svg1.appendChild(legnat);
  svg1.appendChild(legreg);
  svg1.appendChild(leginter);

  div.appendChild(svg1);
}

function svgconverter(id) {
  var svgtoconvert =
    document.getElementById(id).firstChild.firstChild.outerHTML;

    $('canvas').remove();
  var svgcanva = document.createElement("canvas");
  svgcanva.id = "canvas";
  document.body.appendChild(svgcanva);
  var ctx = svgcanva.getContext("2d");
  ctx.filter = 'drop-shadow( 1px 2px 3px rgba(0.4, 0.8, 0.6, .9))';

  v = canvg.Canvg.fromString(ctx, svgtoconvert);
  v.start();
    downloadCanvas();

}

function downloadCanvas(){
  var canvas = document.querySelector("#canvas").toDataURL("image/png");
  /* Création de l'élément Anchor */
  var a = document.createElement('a');
  /* Nom du fichier */
  a.download = "canvas.png";
  /* Canvas à télécharger */
  a.href = canvas;
  /* Clique sur le lien */
  a.click();

}