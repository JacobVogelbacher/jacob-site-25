import { KeySquare, Paintbrush, LucideProps } from 'lucide-react'

import { ReactIcon } from '@/components/icons/react'
import { TypeScript } from '@/components/icons/typescript'
import { Nextjs } from '@/components/icons/nextjs'
import { Tailwind } from '@/components/icons/tailwind'
import { Supabase } from '@/components/icons/supabase'
import { Sanity } from '@/components/icons/sanity'
import { WordPress } from '@/components/icons/wordpress'
import { Cypress } from '@/components/icons/cypress'
import { AWS } from '@/components/icons/aws'

interface IconProps extends LucideProps {
  type:
    | 'key'
    | 'brush'
    | 'react'
    | 'typescript'
    | 'nextjs'
    | 'tailwind'
    | 'supabase'
    | 'sanity'
    | 'wordpress'
    | 'cypress'
    | 'aws'
}

export const Icon: React.FC<IconProps> = ({ type, ...props }) => {
  const IconComponent =
    type === 'key'
      ? KeySquare
      : type === 'brush'
        ? Paintbrush
        : type === 'react'
          ? ReactIcon
          : type === 'typescript'
            ? TypeScript
            : type === 'nextjs'
              ? Nextjs
              : type === 'tailwind'
                ? Tailwind
                : type === 'supabase'
                  ? Supabase
                  : type === 'sanity'
                    ? Sanity
                    : type === 'wordpress'
                      ? WordPress
                      : type === 'cypress'
                        ? Cypress
                        : type === 'aws'
                          ? AWS
                          : null

  return IconComponent ? <IconComponent {...props} /> : null
}
