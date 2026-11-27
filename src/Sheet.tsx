import { toBars, type BarNote } from "./bars";
import FluteNote from "./FluteNote";
import { equivalentFifths, transposeLabel } from "./transpose";
import type { ReactNode } from "react";
import { NON_NOTES, type FluteKeys, type Song } from "./types";

/**
 * The whole tune for one flute: bars of 3, 4 or 6 beats (the song's time), each note a flute drawing. A note longer than
 * a beat is followed by a bar stretching across the beats it's held for, carried over the bar line
 * into the next bar if it's held that long.
 */
export default function Sheet({ song, flute, title = song.title }: { song: Song; flute: FluteKeys; title?: ReactNode }) {
  return (
    <section className="sheet">
      <h2>
        {title} <span className="flute-key">· {equivalentFifths(flute)} flute</span>
        {transposeLabel(song) && <span className="flute-key"> · {transposeLabel(song)}</span>}
      </h2>
      <div className="bars" style={{ "--bar-beats": song.time } as React.CSSProperties}>
        {toBars(song.notes, song.time).map((bar, b) => (
          <div className="bar" key={b}>
            {bar.map((n, i) => (
              <div
                className={`beat-span${n.tiedIn ? "" : " starts-note"}`}
                key={i}
                style={{ width: `calc(var(--beat) * ${n.beats})` }}
              >
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
  const rest = NON_NOTES.includes(n.note);
  // Carried over from the last bar: no second flute, just the hold continuing (or more rest)
  if (n.tiedIn) {
    return rest ? null : <div className={`hold tied-in${n.tiedOut ? " tied-out" : ""} help`} title={`Keep holding ${n.note} from the last bar`} />;
  }
  return (
    <>
      {rest ? (
        <div className="rest">{n.note}</div>
      ) : (
        // A half-beat note on its own, not the start of a longer note cut off by the bar line
        <FluteNote note={n.note} alt={n.alt} flute={flute} trill={n.trill} half={n.beats === 0.5 && !n.tiedOut} quarter={n.beats === 0.25 && !n.tiedOut} />
      )}
      {!rest && (n.beats > 1 || n.tiedOut) && (
        <div className={`hold${n.tiedOut ? " tied-out" : ""} help`} title={`Keep holding ${n.note} for the length of this bar`} />
      )}
    </>
  );
}
