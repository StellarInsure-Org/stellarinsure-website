'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight, GitBranch, Shield } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden px-6 pt-14">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 py-24 text-center md:py-36">
                <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm">
                    <span className="flex size-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Parametric insurance on Stellar Soroban</span>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-7xl">
                        Insurance that pays <span className="text-primary">itself</span>.
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-2xl text-balance text-lg leading-8 md:text-xl">
                        StellarInsure enables anyone to create, fund, and claim parametric insurance policies as smart contracts.
                        When the oracle confirms your trigger condition, the payout executes automatically — no adjusters, no paperwork.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    <Button size="lg" render={<Link href="#" />} nativeButton={false}>
                        Launch App <ArrowRight data-icon="inline-end" />
                    </Button>
                    <Button size="lg" variant="outline" render={<Link href="https://github.com/StellarInsure-Org" />} nativeButton={false}>
                        <GitBranch data-icon="inline-start" /> View GitHub
                    </Button>
                </div>
                <div className="grid w-full max-w-2xl grid-cols-3 gap-3 pt-8">
                    {[["5", "insurance types"], ["Instant", "parametric payouts"], ["On-chain", "transparent voting"]].map(([v, l]) => (
                        <div key={l} className="rounded-xl border bg-card p-5 text-center">
                            <p className="text-xl font-bold tracking-tight text-primary">{v}</p>
                            <p className="text-muted-foreground mt-1 text-xs uppercase tracking-[0.15em]">{l}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
