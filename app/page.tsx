import { Briefcase } from 'lucide-react'

import { data } from './data'
import { Linkedin } from '@/components/icons/linkedin'
import { Github } from '@/components/icons/github'

import {
  Card,
  CardContent,
  CardIcon,
  CardInner,
  CardLink,
  CardText,
  CardTitle,
} from '@/components/ui/card'
import { Box } from '@/components/ui/box'
import { DotBg } from '@/components/dot-bg'
import { Chip } from '@/components/ui/chip'

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
              <div className="flex flex-col gap-3">
                <p className="font-heading text-2xl font-medium">
                  Full-stack Engineer
                </p>
                <p className="max-w-[35ch]">
                  Automating business processes and crafting pixel-perfect
                  experiences on the web.
                </p>
              </div>
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

          <main className="col-span-full flex flex-col gap-12 pb-10 lg:col-span-6 lg:py-16">
            <section className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2>Tech</h2>
                <p>What I&apos;ve been building with recently.</p>
              </div>
              <ul className="grid gap-4 md:grid-cols-3">
                {tech.map(techItem => (
                  <li key={techItem.name}>
                    <Box>
                      {techItem.name}

                      {techItem.icon ? (
                        <div className="absolute inset-[5%] z-[-1] flex scale-50 items-center justify-center opacity-10 transition-all duration-200 group-hover/box:scale-100 group-hover/box:opacity-20">
                          <techItem.icon className="text-accent max-h-full w-auto" />
                        </div>
                      ) : null}
                    </Box>
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2>Work</h2>
                <p>
                  I build software solutions that empower brands to reach their
                  fullest potential.
                </p>
              </div>
              <ul className="flex flex-col gap-6">
                {work.map(workItem => (
                  <li key={workItem.name}>
                    <Card>
                      <CardInner>
                        {workItem.icon ? (
                          <CardIcon>
                            <workItem.icon className="size-9" strokeWidth={1} />
                          </CardIcon>
                        ) : null}

                        <CardContent>
                          <CardTitle>
                            {workItem.url ? (
                              <CardLink href={workItem.url}>
                                {workItem.name}
                              </CardLink>
                            ) : (
                              workItem.name
                            )}
                          </CardTitle>

                          {workItem.tech?.length ? (
                            <ul className="flex flex-wrap gap-2">
                              {workItem.tech.map(tech => (
                                <li key={tech}>
                                  <Chip>{tech}</Chip>
                                </li>
                              ))}
                            </ul>
                          ) : null}

                          <CardText>
                            {workItem.description ? (
                              <p>{workItem.description}</p>
                            ) : null}

                            {workItem.details?.length ? (
                              <ul className="list-disc pl-5 text-sm">
                                {workItem.details.map(detail => (
                                  <li key={detail}>{detail}</li>
                                ))}
                              </ul>
                            ) : null}

                            {workItem.attribution ? (
                              <p className="text-rightxx leading-tightzz mt-2 inline-flex items-center gap-2 text-xs opacity-50">
                                <Briefcase className="size-4" />
                                Made with {workItem.attribution}
                              </p>
                            ) : null}
                          </CardText>
                        </CardContent>
                      </CardInner>

                      {workItem.icon ? (
                        <workItem.icon
                          className="text-accent absolute top-0 right-0 z-[-1] size-[200px] opacity-5"
                          strokeWidth={1}
                        />
                      ) : null}
                    </Card>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </div>
    </DotBg>
  )
}
