
export class Edge {
    Id: Number;
}

export class Node {
    Id: Number;
    constructor(_id: Number) {
        this.Id = _id;
    }
}

export class Graph {
    nodes: Node[];
    edges: Edge[];
    constructor() {
        this.nodes = [];
        this.edges = [];
    }
    addNode(node: Node): boolean {
        this.nodes.push(node);
        return false;
    }
}

export class GraphGenerator {
  generate(nNodes: Number):Graph {
      let graph = new Graph();
      for (var i = 0; i < nNodes; i++) {
          let node = new Node(i);
          graph.addNode(node);      
      }
      return graph;
  }
}
