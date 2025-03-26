import { memo } from 'react'
import './Unit.scss'

interface UnitProps {
  logo: string
  altText: string
}

const Unit = ({ logo, altText }: UnitProps) => {
  // Import all logo images
  const logoPath = new URL(`../../assets/logos/${logo}`, import.meta.url).href

  return (
    <div className="hex-unit" data-testid="hex-unit">
      <img 
        src={logoPath} 
        alt={altText} 
        width={105} 
        height={120} 
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default memo(Unit) 