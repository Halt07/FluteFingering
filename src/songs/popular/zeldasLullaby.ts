import type { Song } from "../../types";

export const song: Song = {
  title: "Zelda's Lullaby",
  flutes: ["A4", "G4"],
  time: 3,
  transpose: 1,
  notes: [
    { note: "B4", beats: 2 },
    { note: "D5", beats: 1 },

    { note: "A4", beats: 2 },
    { note: "G4", beats: 0.5 },
    { note: "A4", beats: 0.5 },

    { note: "B4", beats: 2 },
    { note: "D5", beats: 1 },

    { note: "A4", beats: 3 },

    { note: "B4", beats: 2 },
    { note: "D5", beats: 1 },

    { note: "A5", beats: 2 },
    { note: "G5", beats: 1 },

    { note: "D5", beats: 2 },
    { note: "C5", beats: 0.5 },
    { note: "B4", beats: 0.5 },

    { note: "A4", beats: 3 },
  ],
};
