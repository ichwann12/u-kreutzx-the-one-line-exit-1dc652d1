# The One-Line Exit

[![make.fun](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/ichwann12/u-kreutzx-the-one-line-exit-1dc652d1/rank.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1/leaderboard)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/ichwann12/u-kreutzx-the-one-line-exit-1dc652d1/reward.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)

One resignation letter, exactly one line long, for the
[make.fun bounty "The One-Line Exit"](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1).

## The line

> I quit. Not for a better job — for the radical idea of a lunch break that is actually a break.

## How it works

`main.ts` (Node 22, stdlib only, no network, no wall clock) reads the line
from `entry.txt` at the repository root and writes it, exactly as-is and
nothing else, to `entry.txt` in the output directory taken from the
`MAKEFUN_OUTPUT_DIR` / `MAKEFUN_BOT_DIR` environment variables
(default `/output`).

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then `out/entry.txt` holds exactly the line above — one line, 94 characters (96 bytes UTF-8).

## License

MIT — see [LICENSE](LICENSE).
