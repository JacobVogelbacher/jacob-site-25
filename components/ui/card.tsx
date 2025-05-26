'use client'

import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BorderSpotlight } from '@/components/border-spotlight'

export const Card = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <BorderSpotlight>
      <div
        className={cn(
          'group/card border-bg-off bg-bg relative z-10 overflow-hidden rounded-lg border p-4 pt-6 pb-6',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </BorderSpotlight>
  )
}

export const CardInner = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        `flex flex-wrap items-center gap-4 md:grid md:grid-cols-[auto_1fr]`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(`flex grow flex-col gap-3 md:col-start-2`, className)}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      // max-width on mobile to keep the title on the top line with the icon
      className={cn(
        `max-w-[83%] text-xl font-semibold md:max-w-none`,
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

export const CardText = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(`flex flex-col gap-1 opacity-80`, className)} {...props}>
      {children}
    </div>
  )
}

export const CardIcon = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(`shrink-0`, className)} {...props}>
      {children}
    </div>
  )
}

export const CardLink = ({
  href,
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        'group/link inline-flex gap-2 before:absolute before:inset-0 before:z-[1]',
        className,
      )}
      {...props}
    >
      {children}

      <ExternalLink
        className="group-hover/link:text-accent size-4 shrink-0 opacity-50 transition-all duration-300 group-hover/link:opacity-100"
        strokeWidth={1}
      />
    </a>
  )
}
