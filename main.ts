// Vending-machine pickup line — make.fun entry
// u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.
//
// Node 22, standard library only. Writes one original pickup line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output). No network, no
// randomness, no other files touched, so two runs produce byte-identical
// output.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Other machines spit you back out — I'll take you crumpled, creased, and a little damp.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
