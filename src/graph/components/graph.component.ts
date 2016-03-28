import {Component} from 'angular2/core';
import {GraphGenerator} from '../../shared/services/graph-generator.service';

@Component({
  selector: 'sd-graph',
  moduleId: module.id,
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
    constructor(public graphGenerator: GraphGenerator) {}
    
    createGraph(): boolean {
        let graph = this.graphGenerator.generate(10);
        return true;
    }
}
