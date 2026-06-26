import { Link } from 'wouter'
import type { ReactNode } from 'react'

type Variant = 'taupe' | 'outline' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 font-body font-medium uppercase tracking-[0.2em] text-[12px] px-9 py-4 rounded transition-all active:scale-[0.98]'

const variants: Record<Variant, string> = {
  taupe: 'bg-taupe text-on-taupe hover:bg-taupe-dark shadow-[0_14px_34px_-16px_rgba(70,58,49,0.7)]',
  outline: 'border border-taupe/40 text-taupe hover:border-taupe hover:bg-taupe/5',
  ghost: 'border border-cream/40 text-cream hover:border-cream hover:bg-cream/10',
}

interface Props {
  readonly href: string
  readonly variant?: Variant
  readonly children: ReactNode
  readonly className?: string
  readonly external?: boolean
}

export default function Button({ href, variant = 'taupe', children, className = '', external }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (href.startsWith('/') && !external) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  )
}
