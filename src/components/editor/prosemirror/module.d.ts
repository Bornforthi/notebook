import { EditorView } from "prosemirror-view";
import { EditorState, Plugin } from "prosemirror-state";
import { Runtime } from "../../../types";
export interface ContentContainer {
    textContent: string;
}
declare const defaultMarkdownSerializer: import("./extensions/markdown/serializer").MarkdownSerializer;
export { defaultMarkdownSerializer, EditorState, EditorView, Plugin };
export declare function createProseMirrorEditor(element: HTMLElement, content: ContentContainer, _runtime: Runtime): EditorView<any>;
