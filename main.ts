import { mkdirSync, writeFileSync } from "node:fs";

// One Star for Monday entry — a one-star review of Monday written like a
// restaurant review: one line, 1-180 characters, max 25 words.
// Judge persona: a weary office worker three coffees into a Monday; the
// review must read like a real one-star restaurant review, no explanation.
// Chosen line: Monday "showed up late" like a bad waiter, served cold
// coffee and a side of meetings nobody ordered, and the reviewer would not
// return — except the punchline is the trap: already booked again next
// week. The line is 134 characters and 24 words, inside the gate with
// room to spare and nothing padded.
const LINE =
  "One star. Showed up late, served cold coffee and a side of meetings nobody ordered. Would not return — yet I'm booked again next week.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
