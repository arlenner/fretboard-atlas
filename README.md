# Fretboard Atlas

A guitar neck reference that runs in the browser. It needs no build step or server code.

**Live:** https://arlenner.github.io/fretboard-atlas/

- Full 24-fret neck. It's laid out for a phone held sideways and can be added to your home screen. Sideways on a phone, the neck fills the screen and the menus open as a sidebar over part of it, or full screen.
- Tap a note to set the root and light up every note with the same name.
- Layers for intervals, 35 chord types, the seven modes, pentatonic and blues scales, Japanese/Egyptian/Balinese pentatonics, the modes of melodic and harmonic minor, harmonic major and other exotic scales (double harmonic, Hungarian, Neapolitan, Persian, enigmatic), bebop, augmented and other symmetric scales, or any notes you pick.
- Dots are colored by interval: root red, 3rds yellow/orange, 5th blue, 7ths violet. Each scale degree also has its own shape (root square, 2nd triangle, 3rd circle, 4th pentagon, 5th diamond, 6th down-triangle, 7th hexagon). A toggle switches to coloring by layer.
- Chord positions: pick where the root sits (e.g. 5th string, fret 3) and the neck focuses on a playable voicing there, with a chord diagram, its frets written out, playback and pinning.
- Arpeggios on scale layers (maj, m, 7, maj7, m7, m7b5, dim7 and more) in the five CAGED shapes, as the full chord-tone shape or a six-string sweep, with playback.
- Scale positions: focus a scale on one area of the neck, as a box (5-fret hand position) or 3 notes per string (2 for pentatonics), numbered from the root.
- Optional 9/11/13 (or always 2/4/6) names for extensions.
- Up to four overlays, each with its own root and an on/off filter for every interval.
- Chord finder: pick notes on the neck to get chord names, including slash chords and partial voicings.
- Pinboard: pin chord shapes and progressions in order, with mini chord diagrams. Play them through, step through them on the neck, or overlay up to four to compare.
- Practice tab: a metronome (tap tempo, beats per bar, accent, subdivisions), a lesson builder that rolls random scales and chords from the keys, types and positions you choose, and a session timer that loads each item onto the neck and counts it down.
- Fretboard quizzes: find the note, name the note, find the interval, name the interval; timed or counted, with personal bests. Quizzes can be lesson items.
- Metronome options: click on 2 & 4 or beat 1 only, gap click (play N bars, rest M), and a speed ladder.
- Practice log (stored in the browser): minutes, streak, 14-day chart, per-exercise tempo history with a 'clean at N bpm' marker, quiz scores, and copy/restore backup.
- Play along: progression loops (any key, or your Pinboard) with strum/pad patterns and drums on the metronome clock, plus a root or root+5th drone.
- Weak spots: every quiz answer is tracked by fret, note, string, interval and chord type; a heatmap on the neck shows % right per fret (green / amber for slow / red), and 'weak spots first' quizzes drill what you miss.
- Tuner (microphone, YIN pitch detection) with nearest-string guidance and reference tones.
- Tempo test: a guided climb that finds your clean tempo for an exercise and logs it, judged by you or by the mic (note timing against the click, after a one-time latency calibration).
- Ear training: hear the interval, hear the chord, hear it and find it on the neck.
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
