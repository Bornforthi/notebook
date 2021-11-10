import { MenuItem } from "prosemirror-menu";
import { Schema } from "prosemirror-model";
export declare function buildMenuItems(schema: Schema): {
    [key: string]: MenuItem<any>;
    insertMenu?: any;
    inlineMenu?: any;
    typeMenu?: any;
    blockMenu?: any;
};
