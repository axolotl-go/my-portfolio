export default function WavePattern() {
  return (
    <div className="absolute inset-0 z-0 opacity-10">
      <svg width="100%" height="100%" className="text-red-600">
        <pattern id="wave" x="0" y="0" width="54" height="24" patternUnits="userSpaceOnUse">
          <path d="M27 0C19.2 0 12.6 4.8 0 4.8V24h54V4.8C41.4 4.8 34.8 0 27 0z" fill="currentColor"/>
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#wave)"/>
      </svg>
    </div>
  )
}

