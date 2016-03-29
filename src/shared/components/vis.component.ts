import {Component} from 'angular2/core';
import {Graph} from '../services/graph-generator.service';

declare var vis: any;

interface IVisNode {
    id: number;
    label: string;
}

interface IVisEdge {
    from: number;
    to: number;
}

interface IVisSettings {
    physics: any;
}

@Component({
    selector: 'sd-vis-network',
    moduleId: module.id,
    templateUrl: './vis.component.html',
    styleUrls: ['./vis.component.css']
})
export class VisComponent {

    private visNodes: IVisNode[];
    private visEdges: IVisEdge[];
    private visSettings: IVisSettings;

    constructor() {
        this.visSettings = {
            physics: {
                enabled: false,
                stabilization: { iterations: 1000 }
            }
        };
    }

    setData(graph: Graph): any {
        this.visNodes = [];
        this.visEdges = [];

        graph.nodes.forEach(node => {
            this.visNodes.push({
                id: node.id,
                label: 'Place: ' + node.id
            });
        });
        graph.edges.forEach(edge => {
            let normEdge = {
                from: edge.from.id,
                to: edge.to.id
            };
            let inverseEdge = {
                to: edge.from.id,
                from: edge.to.id
            };
            if (this.visEdges.indexOf(inverseEdge) < 0) {
                this.visEdges.push(normEdge);
            };
        });
    }

    randerNet(): any {
        var container = document.getElementById('vis-net');
        var data = {
            nodes: this.visNodes,
            edges: this.visEdges
        };
        return new vis.Network(container, data, this.visSettings);
    }
}
