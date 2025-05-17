import {
  DraftingCompass,
  Gavel,
  KeySquare,
  Microscope,
  Paintbrush,
  User,
} from 'lucide-react'

import { ReactIcon } from '@/components/icons/react'
import { TypeScript } from '@/components/icons/typescript'
import { Nextjs } from '@/components/icons/nextjs'
import { Tailwind } from '@/components/icons/tailwind'
import { Supabase } from '@/components/icons/supabase'
import { Sanity } from '@/components/icons/sanity'
import { WordPress } from '@/components/icons/wordpress'
import { Cypress } from '@/components/icons/cypress'
import { AWS } from '@/components/icons/aws'

export const data = {
  tech: [
    {
      name: 'React',
      icon: ReactIcon,
    },
    {
      name: 'TypeScript',
      icon: TypeScript,
    },
    {
      name: 'Next.js',
      icon: Nextjs,
    },
    {
      name: 'Tailwind',
      icon: Tailwind,
    },
    {
      name: 'Supabase',
      icon: Supabase,
    },
    {
      name: 'Sanity',
      icon: Sanity,
    },
    {
      name: 'WordPress',
      icon: WordPress,
    },
    {
      name: 'Cypress',
      icon: Cypress,
    },
    {
      name: 'AWS',
      icon: AWS,
    },
  ],
  work: [
    {
      name: 'Realty Association Portal',
      tech: [
        'Next.js',
        'TypeScript',
        'Tailwind',
        'Supabase',
        'Cypress',
        'Sanity',
        'Trigger.Dev',
        'Storybook',
      ],
      description:
        'Internal portal to simplify workflows and enhance productivity for over 20,000 members.',
      details: ['Integrated with payment processing service.'],
      icon: KeySquare,
    },
    {
      name: 'Fracture Product Customizer',
      url: 'https://fractureme.com/gallery-walls/bella/',
      tech: [
        'React',
        'Styled Components',
        'Jest',
        'Storybook',
        'Parcel',
        'Rollup',
      ],
      description:
        'Interactive product customizer integrated with e-commerce platform.',
      details: [
        'Multi-repo project with reusable library of shared functionality.',
        'Custom image editing logic.',
      ],
      icon: Paintbrush,
      attribution: 'Big Vision',
    },
    {
      name: 'Charter Research',
      url: 'https://www.charterresearch.com/',
      tech: [
        'WordPress',
        'Internationalization',
        'SCSS',
        'ACF',
        'Gulp',
        'Accessibility',
      ],
      description:
        'Clinical research company website with custom WordPress theme.',
      details: ['Multilingual content delivery.'],
      icon: Microscope,
      attribution: 'Big Vision',
    },
    // {
    //   "name": "NOB",
    //   "url": "#!"
    // },
    {
      name: 'TLC Engineering',
      url: 'https://tlc-engineers.com/',
      tech: [
        'WordPress',
        'SCSS',
        'ACF',
        'Google Maps API',
        'Gulp',
        'Accessibility',
      ],
      description: 'Engineering firm website with custom WordPress theme.',
      details: [
        'Content migration from existing WordPress site.',
        'Massive media library with categorical organization and attributions.',
      ],
      icon: DraftingCompass,
      attribution: 'Big Vision',
    },
    {
      name: 'Rumberger Kirk',
      url: 'https://www.rumberger.com/',
      tech: ['WordPress', 'SCSS', 'jQuery', 'ACF', 'Gulp', 'Accessibility'],
      description: 'Law firm website with custom WordPress theme.',
      details: [
        'Content migration from over a decade of XML data.',
        'Global fuzzy search bar.',
      ],
      icon: Gavel,
      attribution: 'Big Vision',
    },
    // {
    //   name: 'NDL',
    //   // Law firm website with custom WordPress theme.
    //   url: '#!',
    // },
    {
      name: 'Personal Site',
      url: 'https://github.com/JacobVogelbacher/jacob-site-25',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
      description: "The website you're looking at now.",
      details: ['Check out my code on GitHub.'],
      icon: User,
    },
  ],
}
