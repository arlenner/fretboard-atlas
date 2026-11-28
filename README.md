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
- Three tabs, by what you came to do: Explore (Layers, Chord finder), Write (the progression: Looper, Compose and pins; Circle of fifths; Tab) and Practice.
- Tab (Write tab): write your own tab by tapping the neck or typing, a column at a time, with note lengths (dotted and triplets too), hammer-ons, pull-offs, slides, bends, vibrato, natural and pinch harmonics, dead notes, palm mutes, muting a single note at any point after it starts, rests and labels. Bars follow the time signature. Play it back at any tempo with loop, click and count-in, with each note lit on the neck. Undo, select, copy, cut and paste columns (between tabs too), repeat a bar, add the current phrase, pinned chords or Chord finder notes, copy it as text tab, and paste text tab back in. Several tabs are kept in the browser.
- Tracklist (Write tab, ▦ Tracks): every track as a strip on one bar timeline with a small picture of its notes, hits or takes. Drag a strip sideways to move the track in time, drag its ≡ to reorder; tap a name, double tap or hold a strip to open it.
- Keys tracks: a horizontal piano keyboard where the neck is (tap a key to put the note in at the cursor, with Move on for lines or off for chords) and a piano roll below: tap to add, drag to move, drag the end to resize, double tap to delete, with lengths, a snap grid, velocity and two octaves at a time. Built-in piano, electric piano, organ, synth and pad sounds (in the WAV too), or any plugin instrument.
- Drum step sequencer: drum tracks start as a looping pattern of 16ths, 8ths or 8th triplets over 1 to 4 bars, with accents and ghost notes, played as many times as you like; switch to Tab to turn it into columns for fills.
- Tracks and mixer (Write tab): a tab can have up to 12 more tracks, guitar, drums or audio, each with a name, mute, solo, volume and pan (the Mixer; sliders change it while it plays). Audio tracks hold recordings: ● Record plays the tab from the cursor and records you onto the track, lined up by the count-in and your mic timing; move, nudge, trim or delete a take, or place any saved take.
- Effects and envelopes (Write tab): each track has a filter (low, high or band pass), 3-band EQ, drive, compressor, tempo-synced delay and reverb, changed live while it plays, and envelopes for volume, pan, filter cutoff, drive, delay, reverb and pitch (an octave either way, in semitones; plugins get pitch bend) drawn on the bar grid, each point going to the next by a line, a smooth curve, fast, slow or held. A finger on a plugin's own controls is passed on as a mouse, so knobs that only follow a mouse work on a phone. Export the tab as a WAV mixdown (rendered offline, with every effect, envelope, kit and audio take) or a MIDI file (guitars and drums, General MIDI drums on channel 10).
- Instrument tracks (Write tab): a track played by a Web Audio Module (WAM 2) plugin, written on a guitar neck, a bass neck (the neck turns into a four-string bass, E A D G, with a four-line tab) or keys (the keyboard and piano roll). Switching keeps the notes and their timing: on a neck each note goes on the highest string that has it, an octave up or down if it's off the neck. Pick one from the community list at webaudiomodules.com (Synth-101, Soundfont Player, DRM-16 and more), from the WAM group's own examples (OBXD, TinySynth, Faust Flute; effects like Guitar AmpSim 60s, BigMuff, TS9, Stone Phaser and Quadrafuzz; no licence is stated for these), or give any plugin's address (addresses you use are remembered under Yours, in both lists); its controls open in the page and its settings can be kept with the tab. Plugins are other people's code, loaded from their own sites under their own licences (the host uses the MIT-licensed WAM SDK from a CDN); only load ones you trust. Up to four plugin effects (amp sims, pedals, delays, reverbs and more from the same list) can go on any track, after the compressor. Plugins are in the MIDI export, not yet the WAV.
- Drum tracks (Write tab): add a drum track to any tab and a drum kit takes the neck's place: tap a drum (or press 1 to 9) to put it in the column at the cursor. Kick, snare, closed and open hi-hat, three toms, crash and ride, with the same lengths, splits, selection, undo and Repeat this bar as the guitar. Start from a bar of rock, half-time, four on the floor or shuffle. Fills and rolls drop in a snare roll, hi-hat roll, run down the toms or hip-hop fill at the cursor, in 8ths, 8th triplets, 16ths, sextuplets or 32nds, for half a beat up to a bar, soft to loud and with a crash after if you like, without moving the beat after it. Any hit can be a ghost note or an accent (G and A). 32nd notes work on the guitar too. Build your own kits: drag a sound file onto a drum (or Load one, the file picker on a phone), make as many named kits as you like and switch between them; each drum track plays its own kit, and any drum without a sound of yours plays the built-in one. Find on each drum searches Freesound (with your own free API key) for short CC0 sounds, or CC BY too, whose credits are kept and listed under the kit; hear the preview, then Use. Three kits come with the app, Acoustic, 808 and Lo-fi, made from CC0 sounds on Freesound (see kits/CREDITS.md), as well as Classic, made on the spot; a kit of your own can take the rest of its drums from any of them. Your kits stay in the browser and aren't synced. Every track plays together (mute any of them), and ● Rec records you over the whole tab into Takes.
- Focus: one button leaves just the neck and whatever is running (loop, metronome, Time Check, tempo test, quiz).
- Practice tab, in four groups (Today, Time, Play, Train) plus the Tuner: a metronome (tap tempo, beats per bar, accent, subdivisions), a lesson builder that rolls random scales and chords (any of the app's scales, arpeggios and chord types, in foldable groups) from the keys, types and positions you choose, and a session timer that loads each item onto the neck and counts it down.
- Fretboard quizzes: find the note, name the note, find the interval, name the interval; timed or counted, with personal bests. Quizzes can be lesson items.
- Metronome options: click on 2 & 4 or beat 1 only, gap click (play N bars, rest M), and a speed ladder.
- Practice log (stored in the browser): minutes, streak, 14-day chart, per-exercise tempo history with a 'clean at N bpm' marker, quiz scores, and copy/restore backup.
- Play along: progression loops (any key, or your Pinboard) with strum/pad patterns and drums on the metronome clock, plus a root or root+5th drone.
- Follow the changes: while a loop plays, the neck shows each chord's tones over a fitting scale, and the next chord's 3rd and 7th just before it arrives.
- Guided lessons for every scale: hear it over a drone, compare it with a familiar scale, play its chords, check your ear, improvise over a two-chord vamp, and schedule it for review.
- Compose (Write tab): "Where can I go?" suggests next chords by what they do; "Why does this work?" explains the Looper progression chord by chord.
- Scales to play over any chord: what each one adds, which notes to pass through, and pentatonics from other notes.
- Practice phrases: hammer and pluck phrases (single, double, triple and mixed selective picking) or motif and variation (a short idea, then the same idea moved, turned around, re-rhythmed and given a new ending), from any scale or arpeggio position, with tab, their own playback controls, a phrase number you can type, favorites and a your-turn gap.
- Calm screens: settings fold to one line that says what is set and stay how you leave them; View holds the display choices and ? shows explanations.
- Time Check: the click drops out for 1 to 8 bars and the mic measures your drift, spread and placement.
- Takes: record yourself over a loop or click, keep dated takes, compare the first with the latest.
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

## Sync with Google

Settings > Sign in with Google keeps your tabs, favorite phrases, saved setups, settings and practice history the same on every device. The data is a single file in the hidden app folder of your own Google Drive (the `drive.appdata` scope: the app can't see anything else in your Drive). There's no server. Each device merges against what it last synced, so a change made on one device is never lost to an older copy on another. Sound delay, mic timing and where you are in the app stay per device. Recordings aren't synced.
## Files

- `index.html` – the whole app (HTML, CSS and JS)
- `sw.js` – keeps a copy of the app so it opens without a connection
- `manifest.webmanifest`, `icon.svg` – what lets you install it on your home screen
