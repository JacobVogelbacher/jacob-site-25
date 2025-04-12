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
          'border-bg-off bg-bg relative z-10 rounded-lg border p-4',
          className,
        )}
      >
        {children}
      </div>
    </BorderSpotlight>
  )
}
