import { fingeringFor, type Holes } from "./fingerings";

/**
 * One note, as it's fingered on a flute in `flute` (its key): the note name above a drawing of the
 * flute, in a gray block. If that flute can't play the note, the block is left empty. A trill shows
 * as a squiggle on the flute above the holes. A half-beat (eighth) note gets only half the gray block.
 */
export default function FluteNote({
  note,
  flute,
  trill = false,
  half = false,
}: {
  note: string;
  flute: string;
  trill?: boolean;
  half?: boolean;
}) {
  const holes = fingeringFor(note, flute);
  const block = `note-block${half ? " half" : ""}`;
  if (!holes) {
    return <div className={block + " help"} title={`${note} can't be played on the ${flute} flute`} />;
  }
  return (
    <div className={block}>
      <div className="note-card">
        <div className="note-name">{note}</div>
        <FluteDrawing holes={holes} trill={trill} label={`${note}${trill ? " (trill)" : ""} on the ${flute} flute`} />
      </div>
    </div>
  );
}

/** What the squiggle means, shown when you hover over it. */
const TRILL_HELP = "Trill: while holding this note, quickly flutter a finger on and off a hole to make the note shimmer.";

/** What a half-dark hole means, shown when you hover over it. */
const HALF_HOLE_HELP =
  "Half-hole: cover only part of this hole. How much varies from flute to flute, so check your flute's chart or adjust until the note sounds right.";

// The flute, top to bottom: a body rounded at the top, and six holes in two groups of three
const HOLE_Y = [40, 56, 72, 96, 112, 128];

function FluteDrawing({ holes, trill, label }: { holes: Holes; trill: boolean; label: string }) {
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
      {trill && (
        // The squiggle, with a bigger invisible area around it so it's easy to hover for the explanation
        <g className="trill-mark">
          <title>{TRILL_HELP}</title>
          <rect className="trill-hover help" x={8} y={16} width={24} height={16} />
          <path className="trill" d="M12,26 q2,-4 4,0 t4,0 t4,0 t4,0" />
        </g>
      )}
      {holes.map((isCovered, i) =>
        isCovered === null ? (
          <circle key={i} cx={20} cy={HOLE_Y[i]} r={6} className="hole-variable help">
            <title>{HALF_HOLE_HELP}</title>
          </circle>
        ) : (
          <circle key={i} cx={20} cy={HOLE_Y[i]} r={6} className={isCovered ? "hole-covered" : "hole-open"} />
        ),
      )}
    </svg>
  );
}
