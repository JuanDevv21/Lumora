import { ImageResponse } from 'next/og'

export const alt = 'Lumora — Software a medida, automatización e inteligencia artificial'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0B1020',
          color: '#FFFFFF',
          padding: '76px 84px',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 520,
            height: 520,
            right: -120,
            top: -170,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8B7CFF 0%, #5538F5 70%)',
            opacity: 0.92,
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, fontSize: 46, fontWeight: 700 }}>
          <div
            style={{
              width: 58,
              height: 58,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#6D5EF5',
              borderRadius: 14,
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            L
          </div>
          lumora
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 900 }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 700, letterSpacing: '-2px' }}>
            Software, automatización e IA para empresas.
          </div>
          <div style={{ color: '#C9C5FF', fontSize: 27 }}>
            Desde Cali para toda Colombia.
          </div>
        </div>
      </div>
    ),
    size,
  )
}
