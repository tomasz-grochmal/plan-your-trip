import {Component, AfterViewInit} from 'angular2/core';
import {GraphGenerator} from '../../shared/services/graph-generator.service';
import {VisComponent} from '../../shared/components/vis.component';

@Component({
    selector: 'sd-graph',
    moduleId: module.id,
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.css'],
    directives: [VisComponent]
})
export class GraphComponent implements AfterViewInit {
    constructor(
        public graphGenerator: GraphGenerator,
        public vis: VisComponent) { }

    ngAfterViewInit() {
        let graph = this.graphGenerator.generate(10);
        this.vis.setData(graph);
        this.vis.randerNet();
    }

    createGraph(): boolean {
        let graph = this.graphGenerator.generate(10);
        this.vis.setData(graph);
        this.vis.randerNet();
        return true;
    }
}
