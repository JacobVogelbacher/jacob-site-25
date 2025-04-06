export const Card = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="relative rounded-lg border border-gray-800 bg-gray-950 p-4"
      {...props}
    >
      {children}
    </div>
  )
}
