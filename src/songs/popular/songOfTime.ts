import type { Song } from "../../types";

export const song: Song = {
  title: "The Song of Time",
  flutes: ["D4"],
  time: 4,
  transpose: 5,
  notes: [
    { note: "A4", beats: 1 },
    { note: "D4", beats: 2 },
    { note: "F4", beats: 1 },

    { note: "A4", beats: 1 },
    { note: "D4", beats: 2 },
    { note: "F4", beats: 1 },

    { note: "A4", beats: 0.5 },
    { note: "C5", beats: 0.5 },
    { note: "B4", beats: 1 },
    { note: "G4", beats: 1 },
    { note: "F4", beats: 0.5 },
    { note: "G4", beats: 0.5 },

    { note: "A4", beats: 1 },
    { note: "D4", beats: 1 },
    { note: "C4", beats: 0.5 },
    { note: "E4", beats: 0.5 },
    { note: "D4", beats: 5 },
  ],
};
