import { toBars } from "./bars";
import FluteNote from "./FluteNote";
import { transposeLabel } from "./transpose";
import type { Song } from "./types";

/**
 * The whole tune for one flute: bars of 3 or 4 beats (the song's time), each note a flute drawing. A note longer than
 * a beat is followed by a bar stretching across the beats it's held for.
 */
export default function Sheet({ song, flute }: { song: Song; flute: string }) {
  return (
    <section className="sheet">
      <h2>
        {song.title} <span className="flute-key">· {flute} flute</span>
        {transposeLabel(song) && <span className="flute-key"> · {transposeLabel(song)}</span>}
      </h2>
      <div className="bars" style={{ "--bar-beats": song.time } as React.CSSProperties}>
        {toBars(song.notes, song.time).map((bar, b) => (
          <div className="bar" key={b}>
            {bar.map((n, i) => (
              <div className="beat-span" key={i} style={{ width: `calc(var(--beat) * ${n.beats})` }}>
                {n.note === "rest"
                  ? <div className="rest">rest</div>
                  : <FluteNote note={n.note} flute={flute} />}
                {n.beats > 1 && n.note !== "rest" && <div className="hold" title={`held for ${n.beats} beats`} />}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
