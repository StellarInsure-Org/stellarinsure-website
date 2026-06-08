import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  { value: 'Actuarial', label: 'on-chain pricing', detail: 'Every premium is calculated using a deterministic formula with 5 differentiated base rates. The math is auditable on-chain.' },
  { value: 'Multi-Sig', label: 'claim governance', detail: 'Claims are voted on by a configurable admin council. Threshold-based approval prevents any single party from controlling payouts.' },
  { value: 'Reserve Ratio', label: 'liquidity protection', detail: 'A built-in reserve ratio prevents pool drain. At least 20% of pool capital is always retained to cover pending and future claims.' },
]

export default function StatsSection() {
    return (
        <section id="pricing" className="py-16 md:py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                    <div className="flex flex-col gap-5">
                        <Badge variant="outline" className="w-fit rounded-full">Economic Security</Badge>
                        <h2 className="text-balance text-4xl font-semibold tracking-tight lg:text-6xl">Radically transparent pricing and risk management.</h2>
                        <p className="text-muted-foreground text-lg leading-8">The premium formula lives on-chain. The reserve ratio protects liquidity providers. Every claim vote is recorded. Zero opacity.</p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {stats.map((s) => (
                            <Card key={s.label} className="bg-card border">
                                <CardContent className="flex h-full flex-col gap-4 p-6">
                                    <p className="text-primary text-5xl font-semibold tracking-tight">{s.value}</p>
                                    <div>
                                        <p className="font-medium uppercase tracking-[0.18em]">{s.label}</p>
                                        <p className="text-muted-foreground mt-3 text-sm leading-6">{s.detail}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
