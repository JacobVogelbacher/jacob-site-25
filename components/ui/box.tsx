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
          'border-bg-off bg-bg relative flex aspect-[2/1] items-center justify-center rounded-lg border p-4',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </BorderSpotlight>
  )
}
