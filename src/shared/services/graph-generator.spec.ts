//// <reference path="../../../typings/main/ambient/jasmine/index.d.ts" />

import {GraphGenerator, Graph} from './graph-generator.service';

export function main() {
    describe('GraphGenerator Service', () => {
        let gg: GraphGenerator;

        beforeEach(() => {
            gg = new GraphGenerator;
        });

        it('graph with 0 nodes should return empty graph', () => {
            let g = gg.generate(0);
            expect(g.nodes.length).toEqual(0);
            expect(g.edges.length).toEqual(0);
        });
        
        it('graph with one node should have 1 node and 0 edge', () => {
            let g = gg.generate(1);
            expect(g.nodes.length).toEqual(1);
            expect(g.edges.length).toEqual(0);
        });
    });
}
