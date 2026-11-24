// ✏️ The song to chart. Edit this file and run `npm run dev` (or just save, if it's already running).
//
// - title:  printed at the top.
// - flutes: the keys of the flutes you'll play it on; you get one sheet for each. A flute's key is
//           its lowest note, all holes covered (e.g. "A4", "F#4", "G4").
// - notes:  the tune, in order. Each is a note name ("A4", "Bb4", "C#5") or "rest", and how many
//           beats it lasts (whole beats). They're grouped into bars of `time` beats;
//           a note held past the end of a bar carries over into the next, like a tie.
// - time:   beats to a bar: 4 for 4/4 time, 3 for 3/4 (a waltz).
// - transpose: move every note before charting (leave at 0 to play it as written). Either
//           - a number of semitones: 1 = up a half step, 2 = up a whole step, 12 = up an octave,
//             -2 = down a whole step; or
//           - { from: "E4", to: "G4" }: a tune written for an E minor flute, moved so a G minor flute
//             plays it with exactly the same fingerings (here, up 3).

import type { Song } from "../types";

export const song: Song = {
  title: "Silent Night",
  flutes: ["A4","D4"],
  time: 3,
  transpose: 5,
  notes: [
    { note: "G4", beats: 1 },
    { note: "A4", beats: 1 },
    { note: "G4", beats: 1 },

    { note: "E4", beats: 3 },

    { note: "G4", beats: 1 },
    { note: "A4", beats: 1 },
    { note: "G4", beats: 1 },

    { note: "E4", beats: 3 },

    { note: "D5", beats: 2 },
    { note: "D5", beats: 1 },

    { note: "B4", beats: 3 },


    { note: "C5", beats: 2 },
    { note: "C5", beats: 1 },
    
    { note: "G4", beats: 3 },


    { note: "A4", beats: 2 },
    { note: "A4", beats: 1 },
    
    { note: "C5", beats: 1 },
    { note: "B4", beats: 1 },
    { note: "A4", beats: 1 },

    { note: "G4", beats: 1 },
    { note: "A4", beats: 1 },
    { note: "G4", beats: 1 },

    { note: "E4", beats: 3 },

    { note: "A4", beats: 2 },
    { note: "A4", beats: 1 },
    
    { note: "C5", beats: 1 },
    { note: "B4", beats: 1 },
    { note: "A4", beats: 1 },

    { note: "G4", beats: 1 },
    { note: "A4", beats: 1 },
    { note: "G4", beats: 1 },

    { note: "E4", beats: 3 },

    { note: "D5", beats: 2 },
    { note: "D5", beats: 1 },
    
    { note: "F5", beats: 1 },
    { note: "E5", beats: 1 },
    { note: "D5", beats: 1 },

    { note: "C5", beats: 3 },

    { note: "E5", beats: 3 },


    { note: "C5", beats: 2 },
    { note: "G4", beats: 1 },
    
    { note: "E4", beats: 1 },
    { note: "G4", beats: 2 },

    { note: "F4", beats: 1 },
    { note: "D4", beats: 2 },

    { note: "C4", beats: 3 },
  ],
};
