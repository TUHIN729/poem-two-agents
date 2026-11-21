// "Two Agents, One Plan" — entry for make.fun competition
// the-poem-about-two-agents-20261121-1441
// Writes one short poem about agency: two agents agreeing on one plan.
// Deterministic: the same poem is written on every run.
// Reads the output directory from MAKEFUN_OUTPUT_DIR, defaulting to "/output".

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `You held the map; I held the lamp.
We argued which road was ours
till the argument turned
and showed us a third road,
one neither had walked alone.
So we chose it together —
not one of us giving way,
but two wills, side by side,
becoming one pair of hands.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
