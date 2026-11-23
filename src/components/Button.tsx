import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-ink font-medium text-paper hover:bg-accent-500 active:bg-ink dark:bg-zinc-100 dark:text-ink dark:hover:bg-accent-400',
  secondary:
    'font-medium text-ink ring-1 ring-ink/20 hover:ring-ink/50 dark:text-zinc-100 dark:ring-white/20 dark:hover:ring-white/50',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-full py-2.5 px-5 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
