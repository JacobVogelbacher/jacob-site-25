export const Card = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="rounded-lg border border-gray-200 p-4" {...props}>
      {children}
    </div>
  )
}
