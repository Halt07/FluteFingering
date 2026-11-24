// Grouping the tune into bars (measures) of 3 or 4 beats.

import type { SongNote } from "./types";

/**
 * The notes, `beatsPerBar` beats to a bar. A note that won't fit in what's left of a bar starts the next one
 * (so the bar before it ends short). A note longer than a whole bar gets a bar to itself.
 */
export function toBars(notes: readonly SongNote[], beatsPerBar: number): SongNote[][] {
  const bars: SongNote[][] = [];
  let bar: SongNote[] = [];
  let used = 0;
  for (const n of notes) {
    if (!Number.isInteger(n.beats) || n.beats < 1) {
      throw new Error(`"${n.note}" lasts ${n.beats} beats: use a whole number of beats, 1 or more`);
    }
    if (used > 0 && used + n.beats > beatsPerBar) {
      bars.push(bar);
      bar = [];
      used = 0;
    }
    bar.push(n);
    used += n.beats;
    if (used >= beatsPerBar) {
      bars.push(bar);
      bar = [];
      used = 0;
    }
  }
  if (bar.length) bars.push(bar);
  return bars;
}
