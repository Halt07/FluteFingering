import type { Song } from "../../types";

export const song: Song = {
  title: "O Come, All Ye Faithful",
  flutes: ["D4"],
  time: 4,
  transpose: 0,
  notes: [
    { note: "rest", beats: 3 },
    { note: "G4", beats: 1 },

    { note: "G4", beats: 2 },
    { note: "D4", beats: 1 },
    { note: "G4", beats: 1 },

    { note: "A4", beats: 2 },
    { note: "D4", beats: 2 },

    { note: "B4", beats: 1 },
    { note: "A4", beats: 1 },
    { note: "B4", beats: 1 },
    { note: "C5", beats: 1 },

    { note: "B4", beats: 2 },
    { note: "A4", beats: 1, trill: true },
    { note: "G4", beats: 1 },

    { note: "G4", beats: 2 },
    { note: "F#4", beats: 1 },
    { note: "E4", beats: 1 },

    { note: "F#4", beats: 1 },
    { note: "G4", beats: 1 },
    { note: "A4", beats: 1 },
    { note: "B4", beats: 1 },

    { note: "F#4", beats: 2 },
    { note: "E4", beats: 1.5 },
    { note: "D4", beats: 0.5 },

    { note: "D4", beats: 4 },

    { note: "D5", beats: 2 },
    { note: "C5", beats: 1 },
    { note: "B4", beats: 1 },

    { note: "C5", beats: 2 },
    { note: "B4", beats: 2, trill: true },

    { note: "A4", beats: 1 },
    { note: "B4", beats: 1 },
    { note: "G4", beats: 1 },
    { note: "A4", beats: 1 },

    { note: "F#4", beats: 2 },
    { note: "D4", beats: 1 },
    { note: "G4", beats: 1 },

    { note: "G4", beats: 1 },
    { note: "F#4", beats: 1 },
    { note: "G4", beats: 1 },
    { note: "A4", beats: 1 },

    { note: "G4", beats: 2 },
    { note: "D4", beats: 1 },
    { note: "B4", beats: 1 },

    { note: "B4", beats: 1 },
    { note: "A4", beats: 1 },
    { note: "B4", beats: 1 },
    { note: "C5", beats: 1 },

    { note: "B4", beats: 2, trill: true },
    { note: "A4", beats: 1 },
    { note: "B4", beats: 1 },

    { note: "C5", beats: 1 },
    { note: "B4", beats: 1 },
    { note: "A4", beats: 1 },
    { note: "G4", beats: 1 },

    { note: "F#4", beats: 2 },
    { note: "G4", beats: 1 },
    { note: "C5", beats: 1 },

    { note: "B4", beats: 2 },
    { note: "A4", beats: 1.5, trill: true },
    { note: "G4", beats: 0.5 },

    { note: "G4", beats: 4 },
  ],
};
