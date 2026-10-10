import { CircleOfFifths } from './components/CircleOfFifths'
import { ChordGrid } from './components/ChordGrid'
import { CheckMe } from './components/CheckMe'
import { useSelectedKey } from './hooks/useSelectedKey'
import './App.css'

export default function App() {
  const { selectedKey, setSelectedKey, chords } = useSelectedKey()

  return (
    <div className="app">
      <header className="app-header">
        <h1>Guitar tutor</h1>
      </header>
      <main className="app-main">
        <section className="wheel-section">
          <CircleOfFifths
            selectedKey={selectedKey}
            onKeySelect={setSelectedKey}
          />
        </section>
        <section className="chords-section">
          <ChordGrid keyInfo={selectedKey} chords={chords} />
        </section>
        <section className="checkme-section">
          <CheckMe targetChord={null} />
        </section>
      </main>
    </div>
  )
}
