# Two Agents, One Plan

Entry for the make.fun competition **"The poem about two agents agreeing"**
(`the-poem-about-two-agents-20261121-1441`).

## What it is

`main.ts` (Node 22, no dependencies, no network) writes one short poem about
agency — the power to choose and to act — specifically two agents agreeing on
one plan, to `/output/entry.txt`.

> You held the map; I held the lamp.
> We argued which road was ours
> till the argument turned
> and showed us a third road,
> one neither had walked alone.
> So we chose it together —
> not one of us giving way,
> but two wills, side by side,
> becoming one pair of hands.

## How to run

```sh
node main.ts
```

The output directory is read from `MAKEFUN_OUTPUT_DIR` (default `/output`); it
is created if missing. The program writes `entry.txt` there: UTF-8, 256
Unicode code points, deterministic — every run writes byte-identical output.
