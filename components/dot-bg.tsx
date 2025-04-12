'use client'

import { useMotionValue, motion, useMotionTemplate } from 'motion/react'
import { cn } from '@/lib/utils'

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
    <motion.div
      className={cn('group relative w-full', containerClassName)}
      onMouseMove={handleMouseMove}
      style={
        {
          '--mouse-x': useMotionTemplate`${mouseX}px`,
          '--mouse-y': useMotionTemplate`${mouseY}px`,
        } as React.CSSProperties
      }
    >
      <div className="pointer-events-none absolute inset-0 mask-r-from-0% mask-r-to-75%">
        {/* Dot background */}
        <div className={`absolute inset-0 bg-gray-800 mask-[url(/dot.svg)]`} />

        {/* Dot spotlight mask */}
        <motion.div className="absolute inset-0 mask-[radial-gradient(200px_circle_at_var(--mouse-x)_var(--mouse-y),black_0%,transparent_100%)] opacity-0 transition duration-300 group-hover:opacity-100">
          {/* Dot accent */}
          <motion.div className="absolute inset-0 bg-green-400 mask-[url(/dot.svg)]" />
        </motion.div>
      </div>

      <div className={cn('relative z-20', className)}>{children}</div>
    </motion.div>
  )
}
