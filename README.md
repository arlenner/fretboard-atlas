# Fretboard Atlas

A guitar neck reference that runs in the browser. It needs no build step or server code.

**Live:** https://arlenner.github.io/fretboard-atlas/

- Full 24-fret neck. It's laid out for a phone held sideways and can be added to your home screen.
- Tap a note to set the root and light up every note with the same name.
- Layers for intervals, 35 chord types, the seven modes plus pentatonic, blues, minor-family and symmetric scales, or any notes you pick.
- Dots are colored by interval: root red, 3rds yellow/orange, 5th blue, 7ths violet. Each scale degree also has its own shape (root square, 2nd triangle, 3rd circle, 4th pentagon, 5th diamond, 6th down-triangle, 7th hexagon). A toggle switches to coloring by layer.
- Chord positions: pick where the root sits (e.g. 5th string, fret 3) and the neck focuses on a playable voicing there, with a chord diagram, its frets written out, playback and pinning.
- Up to four overlays, each with its own root and an on/off filter for every interval.
- Chord finder: pick notes on the neck to get chord names, including slash chords and partial voicings.
- Pinboard: pin chord shapes and progressions in order, with mini chord diagrams. Play them through, step through them on the neck, or overlay up to four to compare.
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
