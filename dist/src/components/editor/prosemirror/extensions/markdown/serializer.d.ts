import { Node } from "prosemirror-model";
export declare class MarkdownSerializer {
    nodes: any;
    marks: any;
    constructor(nodes: unknown, marks: unknown);
    serialize(content: Node, options?: any): any;
}
export declare function createMarkdownSerializer(): MarkdownSerializer;
