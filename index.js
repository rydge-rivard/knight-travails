function Graph(noOfVertices, AdjList) {
  AdjList = new Map();

  function addVertex(v) {
    this.AdjList.set(v, []);
  }

  function addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  function printGraph() {
    var getKeys = this.AdjList.keys();
    for (var i of getKeys) {
      var getValues = this.AdjList.get(i);
      var conc = "";
      for (var j of getValues) conc += j + " ";
      console.log(i + " -> " + conc);
    }
  }

  return { noOfVertices, AdjList, addVertex, addEdge, printGraph };
}

const b = Graph(49);
const verticesN = ["1", "2", "3", "4", "5", "6", "7", "8"];
const verticesL = ["A", "B", "C", "D", "E", "F", "G", "H"];

for (var i = 0; i < verticesL.length; i++) {
  const letter = verticesL[i];
  for (var j = 0; j < verticesN.length; j++) {
    b.addVertex(`(${letter}${verticesN[j]})`);
    console.log(`(${letter}${verticesN[j]})`);
    // b.addEdge("0", "0");
  }
}

// b.addEdge("0", "0");
// b.addEdge("0", "1");
// b.addEdge("0", "2");
// b.addEdge("0", "3");
// b.addEdge("0", "4");
// b.addEdge("0", "5");
// b.addEdge("0", "6");
// b.addEdge("0", "7");

// b.printGraph();
