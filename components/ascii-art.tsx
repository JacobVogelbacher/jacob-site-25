'use client'

// print out a message in the console
export const AsciiArt = () => {
  const asciiArt = String.raw`
  _          _ _         _   _                   
 | |__   ___| | | ___   | |_| |__   ___ _ __ ___ 
 | '_ \ / _ \ | |/ _ \  | __| '_ \ / _ \ '__/ _ \
 | | | |  __/ | | (_) | | |_| | | |  __/ | |  __/
 |_| |_|\___|_|_|\___/   \__|_| |_|\___|_|  \___|
                                                 
`
  console.info(asciiArt)

  return null
}
