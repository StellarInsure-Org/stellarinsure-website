'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const items = [
  { id: '1', q: 'What is parametric insurance?', a: 'Parametric insurance pays out automatically when a predefined condition is met, verified by an oracle data feed. There is no claims adjuster — if the data says the trigger occurred, the payout executes. This eliminates subjectivity, negotiation, and processing delays from traditional insurance.' },
  { id: '2', q: 'How are claims decided?', a: 'Claims are voted on by a multi-signature admin council. Each admin casts a vote on-chain, and when the approval threshold is reached, the payout executes automatically from the risk pool. Every vote is recorded on-chain for full transparency.' },
  { id: '3', q: 'What types of insurance are available?', a: 'StellarInsure supports five insurance verticals: Weather (rainfall, temperature, wind), Flight (delay and cancellation), Smart Contract (DeFi exploits), Asset (stablecoin de-peg, price crashes), and Health. Each vertical has its own actuarially calculated base premium rate.' },
  { id: '4', q: 'How do I earn yield as a liquidity provider?', a: 'When a policyholder pays a premium, those tokens flow into the risk pool. Yield is distributed pro-rata to all liquidity providers based on their contribution share. You can claim your accrued yield at any time and withdraw your contribution, protected by a reserve ratio.' },
  { id: '5', q: 'Is StellarInsure open source?', a: 'Yes. All smart contracts, the backend API, the frontend dashboard, and the documentation are open source under the MIT license and publicly developed on GitHub at github.com/StellarInsure-Org.' },
]

export default function FAQs() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-4 text-balance">Quick answers to common questions about parametric insurance on StellarInsure.</p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <Accordion className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm">
            {items.map((i) => (
              <AccordionItem key={i.id} value={i.id} className="border-dashed">
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{i.q}</AccordionTrigger>
                <AccordionContent><p className="text-base">{i.a}</p></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="text-muted-foreground mt-6 px-8">Can't find what you're looking for? Check our <a href="https://github.com/StellarInsure-Org/stellarinsure-docs" className="text-primary font-medium hover:underline">documentation</a>.</p>
        </div>
      </div>
    </section>
  )
}
