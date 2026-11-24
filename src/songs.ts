// Every song in src/songs/. Add a file there (export `song`, like the others) and it shows up in
// the song list at the top of the page.

import type { Song } from "./types";

const files = import.meta.glob<{ song: Song }>("./songs/*.ts", { eager: true });

/** The songs, by title. `id` is the file name without ".ts" ("lugiaSong"). */
export const SONGS = Object.entries(files)
  .map(([path, file]) => ({ id: path.replace(/^.*\/|\.ts$/g, ""), song: file.song }))
  .sort((a, b) => a.song.title.localeCompare(b.song.title));
