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
/* This file contains routines for ensuring that the body of the notebook will be large enough to fit
certain elements. In particular dropdowns that are too large, but this could be applied to any absolutely-positioned stuff.

This is relevant when using Starboard in an iframe, if the iframe is only 100px high and the dropdown is 200px it makes
it impossible to see the bottom half without this.
*/
const watchedElements = new Map();
let currentLargestElement = undefined;
let currentBodyMinHeight = 0;
let observer;
function setBodyToLargestWatchedElement() {
    let newMax = 0;
    currentLargestElement = undefined;
    // Theoretically we could maintain a sorted list and save some big(O), but
    // in practice there won't be more than a couple of these elements active anyway.
    for (const [element, height] of watchedElements.entries()) {
        if (height > newMax) {
            currentLargestElement = element;
            newMax = height;
        }
    }
    if (currentBodyMinHeight !== newMax) {
        document.body.style.minHeight = Math.ceil(newMax) + "px";
        currentBodyMinHeight = newMax;
    }
}
function updateElementMinHeight(el) {
    // We actually check how far
    const elementMinBodyHeight = el.getBoundingClientRect().bottom;
    watchedElements.set(el, elementMinBodyHeight);
    if (elementMinBodyHeight <= currentBodyMinHeight && currentLargestElement !== el) {
        return;
    }
    setBodyToLargestWatchedElement();
}
try {
    observer = new ResizeObserver((entries) => {
        const el = entries[0].target;
        // Should never happen
        if (!watchedElements.has(el)) {
            console.error("An unwatched element triggered the resize observer.");
            return;
        }
        updateElementMinHeight(el);
    });
}
catch (e) {
    console.warn("ResizeObserver is not supported in this browser, the iframe will not resize automatically to display some larger-than-iframe elements.");
    observer = { observe: () => 0, unobserve: () => 0 }; // Dummy
}
/**
 * Care must be taken to remove the element later, as otherwise it won't be garbage collected.
 * @param element
 */
function ensureFitsInBody(element) {
    observer.observe(element);
    watchedElements.set(element, 0);
    updateElementMinHeight(element);
}
function removeEnsureFitsInBody(element) {
    observer.unobserve(element);
    watchedElements.delete(element);
    if (currentLargestElement === element) {
        setBodyToLargestWatchedElement();
    }
}
let EnsureParentFitsElement = class EnsureParentFitsElement extends LitElement {
    connectedCallback() {
        if (this.parentElement)
            ensureFitsInBody(this.parentElement);
    }
    disconnectedCallback() {
        if (this.parentElement)
            removeEnsureFitsInBody(this.parentElement);
    }
};
EnsureParentFitsElement = __decorate([
    customElement("starboard-ensure-parent-fits")
], EnsureParentFitsElement);
export { EnsureParentFitsElement };
//# sourceMappingURL=minimumBodySize.js.map