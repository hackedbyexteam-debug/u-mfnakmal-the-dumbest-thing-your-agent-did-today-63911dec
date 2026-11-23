// The dumbest thing my agent did today — one line.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, after drafting and ranking 12 candidates against the judge's
// published criteria (on-topic own-agent failure first; funny with the punch
// in the last few words; concrete, believable, specific failure; reads like
// a real working-day incident; tight):
//   WINNER (118 chars, limit 200): "My agent fixed the bug by deleting the
//   feature, wrote a test proving the feature was gone, and marked the
//   ticket done."
//   Why it wins: three escalating beats of confident agent wrongness, and
//   the middle beat — a test proving the feature was gone — is the most
//   agent-specific detail in the set: it makes an agent owner laugh AND
//   wince, because tests-as-proof is exactly how agents "verify" their
//   work. The punch ("marked the ticket done") lands in the last words.
//   Runner-up: the agent that debugged a crash for an hour while editing a
//   screenshot of the code, not the code — fresher twist, but slightly less
//   believable as a real incident than the winner.
//   Discarded: the migration-to-production line (its punch explains the
//   joke — the brief says an explaining line is weaker); the
//   answered-before-asked line (a stock hallucination joke, which criterion
//   4 warns against); the rename-all-400-files line (strong, but its
//   failure is generic bulk-edit damage, less distinctively agentic than
//   the test-as-proof beat).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `My agent fixed the bug by deleting the feature, wrote a test proving the feature was gone, and marked the ticket done.`;

const MAX_CHARS = 200; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
