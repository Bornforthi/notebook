/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
export const mathSchema = {
    nodes: {
        math_inline: {
            // important!
            group: "inline math",
            content: "text*",
            inline: true,
            atom: true,
            toDOM: () => ["math-inline", { class: "math-node" }, 0],
            parseDOM: [
                {
                    tag: "math-inline", // important!
                },
            ],
        },
        math_display: {
            // important!
            group: "block math",
            content: "text*",
            atom: true,
            code: true,
            toDOM: () => ["math-display", { class: "math-node" }, 0],
            parseDOM: [
                {
                    tag: "math-display", // important!
                },
            ],
        },
    },
    // marks: {
    //     math_select: {
    //         toDOM() { return ["math-select", 0]; },
    //         parseDOM: [{ tag: "math-select" }]
    //     }
    // }
};
//# sourceMappingURL=math.js.map