// Moving a whole song up or down, so it fits the flutes you have.

import { pitch, transposeNote } from "./notes";
import type { Song } from "./types";

/** How many semitones the song is moved by: its `transpose` setting, as a number. */
export function transposeBy(song: Song): number {
  const t = song.transpose ?? 0;
  return typeof t === "number" ? t : pitch(t.to) - pitch(t.from);
}

/** The song with every note moved by its `transpose` setting (rests stay rests). */
export function transposed(song: Song): Song {
  const by = transposeBy(song);
  if (by === 0) return song;
  return {
    ...song,
    notes: song.notes.map((n) => (n.note === "rest" ? n : { ...n, note: transposeNote(n.note, by) })),
  };
}

/** "transposed up 3", "transposed down 2", or "" if it isn't moved. */
export function transposeLabel(song: Song): string {
  const by = transposeBy(song);
  if (by === 0) return "";
  return `transposed ${by > 0 ? "up" : "down"} ${Math.abs(by)} semitone${Math.abs(by) === 1 ? "" : "s"}`;
}
