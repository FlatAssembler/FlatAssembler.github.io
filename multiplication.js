"use strict";
window.onload=function() {
    document.getElementById("calculate").onclick=calculate;
}
function calculate() {
    const n=parseInt(document.getElementById("input").value);
    if (n<2 || isNaN(n)) {
        alert("Multiplication table needs to have at least two rows and collumns.");
        return;
    }
    const graph=document.getElementById("graph");
    graph.innerHTML="";
    let numbersInTable=new Set();
    for (let i=1; i<=n; i++)
        for (let j=1; j<=n; j++)
            numbersInTable.add(i*j);
    let sum=0;
    for (let number of numbersInTable)
        sum+=number;
    let expectation=sum/numbersInTable.size;
    document.getElementById("expectation").innerHTML=expectation;
    let variance=0;
    for (let number of numbersInTable)
        variance+=Math.pow(number-expectation,2);
    variance/=numbersInTable.size;
    let deviation=Math.sqrt(variance);
    document.getElementById("deviation").innerHTML=deviation;
    let frequencies=[];
    let tableRow=[];
    for (let i=0; i<n+1; i++){
        frequencies[i]=0;
        tableRow[i]="";
    }
    for (let number of numbersInTable) {
        frequencies[Math.floor(number/n)]++;
        tableRow[Math.floor(number/n)]+=number+" ";
    }
    graph.innerHTML+=`
    <line x1=${n.toString().length*10}
          x2=${n.toString().length*10}
          y1=10
          y2=${graph.clientHeight-20}
          stroke="black"
          stroke-width=2
    />
    <line x1=${n.toString().length*10}
          x2=${graph.clientWidth-20}
          y1=${graph.clientHeight-20}
          y2=${graph.clientHeight-20}
          stroke="black"
          stroke-width=2
    />
    <text x=0 y=20>${n}</text>
    <text x=0 y=${graph.clientHeight/2}>${Math.round(n/2)}</text>
    <text x=0 y=${graph.clientHeight-30}>0</text>
    <line x1=${n.toString().length*10-5}
          x2=${n.toString().length*10}
          y1=15
          y2=10
          stroke-width=2
          stroke="black"/>
    <line x1=${n.toString().length*10}
          x2=${n.toString().length*10+5}
          y1=10
          y2=15 
          stroke-width=2
          stroke="black"/>
    <line x1=${graph.clientWidth-25}
          x2=${graph.clientWidth-20}
          y1=${graph.clientHeight-25}
          y2=${graph.clientHeight-20}
          stroke-width=2
          stroke="black"/>
    <line x1=${graph.clientWidth-25}
          x2=${graph.clientWidth-20}
          y1=${graph.clientHeight-15}
          y2=${graph.clientHeight-20}
          stroke-width=2
          stroke="black"/>
    <text x=20 y=${graph.clientHeight-5}>0-${n-1}</text>
    <text x=${graph.clientWidth-40-(n*n).toString().length*10*2} y=${graph.clientHeight-5}>
          ${(n-1)*n}-${n*n-1}
    </text>
    `;
    let graphWidth=graph.clientWidth-30-10*n.toString().length;
    let graphHeight=graph.clientHeight-30;
    for (let i=0; i<n; i++)
        graph.innerHTML+=`
            <rect x=${n.toString().length*10+i*graphWidth/n}
                  y=${graph.clientHeight-20-frequencies[i]*graphHeight/n}
                  width=${graphWidth/n}
                  height=${frequencies[i]*graphHeight/n}
                  stroke-width=2
                  stroke="black"
                  fill="${frequencies[i]>frequencies[i-1]?"red":"blue"}"
            />
        `;
    let mu3=0;
    for (let number of numbersInTable)
        mu3+=Math.pow(number-expectation,3);
    mu3/=numbersInTable.size;
    let asymmetry=mu3/Math.pow(deviation,3);
    document.getElementById("asymmetry").innerHTML=asymmetry;
    const table=document.getElementById("table");
    table.innerHTML="<tr><th>Range</th><th>Numbers</th><th>Frequency</th></tr>";
    for (let i=0; i<n; i++)
        table.innerHTML+="<tr><td>"+(i*n)+"-"+((i+1)*n-1)+"</td><td>"+tableRow[i]+
        "</td><td>"+frequencies[i]+"</td></tr>";
    let cumulative=document.getElementById("cumulative");
    cumulative.innerHTML=`
    <line x1=40
          x2=40
          y1=10
          y2=${graph.clientHeight-20}
          stroke="black"
          stroke-width=2
    />
    <line x1=40
          x2=${graph.clientWidth-20}
          y1=${graph.clientHeight-20}
          y2=${graph.clientHeight-20}
          stroke="black"
          stroke-width=2
    />
    <text x=0 y=20>100%</text>
    <text x=0 y=${graph.clientHeight/2}>50%</text>
    <text x=0 y=${graph.clientHeight-30}>0%</text>
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
    <line x1=${graph.clientWidth-25}
          x2=${graph.clientWidth-20}
          y1=${graph.clientHeight-25}
          y2=${graph.clientHeight-20}
          stroke-width=2
          stroke="black"/>
    <line x1=${graph.clientWidth-25}
          x2=${graph.clientWidth-20}
          y1=${graph.clientHeight-15}
          y2=${graph.clientHeight-20}
          stroke-width=2
          stroke="black"/>
    <text x=40 y=${graph.clientHeight-5}>0</text>
    <text x=${graph.clientWidth-40-(n*n).toString().length*10} y=${graph.clientHeight-5}>
          ${n*n}
    </text>
    `;
    graphWidth=cumulative.clientWidth-30-10*4;
    graphHeight=cumulative.clientHeight-30;
    let sumUntilNow=0; 
    for (let i=0; i<n; i++) {
        sumUntilNow+=frequencies[i]; 
        cumulative.innerHTML+=`
            <rect x=${40+i*graphWidth/n}
                  y=${graph.clientHeight-20-sumUntilNow*graphHeight/(numbersInTable.size)}
                  width=${graphWidth/n}
                  height=${sumUntilNow*graphHeight/(numbersInTable.size)}
                  stroke-width=2
                  stroke="black"
                  fill="green"
            />
        `;
    }
}
