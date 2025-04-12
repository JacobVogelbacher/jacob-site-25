'use client'

import { cn } from '@/lib/utils'
import { BorderSpotlight } from '@/components/border-spotlight'

export const Card = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <BorderSpotlight>
      <div
        className={cn(
          'relative z-10 rounded-lg border border-gray-800 bg-gray-950 p-4',
          className,
        )}
      >
        {children}
      </div>
    </BorderSpotlight>
  )
}
