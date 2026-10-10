import { CIRCLE_KEYS, getKeyChords } from '../utils/musicTheory'

const CX=260, CY=260, R_OUTER=255, R_MID=163, R_INNER=84, N=12
const REL_MINORS = CIRCLE_KEYS.map(k => getKeyChords(k.key)[5].name)

function polar(deg, r) {
  const rad = (deg - 90) * Math.PI / 180
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)]
}

function slicePath(i, r1, r2, gap=1.2) {
  const sliceDeg = 360 / N
  const a1 = i * sliceDeg - sliceDeg / 2 + gap
  const a2 = i * sliceDeg + sliceDeg / 2 - gap
  const [x1, y1] = polar(a1, r2)  // outer start
  const [x2, y2] = polar(a2, r2)  // outer end
  const [x3, y3] = polar(a2, r1)  // inner end
  const [x4, y4] = polar(a1, r1)  // inner start
  return [
    `M ${x1} ${y1}`,
    `A ${r2} ${r2} 0 0 1 ${x2} ${y2}`,  // outer arc clockwise
    `L ${x3} ${y3}`,
    `A ${r1} ${r1} 0 0 0 ${x4} ${y4}`,  // inner arc counter-clockwise
    'Z'
  ].join(' ')
}

function midPoint(i, r) {
  return polar(i * (360 / N), r)
}

function lighten(hex) {
  const r = parseInt(hex.slice(1,3), 16)
  const g = parseInt(hex.slice(3,5), 16)
  const b = parseInt(hex.slice(5,7), 16)
  const m = v => Math.round(v + (255 - v) * 0.55)
  return `#${[m(r),m(g),m(b)].map(v => v.toString(16).padStart(2,'0')).join('')}`
}

export function CircleOfFifths({ selectedKey, onKeySelect }) {
  const selIdx = selectedKey
    ? CIRCLE_KEYS.findIndex(k => k.key === selectedKey.key)
    : -1

  return (
    <svg
      viewBox="0 0 520 520"
      style={{ width:'100%', maxWidth:380, display:'block', margin:'0 auto' }}
    >
      {CIRCLE_KEYS.map((k, i) => {
        const isSel = i === selIdx
        const dimmed = selIdx >= 0 && !isSel
        const [mlx, mly] = midPoint(i, (R_MID + R_OUTER) / 2)
        const [ilx, ily] = midPoint(i, (R_INNER + R_MID) / 2)

        return (
          <g key={k.key} style={{ cursor:'pointer' }}
            onClick={() => onKeySelect(isSel ? null : k)}>

            {/* Outer slice — major key name */}
            <path
              d={slicePath(i, R_MID, R_OUTER)}
              fill={k.color}
              stroke="#1a1a2e"
              strokeWidth={2}
              opacity={dimmed ? 0.25 : 1}
              style={{ transition:'opacity 0.2s' }}
            />
            {isSel && (
              <path
                d={slicePath(i, R_MID, R_OUTER, 0.2)}
                fill="none"
                stroke="#111"
                strokeWidth={4}
              />
            )}
            <text x={mlx} y={mly+5} textAnchor="middle"
              fontSize={23} fontWeight={600} fill={k.textColor}
              style={{ pointerEvents:'none', userSelect:'none' }}>
              {k.key}
            </text>

            {/* Inner ring — relative minor */}
            <path
              d={slicePath(i, R_INNER, R_MID)}
              fill={lighten(k.color)}
              stroke="#1a1a2e"
              strokeWidth={2}
              opacity={dimmed ? 0.25 : 1}
              style={{ transition:'opacity 0.2s' }}
            />
            <text x={ilx} y={ily+4} textAnchor="middle"
              fontSize={19} fill={k.textColor}
              style={{ pointerEvents:'none', userSelect:'none' }}>
              {REL_MINORS[i]}
            </text>
          </g>
        )
      })}

      {/* Centre circle */}
      <circle cx={CX} cy={CY} r={R_INNER - 3}
        fill="var(--surface-1, #1e2a45)"
        stroke="var(--border)" strokeWidth={1} />
      <text x={CX} y={CY-20} textAnchor="middle"
        fontSize={20} fill="var(--text-muted)">KEY</text>
      <text x={CX} y={CY+12} textAnchor="middle"
        fontSize={32} fontWeight={500} fill="var(--text-primary)">
        {selectedKey ? selectedKey.key.split('/')[0] : '—'}
      </text>
      <text x={CX} y={CY+38} textAnchor="middle"
        fontSize={20} fill="var(--text-secondary)">
        {selectedKey?.sig ?? ''}
      </text>
    </svg>
  )
}