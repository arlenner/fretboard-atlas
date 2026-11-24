# Fretboard Atlas

A guitar neck reference that runs in the browser. It needs no build step or server code.

**Live:** https://arlenner.github.io/fretboard-atlas/

- Full 24-fret neck. It's laid out for a phone held sideways and can be added to your home screen. Sideways on a phone, the neck fills the screen and the menus open as a sidebar over part of it, or full screen.
- Tap a note to set the root and light up every note with the same name.
- Layers for intervals, 66 chord types (including altered dominants, ♯11 and sus♭9 chords and other colors for exotic scales), the seven modes, pentatonic and blues scales, Japanese/Egyptian/Balinese pentatonics, the modes of melodic and harmonic minor, harmonic major and other exotic scales (double harmonic, Hungarian, Neapolitan, Persian, enigmatic), bebop, augmented and other symmetric scales, or any notes you pick.
- Dots are colored by interval: root red, 3rds yellow/orange, 5th blue, 7ths violet. Each scale degree also has its own shape (root square, 2nd triangle, 3rd circle, 4th pentagon, 5th diamond, 6th down-triangle, 7th hexagon). A toggle switches to coloring by layer.
- Chord positions: pick where the root sits (e.g. 5th string, fret 3) and the neck focuses on a playable voicing there, with a chord diagram, its frets written out, playback and pinning.
- Arpeggios on scale layers (maj, m, 7, maj7, m7, m7b5, dim7 and more) in the five CAGED shapes, as the full chord-tone shape or a six-string sweep, with playback.
- Chords to play under a scale: for any scale (including the exotic ones), the chords whose notes all belong to it, on the root and on every scale note, with the scale's own chord in thirds outlined. Tap one to hear it and see it on the neck over the scale.
- Scale positions: focus a scale on one area of the neck, as a box (5-fret hand position) or 3 notes per string (2 for pentatonics), numbered from the root.
- Optional 9/11/13 (or always 2/4/6) names for extensions.
- Up to four overlays, each with its own root and an on/off filter for every interval.
- Chord finder: pick notes on the neck to get chord names, including slash chords and partial voicings.
- Looper: drag chords into a lane (from your pins, a chord search that understands names like F♯m7♭5, Dmaj9♯11, Eø or C–7, or any circle progression), give each ½, 1 or 2 bars, and loop it with strums, pads and drums.
- Saved setups: save what's on screen (layers, overlays, picks, circle key, pins, the Looper, tempo, tuning) under a name and load it later, or copy a link that opens the same setup on any device.
- Pinboard: pin chord shapes and progressions in order, with mini chord diagrams. Play them through, step through them on the neck, or overlay up to four to compare.
- Today: one tap builds a 10, 20 or 30 minute session from what is due for review, what you miss in quizzes, and something new.
- Practice view: while a lesson runs, just the neck, the item, the time and large controls (also arrow keys, space and page-turner pedals).
- Spaced review: rate an item Tough, OK or Easy and it comes back in 1 to 64 days; quizzes rate themselves. Progress shows what is due.
- Practice tab, in sections (Lesson, Metronome, Play along, Quiz, Tuner, Progress, or All at once): a metronome (tap tempo, beats per bar, accent, subdivisions), a lesson builder that rolls random scales and chords (any of the app's scales, arpeggios and chord types, in foldable groups) from the keys, types and positions you choose, and a session timer that loads each item onto the neck and counts it down.
- Fretboard quizzes: find the note, name the note, find the interval, name the interval; timed or counted, with personal bests. Quizzes can be lesson items.
- Metronome options: click on 2 & 4 or beat 1 only, gap click (play N bars, rest M), and a speed ladder.
- Practice log (stored in the browser): minutes, streak, 14-day chart, per-exercise tempo history with a 'clean at N bpm' marker, quiz scores, and copy/restore backup.
- Play along: progression loops (any key, or your Pinboard) with strum/pad patterns and drums on the metronome clock, plus a root or root+5th drone.
- Follow the changes: while a loop plays, the neck shows each chord's tones over a fitting scale, and the next chord's 3rd and 7th just before it arrives.
- Guided lessons for every scale: hear it over a drone, compare it with a familiar scale, play its chords, check your ear, improvise over a two-chord vamp, and schedule it for review.
- Weak spots: every quiz answer is tracked by fret, note, string, interval and chord type; a heatmap on the neck shows % right per fret (green / amber for slow / red), and 'weak spots first' quizzes drill what you miss.
- Tuner (microphone, YIN pitch detection) with nearest-string guidance and reference tones.
- Tempo test: a guided climb that finds your clean tempo for an exercise and logs it, judged by you or by the mic (note timing against the click, after a one-time latency calibration).
- Ear training: hear the interval, hear the chord, hear it and find it on the neck.
- Interactive circle of fifths with diatonic chords, suggested scales and common progressions (including borrowed-chord and altered ones), plus a progression roller: plain, colorful or adventurous.
- Alternate tunings, a left-handed neck, sharp/flat spelling, and a plucked-string sound when you tap.

## Run locally

Open `index.html` in a browser. Serving it locally lets the home-screen install work:

```
python -m http.server 8000
```

Then visit http://localhost:8000.

## Files

- `index.html` – the whole app (HTML, CSS and JS)
- `sw.js` – keeps a copy of the app so it opens without a connection
- `manifest.webmanifest`, `icon.svg` – what lets you install it on your home screen
