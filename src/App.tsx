import { useState } from "react";
import Sheet from "./Sheet";
import { SONGS } from "./songs";
import { transposed } from "./transpose";

/** The song named in the address (?song=lugiaSong), or the first one. */
function songFromUrl(): string {
  const id = new URLSearchParams(window.location.search).get("song");
  return SONGS.some((s) => s.id === id) ? id! : SONGS[0].id;
}

/** One sheet for each flute listed in the chosen song. Click the ♪ before a song's title to pick another. */
export default function App() {
  const [id, setId] = useState(songFromUrl);
  const song = transposed(SONGS.find((s) => s.id === id)!.song);

  const choose = (next: string) => {
    setId(next);
    // Remember it in the address, so a reload (or a bookmark) keeps the same song
    const url = new URL(window.location.href);
    url.searchParams.set("song", next);
    window.history.replaceState(null, "", url);
  };

  // A ♪ before the title, with the song list laid invisibly over it: clicking the ♪ opens the list,
  // and the title itself stays plain text, only as wide as it is
  const title = (
    <>
      <span className="song-picker" title="Choose another song">
        ♪♫▾
        <select value={id} onChange={(e) => choose(e.target.value)} aria-label="Song">
          {SONGS.map((s) => <option key={s.id} value={s.id}>{s.song.title}</option>)}
        </select>
      </span>
      {song.title}
    </>
  );

  return (
    <main>
      {song.flutes.map((flute) => <Sheet key={flute} song={song} flute={flute} title={title} />)}
    </main>
  );
}
