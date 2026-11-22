# Fretboard Atlas

A guitar neck reference that runs in the browser. It needs no build step or server code.

**Live:** https://arlenner.github.io/fretboard-atlas/

- Full 24-fret neck. It's laid out for a phone held sideways and can be added to your home screen.
- Tap a note to set the root and light up every note with the same name.
- Layers for intervals, 35 chord types, the seven modes plus pentatonic, blues, minor-family and symmetric scales, or any notes you pick.
- Up to four overlays, each with its own root and an on/off filter for every interval.
- Chord finder: pick notes on the neck to get chord names, including slash chords and partial voicings.
- Interactive circle of fifths with diatonic chords, suggested scales and common progressions.
- Alternate tunings, a left-handed neck, sharp/flat spelling, and a plucked-string sound when you tap.

## Run locally

Open `index.html` in a browser. Serving it locally lets the home-screen install work:

```
python -m http.server 8000
```

Then visit http://localhost:8000.

## Files

- `index.html` – the whole app (HTML, CSS and JS)
- `manifest.webmanifest`, `icon.svg` – what lets you install it on your home screen
