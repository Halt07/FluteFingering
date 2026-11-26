import type { FLAT_NAMES, SHARP_NAMES } from "./notes";

type NoteName = (typeof SHARP_NAMES)[number] | (typeof FLAT_NAMES)[number];
type Octave = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type FluteKeys = `${"A"|"B"|"C"|"D"|"E"|"F"|"G"}${Octave}`

export const NON_NOTES = ["rest", "repeat"]

export type Noteish = (typeof NON_NOTES)[number]

/** A note name plus its octave ("A4", "Bb4", "C#5"), or "rest". */
export type Note = `${NoteName}${Octave}` | Noteish;

/** One note of the tune: a note name ("A4", "Bb4", "C#5") or "rest", and how many beats it lasts. */
export interface SongNote {
  note: Note;
  beats: number;
  trill?: boolean;
  /** A stand-in for a flute that can't reach `note`: that flute's sheet shows this instead, marked as a substitute. */
  alt?: Note;
}

export interface Song {
  title: string;
  /** The keys of the flutes to chart it for (each flute's lowest note, all holes covered). */
  flutes: FluteKeys[];
  /**
   * Beats to a bar: 4 for 4/4 time, 3 for 3/4, 6 for 6/8. In 6/8 a beat is an eighth note, so a
   * note's `beats` count eighths (a dotted quarter is 3); otherwise a beat is a quarter note.
   */
  time: 3 | 4 | 6;
  /**
   * Move every note up or down before charting: a number of semitones (3 = up 3, -2 = down 2), or
   * { from: "E4", to: "G4" } to move a tune written for one flute onto another with the same fingerings.
   */
  transpose?: number | { from: string; to: string };
  notes: SongNote[];
}
