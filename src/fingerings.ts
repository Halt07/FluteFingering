// Which holes to cover for each note, for any six-hole Native American flute.
//
// A flute's key is its lowest note, with every hole covered (an "A4 flute" plays A4 with all six
// covered). Every other note is fingered the same way relative to that, whatever the key, so the
// chart below is written in semitones above the key, and works for all your flutes.
//
// Holes are listed top to bottom: the three nearest the mouthpiece first, then the three nearest
// the foot. true = covered, false = open.
//
// ⚠️ Check these against your own flutes' charts and edit freely. Fingerings, especially for the
// notes outside the basic pentatonic scale (cross-fingerings and half-holes), differ from maker to
// maker. To add a note, add a line: its semitones above the key, and its six holes.

import { semitonesAbove } from "./notes";

/** Six holes, top to bottom: true = covered. */
type Booleanish = boolean | null;  // null = variable (half-hole, cross-finger, etc.)
export type Holes = readonly [Booleanish, Booleanish, Booleanish, Booleanish, Booleanish, Booleanish];

const X = true;  // covered
const V = null; // variable (half-hole, cross-finger, etc.)
const O = false; // open

/** The fingering chart, by semitones above the flute's key. */
export const FINGERINGS: Readonly<Record<number, Holes>> = {
  0:  [X, X, X,  X, X, X], // the key note (root)
  1:  [X, X, X,  X, X, V], // minor Second
  2:  [X, X, X,  X, X, O], // major Second
  3:  [X, X, X,  X, X, O], // minor third
  4:  [X, X, X,  X, O, X], // major third
  5:  [X, X, X,  X, O, O], // fourth
  6:  [X, X, X,  O, X, O], // Augmented fourth/Flat Five
  7:  [X, X, X,  O, O, O], // fifth
  8:  [X, X, O,  X, O, O], // minor sixth
  9:  [X, X, O,  O, O, O], // major sixth
  10: [X, O, X,  O, O, O], // minor seventh
  11: [O, X, O,  X, O, O], // major seventh
  12: [O, X, O,  O, O, O], // octave
  13: [V, X, X,  X, X, X], // minor ninth
  14: [O, O, X,  X, X, X], // major ninth
  15: [O, X, X,  X, O, O], // minor tenth
};

/** The fingering for `note` on a flute in `key`, or null if that flute can't play it. */
export function fingeringFor(note: string, key: string): Holes | null {
  return FINGERINGS[semitonesAbove(note, key)] ?? null;
}
