// Every song in src/songs/. Add a file there (export `song`, like the others) and it shows up in
// the song list at the top of the page. Put it in a folder (src/songs/christmas/) to file it under
// that category; the folder name becomes the category's name in the list ("christmas" → "Christmas").

import type { Song } from "./types";

const files = import.meta.glob<{ song: Song }>("./songs/**/*.ts", { eager: true });

export interface SongEntry {
  /** The file name without ".ts" ("lugiaSong"), used in the address (?song=lugiaSong). Keep file names unique across folders. */
  id: string;
  /** The folder it's in, as a name ("Christmas"), or null if it's straight in src/songs/. */
  category: string | null;
  song: Song;
}

/** Folder names that don't turn into the right category name on their own (an apostrophe, say). */
const CATEGORY_NAMES: Record<string, string> = {
  childrensSongs: "Children's Songs",
};

/** "christmas" → "Christmas", "kidsSongs" → "Kids Songs", "folk-tunes" → "Folk Tunes", or as named above */
function categoryName(folder: string): string {
  if (CATEGORY_NAMES[folder]) return CATEGORY_NAMES[folder];
  return folder
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/** The songs, by title. */
export const SONGS: SongEntry[] = Object.entries(files)
  .map(([path, file]) => {
    const parts = path.replace(/^\.\/songs\//, "").replace(/\.ts$/, "").split("/");
    const id = parts[parts.length - 1];
    const category = parts.length > 1 ? categoryName(parts[0]) : null;
    return { id, category, song: file.song };
  })
  .sort((a, b) => a.song.title.localeCompare(b.song.title));

/** The categories that have songs, by name. */
export const CATEGORIES: string[] = [...new Set(SONGS.flatMap((s) => (s.category ? [s.category] : [])))].sort();
