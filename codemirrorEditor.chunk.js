(self.webpackChunkBornforthi_notebook=self.webpackChunkBornforthi_notebook||[]).push([["codemirrorEditor"],{"./src/components/editor/codemirror/editor.ts":(e,o,r)=>{"use strict";r.r(o),r.d(o,{createCodeMirrorEditor:()=>j});var t=r("./node_modules/@codemirror/view/dist/index.js"),d=r("./node_modules/@codemirror/state/dist/index.js"),i=r("./node_modules/@codemirror/commands/dist/index.js"),s=r("./node_modules/@codemirror/matchbrackets/dist/index.js"),n=r("./node_modules/@codemirror/closebrackets/dist/index.js"),a=r("./node_modules/@codemirror/fold/dist/index.js"),l=r("./node_modules/@codemirror/gutter/dist/index.js"),c=r("./node_modules/@codemirror/comment/dist/index.js"),m=r("./node_modules/@codemirror/history/dist/index.js"),p=r("./node_modules/@codemirror/autocomplete/dist/index.js"),g=r("./node_modules/@codemirror/search/dist/index.js"),u=r("./src/components/editor/codemirror/highlightStyle.ts"),f=r("./src/components/editor/codemirror/languages.ts");const x=[(0,s.n)(),(0,n.vQ)(),(0,a.Hl)(),(0,l.Eu)(),(0,a.mi)(),(0,t.AE)(),u.j,(0,t.ZO)(),(0,g.sW)(),(0,m.m8)(),t.$f.of([{key:"Shift-Enter",run:()=>!0},...i.wQ,...c.Du,...p.B1,...m.f$,...a.e7,...g.Lp]),(0,p.ys)()];function j(e,o,r,i){const s=t.tk.updateListener.of((e=>{e.docChanged&&(o.textContent=e.state.doc.toString())})),n=new d.F6,a=t.tk.editable.of(!o.metadata.properties.locked),l=t.$f.of([{key:"ArrowUp",run:e=>{if(1===e.state.selection.ranges.length&&e.state.selection.ranges[0].empty){const r=e.state.doc.line(1),t=e.state.selection.ranges[0].head;if(r.from<=t&&t<=r.to)return i.controls.focusCell({id:o.id,focusTarget:"previous"})}return!1}},{key:"ArrowDown",run:e=>{if(1===e.state.selection.ranges.length&&e.state.selection.ranges[0].empty){const r=e.state.doc.line(e.state.doc.lines),t=e.state.selection.ranges[0].head;if(r.from<=t&&t<=r.to)return i.controls.focusCell({id:o.id,focusTarget:"next"})}return!1}}]),c=(0,f.A)(r.language),m=new t.tk({state:d.yy.create({doc:0===o.textContent.length?void 0:o.textContent,extensions:[l,...x,...c?[c]:[],..."on"===r.wordWrap?[t.tk.lineWrapping]:[],n.of(a),s]})});let p=o.metadata.properties.locked;return i.controls.subscribeToCellChanges(o.id,(()=>{var e;p!==o.metadata.properties.locked&&(p=o.metadata.properties.locked,e=p,m.dispatch({effects:n.reconfigure(t.tk.editable.of(!e))}))})),e.appendChild(m.dom),m}},"./src/components/editor/codemirror/highlightStyle.ts":(e,o,r)=>{"use strict";r.d(o,{j:()=>i});var t=r("./node_modules/@codemirror/highlight/dist/index.js");const d=[{tag:t.pJ.link,textDecoration:"underline"},{tag:t.pJ.heading,textDecoration:"underline",fontWeight:"bold"},{tag:t.pJ.emphasis,fontStyle:"italic"},{tag:t.pJ.strong,fontWeight:"bold"},{tag:t.pJ.keyword,color:"#07A"},{tag:[t.pJ.atom,t.pJ.bool,t.pJ.url,t.pJ.contentSeparator,t.pJ.labelName],color:"#219"},{tag:[t.pJ.literal,t.pJ.inserted],color:"#164"},{tag:[t.pJ.string],color:"#a11"},{tag:t.pJ.deleted,textDecoration:"line-through",color:"#a11"},{tag:[t.pJ.regexp,t.pJ.escape,t.pJ.special(t.pJ.string)],color:"#b11"},{tag:t.pJ.definition(t.pJ.variableName),color:"#00f"},{tag:t.pJ.local(t.pJ.variableName),color:"#30a"},{tag:[t.pJ.typeName,t.pJ.namespace],color:"#085"},{tag:t.pJ.className,color:"#167"},{tag:[t.pJ.special(t.pJ.variableName),t.pJ.macroName],color:"#256"},{tag:t.pJ.definition(t.pJ.propertyName),color:"#00c"},{tag:t.pJ.comment,color:"#080"},{tag:t.pJ.meta,color:"#555"},{tag:t.pJ.invalid,color:"#f00"}],i=t.Qf.define(d)},"./src/components/editor/codemirror/languages.ts":(e,o,r)=>{"use strict";r.d(o,{A:()=>h});var t=r("./node_modules/@codemirror/lang-css/dist/index.js"),d=r("./node_modules/@codemirror/lang-html/dist/index.js"),i=r("./node_modules/@codemirror/lang-javascript/dist/index.js"),s=r("./node_modules/@codemirror/lang-json/dist/index.js"),n=r("./node_modules/@codemirror/lang-markdown/dist/index.js"),a=r("./node_modules/@codemirror/lang-python/dist/index.js"),l=r("./node_modules/@codemirror/lang-sql/dist/index.js"),c=r("./node_modules/@codemirror/lang-rust/dist/index.js"),m=r("./node_modules/@codemirror/lang-xml/dist/index.js"),p=r("./node_modules/@codemirror/legacy-modes/mode/go.js"),g=r("./node_modules/@codemirror/legacy-modes/mode/r.js"),u=r("./node_modules/@codemirror/legacy-modes/mode/yaml.js"),f=r("./node_modules/@codemirror/legacy-modes/mode/toml.js"),x=r("./node_modules/@codemirror/legacy-modes/mode/clike.js"),j=r("./node_modules/@codemirror/stream-parser/dist/index.js");function h(e){let o=e||"";return o=o.toLowerCase(),-1!==["javascript","js"].indexOf(o)?(0,i.eJ)():-1!==["typescript","ts"].indexOf(o)?(0,i.eJ)({typescript:!0}):-1!==["jsx"].indexOf(o)?(0,i.eJ)({jsx:!0}):-1!==["tsx"].indexOf(o)?(0,i.eJ)({typescript:!0,jsx:!0}):-1!==["python","py"].indexOf(o)?(0,a.V)():"css"===o?(0,t.iv)():"html"===o?(0,d.dy)():-1!==["markdown","md"].indexOf(o)?(0,n.JH)():"xml"===o?(0,m.Ls)():"json"===o?(0,s.AV)():"sql"===o?(0,l.i6)():"rust"===o?(0,c.Q)():-1!==["go","golang"].indexOf(o)?j.i.define(p.go):"r"===o?j.i.define(g.r):"yaml"===o?j.i.define(u.r):"toml"===o?j.i.define(f.V):-1!==["shader","glsl","opengl"].indexOf(o)?j.i.define(x.Tv):"cpp"===o?j.i.define(x.N):"java"===o?j.i.define(x.Cb):"kotlin"===o?j.i.define(x.j7):"c"===o?j.i.define(x.c):"dart"===o?j.i.define(x.jW):void 0}}}]);