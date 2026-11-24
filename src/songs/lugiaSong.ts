// ✏️ The song to chart. Edit this file and run `npm run dev` (or just save, if it's already running).
//
// - title:  printed at the top.
// - flutes: the keys of the flutes you'll play it on; you get one sheet for each. A flute's key is
//           its lowest note, all holes covered (e.g. "A4", "F#4", "G4").
// - notes:  the tune, in order. Each is a note name ("A4", "Bb4", "C#5") or "rest", and how many
//           beats it lasts (whole or half beats: 0.5, 1, 1.5, 2, ...). They're grouped into bars of `time` beats;
//           a note held past the end of a bar carries over into the next, like a tie.
// - time:   beats to a bar: 4 for 4/4 time, 3 for 3/4 (a waltz).
// - transpose: move every note before charting (leave at 0 to play it as written). Either
//           - a number of semitones: 1 = up a half step, 2 = up a whole step, 12 = up an octave,
//             -2 = down a whole step; or
//           - { from: "E4", to: "G4" }: a tune written for an E minor flute, moved so a G minor flute
//             plays it with exactly the same fingerings (here, up 3).

import type { Song } from "../types";

export const song: Song = {
  title: "Lugia's Song",
  flutes: ["A4", "D4"],
  time: 4,
  transpose: -2,
  notes: [
    { note: "E5", beats: 2 },
    { note: "G5", beats: 2 },

    { note: "F#5", beats: 3 },
    { note: "D5", beats: 1 },

    { note: "E5", beats: 2 },
    { note: "B4", beats: 6 },

    { note: "E5", beats: 2 },
    { note: "G5", beats: 2 },

    { note: "F#5", beats: 3 },
    { note: "B4", beats: 1 },

    { note: "E5", beats: 1 },
    { note: "G5", beats: 1 },
    { note: "B5", beats: 6 },

    { note: "E6", beats: 2 },
    { note: "D6", beats: 2 },

    { note: "B5", beats: 2, trill: true  },
    { note: "G5", beats: 2 },

    { note: "A5", beats: 2, trill: true  },
    { note: "E5", beats: 6 },

    { note: "E5", beats: 2 },
    { note: "B5", beats: 2, trill: true },

    { note: "A5", beats: 2 },
    { note: "D5", beats: 2 },

    { note: "F#5", beats: 1 },
    { note: "E5", beats: 0.5 },
    { note: "D5", beats: 0.5 },
    { note: "E5", beats: 6 },


    { note: "E5", beats: 2 },
    { note: "G5", beats: 2 },

    { note: "F#5", beats: 3 },
    { note: "D5", beats: 1 },

    { note: "E5", beats: 2 },
    { note: "B4", beats: 6 },

    { note: "E5", beats: 2 },
    { note: "G5", beats: 2 },

    { note: "F#5", beats: 2 },
    { note: "D6", beats: 3 },

    { note: "B5", beats: 1.5 },
    { note: "A5", beats: 0.5 },
    { note: "B5", beats: 5 },

    { note: "E6", beats: 2 },
    { note: "D6", beats: 2 },

    { note: "B5", beats: 2, trill: true  },
    { note: "G5", beats: 2 },

    { note: "A5", beats: 2, trill: true  },
    { note: "E5", beats: 6 },

    { note: "E5", beats: 2 },
    { note: "G5", beats: 2 },

    { note: "F#5", beats: 3 },
    { note: "D5", beats: 1 },

    { note: "E5", beats: 8 },
  ],
};
