import { Mark, Node } from "prosemirror-model";
export declare class MarkdownSerializerState {
    marks: any;
    out: any;
    nodes: any;
    delim: string;
    closed: false | Node;
    inTightList: boolean;
    options: any;
    constructor(nodes: any, marks: any, options: any);
    flushClose(size?: number): void;
    wrapBlock(delim: string, firstDelim: string | null, node: Node, f: () => any): void;
    atBlank(): boolean;
    ensureNewLine(): void;
    write(content?: string): void;
    closeBlock(node: Node): void;
    text(text: string, escape?: boolean): void;
    render(node: Node, parent: Node | number, index: number): void;
    renderContent(parent: Node): void;
    renderInline(parent: Node): void;
    renderList(node: Node, delim: string, firstDelim: (n: number) => string): void;
    esc(str: string, startOfLine?: boolean): string;
    quote(str: string): string;
    repeat(str: string, n: number): string;
    markString(mark: Mark, open: boolean, parent: unknown, index: number): any;
    getEnclosingWhitespace(text: string): {
        leading?: string;
        trailing?: string;
    };
}
