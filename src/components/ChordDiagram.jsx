import { getFingering } from '../utils/chordUtils'

const W=110, H=136, SX=16, SY=30, SW=78, SH=86, NS=6, NF=4
const CW=SW/(NS-1), RH=SH/NF

export function ChordDiagram({ chordName }) {
  const f = getFingering(chordName)
  if (!f) return (
    <div style={{width:W,height:H,display:'flex',alignItems:'center',
      justifyContent:'center',fontSize:13,color:'var(--text-muted)'}}>—</div>
  )

  const { strings, barre } = f

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      {/* Fret number or nut */}
      {barre
        ? <text x={SX-4} y={SY+4} fontSize={9} fill="var(--text-secondary)" textAnchor="end">{barre}fr</text>
        : <rect x={SX} y={SY-3} width={SW} height={4} fill="#eaeaea" rx={1}/>
      }

      {/* Fret lines */}
      {Array.from({length:NF+1},(_,i)=>(
        <line key={i}
          x1={SX} x2={SX+SW}
          y1={SY+i*RH} y2={SY+i*RH}
          stroke="#555" strokeWidth={1.2}/>
      ))}

      {/* String lines — brighter and thicker */}
      {Array.from({length:NS},(_,i)=>(
        <line key={i}
          x1={SX+i*CW} x2={SX+i*CW}
          y1={SY} y2={SY+NF*RH}
          stroke="#aaa" strokeWidth={1.5}/>
      ))}

      {/* Barre bar */}
      {barre && (
        <rect x={SX} y={SY+RH*0.25} width={SW} height={RH*0.55}
          rx={RH*0.28} fill="#c0392b"/>
      )}

      {/* Dots and open/mute markers */}
      {strings.map((fr,si)=>{
        const x = SX+si*CW
        if(fr==='x') return (
          <text key={si} x={x} y={SY-7} fontSize={10}
            fill="#888" textAnchor="middle">✕</text>
        )
        if(fr==='0') return (
          <text key={si} x={x} y={SY-7} fontSize={11}
            fill="#ccc" textAnchor="middle">○</text>
        )
        const fv = parseInt(fr)-(barre?barre-1:0)
        if(fv<1||fv>NF) return null
        if(barre&&(si===0||si===NS-1)) return null
        return (
          <circle key={si}
            cx={x} cy={SY+RH*(fv-0.5)}
            r={7} fill="#c0392b"/>
        )
      })}
    </svg>
  )
}