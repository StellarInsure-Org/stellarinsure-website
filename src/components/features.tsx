import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Zap, CloudSun, Plane, Brain, Coins, Vote, Users } from 'lucide-react'

const features = [
  { icon: Shield, title: 'On-Chain Policies', description: 'Create insurance policies as Soroban smart contracts. Set coverage amount, duration, premium, and parametric trigger conditions — all enforceable on-chain.' },
  { icon: Zap, title: 'Instant Parametric Payouts', description: 'When an oracle confirms your trigger condition was met, the payout executes automatically. No claims adjuster, no negotiation, no delay.' },
  { icon: CloudSun, title: 'Weather Insurance', description: 'Protect against drought, excess rainfall, temperature extremes, and wind events with configurable thresholds and verified weather data feeds.' },
  { icon: Plane, title: 'Flight Delay Coverage', description: 'Automatically compensated when your flight is delayed beyond your threshold. Oracle data from flight tracking APIs triggers instant payouts.' },
  { icon: Brain, title: 'Smart Contract Insurance', description: 'Coverage against DeFi protocol exploits, oracle manipulation, and bridge hacks. Parametric triggers based on on-chain anomaly detection.' },
  { icon: Coins, title: 'Asset Protection', description: 'Stablecoin de-peg insurance and price crash protection. Payouts triggered when asset prices cross predefined thresholds verified by oracle consensus.' },
]

export default function Features() {
    return (
        <section id="features" className="py-16 md:py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
                    <Badge variant="secondary" className="rounded-full">What We Cover</Badge>
                    <h2 className="text-balance text-4xl font-semibold tracking-tight lg:text-6xl">Five insurance verticals, one protocol.</h2>
                    <p className="text-muted-foreground text-lg leading-8">From crop failure to flight delays to smart contract exploits — StellarInsure provides parametric coverage across the risks that matter most in Web3 and beyond.</p>
                </div>
                <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {features.map(({ icon: Icon, title, description }) => (
                        <Card key={title} className="bg-card border transition-colors hover:border-primary/30">
                            <CardHeader className="gap-5">
                                <div className="flex size-12 items-center justify-center rounded-2xl border bg-background/60 text-primary"><Icon /></div>
                                <CardTitle>{title}</CardTitle>
                            </CardHeader>
                            <CardContent><p className="text-muted-foreground leading-7">{description}</p></CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
