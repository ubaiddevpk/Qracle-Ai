"use client";

import { Shield, Lock, FileCheck, Zap, Cloud } from "lucide-react";
import { Container } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const accreditations = [
  { name: "UK Registered", icon: Shield },
  { name: "Cyber Essentials", icon: Lock },
  { name: "ISO 27001", icon: FileCheck },
  { name: "GDPR Ready", icon: Zap },
  { name: "Cloud Certified", icon: Cloud },
];

export function ComplianceBar() {
  return (
    <section className="py-12 border-t border-white/[0.06] bg-[#090C12] relative">
      <Container>
        <FadeIn>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-6">
            COMPLIANCE & ACCREDITATIONS
          </p>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.05}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {accreditations.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.name} variant="fadeIn">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F1219] border border-white/[0.08] hover:border-cyan-400/30 text-xs font-medium text-slate-300 hover:text-white transition-colors">
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
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
