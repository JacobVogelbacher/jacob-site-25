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
          'group/box border-bg-off bg-bg relative z-[1] flex aspect-square items-center justify-center overflow-hidden rounded-lg border p-4 font-semibold md:aspect-video lg:aspect-square xl:aspect-[2/1]',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </BorderSpotlight>
  )
}
