import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B3D2E',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '36px',
        }}
      >
        <svg width="130" height="130" viewBox="0 0 24 24" fill="none">
          <path d="M12 2 L3 6 L3 12 C3 17.5 7 21.5 12 23 C17 21.5 21 17.5 21 12 L21 6 Z" fill="#D4A853" opacity="0.9" />
          <path d="M8 12 L11 15 L16 9" stroke="#0B3D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
