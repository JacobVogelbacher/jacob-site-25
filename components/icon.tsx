import { KeySquare, Paintbrush, LucideProps } from 'lucide-react'

interface IconProps extends LucideProps {
  type: 'brush' | 'key'
}

export const Icon: React.FC<IconProps> = ({ type, ...props }) => {
  const IconComponent =
    type === 'key' ? KeySquare : type === 'brush' ? Paintbrush : null

  return IconComponent ? <IconComponent {...props} /> : null
}
