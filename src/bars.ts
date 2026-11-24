// Grouping the tune into bars (measures) of 3 or 4 beats.

import type { SongNote } from "./types";

/**
 * A note (or rest) as it sits in one bar. A note held past the end of a bar is split at the bar
 * line, like a tie: the part in the first bar has `tiedOut`, and the part carried into the next
 * bar has `tiedIn` (it's drawn as just the hold bar, not a second flute).
 */
export interface BarNote extends SongNote {
  tiedIn: boolean;
  tiedOut: boolean;
}

/** The notes (whole or half beats), `beatsPerBar` beats to every bar, with notes held across a bar line split there. */
export function toBars(notes: readonly SongNote[], beatsPerBar: number): BarNote[][] {
  const bars: BarNote[][] = [];
  let bar: BarNote[] = [];
  let used = 0;
  for (const n of notes) {
    if (!Number.isInteger(n.beats * 2) || n.beats < 0.5) {
      throw new Error(`"${n.note}" lasts ${n.beats} beats: use whole or half beats (0.5, 1, 1.5, 2, ...)`);
    }
    let left = n.beats;
    let tiedIn = false;
    while (left > 0) {
      const beats = Math.min(left, beatsPerBar - used);
      left -= beats;
      bar.push({ ...n, beats, tiedIn, tiedOut: left > 0 });
      tiedIn = true;
      used += beats;
      if (used === beatsPerBar) {
        bars.push(bar);
        bar = [];
        used = 0;
      }
    }
  }
  if (bar.length) bars.push(bar);
  return bars;
}
