/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import { render } from "lit";
import mdlib from "markdown-it";
import { BaseCellHandler } from "./base";
import { cellControlsTemplate } from "../components/controls";
import { StarboardTextEditor } from "../components/textEditor";
import { promiseState } from "./javascript/util";
import { hookMarkdownItToCodemirrorHighlighter } from "../components/helpers/highlight";
import { hookMarkdownItToEmojiPlugin } from "../components/helpers/emoji";
import { hookMarkdownItToKaTeX } from "../components/helpers/katex";
import { StarboardContentEditor } from "../components/editor/contentEditor";
import { hasParentWithId } from "../components/helpers/dom";
const md = new mdlib({ html: true });
hookMarkdownItToCodemirrorHighlighter(md);
hookMarkdownItToEmojiPlugin(md);
const katexHookPromise = hookMarkdownItToKaTeX(md);
async function isKatexAlreadyLoaded() {
    return (await promiseState(katexHookPromise)) === "fulfilled";
}
const DEFAULT_EDIT_MODE = "code";
export const MARKDOWN_CELL_TYPE_DEFINITION = {
    name: "Markdown",
    cellType: ["markdown", "md"],
    createHandler: (c, r) => new MarkdownCellHandler(c, r),
};
export class MarkdownCellHandler extends BaseCellHandler {
    constructor(cell, runtime) {
        super(cell, runtime);
        this.editMode = "display";
    }
    getControls() {
        let editOrRunButton;
        if (this.editMode === "code") {
            editOrRunButton = {
                icon: "bi bi-type",
                tooltip: "Edit as rich text",
                callback: () => {
                    setTimeout(() => this.editor && this.editor.focus());
                    this.enterEditMode("wysiwyg");
                },
            };
        }
        else if (this.editMode === "wysiwyg") {
            editOrRunButton = {
                icon: "bi bi-code-slash",
                tooltip: "Edit markdown source directly",
                callback: () => {
                    setTimeout(() => this.editor && this.editor.focus());
                    this.enterEditMode("code");
                },
            };
        }
        else {
            editOrRunButton = {
                icon: "bi-pencil-square",
                tooltip: "Edit Markdown",
                callback: () => {
                    this.enterEditMode(DEFAULT_EDIT_MODE);
                    setTimeout(() => this.editor && this.editor.focus());
                },
            };
        }
        return cellControlsTemplate({ buttons: [editOrRunButton] });
    }
    attach(params) {
        this.elements = params.elements;
        if (this.cell.textContent !== "") {
            // Initial render
            this.run();
        }
        const topElement = this.elements.topElement;
        topElement.addEventListener("dblclick", (_event) => {
            if (this.editMode === "display") {
                this.enterEditMode(DEFAULT_EDIT_MODE);
            }
        });
        // The cell itself loses focus to somewhere outside of the cell, in that case we just render Markdown itself again.
        this.elements.cell.addEventListener("focusout", (event) => {
            if (this.editMode !== "display" &&
                (!event.relatedTarget || !hasParentWithId(event.relatedTarget, this.cell.id))) {
                setTimeout(() => {
                    // Workaround for some plugins (prosemirror-math) focusing later in the same tick.
                    if (!hasParentWithId(document.activeElement, this.cell.id)) {
                        this.run();
                    }
                }, 0);
            }
        });
        if (this.cell.textContent === "") {
            this.enterEditMode(DEFAULT_EDIT_MODE);
        }
    }
    setupEditor() {
        const topElement = this.elements.topElement;
        topElement.innerHTML = "";
        if (this.editMode === "code") {
            this.editor = new StarboardTextEditor(this.cell, this.runtime, {
                language: "markdown",
                wordWrap: "on",
            });
        }
        else {
            this.editor = new StarboardContentEditor(this.cell, this.runtime);
        }
        topElement.appendChild(this.editor);
    }
    enterEditMode(mode) {
        if (this.editor) {
            this.editor.dispose();
        }
        this.editMode = mode;
        this.setupEditor();
        render(this.getControls(), this.elements.topControlsElement);
    }
    async run() {
        this.editMode = "display";
        const topElement = this.elements.topElement;
        topElement.innerHTML = "";
        const outDiv = document.createElement("div");
        outDiv.classList.add("markdown-body");
        outDiv.innerHTML = md.render(this.cell.textContent);
        // Re-render when katex becomes available
        if (!(await isKatexAlreadyLoaded())) {
            // Possible improvement: we could detect if any latex is present before we load katex
            katexHookPromise.then(() => (outDiv.innerHTML = md.render(this.cell.textContent)));
        }
        topElement.appendChild(outDiv);
        render(this.getControls(), this.elements.topControlsElement);
    }
    async dispose() {
        if (this.editor) {
            this.editor.dispose();
        }
    }
    focusEditor(opts) {
        var _a;
        this.enterEditMode(DEFAULT_EDIT_MODE);
        setTimeout(() => {
            var _a;
            if (this.editor) {
                this.editor.focus();
                this.editor.setCaretPosition((_a = opts.position) !== null && _a !== void 0 ? _a : "start");
            }
        });
        if (this.editor) {
            this.editor.focus();
            this.editor.setCaretPosition((_a = opts.position) !== null && _a !== void 0 ? _a : "start");
        }
    }
    clear() {
        // Do nothing
    }
}
//# sourceMappingURL=markdown.js.map