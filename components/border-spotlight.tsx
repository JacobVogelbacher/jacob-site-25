import React, { useRef, useState, useEffect } from 'react'
import { useMotionValue, useMotionTemplate, motion } from 'motion/react'

// Helper to calculate the distance to the element
function getDistanceToEl(rect: DOMRect, x: number, y: number) {
  const dx = Math.max(rect.left - x, 0, x - rect.right)
  const dy = Math.max(rect.top - y, 0, y - rect.bottom)
  return Math.sqrt(dx * dx + dy * dy)
}

export const BorderSpotlight = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isNearby, setIsNearby] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Global mouse position tracking
  // TODO: check perf implications of the event listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const distance = getDistanceToEl(rect, e.clientX, e.clientY)
      const threshold = 150 // adjust as needed
      setIsNearby(distance < threshold)

      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div ref={ref} className="relative" {...props}>
      {/** Glow effect using a radial gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 rounded-lg"
        style={{
          opacity: isNearby ? 1 : 0,
          background: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              #4ade80 0%,
              transparent 80%
            )
          `,
          transition: 'opacity 0.3s ease',
        }}
      />

      {children}
    </div>
  )
}
