/// <reference types="vite/client" />

declare module '*.svg' {
  const svgContent: string
  export default svgContent
}

declare module '*.json' {
  const jsonContent: any
  export default jsonContent
} 