"use strict";
window.onload = function () {
  document.getElementById("calculate").onclick = calculate;
  document.getElementById("genetic").onclick = curveFitting;
};
let frequencies = [],
  n = 0;
function calculate() {
  n = parseInt(document.getElementById("input").value);
  if (n < 2 || isNaN(n)) {
    alert("Multiplication table needs to have at least two rows and columns.");
    return;
  }
  const graph = document.getElementById("graph");
  graph.innerHTML = "";
  let numbersInTable = new Set();
  for (let i = 1; i <= n; i++)
    for (let j = 1; j <= n; j++) numbersInTable.add(i * j);
  let sum = 0;
  for (let number of numbersInTable) sum += number;
  let expectation = sum / numbersInTable.size;
  document.getElementById("expectation").innerHTML = expectation;
  let variance = 0;
  for (let number of numbersInTable)
    variance += Math.pow(number - expectation, 2);
  variance /= numbersInTable.size;
  let deviation = Math.sqrt(variance);
  document.getElementById("deviation").innerHTML = deviation;
  frequencies = [];
  let tableRow = [];
  for (let i = 0; i < n + 1; i++) {
    frequencies[i] = 0;
    tableRow[i] = "";
  }
  for (let number of numbersInTable) {
    frequencies[Math.floor(number / n)]++;
    tableRow[Math.floor(number / n)] += number + " ";
  }
  graph.innerHTML += `
    <line x1=${n.toString().length * 10}
          x2=${n.toString().length * 10}
          y1=10
          y2=${graph.clientHeight - 20}
          stroke="black"
          stroke-width=2
    />
    <line x1=${n.toString().length * 10}
          x2=${graph.clientWidth - 20}
          y1=${graph.clientHeight - 20}
          y2=${graph.clientHeight - 20}
          stroke="black"
          stroke-width=2
    />
    <text x=0 y=20>${n}</text>
    <text x=0 y=${graph.clientHeight / 2}>${Math.round(n / 2)}</text>
    <text x=0 y=${graph.clientHeight - 30}>0</text>
    <line x1=${n.toString().length * 10 - 5}
          x2=${n.toString().length * 10}
          y1=15
          y2=10
          stroke-width=2
          stroke="black"/>
    <line x1=${n.toString().length * 10}
          x2=${n.toString().length * 10 + 5}
          y1=10
          y2=15 
          stroke-width=2
          stroke="black"/>
    <line x1=${graph.clientWidth - 25}
          x2=${graph.clientWidth - 20}
          y1=${graph.clientHeight - 25}
          y2=${graph.clientHeight - 20}
          stroke-width=2
          stroke="black"/>
    <line x1=${graph.clientWidth - 25}
          x2=${graph.clientWidth - 20}
          y1=${graph.clientHeight - 15}
          y2=${graph.clientHeight - 20}
          stroke-width=2
          stroke="black"/>
    <text x=20 y=${graph.clientHeight - 5}>0-${n - 1}</text>
    <text x=${graph.clientWidth - 40 - (n * n).toString().length * 10 * 2} y=${
    graph.clientHeight - 5
  }>
          ${(n - 1) * n}-${n * n - 1}
    </text>
    `;
  let graphWidth = graph.clientWidth - 30 - 10 * n.toString().length;
  let graphHeight = graph.clientHeight - 30;
  for (let i = 0; i < n; i++)
    graph.innerHTML += `
            <rect x=${n.toString().length * 10 + (i * graphWidth) / n}
                  y=${
                    graph.clientHeight - 20 - (frequencies[i] * graphHeight) / n
                  }
                  width=${graphWidth / n}
                  height=${(frequencies[i] * graphHeight) / n}
                  stroke-width=2
                  stroke="black"
                  fill="${frequencies[i] > frequencies[i - 1] ? "red" : "blue"}"
            />
        `;
  let mu3 = 0;
  for (let number of numbersInTable) mu3 += Math.pow(number - expectation, 3);
  mu3 /= numbersInTable.size;
  let asymmetry = mu3 / Math.pow(deviation, 3);
  document.getElementById("asymmetry").innerHTML = asymmetry;
  let mu4 = 0;
  for (let number of numbersInTable) mu4 += Math.pow(number - expectation, 4);
  mu4 /= numbersInTable.size;
  let kurtosis = mu4 / Math.pow(deviation, 4);
  document.getElementById("kurtosis").innerHTML = kurtosis;
  const table = document.getElementById("table");
  table.innerHTML = "<tr><th>Range</th><th>Numbers</th><th>Frequency</th></tr>";
  for (let i = 0; i < n; i++)
    table.innerHTML +=
      "<tr><td>" +
      i * n +
      "-" +
      ((i + 1) * n - 1) +
      "</td><td>" +
      tableRow[i] +
      "</td><td>" +
      frequencies[i] +
      "</td></tr>";
  let cumulative = document.getElementById("cumulative");
  cumulative.innerHTML = `
    <line x1=40
          x2=40
          y1=10
          y2=${graph.clientHeight - 20}
          stroke="black"
          stroke-width=2
    />
    <line x1=40
          x2=${graph.clientWidth - 20}
          y1=${graph.clientHeight - 20}
          y2=${graph.clientHeight - 20}
          stroke="black"
          stroke-width=2
    />
    <text x=0 y=20>100%</text>
    <text x=0 y=${graph.clientHeight / 2}>50%</text>
    <text x=0 y=${graph.clientHeight - 30}>0%</text>
    <line x1=35
          x2=40
          y1=15
          y2=10
          stroke-width=2
          stroke="black"/>
    <line x1=40
          x2=45
          y1=10
          y2=15 
          stroke-width=2
          stroke="black"/>
    <line x1=${graph.clientWidth - 25}
          x2=${graph.clientWidth - 20}
          y1=${graph.clientHeight - 25}
          y2=${graph.clientHeight - 20}
          stroke-width=2
          stroke="black"/>
    <line x1=${graph.clientWidth - 25}
          x2=${graph.clientWidth - 20}
          y1=${graph.clientHeight - 15}
          y2=${graph.clientHeight - 20}
          stroke-width=2
          stroke="black"/>
    <text x=40 y=${graph.clientHeight - 5}>0</text>
    <text x=${graph.clientWidth - 40 - (n * n).toString().length * 10} y=${
    graph.clientHeight - 5
  }>
          ${n * n}
    </text>
    `;
  graphWidth = cumulative.clientWidth - 30 - 10 * 4;
  graphHeight = cumulative.clientHeight - 30;
  let sumUntilNow = 0;
  for (let i = 0; i < n; i++) {
    sumUntilNow += frequencies[i];
    cumulative.innerHTML += `
            <rect x=${40 + (i * graphWidth) / n}
                  y=${
                    graph.clientHeight -
                    20 -
                    (sumUntilNow * graphHeight) / numbersInTable.size
                  }
                  width=${graphWidth / n}
                  height=${(sumUntilNow * graphHeight) / numbersInTable.size}
                  stroke-width=2
                  stroke="black"
                  fill="green"
            />
        `;
  }
}
let polynoms = [];
function getRandomPolynom(grade, boundaries) {
  let polynom = [];
  for (let i = 0; i < grade + 1; i++)
    polynom.push(Math.random() * boundaries * 2 - boundaries);
  return polynom;
}
function evaluatePolynomAt(polynom, x) {
  let y = 0;
  for (let i = 0; i < polynom.length; i++)
    y += polynom[i] * Math.pow(x, polynom.length - i - 1);
  return y;
}
function calculateErrorOfTheApproximation(polynom) {
  let error = 0;
  for (let i = 0; i < n; i++)
    error += Math.pow(
      evaluatePolynomAt(polynom, (i + 1 / 2) / n) - frequencies[i] / n,
      4
    );
  error += 3 * Math.pow(evaluatePolynomAt(polynom, 1), 4); //The most important points count for three times more than other points.
  error += 3 * Math.pow(evaluatePolynomAt(polynom, 0) - 1, 4);
  return error;
}
function crossTwoPolynoms(polynom1, polynom2) {
  if (polynom1.length !== polynom2.length) {
    let error = "Polynomials to be crossed aren't of the same grade!";
    alert(error);
    throw error;
  }
  let polynom = [];
  for (let i = 0; i < polynom1.length; i++) {
    if (Math.random() < 1 / 3) polynom.push(polynom1[i]);
    else if (Math.random() < 1 / 2)
      polynom.push((polynom1[i] + polynom2[i]) / 2);
    else polynom.push(polynom2[i]);
    polynom[i] += -1 / 20 + (2 * Math.random()) / 20;
  }
  return polynom;
}
function convertPolynomToString(polynom) {
  let result = "";
  for (let i = 0; i < polynom.length; i++) {
    if (Math.abs(polynom[i]) < 1 / 1000) continue;
    if (polynom[i] >= 0 && i > 0 && result != "")
      result += " + " + Math.round(polynom[i] * 1000) / 1000;
    else if (polynom[i] < -1 / 1000 && i > 0 && result != "")
      result += " - " + Math.abs(Math.round(polynom[i] * 1000) / 1000);
    else result += Math.round(polynom[i] * 1000) / 1000;
    if (i != polynom.length - 1 && i != polynom.length - 2)
      result += "x<sup>" + (polynom.length - i - 1) + "</sup>";
    else if (i == polynom.length - 2) result += "x";
  }
  return result;
}
function curveFitting() {
  calculate();
  const iterations = parseInt(document.getElementById("iterations").value);
  if (isNaN(iterations) || iterations < 1) {
    let error = "We need at least 1 iteration!";
    alert(error);
    throw error;
  }
  const boundaries = 3;
  const grade = 11;
  const numberOfCurves = 12;
  for (let i = 0; i < iterations; i++) {
    if (polynoms.length == 0) {
      if (grade >= 7) {
        polynoms.push([
          -6.025,
          +7.356,
          +2.352,
          -0.717,
          -8.871,
          +8.255,
          -3.354,
          +1.006,
        ]); //An exceptionally good one I found.
        polynoms.push([
          -3.607,
          +4.47,
          +2.519,
          -3.48,
          -3.394,
          +5.413,
          -2.918,
          +1,
        ]); //Another one such.
      }
      if (grade >= 11) {
        polynoms.push([
          -1.896,
          -1.169,
          +1.235,
          +2.761,
          +1.445,
          -0.671,
          -0.364,
          -2.578,
          -1.739,
          +4.905,
          -2.935,
          +1.003,
        ]); //Add an example of a different grade, to ensure variability.
        polynoms.push([
          +0.129,
          -2.8,
          +0.845,
          +1.818,
          -0.053,
          +2.198,
          -0.575,
          -1.334,
          -3.925,
          +5.666,
          -2.969,
          +1,
        ]); //A completely different one of the grade 11, but fitting the curve about as well.
      }
      for (let polynom of polynoms) {
        while (polynom.length < grade + 1) polynom.unshift(0);
      }
      const numberOfExamples = polynoms.length;
      const howManyTimesToCrossTheExamples = 7;
      for (let i = 0; i < numberOfExamples; i++)
        for (let j = 0; j < numberOfExamples; j++)
          if (i !== j)
            for (let k = 0; k < howManyTimesToCrossTheExamples; k++)
              polynoms.push(crossTwoPolynoms(polynoms[i], polynoms[j]));
      for (
        let i = 0;
        i <
        numberOfCurves * numberOfCurves -
          howManyTimesToCrossTheExamples * numberOfExamples * numberOfExamples;
        i++
      )
        polynoms.push(getRandomPolynom(grade, boundaries));
    } else {
      for (let i = 0; i < numberOfCurves; i++)
        for (let j = 0; j < numberOfCurves; j++)
          if (i != j) polynoms.push(crossTwoPolynoms(polynoms[i], polynoms[j]));
    }
    polynoms.sort(
      (polynom1, polynom2) =>
        calculateErrorOfTheApproximation(polynom1) -
        calculateErrorOfTheApproximation(polynom2)
    );
    polynoms.splice(numberOfCurves);
  }
  const table = document.getElementById("curves");
  table.innerHTML = "<tr><th>Fit</th><th>Curve</th><th>Error</th></tr>";
  for (let i = 0; i < polynoms.length; i++)
    table.innerHTML +=
      "<tr><td>#" +
      (i + 1) +
      "</td><td>" +
      convertPolynomToString(polynoms[i]) +
      "</td><td>" +
      calculateErrorOfTheApproximation(polynoms[i]) +
      "</td></tr>";
  const graph = document.getElementById("curve");
  graph.innerHTML = `
    <line x1=30
          x2=30
          y1=10
          y2=${graph.clientHeight - 20}
          stroke="black"
          stroke-width=2
    />
    <line x1=30
          x2=${graph.clientWidth - 20}
          y1=${graph.clientHeight - 20}
          y2=${graph.clientHeight - 20}
          stroke="black"
          stroke-width=2
    />
    <text x=0 y=20>1</text>
    <text x=0 y=${graph.clientHeight / 2}>0.5</text>
    <text x=0 y=${graph.clientHeight - 30}>0</text>
    <line x1=25
          x2=30
          y1=15
          y2=10
          stroke-width=2
          stroke="black"/>
    <line x1=30
          x2=35
          y1=10
          y2=15 
          stroke-width=2
          stroke="black"/>
    <line x1=${graph.clientWidth - 25}
          x2=${graph.clientWidth - 20}
          y1=${graph.clientHeight - 25}
          y2=${graph.clientHeight - 20}
          stroke-width=2
          stroke="black"/>
    <line x1=${graph.clientWidth - 25}
          x2=${graph.clientWidth - 20}
          y1=${graph.clientHeight - 15}
          y2=${graph.clientHeight - 20}
          stroke-width=2
          stroke="black"/>
    <text x=40 y=${graph.clientHeight - 5}>0</text>
    <text x=${graph.clientWidth - 40} y=${graph.clientHeight - 5}>
		1
	</text>
	`;
  const graphWidth = graph.clientWidth - 40;
  const graphHeight = graph.clientHeight - 30;
  let path = "";
  for (let x = 0; x <= 1; x += 1 / 100) {
    let y = evaluatePolynomAt(polynoms[0], x);
    if (y < 0) y = 0;
    if (y > 1) y = 1;
    if (x == 0)
      path +=
        "M " +
        (30 + x * graphWidth) +
        " " +
        (graph.clientHeight - 20 - y * graphHeight) +
        " ";
    else
      path +=
        "L " +
        (30 + x * graphWidth) +
        " " +
        (graph.clientHeight - 20 - y * graphHeight) +
        " ";
  }
  path +=
    "L " +
    (30 + graphWidth * (1 - 1 / 100)) +
    " " +
    (graph.clientHeight - 20) +
    " L 30 " +
    (graph.clientHeight - 20);
  graph.innerHTML +=
    '<path d="' + path + '" fill="blue" stroke="black" stroke-width="2"/>';
  path = "";
  for (let i = 0; i < n; i++) {
    if (i == 0) path += "M ";
    else path += "L ";
    path +=
      +(30 + ((i + 1 / 2) / n) * graphWidth) +
      " " +
      (graph.clientHeight - 20 - (frequencies[i] / n) * graphHeight) +
      " ";
  }
  graph.innerHTML +=
    '<path d="' + path + '" fill="none" stroke="red" stroke-width="2"/>';
}
