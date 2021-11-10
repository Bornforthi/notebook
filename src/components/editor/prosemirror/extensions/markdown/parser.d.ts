import { Node, Schema } from "prosemirror-model";
import MarkdownIt from "markdown-it";
export declare class MarkdownParser {
    tokens: any;
    schema: any;
    tokenizer: any;
    tokenHandlers: any;
    constructor(schema: Schema, tokenizer: MarkdownIt, tokens: {
        [key: string]: any;
    });
    parse(text: string): Node;
}
export declare function createMarkdownParser(schema: Schema): MarkdownParser;
