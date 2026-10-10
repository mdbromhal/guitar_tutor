export function CheckMe(){
  return(
    <div style={{marginTop:'1rem',padding:'1rem',border:'0.5px dashed var(--border-strong)',
      borderRadius:12,textAlign:'center'}}>
      <p style={{fontSize:13,color:'var(--text-muted)',marginBottom:8}}>Coming soon</p>
      <button disabled style={{opacity:0.4,cursor:'not-allowed',padding:'8px 20px',
        borderRadius:8,border:'0.5px solid var(--border-strong)',fontSize:14,
        background:'transparent',color:'var(--text-secondary)'}}>
        Check me
      </button>
    </div>
  )
}
