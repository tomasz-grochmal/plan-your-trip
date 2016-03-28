

export class Node {
    id: Number;
    from: Edge[];
    to: Edge[];
    constructor(_id: Number) {
        this.id = _id;
        this.from = [];
        this.to = [];
    }
}

export class Edge {
    id: Number;
    from: Node;
    to: Node;

    constructor(_id: Number, _from: Node, _to: Node) {
        this.id = _id;
        this.from = _from;
        this.to = _to;
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
