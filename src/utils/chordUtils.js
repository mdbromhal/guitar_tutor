import chordsData from '../data/chords.json'

const { chords } = chordsData

function normalise(name) {
  return name
    .replace(/♯/g, '#')
    .replace(/♭/g, 'b')
    .replace(/°/g, '°')
}

export function getFingering(chordName) {
  const key = normalise(chordName)
  return chords[key] ?? null
}

export const TYPE_LABEL = {
  maj: 'Major',
  min: 'Minor',
  dim: 'Diminished',
}
