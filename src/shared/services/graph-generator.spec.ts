//// <reference path="../../../typings/main/ambient/jasmine/index.d.ts" />

import {GraphGenerator} from './graph-generator.service';

export function main() {
    describe('GraphGenerator Service', () => {
        let gg: GraphGenerator;

        beforeEach(() => {
            gg = new GraphGenerator;
        });

        it('should return graph with 0 nodes', () => {
            let g = gg.generate(0);
            expect(g.nodes.length).toEqual(0);
            expect(g.edges.length).toEqual(0);
        });

        it('should return graph with 1 node and 0 edges', () => {
            let g = gg.generate(1);
            expect(g.nodes.length).toEqual(1);
            expect(g.edges.length).toEqual(0);
        });

        it('should return graph with 2 nodes and one edge between', () => {
            let g = gg.generate(2);
            expect(g.nodes.length).toEqual(2);
            expect(g.edges.length).toEqual(2);
        });
    });
}
