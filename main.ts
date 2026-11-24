import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The One-Line Exit — writes the single-line resignation letter to the
// output directory. Node 22, stdlib only, no network, no wall clock.
// The house gate requires 1–140 characters, so the line is validated
// as exactly one line before anything is written.
const here = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(here, "entry.txt"), "utf8").replace(/\r?\n$/, "");

if (!line || line.includes("\n") || line.length > 140) {
  throw new Error("entry.txt must hold exactly one non-empty line of at most 140 characters");
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_BOT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
