import { GlowingEffect } from '../glowing-effect'

export const Box = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="relative flex aspect-[2/1] items-center justify-center rounded-lg border border-gray-800 bg-gray-950 p-4"
      {...props}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        movementDuration={1}
      />

      {children}
    </div>
  )
}
