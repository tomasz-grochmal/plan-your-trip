//// <reference path="../../../typings/main/ambient/jasmine/index.d.ts" />

import {GraphGenerator} from './graph-generator.service';

export function main() {
    describe('GraphGenerator Service', () => {
        let gg: GraphGenerator;
        const N_NODES = 10;

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

        it('should return graph with 2 nodes and 2 edges', () => {
            let g = gg.generate(2);
            expect(g.nodes.length).toEqual(2);
            expect(g.edges.length).toEqual(2);
        });

        it('should return graph with edges pointed to connected nodes', () => {
            let g = gg.generate(2);
            let nodeA = g.nodes[0];
            let nodeB = g.nodes[1];
            let edgeA = g.edges[0];
            let edgeB = g.edges[1];
            if(edgeA.from.id === nodeA.id) {
                expect(edgeA.from).toEqual(nodeA);
                expect(edgeA.to).toEqual(nodeB);
            } else {
                expect(edgeA.from).toEqual(nodeB);
                expect(edgeA.to).toEqual(nodeA);
            }
            if(edgeB.from.id === nodeA.id) {
                expect(edgeB.from).toEqual(nodeA);
                expect(edgeB.to).toEqual(nodeB);
            } else {
                expect(edgeB.from).toEqual(nodeB);
                expect(edgeB.to).toEqual(nodeA);
            }
        });

        it('should return graph with nodes with 1 exit and 1 enter edge', () => {
            let g = gg.generate(2);
            let nodeA = g.nodes[0];
            let nodeB = g.nodes[1];
            expect(nodeA.exitEdge.length).toEqual(1);
            expect(nodeA.enterEdge.length).toEqual(1);
            expect(nodeB.exitEdge.length).toEqual(1);
            expect(nodeB.enterEdge.length).toEqual(1);
        });

        it('should return graph with nodes pointed to connected edges', () => {
            let g = gg.generate(2);
            let nodeA = g.nodes[0];
            let nodeB = g.nodes[1];
            expect(nodeA.exitEdge[0].from).toEqual(nodeA);
            expect(nodeA.exitEdge[0].to).toEqual(nodeB);
            expect(nodeA.enterEdge[0].from).toEqual(nodeB);
            expect(nodeA.enterEdge[0].to).toEqual(nodeA);
        });

        it('should return graph with n-1 edges from each node', () => {
            let g = gg.generate(N_NODES);
            g.nodes.forEach(node => {
                expect(node.exitEdge.length).toEqual(N_NODES-1);
                expect(node.enterEdge.length).toEqual(N_NODES-1);
            });
        });

        it('should return graph with edges not pointed to exit node', () => {
            let g = gg.generate(N_NODES);
            g.nodes.forEach(node => {
                node.exitEdge.forEach(edge => {
                    expect(edge.to).not.toEqual(node);
                });
            });
        });

        it('should return graph with edges pointed to enter node', () => {
            let g = gg.generate(N_NODES);
            g.nodes.forEach(node => {
                node.enterEdge.forEach(edge => {
                    expect(edge.to).toEqual(node);
                });
            });
        });
    });
}
