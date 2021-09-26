"use strict"; //That means, approximately, "Interpret this JavaScript according to the standards, and don't try to be compatible with archaic JavaScript interpreters.".
let letters, maxX, maxY, minX, maximumDepth, inputString, ternary;
if (typeof Math.log2 == "undefined")
  //Internet Explorer 11
  Math.log2 = function (x) {
    return Math.log(x) / Math.log(2);
  };
function onButtonClick() {
  ternary = document.getElementById("ternary").checked;
  inputString = document.getElementById("input").value;
  if (inputString.length < 2 || (inputString.length < 3 && ternary)) {
    alert(
      "Strings of length less than two can't be Huffman encoded, and string of length less than three can't be encoded ternary."
    );
    return;
  }
  console.log('Making a Huffman tree for the string "' + inputString + '".');
  letters = new Object();
  for (let i = 0; i < inputString.length; i++) {
    if (letters[inputString[i]] == undefined) {
      letters[inputString[i]] = {
        frequency: 0,
        hasBeenUsed: false,
        childrenNodes: []
      };
    }
    letters[inputString[i]].frequency++;
  }
  let entropy = 0,
    numberOfDistinctLetters = 0;
  for (let i in letters) {
    letters[i].probability = letters[i].frequency / inputString.length;
    entropy -= letters[i].probability * Math.log2(letters[i].probability);
    numberOfDistinctLetters++;
  }
  let bitsInEqualCode = Math.ceil(
    ternary
      ? Math.log(numberOfDistinctLetters) / Math.log(3)
      : Math.log2(numberOfDistinctLetters)
  );
  if (numberOfDistinctLetters < 2 || (numberOfDistinctLetters < 3 && ternary)) {
    alert(
      "There need to be at least as many distinct symbols in the string as the base is!"
    );
    return;
  }
  let howManyUnused = numberOfDistinctLetters;
  let rootNode;
  do {
    let minimum1, minimum2, minimum3;
    for (let i in letters)
      if (
        letters[i].hasBeenUsed == false &&
        (minimum1 == undefined ||
          letters[i].frequency < letters[minimum1].frequency)
      )
        minimum1 = i;
    for (let i in letters)
      if (
        letters[i].hasBeenUsed == false &&
        i != minimum1 &&
        (minimum2 == undefined ||
          letters[i].frequency < letters[minimum2].frequency)
      )
        minimum2 = i;
    if (ternary)
      for (let i in letters)
        if (
          letters[i].hasBeenUsed == false &&
          i != minimum1 &&
          i != minimum2 &&
          (minimum3 == undefined ||
            letters[i].frequency < letters[minimum3].frequency)
        )
          minimum3 = i;
    if (ternary && minimum3)
      console.log(
        "Connecting '" +
          minimum1 +
          "', '" +
          minimum2 +
          "' and '" +
          minimum3 +
          "' into a single node."
      );
    else
      console.log(
        "Connecting '" +
          minimum1 +
          "' and '" +
          minimum2 +
          "' into a single node."
      );
    letters[minimum1].hasBeenUsed = true;
    letters[minimum2].hasBeenUsed = true;
    if (ternary && minimum3) letters[minimum3].hasBeenUsed = true;
    let nameofTheNewNode =
      ternary && minimum3
        ? minimum1 + minimum2 + minimum3
        : minimum1 + minimum2;
    letters[nameofTheNewNode] = new Object();
    letters[nameofTheNewNode].childrenNodes =
      ternary && minimum3
        ? [minimum1, minimum2, minimum3]
        : [minimum1, minimum2];
    letters[nameofTheNewNode].frequency =
      letters[minimum1].frequency +
      letters[minimum2].frequency +
      (ternary && minimum3 ? letters[minimum3].frequency : 0);
    if (letters[nameofTheNewNode].frequency == inputString.length)
      rootNode = nameofTheNewNode;
    letters[nameofTheNewNode].hasBeenUsed = false;
    howManyUnused = 0;
    for (let i in letters) if (letters[i].hasBeenUsed == false) howManyUnused++;
  } while (howManyUnused > 1);
  let stackWithNodes = [rootNode];
  let stackWithCodes = [""];
  let stackWithDepths = [0];
  let averageSymbolLength = 0;
  maximumDepth = 0;
  let counter = 0;
  document.getElementById("table").innerHTML =
    "<tr><td>symbol</td><td>frequency</td><td>Huffman code</td><td>equal-length code</td></tr>";
  while (stackWithNodes.length > 0) {
    let currentNode = stackWithNodes.pop();
    let currentCode = stackWithCodes.pop();
    let currentDepth = stackWithDepths.pop();
    maximumDepth = Math.max(maximumDepth, currentDepth);
    letters[currentNode].code = currentCode;
    if (letters[currentNode].childrenNodes.length == 0) {
      averageSymbolLength +=
        letters[currentNode].probability *
        currentCode.length *
        (ternary ? Math.log2(3) : 1);
      let equalLengthCode = counter.toString(ternary ? 3 : 2);
      while (equalLengthCode.length < bitsInEqualCode)
        equalLengthCode = "0" + equalLengthCode;
      document.getElementById("table").innerHTML +=
        "<tr><td>" +
        currentNode +
        "</td><td>" +
        letters[currentNode].frequency +
        "/" +
        inputString.length +
        "</td><td>" +
        currentCode +
        "</td><td>" +
        equalLengthCode +
        "</td></tr>";
      counter++;
      continue;
    }
    stackWithNodes.push(letters[currentNode].childrenNodes[0]);
    stackWithNodes.push(letters[currentNode].childrenNodes[1]);
    if (ternary && letters[currentNode].childrenNodes.length > 2)
      stackWithNodes.push(letters[currentNode].childrenNodes[2]);
    stackWithCodes.push(currentCode + "0");
    stackWithCodes.push(currentCode + "1");
    if (ternary && letters[currentNode].childrenNodes.length > 2)
      stackWithCodes.push(currentCode + "2");
    stackWithDepths.push(currentDepth + 1);
    stackWithDepths.push(currentDepth + 1);
    if (ternary && letters[currentNode].childrenNodes.length > 2)
      stackWithDepths.push(currentDepth + 1);
  }
  console.log("The Huffman tree is constructed:");
  console.log("node\tfreq\tcode\tleft\tright");
  for (let i in letters)
    console.log(
      "'" +
        i +
        "'\t" +
        letters[i].frequency +
        "/" +
        inputString.length +
        "\t" +
        letters[i].code +
        "\t" +
        (letters[i].childrenNodes[0]
          ? "'" + letters[i].childrenNodes[0] + "'"
          : "null") +
        "\t" +
        (letters[i].childrenNodes[1]
          ? "'" + letters[i].childrenNodes[1] + "'"
          : "null")
    );
  console.log("The Huffman encoding is:");
  let output = "";
  for (let i = 0; i < inputString.length; i++)
    output += letters[inputString[i]].code;
  console.log(output);
  console.log(
    "The average length of a symbol in Huffman code is: " +
      averageSymbolLength +
      " bits."
  );
  document.getElementById("avgLength").innerHTML = averageSymbolLength;
  console.log(
    "The average length of a symbol in the equal-length code is: " +
      bitsInEqualCode +
      " bits."
  );
  document.getElementById("bitsInEqualCode").innerHTML =
    (ternary ? Math.log2(3) : 1) * bitsInEqualCode;
  console.log("The entropy of the input string is: " + entropy + " bits.");
  document.getElementById("entropy").innerHTML = entropy;
  let howManyCollisions = 0;
  for (let i = 0; i < inputString.length; i++)
    for (let j = 0; j < inputString.length; j++)
      if (inputString[i] == inputString[j]) howManyCollisions++;
  let collision_entropy =
    -Math.log(howManyCollisions / (inputString.length * inputString.length)) /
    (ternary ? Math.log(3) : Math.log(2));
  document.getElementById("collision_entropy").innerHTML = collision_entropy;
  console.log(
    "The efficiency of the Huffman code is: " + entropy / averageSymbolLength
  );
  console.log(
    "The efficiency of the equal-length code is: " + entropy / bitsInEqualCode
  );
  document.getElementById("output").innerText = output;
  let tree = document.getElementById("tree");
  while (
    tree.childNodes.length //Clear the diagram ("innerHTML" won't work in Internet Explorer 11 because, to it, SVG is XML and not HTML).
  )
    tree.removeChild(tree.firstChild);
  maxX = maxY = minX = 0;
  draw(
    rootNode,
    0,
    0,
    (ternary ? 20 : 30) * Math.pow(ternary ? 3 : 2, maximumDepth),
    0
  );
  for (
    let i = 0;
    i < document.getElementById("tree").childNodes.length;
    i++ //In case a node falls left of the diagram, move all nodes rightwards.
  ) {
    let childNode = document.getElementById("tree").childNodes[i];
    if (childNode.getAttribute("x"))
      childNode.setAttribute("x", childNode.getAttribute("x") * 1 - minX);
    if (childNode.getAttribute("x1"))
      childNode.setAttribute("x1", childNode.getAttribute("x1") * 1 - minX);
    if (childNode.getAttribute("x2"))
      childNode.setAttribute("x2", childNode.getAttribute("x2") * 1 - minX);
  }
  document.getElementById("tree").style.height = maxY + 100 + "px";
  document.getElementById("tree").style.width = maxX - minX + 100 + "px";
  document.getElementById("diagramSpan").scrollLeft =
    document.getElementById("node0").getAttribute("x") -
    document.getElementById("diagramSpan").clientWidth / 2 +
    75; //The root of the tree will be in the center of the screen.
}
function draw(nodeName, x, y, space, id) {
  if (x > maxX) maxX = x;
  if (x < minX) minX = x;
  if (y > maxY) maxY = y;
  const svgNS = document.getElementById("tree").namespaceURI;
  let rectangle = document.createElementNS(svgNS, "rect");
  rectangle.setAttribute("x", x);
  rectangle.setAttribute("y", y);
  rectangle.setAttribute("width", 50);
  rectangle.setAttribute("height", 50);
  rectangle.setAttribute("id", "node" + id);
  rectangle.setAttribute("fill", "#EEEEEE");
  document.getElementById("tree").appendChild(rectangle);
  let text = document.createElementNS(svgNS, "text");
  text.appendChild(
    document.createTextNode(
      letters[nodeName].frequency + "/" + inputString.length
    )
  );
  text.setAttribute("x", x + 5);
  text.setAttribute("y", y + 20);
  text.style.fill = "black";
  text.setAttribute("font-family", "monospace");
  text.setAttribute("font-size", 14);
  document.getElementById("tree").appendChild(text);
  if (nodeName.length == 1) {
    let character = document.createElementNS(svgNS, "text");
    character.appendChild(document.createTextNode(nodeName));
    character.setAttribute("x", x + 20);
    character.setAttribute("y", y + 40);
    character.style.fill = "black";
    character.setAttribute("font-family", "monospace");
    character.setAttribute("font-size", 14);
    document.getElementById("tree").appendChild(character);
  }
  for (let i = 0; i < letters[nodeName].childrenNodes.length; i++) {
    draw(
      letters[nodeName].childrenNodes[i],
      x + (i - (ternary ? 3 : 1) / (ternary ? 3 : 2)) * space,
      y + 100,
      space / (ternary ? 3 : 2),
      id + 1
    );
    let line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", x + 25);
    line.setAttribute("y1", y + 50);
    line.setAttribute(
      "x2",
      x + (i - (ternary ? 3 : 1) / (ternary ? 3 : 2)) * space + 25
    );
    line.setAttribute("y2", y + 100);
    line.setAttribute("stroke-width", 2);
    line.setAttribute("stroke", "black");
    document.getElementById("tree").appendChild(line);
    let bit = document.createElementNS(svgNS, "text");
    bit.appendChild(document.createTextNode(i));
    bit.setAttribute(
      "x",
      x + (i - (ternary ? 3 : 1) / (ternary ? 3 : 2)) * space + 25
    );
    bit.setAttribute("y", y + 80);
    bit.style.fill = "black";
    bit.setAttribute("font-family", "monospace");
    bit.setAttribute("font-size", 14);
    document.getElementById("tree").appendChild(bit);
  }
}
