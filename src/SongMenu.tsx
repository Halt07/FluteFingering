import { useEffect, useRef, useState } from "react";
import { CATEGORIES, SONGS, type SongEntry } from "./songs";

/**
 * The ♪ before a song's title: click it for the list of songs. Songs in a category folder
 * (Christmas, ...) are under that category, in a second list that opens beside it; songs not in
 * a folder are listed after the categories.
 */
export default function SongMenu({ current, onChoose }: { current: string; onChoose: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  const currentCategory = SONGS.find((s) => s.id === current)?.category ?? null;
  // The category whose songs are showing; starts on the current song's, so it's easy to pick a neighbor
  const [category, setCategory] = useState<string | null>(null);
  const menu = useRef<HTMLSpanElement>(null);

  // Close on a click anywhere else, or on Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!menu.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = () => {
    setCategory(currentCategory);
    setOpen(!open);
  };
  const choose = (id: string) => {
    setOpen(false);
    onChoose(id);
  };

  // `onHover`: hovering a song outside any category closes the open category's list
  const songItem = (s: SongEntry, onHover?: () => void) => (
    <li key={s.id} onMouseEnter={onHover}>
      <button
        type="button"
        className={`song-menu-item${s.id === current ? " current" : ""}`}
        onClick={() => choose(s.id)}
      >
        {s.song.title}
      </button>
    </li>
  );

  return (
    <span className="song-picker" ref={menu}>
      <button
        type="button"
        className="song-picker-button"
        title="Choose another song"
        aria-expanded={open}
        onClick={toggle}
      >
        ♪♫▾
      </button>
      {open && (
        <ul className="song-menu">
          {CATEGORIES.map((c) => (
            <li key={c} className="song-menu-category" onMouseEnter={() => setCategory(c)}>
              <button
                type="button"
                className={`song-menu-item${c === category ? " open" : ""}${c === currentCategory ? " current" : ""}`}
                aria-expanded={c === category}
                // A tap (no hover on touch screens) opens or closes it
                onClick={() => setCategory(c === category ? null : c)}
              >
                {c} <span className="song-menu-arrow">▸</span>
              </button>
              {c === category && <ul className="song-menu song-submenu">{SONGS.filter((s) => s.category === c).map((s) => songItem(s))}</ul>}
            </li>
          ))}
          {CATEGORIES.length > 0 && <li className="song-menu-divider" role="separator" />}
          {SONGS.filter((s) => !s.category).map((s) => songItem(s, () => setCategory(null)))}
        </ul>
      )}
    </span>
  );
}

