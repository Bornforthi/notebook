import { Keymap } from "prosemirror-commands";
import { Schema } from "prosemirror-model";
export declare function buildKeymap(schema: Schema, mapKeys: Record<string, string | false>): Keymap;
