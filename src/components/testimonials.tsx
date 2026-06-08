import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
                    <Badge variant="outline" className="rounded-full">Community Signal</Badge>
                    <h2 className="text-balance text-4xl font-semibold tracking-tight lg:text-6xl">Trusted by builders and providers on Stellar.</h2>
                    <p className="text-muted-foreground text-lg leading-8">Join the growing community securing risk on-chain with parametric insurance.</p>
                </div>
                <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="bg-card grid grid-rows-[auto_1fr] gap-8 border sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader><Badge variant="secondary">Featured</Badge></CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">StellarInsure gave our farming cooperative access to weather insurance we never had before. The parametric trigger is perfectly straightforward — when rainfall drops below our threshold, the payout just happens. No paperwork, no waiting.</p>
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12 border"><AvatarFallback>AC</AvatarFallback></Avatar>
                                    <div><cite className="text-sm font-medium">AgriCoop DAO</cite><span className="text-muted-foreground block text-sm">Weather Insurance Policyholder</span></div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="bg-card border md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Providing liquidity to the risk pool has been consistently profitable. Premiums flow in every time a policy is created, and the yield is distributed transparently. I can withdraw anytime.</p>
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12 border"><AvatarFallback>LP</AvatarFallback></Avatar>
                                    <div><cite className="text-sm font-medium">Stellar Liquidity Fund</cite><span className="text-muted-foreground block text-sm">Risk Pool Provider</span></div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="bg-card border"><CardContent className="h-full pt-6"><blockquote className="grid h-full grid-rows-[1fr_auto] gap-6"><p>Smart contract exploit insurance on Soroban is exactly what the ecosystem needed. Finally, real DeFi coverage.</p><div className="grid items-center gap-3 [grid-template-columns:auto_1fr]"><Avatar className="size-12 border"><AvatarFallback>DB</AvatarFallback></Avatar><div><cite className="text-sm font-medium">DeFi Builder</cite><span className="text-muted-foreground block text-sm">Protocol Founder</span></div></div></blockquote></CardContent></Card>
                    <Card className="bg-card border"><CardContent className="h-full pt-6"><blockquote className="grid h-full grid-rows-[1fr_auto] gap-6"><p>The multi-sig claim voting gives our DAO complete control. Every vote is transparent, every payout is auditable on-chain.</p><div className="grid grid-cols-[auto_1fr] gap-3"><Avatar className="size-12 border"><AvatarFallback>DV</AvatarFallback></Avatar><div><p className="text-sm font-medium">DAO Voter</p><span className="text-muted-foreground block text-sm">Multi-Sig Admin</span></div></div></blockquote></CardContent></Card>
                </div>
            </div>
        </section>
    )
}
