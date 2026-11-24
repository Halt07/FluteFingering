import type { Song } from "../types";

export const song: Song = {
  title: "Old MacDonald Had a Farm",
  flutes: ["D4"],
  time: 4,
  transpose: 3,
  notes: [
    { note: "G4", beats: 1 },
    { note: "G4", beats: 1 },
    { note: "G4", beats: 1 },
    { note: "D4", beats: 1 },

    { note: "E4", beats: 1 },
    { note: "E4", beats: 1 },
    { note: "D4", beats: 2 },

    { note: "B4", beats: 1 },
    { note: "B4", beats: 1 },
    { note: "A4", beats: 1 },
    { note: "A4", beats: 1 },

    { note: "G4", beats: 3 },
    { note: "D4", beats: 1 },

    { note: "G4", beats: 1 },
    { note: "G4", beats: 1 },
    { note: "G4", beats: 1 },
    { note: "D4", beats: 1 },

    { note: "E4", beats: 1 },
    { note: "E4", beats: 1 },
    { note: "D4", beats: 2 },

    { note: "B4", beats: 1 },
    { note: "B4", beats: 1 },
    { note: "A4", beats: 1 },
    { note: "A4", beats: 1 },

    { note: "G4", beats: 4, trill: true },
  ],
};
