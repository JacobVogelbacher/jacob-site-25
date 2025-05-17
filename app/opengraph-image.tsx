import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#030712',
          color: '#05df72',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Helvetica',
        }}
      >
        {'< Jacob />'}
      </div>
    ),
    {
      // For convenience, we can re-use the exported opengraph-image size config to also set the ImageResponse's width and height.
      ...size,
    },
  )
}
