import { NodeType, Schema } from "prosemirror-model";
export declare function blockQuoteRule<T extends Schema>(nodeType: NodeType<T>): import("prosemirror-inputrules").InputRule<T>;
export declare function orderedListRule<T extends Schema>(nodeType: NodeType<T>): import("prosemirror-inputrules").InputRule<T>;
export declare function bulletListRule<T extends Schema>(nodeType: NodeType<T>): import("prosemirror-inputrules").InputRule<T>;
export declare function codeBlockRule<T extends Schema>(nodeType: NodeType<T>): import("prosemirror-inputrules").InputRule<T>;
export declare function headingRule<T extends Schema>(nodeType: NodeType<T>, maxLevel: number): import("prosemirror-inputrules").InputRule<T>;
export declare function buildInputRules(schema: Schema): import("prosemirror-state").Plugin<unknown, any>;
