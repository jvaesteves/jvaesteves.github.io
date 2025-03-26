import { memo } from 'react'
import HexagonUnit from './Unit'
import './Row.scss'

interface RowProps {
  units: Array<{ logo_file: string; alt_text: string }>
}

const Row = ({ units }: RowProps) => {
  return (
    <div className="hex-row">
      {units.map((unit, index) => (
        <HexagonUnit 
          key={`${unit.logo_file}-${index}`} 
          logo={unit.logo_file} 
          altText={unit.alt_text} 
        />
      ))}
    </div>
  )
}

// Memoize the Row component since it only needs to re-render if units change
export default memo(Row) 