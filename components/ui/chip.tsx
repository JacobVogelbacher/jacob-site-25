'use client'

import { cn } from '@/lib/utils'

export const Chip = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'text-accent bg-accent-dark rounded-lg px-2 py-1 text-xs font-medium',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
