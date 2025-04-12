'use client'

import { cn } from '@/lib/utils'
import { BorderSpotlight } from '@/components/border-spotlight'

export const Box = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <BorderSpotlight>
      <div
        className={cn(
          'relative flex aspect-[2/1] items-center justify-center rounded-lg border border-gray-800 bg-gray-950 p-4',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </BorderSpotlight>
  )
}
