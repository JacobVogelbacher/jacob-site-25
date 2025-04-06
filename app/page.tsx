import Image from 'next/image'
import { Linkedin } from '@/components/icons/linkedin'
import { Github } from '@/components/icons/github'
import data from './data.json'
import { Card } from '@/components/ui/card'
import { Box } from '@/components/ui/box'
import { DotBg } from '@/components/dot-bg'

export default function Home() {
  const { tech, work } = data

  return (
    <DotBg>
      <div className="cell">
        <div className="content-grid gap-y-12">
          <header className="col-span-full flex flex-col justify-between gap-10 pt-10 lg:sticky lg:top-0 lg:left-0 lg:col-span-6 lg:h-dvh lg:py-16">
            <div className="flex flex-col gap-8">
              <h1>
                Jacob <br /> Vogelbacher
              </h1>
              <p>Full-stack Engineer</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/jacobvogelbacher/"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a href="https://github.com/JacobVogelbacher/" target="_blank">
                <Github />
              </a>
            </div>
          </header>
          <main className="col-span-full flex flex-col gap-10 pb-10 lg:col-span-6 lg:py-16">
            <section className="flex flex-col gap-4">
              <h2>Tech</h2>
              <p>What I've been working with recently</p>
              <ul className="grid gap-4 md:grid-cols-3">
                {tech.map(t => (
                  <li key={t.name}>
                    <Box>{t.name}</Box>
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex flex-col gap-4">
              <h2>Work</h2>
              <ul className="flex flex-col gap-4">
                {work.map(w => (
                  <li key={w.name}>
                    <Card>
                      <a href={w.url}>{w.name}</a>
                    </Card>
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex flex-col gap-4">
              <h2>Experience</h2>
              <ul>
                <li>
                  <a href="#">BV - Sr Dev</a>
                </li>
                <li>
                  <a href="#">Etc.</a>
                </li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    </DotBg>
  )
}
