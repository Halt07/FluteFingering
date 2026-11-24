// Note names ("A4", "Bb4", "C#5") to pitch numbers, so a note can be compared with a flute's key.

import type { Note } from "./types";

const STEPS: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/**
 * A note name as a pitch number (MIDI: A4 = 69, middle C = C4 = 60). A letter, then any number of
 * sharps (#) or flats (b), then the octave: "A4", "Bb4", "C#5", "F##3". Throws on anything else,
 * so a typo in the song file shows up straight away.
 */
export function pitch(note: string): number {
  const match = /^([A-Ga-g])([#b]*)(-?\d)$/.exec(note.trim());
  if (!match) throw new Error(`Not a note: "${note}" (try something like "A4", "Bb4" or "C#5")`);
  const [, letter, accidentals, octave] = match;
  const shift = [...accidentals].reduce((n, a) => n + (a === "#" ? 1 : -1), 0);
  return (Number(octave) + 1) * 12 + STEPS[letter.toUpperCase()] + shift;
}

/** How many semitones `note` is above `key` (negative if below). */
export function semitonesAbove(note: string, key: string): number {
  return pitch(note) - pitch(key);
}

export const SHARP_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"] as const;
export const FLAT_NAMES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"] as const;

/** A pitch number back to a note name, spelled with sharps ("C#5") or flats ("Db5"). */
export function noteName(p: number, flats = false): Note {
  const names = flats ? FLAT_NAMES : SHARP_NAMES;
  return `${names[((p % 12) + 12) % 12]}${Math.floor(p / 12) - 1}` as Note;
}

/** `note` moved up (or down, if negative) by `semitones`. Keeps flats if it was written with them. */
export function transposeNote(note: string, semitones: number): Note {
  return noteName(pitch(note) + semitones, note.includes("b"));
}
