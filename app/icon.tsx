import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#032e15',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#05df72',
        }}
      >
        {'</>'}
      </div>
    ),
    {
      // For convenience, we can re-use the exported icons size metadata config to also set the ImageResponse's width and height.
      ...size,
    },
  )
}
