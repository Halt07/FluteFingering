// Moving a whole song up or down, so it fits the flutes you have.

import { pitch, SHARP_NAMES, transposeNote } from "./notes";
import { NON_NOTES, type FluteKeys, type Song } from "./types";

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
    notes: song.notes.map((n) =>
      NON_NOTES.includes(n.note)  ? n : { ...n, note: transposeNote(n.note, by), ...(n.alt && { alt: transposeNote(n.alt, by) }) },
    ),
  };
}

/** "transposed up 3", "transposed down 2", or "" if it isn't moved. */
export function transposeLabel(song: Song): string {
  const by = transposeBy(song);
  if (by === 0) return "";
  return `transposed ${by > 0 ? "up" : "down"} ${Math.abs(by)} semitone${Math.abs(by) === 1 ? "" : "s"}`;
}

export function equivalentFifths(fluteKey: FluteKeys): string{
  const nextFifth = (SHARP_NAMES.indexOf(fluteKey.slice(0,-1) as (typeof SHARP_NAMES)[number])+5)
  const newOctave = (nextFifth > 12 ? parseInt(fluteKey[fluteKey.length -1]) + 1 : fluteKey[fluteKey.length -1])
  return `${fluteKey[0] === "5" ? `5 hole ${fluteKey.slice(1)}` : fluteKey} / ${SHARP_NAMES[ nextFifth % 12]}${newOctave}`
}