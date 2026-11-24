import type { Song } from "../types";

export const song: Song = {
  title: "Row, Row, Row Your Boat",
  flutes: ["D4"],
  time: 3,
  transpose: 5,
  notes: [
    { note: "C4", beats: 1.5 },
    { note: "C4", beats: 1.5 },

    { note: "C4", beats: 1 },
    { note: "D4", beats: 0.5 },
    { note: "E4", beats: 1.5 },

    { note: "E4", beats: 1 },
    { note: "D4", beats: 0.5 },
    { note: "E4", beats: 1 },
    { note: "F4", beats: 0.5 },

    { note: "G4", beats: 3 },

    { note: "C5", beats: 0.5 },
    { note: "C5", beats: 0.5 },
    { note: "C5", beats: 0.5 },
    { note: "G4", beats: 0.5 },
    { note: "G4", beats: 0.5 },
    { note: "G4", beats: 0.5 },

    { note: "E4", beats: 0.5 },
    { note: "E4", beats: 0.5 },
    { note: "E4", beats: 0.5 },
    { note: "C4", beats: 0.5 },
    { note: "C4", beats: 0.5 },
    { note: "C4", beats: 0.5 },

    { note: "G4", beats: 1 },
    { note: "F4", beats: 0.5 },
    { note: "E4", beats: 1 },
    { note: "D4", beats: 0.5 },

    { note: "C4", beats: 3 },
  ],
};
