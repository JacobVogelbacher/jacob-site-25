'use client'

import React from 'react'
import {
  useMotionValue,
  motion,
  useMotionTemplate,
  MotionValue,
} from 'motion/react'
import { cn } from '@/lib/utils'

const createDotPattern = (color: string) => {
  return `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'><circle fill='${color}' cx='10' cy='10' r='2.5' /></svg>`,
  )}")`
}

const dotPatterns = {
  light: {
    default: createDotPattern('#d4d4d4'),
    hover: createDotPattern('#6366f1'),
  },
  dark: {
    default: createDotPattern('oklch(21% 0.034 264.665)'),
    hover: createDotPattern('oklch(79.2% 0.209 151.711)'),
  },
}

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
      {/* Light mode background */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage: dotPatterns.light.default,
        }}
      />
      {/* Dark mode background */}
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: dotPatterns.dark.default,
        }}
      />
      {/* Hover light mask */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden"
        style={{
          backgroundImage: dotPatterns.light.hover,
          ...createMaskStyle(mouseX, mouseY),
        }}
      />
      {/* Hover dark mask */}
      <motion.div
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 dark:block"
        style={{
          backgroundImage: dotPatterns.dark.hover,
          ...createMaskStyle(mouseX, mouseY),
        }}
      />

      {/* gradient overlay, so the effect isn't as visible on the right side of viewport */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-950 to-75%" />

      <div className={cn('relative z-20', className)}>{children}</div>
    </div>
  )
}
