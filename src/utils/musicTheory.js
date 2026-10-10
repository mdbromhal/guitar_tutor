const MAJOR_INTERVALS = [0, 2, 4, 5, 7, 9, 11]
const SCALE_TYPES = ['maj','min','min','maj','maj','min','dim']
const SCALE_DEGREES = ['I','ii','iii','IV','V','vi','vii°']

// Sharp spellings — used for keys with sharps
const SHARP_NOTES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']

// Flat spellings — used for keys with flats
const FLAT_NOTES  = ['C','D♭','D','E♭','E','F','G♭','G','A♭','A','B♭','B']

const NOTE_INDEX = {
  'C':0,'C#':1,'Db':1,'D':2,'D#':3,'Eb':3,
  'E':4,'F':5,'F#':6,'Gb':6,'G':7,'G#':8,
  'Ab':8,'A':9,'A#':10,'Bb':10,'B':11
}

// Which keys use flat spellings
const FLAT_KEYS = new Set(['F','Bb','Eb','Ab','Db','Gb'])

export function getKeyChords(keyName) {
  const rootName = keyName.split('/')[0].replace('♭','b').replace('♯','#')
  const rootIndex = NOTE_INDEX[rootName] ?? 0
  const useFlats = FLAT_KEYS.has(rootName)
  const noteNames = useFlats ? FLAT_NOTES : SHARP_NOTES

  return MAJOR_INTERVALS.map((semitones, i) => {
    const noteIndex = (rootIndex + semitones) % 12
    const noteName = noteNames[noteIndex]
    let chordName
    if (SCALE_TYPES[i] === 'min') chordName = noteName + 'm'
    else if (SCALE_TYPES[i] === 'dim') chordName = noteName + '°'
    else chordName = noteName
    return { name: chordName, degree: SCALE_DEGREES[i], type: SCALE_TYPES[i] }
  })
}

export const CIRCLE_KEYS = [
  { key:'C',      sig:'',       color:'#F5C842', textColor:'#7a6200' },
  { key:'G',      sig:'1♯',    color:'#A8D86E', textColor:'#3a6000' },
  { key:'D',      sig:'2♯',    color:'#6DC9A0', textColor:'#1a5c40' },
  { key:'A',      sig:'3♯',    color:'#5BBFCC', textColor:'#0d4f60' },
  { key:'E',      sig:'4♯',    color:'#6AAAE0', textColor:'#1a3f70' },
  { key:'B',      sig:'5♯',    color:'#8E8ED8', textColor:'#2d2a7a' },
  { key:'F♯/G♭', sig:'6♯/6♭', color:'#C090CC', textColor:'#5a2070' },
  { key:'D♭',     sig:'5♭',    color:'#D97AAA', textColor:'#6a1040' },
  { key:'A♭',     sig:'4♭',    color:'#E07070', textColor:'#6a1515' },
  { key:'E♭',     sig:'3♭',    color:'#E89860', textColor:'#6a3000' },
  { key:'B♭',     sig:'2♭',    color:'#EFC050', textColor:'#6a4800' },
  { key:'F',      sig:'1♭',    color:'#E8D848', textColor:'#6a5800' },
]