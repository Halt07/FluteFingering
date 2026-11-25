import type { Song } from "../../types";

export const song: Song = {
  title: "Epona's Song",
  flutes: ["D4", "E4", "G4", "A4"],
  time: 3,
  transpose: 2,
  notes: [
    { note: "D5", beats: 0.5 },
    { note: "B4", beats: 0.5 },
    { note: "A4", beats: 2 },

    { note: "D5", beats: 0.5 },
    { note: "B4", beats: 0.5 },
    { note: "A4", beats: 2 },

    { note: "D5", beats: 0.5 },
    { note: "B4", beats: 0.5 },
    { note: "A4", beats: 1 },
    { note: "B4", beats: 1 },

    { note: "A4", beats: 2 },
    { note: "rest", beats: 1 },
  ],
};
