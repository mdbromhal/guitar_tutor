import { useState } from 'react'
import { getKeyChords } from '../utils/musicTheory'

export function useSelectedKey() {
  const [selectedKey, setSelectedKey] = useState(null)
  const chords = selectedKey ? getKeyChords(selectedKey.key) : []
  return { selectedKey, setSelectedKey, chords }
}
