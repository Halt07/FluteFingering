import type { Song } from "../../types";

export const song: Song = {
  title: "Hot Cross Buns",
  flutes: ["D4"],
  time: 4,
  transpose: 5,
  notes: [
    { note: "E4", beats: 1 },
    { note: "D4", beats: 1 },
    { note: "C4", beats: 2 },

    { note: "E4", beats: 1 },
    { note: "D4", beats: 1 },
    { note: "C4", beats: 2 },

    { note: "C4", beats: 0.5 },
    { note: "C4", beats: 0.5 },
    { note: "C4", beats: 0.5 },
    { note: "C4", beats: 0.5 },
    { note: "D4", beats: 0.5 },
    { note: "D4", beats: 0.5 },
    { note: "D4", beats: 0.5 },
    { note: "D4", beats: 0.5 },

    { note: "E4", beats: 1 },
    { note: "D4", beats: 1 },
    { note: "C4", beats: 2 },
  ],
};
