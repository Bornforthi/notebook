/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import { Plugin as ProsePlugin, PluginKey } from "prosemirror-state";
import { MathView } from "./nodeView";
// uniquely identifies the prosemirror-math plugin
const MATH_PLUGIN_KEY = new PluginKey("prosemirror-math");
/**
 * Returns a function suitable for passing as a field in `EditorProps.nodeViews`.
 * @param displayMode TRUE for block math, FALSE for inline math.
 * @see https://prosemirror.net/docs/ref/#view.EditorProps.nodeViews
 */
export function createMathView(displayMode) {
    return (node, view, getPos) => {
        /** @todo is this necessary?
         * Docs says that for any function proprs, the current plugin instance
         * will be bound to `this`.  However, the typings don't reflect this.
         */
        const pluginState = MATH_PLUGIN_KEY.getState(view.state);
        if (!pluginState)
            throw new Error("no math plugin!");
        const nodeViews = pluginState.activeNodeViews;
        // set up NodeView
        const nodeView = new MathView(node, view, getPos, { katexOptions: { displayMode, macros: pluginState.macros } }, MATH_PLUGIN_KEY, //TODO why is this cast necessary?
        () => {
            nodeViews.splice(nodeViews.indexOf(nodeView));
        });
        nodeViews.push(nodeView);
        return nodeView;
    };
}
const mathPluginSpec = {
    key: MATH_PLUGIN_KEY,
    state: {
        init(_config, _instance) {
            return {
                macros: {},
                activeNodeViews: [],
                prevCursorPos: 0,
            };
        },
        apply(_tr, value, oldState, _newState) {
            // produce updated state field for this plugin
            return {
                // these values are left unchanged
                activeNodeViews: value.activeNodeViews,
                macros: value.macros,
                // update with the second-most recent cursor pos
                prevCursorPos: oldState.selection.from,
            };
        },
        /** @todo (8/21/20) implement serialization for math plugin */
        // toJSON(value) { },
        // fromJSON(config, value, state){ return {}; }
    },
    props: {
        nodeViews: {
            math_inline: createMathView(false),
            math_display: createMathView(true),
        },
    },
};
export const mathPlugin = new ProsePlugin(mathPluginSpec);
//# sourceMappingURL=plugin.js.map