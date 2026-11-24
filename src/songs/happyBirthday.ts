import type { Song } from "../types";

export const song: Song = {
  title: "Happy Birthday",
  flutes: ["D4"],
  time: 3,
  transpose: -2,
  notes: [
    { note: "rest", beats: 2 },
    { note: "G4", beats: 0.5 },
    { note: "G4", beats: 0.5 },

    { note: "A4", beats: 1 },
    { note: "G4", beats: 1 },
    { note: "C5", beats: 1 },

    { note: "B4", beats: 2 },
    { note: "G4", beats: 0.5 },
    { note: "G4", beats: 0.5 },

    { note: "A4", beats: 1 },
    { note: "G4", beats: 1 },
    { note: "D5", beats: 1 },

    { note: "C5", beats: 2 },
    { note: "G4", beats: 0.5 },
    { note: "G4", beats: 0.5 },

    { note: "G5", beats: 1 },
    { note: "E5", beats: 1 },
    { note: "C5", beats: 1 },

    { note: "B4", beats: 1 },
    { note: "A4", beats: 1 },
    { note: "F5", beats: 0.5 },
    { note: "F5", beats: 0.5 },

    { note: "E5", beats: 1 },
    { note: "C5", beats: 1 },
    { note: "D5", beats: 1 },

    { note: "C5", beats: 3 },
  ],
};
