import Image from 'next/image'
import { Linkedin } from '@/components/icons/linkedin'
import { Github } from '@/components/icons/github'

export default function Home() {
  return (
    <div>
      <div className="cell">
        <div className="content-grid">
          <header className="col-span-full flex flex-col justify-between gap-10 lg:col-span-5 lg:sticky lg:top-0 lg:left-0 lg:h-dvh">
            <div>
              <h1>Jacob Vogelbacher</h1>
              <p>Full-stack Engineer</p>
            </div>
            <div className="flex gap-4 items-center">
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
          <main className="col-span-full lg:col-span-7">
            <section>
              <h2>Tech</h2>
              <p>What I've been working on recently</p>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>Supabase</li>
                <li>Sanity</li>
                <li>WordPress</li>
                <li>Cypress</li>
              </ul>
            </section>
            <section>
              <h2>Work</h2>
              <ul>
                <li>
                  <a href="#">ORA Portal</a>
                </li>
                <li>
                  <a href="#">ORA Marketing</a>
                </li>
                <li>
                  <a href="#">FCR</a>
                </li>
                <li>
                  <a href="#">CTR</a>
                </li>
                <li>
                  <a href="#">TLC</a>
                </li>
                <li>
                  <a href="#">RKC</a>
                </li>
                <li>
                  <a href="#">Personal Site</a>
                </li>
              </ul>
            </section>
            <section>
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
    </div>
  )
}
