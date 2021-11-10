import { LitElement } from "lit";
import type { EditorView } from "prosemirror-view";
import { Runtime } from "../../types";
import { ContentContainer } from "./prosemirror/module";
/**
 * The main WYSIWYM (what you see is what you mean) content editor for Markdown content in Starboard.
 */
export declare class StarboardContentEditor extends LitElement {
    view?: EditorView<any>;
    private content;
    private runtime;
    createRenderRoot(): this;
    constructor(content: ContentContainer, runtime: Runtime);
    connectedCallback(): void;
    getContentAsMarkdownString(): any;
    focus(): void;
    setCaretPosition(position: "start" | "end"): void;
    dispose(): void;
}
