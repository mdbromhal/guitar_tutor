# Project Goal

To make a web app that helps guitarists understand the circle of 5ths and how to play each chord.
The app will feature an interactive circle of 5ths diagram which, upon the user clicking a chord, will
shade the corresponding 5ths. For example, if the user clicks D, the app will dim out everything but G, D, A, Em, F#m, Bm, and C#deg. Additionally, these chords will be shown below in fingering diagrams. 

An added feature for later is the audio checking, which is when the user can click a button called "check me"
that listens to the user playing a chord and detects if the user is indeed playing the correct chord. The
user would have to select which chord they're trying to play beforehand.

Also need to add the I, II, III...for each chord, the small print of the circle of fifths reference diagram.

# Decisions along the way

- PWA: Progressive Web App
        - Basically an app on safari, but can "add to home screen" like an app
        - Don't have to pay to be on apple store 
        - Might have problems with the recording later...

- JSON for chords, not individual files
	- More modular, don't have to hunt down individual files
	- Tell which strings are plucked and it draws it in the app's style later

- File structure:
![proposed file structure](<proposed file structure.png>)


