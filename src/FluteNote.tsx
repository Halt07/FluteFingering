import { fingeringFor, type Holes } from "./fingerings";

/**
 * One note, as it's fingered on a flute in `flute` (its key): the note name above a drawing of the
 * flute, in a gray block. If that flute can't play the note, the block is left empty.
 */
export default function FluteNote({ note, flute }: { note: string; flute: string }) {
  const holes = fingeringFor(note, flute);
  if (!holes) {
    return <div className="note-block" title={`${note} can't be played on the ${flute} flute`} />;
  }
  return (
    <div className="note-block">
      <div className="note-card">
        <div className="note-name">{note}</div>
        <FluteDrawing holes={holes} label={`${note} on the ${flute} flute`} />
      </div>
    </div>
  );
}

// The flute, top to bottom: a body rounded at the top, and six holes in two groups of three
const HOLE_Y = [40, 56, 72, 96, 112, 128];

function FluteDrawing({ holes, label }: { holes: Holes; label: string }) {
  const covered = holes.map((c, i) => `hole ${i + 1} ${c ? "covered" : c === null ? "half covered" : "open"}`).join(", ");
  return (
    <svg className="flute" viewBox="0 0 40 142" role="img" aria-label={`${label}: ${covered}`}>
      <defs>
        {/* A half-covered hole: dark on the left, light on the right */}
        <linearGradient id="half-hole">
          <stop offset="50%" className="half-hole-dark" />
          <stop offset="50%" className="half-hole-light" />
        </linearGradient>
      </defs>
      <path className="flute-body" d="M8,140 V18 A12,12 0 0 1 32,18 V140 Z" />
      {holes.map((isCovered, i) => (
        <circle key={i} cx={20} cy={HOLE_Y[i]} r={6} className={isCovered ? "hole-covered" : isCovered === null ? "hole-variable" : "hole-open"} />
      ))}
    </svg>
  );
}
