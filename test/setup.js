import fetch from "node-fetch";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Crypto } = require("@peculiar/webcrypto");
Object.assign(global, {
    fetch: fetch,
    crypto: new Crypto(),
});
//# sourceMappingURL=setup.js.map