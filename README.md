# Guitar Tutor
A web app for guitarists to explore keys, chords, and fingerings using the circle of fifths. 

Built as a Progressive Web App (PWA), it runs in the browser and can be installed directly on an iPad or iPhone from Safari.

## What it does
- Circle of fifths: tap any key on the wheel to select it
- Chord display: shows all 7 chords in that key with their scale degree (I, ii, iii, IV, V, vi, vii°) and type (Major, Minor, Diminished)
- Fingering diagrams: each chord shows a guitar fretboard diagram with dot positions, open strings, and muted strings. Barre chords show the fret number
- Check Me (*coming soon*): tap a chord, play it on your guitar, and the app will listen and tell you if you played it correctly

## How to use it
### In a browser
Visit the app at:
https://mdbromhal.github.io/guitar_tutor/

### Install on an iPad or iPhone
1. Open the link above in **Safari**
2. Tap the **Share** button at the bottom of the screen
3. Tap **Add to Home Screen**
4. Tap **Add** and the app will appear on your home screen like a regular app

### Reading a chord diagram
```
  ✕  ○           ← ✕ = mute this string, ○ = play it open
  |  |  |  |  |  |
  ╔══════════════╗  ← thick bar = nut (open position)
  ║  ●  ●  |  |  ║
  ║  |  |  ●  |  ║  ← ● = place your finger here
  ║  |  |  |  |  ║
  ╚══════════════╝
  E  A  D  G  B  e  ← strings, low to high
```
For barre chords, a number on the left (like ```2fr```) tells you which fret to position your index finger across all strings.

### Coming soon
- Check Me: play a chord into your device microphone and get instant feedback on whether you played it correctly
- Alternate chord voicings
- Minor key support

## Feedback
If something looks wrong or you'd like a feature added, get in touch directly!