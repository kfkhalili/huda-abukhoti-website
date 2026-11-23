'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { ContainerWide } from '@/components/Container'

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
]

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" />
    </svg>
  )
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47Z" />
    </svg>
  )
}

function NavItem({ href, children }: { href: string; children: string }) {
  let pathname = usePathname()
  let isActive = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <li>
      <Link
        href={href}
        aria-current={isActive ? 'page' : undefined}
        className={clsx(
          'block px-3 py-2 transition',
          isActive
            ? 'text-accent-500 dark:text-accent-400'
            : 'hover:text-accent-500 dark:hover:text-accent-400',
        )}
      >
        {children}
      </Link>
    </li>
  )
}

function MobileNavigation(
  props: React.ComponentPropsWithoutRef<typeof Popover>,
) {
  let items = [
    ...links,
    { href: '/uses', label: 'Uses' },
    { href: '/schedule', label: 'Book a call' },
  ]

  return (
    <Popover {...props}>
      <PopoverButton className="rounded-full px-4 py-2 text-sm font-medium ring-1 ring-current/25 transition hover:ring-current/50">
        Menu
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-xs duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-black/70"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-4 z-50 origin-top rounded-3xl bg-paper p-8 ring-1 ring-ink/10 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-[#1c1b1a] dark:ring-white/10"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Menu
          </span>
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
          </PopoverButton>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-ink/10 text-lg font-medium text-ink dark:divide-white/10 dark:text-zinc-100">
            {items.map((item) => (
              <li key={item.href}>
                <PopoverButton
                  as={Link}
                  href={item.href}
                  className="block py-3"
                >
                  {item.label}
                </PopoverButton>
              </li>
            ))}
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  )
}

function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    queueMicrotask(() => setMounted(true))
  }, [])

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className="rounded-full p-2 opacity-70 transition hover:opacity-100"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-6 w-6 dark:hidden" />
      <MoonIcon className="hidden h-6 w-6 dark:block" />
    </button>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[color-mix(in_srgb,var(--page-bg,#f6f3ee)_85%,transparent)] text-[color:var(--page-fg,#171615)] backdrop-blur-md transition-colors duration-500 dark:bg-[color-mix(in_srgb,var(--page-bg,#121110)_85%,transparent)] dark:text-[color:var(--page-fg,#f4f4f5)]">
      <ContainerWide>
        <div className="flex h-16 items-center justify-between gap-6 sm:h-20">
          <Link href="/" className="text-base font-semibold tracking-tight">
            Huda Abukhoti
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden md:block">
              <ul className="flex text-sm font-medium">
                {links.map((link) => (
                  <NavItem key={link.href} href={link.href}>
                    {link.label}
                  </NavItem>
                ))}
              </ul>
            </nav>
            <Link
              href="/schedule"
              className="hidden rounded-full bg-[color:var(--page-fg,#171615)] px-4 py-2 text-sm font-medium text-[color:var(--page-bg,#f6f3ee)] transition hover:bg-accent-500 hover:text-paper md:inline-flex dark:bg-[color:var(--page-fg,#f4f4f5)] dark:text-[color:var(--page-bg,#121110)] dark:hover:bg-accent-400"
            >
              Book a call
            </Link>
            <MobileNavigation className="md:hidden" />
            <ThemeToggle />
          </div>
        </div>
      </ContainerWide>
    </header>
  )
}
