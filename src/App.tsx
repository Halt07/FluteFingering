import Sheet from "./Sheet";
import { song as written } from "./songs/lugiaSong"; // Change this to the song you want to display.
import { transposed } from "./transpose";

const song = transposed(written);

/** One sheet for each flute listed in the song file. */
export default function App() {
  return (
    <main>
      {song.flutes.map((flute) => <Sheet key={flute} song={song} flute={flute} />)}
    </main>
  );
}
