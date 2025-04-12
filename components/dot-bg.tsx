'use client'

import {
  useMotionValue,
  motion,
  useMotionTemplate,
  MotionValue,
} from 'motion/react'
import { cn } from '@/lib/utils'

const createMaskStyle = (x: MotionValue<number>, y: MotionValue<number>) => ({
  WebkitMaskImage: useMotionTemplate`
    radial-gradient(
      200px circle at ${x}px ${y}px,
      black 0%,
      transparent 100%
    )
  `,
  maskImage: useMotionTemplate`
    radial-gradient(
      200px circle at ${x}px ${y}px,
      black 0%,
      transparent 100%
    )
  `,
})

export const DotBg = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // TODO: could this make use of request animation frame?
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className={cn('group relative w-full', containerClassName)}
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute inset-0 mask-r-from-0% mask-r-to-75%">
        {/* dot background */}
        <div className={`absolute inset-0 bg-gray-800 mask-[url(/dot.svg)]`} />

        {/* Dot hover mask */}
        <motion.div
          className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            // spotlight mask
            ...createMaskStyle(mouseX, mouseY),
          }}
        >
          <motion.div className="absolute inset-0 bg-green-400 mask-[url(/dot.svg)]" />
        </motion.div>
      </div>

      <div className={cn('relative z-20', className)}>{children}</div>
    </div>
  )
}
