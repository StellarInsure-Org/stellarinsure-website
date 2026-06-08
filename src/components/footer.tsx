import Link from 'next/link'

const links = [
  { group: 'Product', items: [{ title: 'Features', href: '/#features' }, { title: 'How It Works', href: '/#how-it-works' }, { title: 'Pricing', href: '/#pricing' }, { title: 'FAQ', href: '/#faq' }] },
  { group: 'Developers', items: [{ title: 'GitHub', href: 'https://github.com/StellarInsure-Org' }, { title: 'Smart Contracts', href: 'https://github.com/StellarInsure-Org/stellarinsure-contracts' }, { title: 'API Docs', href: 'https://github.com/StellarInsure-Org/stellarinsure-backend' }, { title: 'Docs', href: 'https://github.com/StellarInsure-Org/stellarinsure-docs' }] },
  { group: 'Resources', items: [{ title: 'Blog', href: '/blog' }, { title: 'Community', href: '#' }, { title: 'Support', href: '#' }, { title: 'Status', href: '#' }] },
  { group: 'Legal', items: [{ title: 'Privacy', href: '/privacy' }, { title: 'Terms', href: '/terms' }, { title: 'License (MIT)', href: 'https://github.com/StellarInsure-Org/stellarinsure-contracts/blob/main/LICENSE' }] },
]

export default function FooterSection() {
    return (
        <footer className="border-t bg-card pt-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 md:grid-cols-5">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                                <svg className="text-primary-foreground" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <span className="text-lg font-semibold">StellarInsure</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
                        {links.map((group, i) => (
                            <div key={i} className="space-y-4 text-sm">
                                <span className="block font-medium">{group.group}</span>
                                {group.items.map((item, j) => (
                                    <Link key={j} href={item.href} className="text-muted-foreground hover:text-primary block duration-150"><span>{item.title}</span></Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
                    <span className="text-muted-foreground order-last block text-center text-sm md:order-first">&copy; 2026 StellarInsure. All rights reserved.</span>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        <Link href="https://github.com/StellarInsure-Org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary block"><svg className="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary block"><svg className="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"/></svg></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
