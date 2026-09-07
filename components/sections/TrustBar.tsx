"use client";

import {
  CreditCard,
  Activity,
  ShoppingBag,
  Truck,
  Landmark,
  GraduationCap,
} from "lucide-react";
import { Container } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const industries = [
  { name: "Fintech", icon: CreditCard },
  { name: "Healthcare", icon: Activity },
  { name: "Retail", icon: ShoppingBag },
  { name: "Logistics", icon: Truck },
  { name: "Government", icon: Landmark },
  { name: "Education", icon: GraduationCap },
];

export function TrustBar() {
  return (
    <section className="py-12 border-y border-white/[0.06] bg-[#0A0D13]/60 relative">
      <Container>
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-6">
            TRUSTED BY INDUSTRY LEADERS
          </p>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.06}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.name} variant="fadeIn">
                <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#141820] border border-white/[0.08] hover:border-cyan-400/40 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 cursor-default shadow-sm">
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{item.name}</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
