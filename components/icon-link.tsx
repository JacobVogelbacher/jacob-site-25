import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export const IconLink = ({
  className,
  children,
  asChild,
}: {
  className?: string
  children?: React.ReactNode
  asChild?: boolean
}) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(
        'hover:text-accent before:bg-bg relative z-[1] rounded-sm py-1 transition-colors duration-200 before:absolute before:-inset-1 before:z-[-1]',
        className,
      )}
    >
      {children}
    </Comp>
  )
}
