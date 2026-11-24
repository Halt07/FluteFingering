# Flute Fingering Chart

Fingering sheets for a six-hole Native American flute, one sheet per flute key.

## Run

```sh
npm install     # once
npm run dev     # open the printed URL; print from the browser for paper copies
```

## A new song

Edit `src/song.ts`, then reload the page (or restart `npm run dev`):

- `title`: shown at the top of each sheet.
- `flutes`: the keys of the flutes to make sheets for, such as `"A4"` or `"F#4"`. You get one sheet per flute.
- `notes`: `{ note: "C#5", beats: 2 }` and so on. Use `"rest"` for a rest. Beats must be whole numbers.

Notes are grouped four beats to a bar. A note held longer than one beat gets a bar stretching across its extra beats.
If a flute can't play a note, its block is left gray.

## Fingerings

`src/fingerings.ts` maps how far a note is above the flute's key (in semitones) to which holes are covered,
top hole first. It works for every key. **Check it against your own flutes.** Fingerings, especially
for the higher notes, vary from maker to maker. Add or change entries there.
