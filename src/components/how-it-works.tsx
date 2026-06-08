import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, FileText, Vote, Zap } from "lucide-react"

const steps = [
  { step: "01", title: "Create Policy", description: "Select coverage type, set amount and duration, define your parametric trigger condition, and pay the premium. Your policy is now a live Soroban smart contract.", icon: FileText },
  { step: "02", title: "Trigger Occurs", description: "When a verifiable event matches your trigger — a delayed flight, a drought threshold, a price crash — the oracle network confirms the condition.", icon: Zap },
  { step: "03", title: "Multi-Sig Vote", description: "A council of admins reviews the oracle data and casts votes on-chain. Once the approval threshold is met, the claim is automatically approved.", icon: Vote },
  { step: "04", title: "Instant Payout", description: "Funds transfer from the risk pool directly to your wallet. No paperwork, no adjuster calls, no waiting for a human to decide.", icon: Wallet },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Badge variant="secondary" className="rounded-full">How It Works</Badge>
          <h2 className="text-balance text-4xl font-semibold tracking-tight lg:text-6xl">From policy creation to automated payout.</h2>
          <p className="text-muted-foreground text-lg leading-8">StellarInsure replaces the traditional claims process with smart contracts, oracle data feeds, and transparent multi-sig governance.</p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ step, title, description, icon: Icon }) => (
            <Card key={step} className="bg-card border p-2">
              <CardHeader className="gap-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl border bg-background/60 text-primary"><Icon /></div>
                  <span className="font-mono text-sm text-muted-foreground">{step}</span>
                </div>
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
