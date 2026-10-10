import { useState } from 'react'
import { ChordDiagram } from './ChordDiagram'
import { TYPE_LABEL } from '../utils/chordUtils'

export function ChordGrid({ keyInfo, chords }) {
  const [selected, setSelected] = useState(null)

  if (!keyInfo) return (
    <p style={{textAlign:'center', color:'var(--text-muted)',
      fontSize:15, padding:'3rem'}}>
      Tap a key on the wheel to see its chords
    </p>
  )

  return (
    <div>
      <div style={{marginBottom:'1rem', paddingLeft:4}}>
        <h2 style={{fontSize:22, fontWeight:500}}>
          {keyInfo.key.split('/')[0]} major
        </h2>
        <p style={{fontSize:14, color:'var(--text-secondary)', marginTop:3}}>
          Key signature: {keyInfo.sig || 'no sharps or flats'}
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: 10,
      }}>
        {chords.map(chord => {
          const isSel = selected === chord.name
          return (
            <button
              key={chord.name}
              onClick={() => setSelected(isSel ? null : chord.name)}
              style={{
                background: isSel ? 'var(--surface-1)' : 'transparent',
                border: isSel
                  ? '2px solid #eaeaea'
                  : '1px solid rgba(255,255,255,0.15)',
                borderRadius: 14,
                padding: '12px 6px 10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
                cursor: 'pointer',
                color: 'inherit',
                width: '100%',
              }}
            >
              <span style={{fontSize:19, fontWeight:600}}>{chord.name}</span>
              <span style={{fontSize:14, color:'var(--text-secondary)'}}>{chord.degree}</span>
              <span style={{fontSize:14, color:'var(--text-muted)'}}>{TYPE_LABEL[chord.type]}</span>
              <ChordDiagram chordName={chord.name}/>
            </button>
          )
        })}
      </div>
    </div>
  )
}