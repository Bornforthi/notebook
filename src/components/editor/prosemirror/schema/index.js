/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import { markdownSchema } from "./markdown";
import { mathSchema } from "./math";
import { Schema } from "prosemirror-model";
function merge(s1, s2) {
    return {
        nodes: {
            ...s1.nodes,
            ...s2.nodes,
        },
        marks: {
            ...s1.marks,
            ...s2.marks,
        },
    };
}
export function createSchemaSpec() {
    return merge(markdownSchema, mathSchema);
}
export function createSchema() {
    return new Schema(createSchemaSpec());
}
//# sourceMappingURL=index.js.map