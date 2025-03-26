import { useMemo } from 'react'
import HexagonRow from './components/Hexagon/Row'
import logos from './assets/logos.json'
import './App.scss'

const ITEMS_PER_ROW = 11

const App = () => {
  const rows = useMemo(() => {
    // Pre-calculate the number of rows needed
    const numRows = Math.ceil(logos.length / ITEMS_PER_ROW)
    
    // Create rows with proper length using Array.from
    return Array.from({ length: numRows }, (_, i) => {
      const startIdx = i * ITEMS_PER_ROW
      return logos.slice(startIdx, startIdx + ITEMS_PER_ROW)
    })
  }, []) // Empty dependency array since logos is static

  return (
    <div className="app">
      <div className="hexagon-container" data-testid="hexagon-container">
        {rows.map((row, rowIndex) => (
          <HexagonRow key={rowIndex} units={row} />
        ))}
      </div>
    </div>
  )
}

export default App 