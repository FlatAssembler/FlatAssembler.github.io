class TreeNodeOfAVL {
  constructor(x) {
    this.left = null;
    this.right = null;
    this.height = 1;
    this.x = x;
  }
  toLisp() {
    if (this.left == null && this.right == null)
      return this.x;
    if (this.left == null)
      return `(${this.x} null ${this.right.toLisp()})`;
    if (this.right == null)
      return `(${this.x} ${this.left.toLisp()} null)`;
    return `(${this.x} ${this.left.toLisp()} ${this.right.toLisp()})`;
  }
}
function height(node) {
  let maximum = 0;
  if (node.left)
    maximum = Math.max(maximum, node.left.height);
  if (node.right)
    maximum = Math.max(maximum, node.right.height);
  return maximum + 1;
}
function RightRotate(C) {
  const B = C.left;
  const V3 = B.right;
  B.right = C;
  C.left = V3;
  C.height = height(C);
  B.height = height(B);
  return B;
}
function LeftRotate(C) {
  const B = C.right;
  const V3 = B.left;
  B.left = C;
  C.right = V3;
  C.height = height(C);
  B.height = height(B);
  return B;
}
function BalanceFactor(node) {
  const heightOfTheLeftChild = node.left ? node.left.height : 0;
  const heightOfTheRightChild = node.right ? node.right.height : 0;
  return heightOfTheLeftChild - heightOfTheRightChild;
}
function InsertAvl(node, X) {
  if (node == null)
    return new TreeNodeOfAVL(X);
  if (X < node.x)
    node.left = InsertAvl(node.left, X);
  else if (X > node.x)
    node.right = InsertAvl(node.right, X);
  else
    return node; // Duplikat.
  node.height = height(node);
  BF = BalanceFactor(node);
  if (BF > 1 && X < node.left.x)
    return RightRotate(node);
  if (BF < -1 && X > node.right.x)
    return LeftRotate(node);
  if (BF > 1 && X > node.left.x) {
    node.left = LeftRotate(node.left);
    return RightRotate(node);
  }
  if (BF < -1 && X < node.right.x) {
    node.right = RightRotate(node.right);
    return LeftRotate(node);
  }
  return node;
}
let korijenStabla = null;
function umetniBrojUStablo(x) { korijenStabla = InsertAvl(korijenStabla, x); }
function SmallestNode(node) {
  let t = node;
  while (t.left != null)
    t = t.left;
  return t;
}
function DeleteAVL(node, X) {
  if (!node)
    return node;
  if (X < node.x)
    node.left = DeleteAVL(node.left, X);
  else if (X > node.x)
    node.right = DeleteAVL(node.right, X);
  else {
    if ((node.left == null) || (node.right == null)) {
      let temp = node.left ? node.left : node.right;
      if (temp == null) {
        temp = node;
        node = null;
      } else
        Object.assign(node, temp);
    } else {
      const temp = SmallestNode(node.right);
      node.x = temp.x;
      node.right = DeleteAVL(node.right, temp.x);
    }
  }
  if (!node)
    return node;
  node.height = height(node);
  const bf = BalanceFactor(node);
  if (bf > 1 && BalanceFactor(node.left) >= 0)
    return RightRotate(node);
  if (bf > 1 && BalanceFactor(node.left) < 0) {
    node.left = LeftRotate(node.left);
    return RightRotate(node);
  }
  if (bf < -1 && BalanceFactor(node.right) <= 0)
    return LeftRotate(node);
  if (bf < -1 && BalanceFactor(node.right) > 0) {
    node.right = RightRotate(node.right);
    return LeftRotate(node);
  }
  return node;
}
function izbrisiBrojIzStabla(x) { korijenStabla = DeleteAVL(korijenStabla, x); }
function nacrtajStablo() {
  let tree = document.getElementById("tree");
  while (tree.childNodes.length)
    tree.removeChild(tree.firstChild);
  maxX = maxY = minX = 0;
  draw(korijenStabla, 0, 0, 50 * Math.pow(2, korijenStabla.height), 0);
  for (
      let i = 0; i < document.getElementById("tree").childNodes.length;
      i++ // In case a node falls left of the diagram, move all nodes
          // rightwards.
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
  document.getElementById("tree").style.width = maxX - minX + 150 + "px";
  document.getElementById("diagramSpan").scrollLeft =
      document.getElementById("node0").getAttribute("x") -
      document.getElementById("diagramSpan").clientWidth / 2 +
      75; // The root of the tree will be in the center of the screen.
}
function draw(nodeName, x, y, space, id) {
  if (x > maxX)
    maxX = x;
  if (x < minX)
    minX = x;
  if (y > maxY)
    maxY = y;
  const svgNS = document.getElementById("tree").namespaceURI;
  let rectangle = document.createElementNS(svgNS, "rect");
  rectangle.setAttribute("x", x);
  rectangle.setAttribute("y", y);
  rectangle.setAttribute("width", 125);
  rectangle.setAttribute("height", 75);
  rectangle.setAttribute("id", "node" + id);
  rectangle.setAttribute("fill", "#EEEEEE");
  document.getElementById("tree").appendChild(rectangle);
  let text = document.createElementNS(svgNS, "text");
  text.appendChild(document.createTextNode("Vrijednost: " + nodeName.x));
  text.setAttribute("x", x + 5);
  text.setAttribute("y", y + 20);
  text.style.fill = "black";
  text.setAttribute("font-family", "monospace");
  text.setAttribute("font-size", 14);
  document.getElementById("tree").appendChild(text);
  let textWithHeight = document.createElementNS(svgNS, "text");
  textWithHeight.appendChild(
      document.createTextNode("Visina: " + nodeName.height));
  textWithHeight.setAttribute("x", x + 5);
  textWithHeight.setAttribute("y", y + 20 + 15);
  textWithHeight.style.fill = "black";
  textWithHeight.setAttribute("font-family", "monospace");
  textWithHeight.setAttribute("font-size", 14);
  document.getElementById("tree").appendChild(textWithHeight);
  let textWithBF = document.createElementNS(svgNS, "text");
  textWithBF.appendChild(
      document.createTextNode("BF: " + BalanceFactor(nodeName)));
  textWithBF.setAttribute("x", x + 5);
  textWithBF.setAttribute("y", y + 20 + 15 + 15);
  textWithBF.style.fill = "black";
  textWithBF.setAttribute("font-family", "monospace");
  textWithBF.setAttribute("font-size", 14);
  document.getElementById("tree").appendChild(textWithBF);
  nodeName.childrenNodes = [ nodeName.left, nodeName.right ];
  for (let i = 0; i < nodeName.childrenNodes.length; i++) {
    if (nodeName.childrenNodes[i] == null)
      continue;
    draw(nodeName.childrenNodes[i], x + (i - 1 / 2) * space, y + 100 + 25,
         50 * 2 ** (nodeName.childrenNodes[i].height), id + 1);
    let line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", x + 25 + 25 + 25 / 2);
    line.setAttribute("y1", y + 75);
    line.setAttribute("x2", x + (i - 1 / 2) * space + 25 + 25 + 25 / 2);
    line.setAttribute("y2", y + 125);
    line.setAttribute("stroke-width", 2);
    line.setAttribute("stroke", "black");
    document.getElementById("tree").appendChild(line);
  }
}
