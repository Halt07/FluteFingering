import { toBars, type BarNote } from "./bars";
import FluteNote from "./FluteNote";
import { transposeLabel } from "./transpose";
import type { Song } from "./types";

/**
 * The whole tune for one flute: bars of 3 or 4 beats (the song's time), each note a flute drawing. A note longer than
 * a beat is followed by a bar stretching across the beats it's held for, carried over the bar line
 * into the next bar if it's held that long.
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
                <BeatSpan n={n} flute={flute} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/** One note's part of a bar: the flute (or "rest"), then a hold bar for any further beats. */
function BeatSpan({ n, flute }: { n: BarNote; flute: string }) {
  const rest = n.note === "rest";
  // Carried over from the last bar: no second flute, just the hold continuing (or more rest)
  if (n.tiedIn) {
    return rest ? null : <div className={`hold tied-in${n.tiedOut ? " tied-out" : ""}`} title={`${n.note}, still held`} />;
  }
  return (
    <>
      {rest ? <div className="rest">rest</div> : <FluteNote note={n.note} flute={flute} trill={n.trill} />}
      {!rest && (n.beats > 1 || n.tiedOut) && (
        <div className={`hold${n.tiedOut ? " tied-out" : ""}`} title={`${n.note}, held`} />
      )}
    </>
  );
}
