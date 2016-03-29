
export class Node {
    id: number;
    exitEdge: Edge[];
    enterEdge: Edge[];

    constructor() {
        this.exitEdge = [];
        this.enterEdge = [];
    }
}

export class Edge {
    id: number;
    from: Node;
    to: Node;

    constructor(_id: number, _from: Node, _to: Node) {
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
}

export class GraphGenerator {
    private lastNodeIndex: number;
    private lastEdgeIndex: number;

    constructor() { }

    generate(nNodes: number): Graph {
        this.lastNodeIndex = 0;
        this.lastEdgeIndex = 0;

        let graph = new Graph();
        for (var i = 0; i < nNodes; i++) {
            let node = new Node();
            this.addNode(graph, node);
        }
        return graph;
    }

    private addNode(graph: Graph, node: Node): number {
        graph.nodes.forEach(nodeInGraph => {
            let edgeFrom = new Edge(this.lastEdgeIndex++, node, nodeInGraph);
            let edgeTo = new Edge(this.lastEdgeIndex++, nodeInGraph, node);
            graph.edges.push(edgeFrom);
            graph.edges.push(edgeTo);
            nodeInGraph.enterEdge.push(edgeFrom);
            nodeInGraph.exitEdge.push(edgeTo);
            node.enterEdge.push(edgeTo);
            node.exitEdge.push(edgeFrom);
        });
        node.id = this.lastNodeIndex++;
        return graph.nodes.push(node);
    }
}
