import { useRef, useState, useEffect } from 'react'
import { useMotionValue, useMotionTemplate, motion } from 'motion/react'

import { cn } from '@/lib/utils'

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
        className={cn(
          'pointer-events-none absolute -inset-px z-0 rounded-lg bg-[radial-gradient(200px_circle_at_var(--mouse-x)_var(--mouse-y),var(--accent)_0%,transparent_80%)] transition-opacity duration-300 ease-initial',
          isNearby ? 'opacity-100' : 'opacity-0',
        )}
        style={
          {
            '--mouse-x': useMotionTemplate`${mouseX}px`,
            '--mouse-y': useMotionTemplate`${mouseY}px`,
          } as React.CSSProperties
        }
      />

      {children}
    </div>
  )
}
