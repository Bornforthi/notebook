/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { TextSelection } from "prosemirror-state";
const prosemirrorPromise = import(/* webpackChunkName: "prosemirror", webpackPrefetch: true */ "./prosemirror/module");
let prosemirrorModule;
prosemirrorPromise.then((pm) => (prosemirrorModule = pm));
/**
 * The main WYSIWYM (what you see is what you mean) content editor for Markdown content in Starboard.
 */
let StarboardContentEditor = class StarboardContentEditor extends LitElement {
    constructor(content, runtime) {
        super();
        this.runtime = runtime;
        this.content = content;
        prosemirrorPromise.then((pm) => {
            this.view = pm.createProseMirrorEditor(this, this.content, this.runtime);
        });
    }
    createRenderRoot() {
        return this;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && this.view && this.view.hasFocus()) {
                if (event.ctrlKey) {
                    event.stopPropagation();
                    return true;
                }
                else if (event.shiftKey) {
                    event.stopPropagation();
                    return true;
                }
            }
        });
        prosemirrorPromise.then((_pm) => {
            var _a;
            if (this.view) {
                (_a = this.querySelector(".ProseMirror")) === null || _a === void 0 ? void 0 : _a.classList.add("markdown-body");
            }
            else {
                console.warn("ProseMirror plugin: view is undefined in connected callback");
            }
        });
    }
    getContentAsMarkdownString() {
        // If the prosemirror module hasn't been loaded yet we just take it from the cell's content itself as it cant' be stale
        if (prosemirrorModule && this.view) {
            return prosemirrorModule.defaultMarkdownSerializer.serialize(this.view.state.doc);
        }
        return this.content.textContent;
    }
    focus() {
        if (this.view) {
            this.view.dispatch(this.view.state.tr.setSelection(TextSelection.atStart(this.view.state.doc)));
            this.view.focus();
        }
    }
    setCaretPosition(position) {
        if (this.view) {
            if (position === "start") {
                this.view.dispatch(this.view.state.tr.setSelection(TextSelection.atStart(this.view.state.doc)));
            }
            else if (position === "end") {
                this.view.dispatch(this.view.state.tr.setSelection(TextSelection.atEnd(this.view.state.doc)));
            }
        }
    }
    dispose() {
        if (this.view) {
            this.view.destroy();
            this.view = undefined;
        }
    }
};
StarboardContentEditor = __decorate([
    customElement("starboard-content-editor")
], StarboardContentEditor);
export { StarboardContentEditor };
//# sourceMappingURL=contentEditor.js.map