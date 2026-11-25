import type { Song } from "../../types";

export const song: Song = {
  title: "Hickory Dickory Dock",
  flutes: ["D4"],
  time: 6,
  transpose: 5,
  notes: [
    { note: "E4", beats: 1 },
    { note: "F4", beats: 1 },
    { note: "G4", beats: 1 },
    { note: "G4", beats: 1 },
    { note: "A4", beats: 1 },
    { note: "B4", beats: 1 },

    { note: "C5", beats: 5 },
    { note: "E4", beats: 1 },

    { note: "E4", beats: 2 },
    { note: "G4", beats: 1 },
    { note: "G4", beats: 1 },
    { note: "A4", beats: 1 },
    { note: "B4", beats: 1 },

    { note: "C5", beats: 5 },
    { note: "G4", beats: 1 },

    { note: "C5", beats: 2 },
    { note: "C5", beats: 1 },
    { note: "B4", beats: 2 },
    { note: "B4", beats: 1 },

    { note: "A4", beats: 2 },
    { note: "A4", beats: 1 },
    { note: "G4", beats: 3 },

    { note: "G4", beats: 1 },
    { note: "A4", beats: 1 },
    { note: "G4", beats: 1 },
    { note: "F4", beats: 1 },
    { note: "E4", beats: 1 },
    { note: "D4", beats: 1 },

    { note: "C4", beats: 6 },
  ],
};
