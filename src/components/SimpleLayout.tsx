import { Container } from '@/components/Container'

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-3xl">
        <h1 className="text-4xl leading-[1.02] font-semibold tracking-[-0.04em] text-ink sm:text-6xl dark:text-zinc-100">
          {title}
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">{intro}</p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
