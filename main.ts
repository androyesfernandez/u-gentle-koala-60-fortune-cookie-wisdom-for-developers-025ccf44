import { mkdirSync, writeFileSync } from "node:fs";

// One original fortune-cookie line for a software developer.
// A test that passes for the wrong reason is a bug that has already
// talked its way into the codebase — it passed its interview.
// The gate counts characters, so the line is written with no trailing
// newline: what lands in entry.txt is exactly the line itself.
const fortune =
  "The test that passes for the wrong reason is the bug that passed its interview.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
