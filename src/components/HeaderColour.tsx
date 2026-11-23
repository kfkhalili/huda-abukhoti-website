'use client'

import { useEffect, useRef } from 'react'

// While this block sits under the header, the header takes its colours.
export function HeaderColour({
  background,
  foreground,
  children,
}: {
  background: string
  foreground: string
  children: React.ReactNode
}) {
  let block = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let element = block.current
    if (!element) return
    let root = document.documentElement.style
    let clear = () => {
      root.removeProperty('--page-bg')
      root.removeProperty('--page-fg')
    }
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          root.setProperty('--page-bg', background)
          root.setProperty('--page-fg', foreground)
        } else {
          clear()
        }
      },
      // A line along the top edge of the screen, where the header is.
      { rootMargin: '0px 0px -99% 0px' },
    )
    observer.observe(element)
    return () => {
      observer.disconnect()
      clear()
    }
  }, [background, foreground])

  return <div ref={block}>{children}</div>
}
