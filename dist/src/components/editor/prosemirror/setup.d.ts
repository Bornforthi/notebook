import { Plugin } from "prosemirror-state";
import { buildMenuItems } from "./menu";
import { buildKeymap } from "./keymap";
import { buildInputRules } from "./inputrules";
import { Schema } from "prosemirror-model";
export { buildInputRules, buildKeymap, buildMenuItems };
export declare function setupPlugins(options: {
    schema: Schema;
    mapKeys?: any;
    menuBar?: boolean;
    floatingMenu?: boolean;
    menuContent?: any;
}): Plugin<any, any>[];
