import {
  ScrollAnimation,
  ScrollScale,
} from '@/components/systaliko-ui/blocks/scroll-animation';
import { Button } from '@/components/ui/button';

const PROCESS_PHASES = [
  {
    id: 'phase-1',
    title: 'Research',
    duration: 'The Foundation . Step 1',
    description:
      'We conduct granular, localised research to map the precise nature of health inequities, financing gaps, and digital barriers. We do not rely on external assumptions  every intervention is built on context-specific, evidence-based intelligence.',
  },
  {
    id: 'phase-2',
    title: 'Translate',
    duration: 'The Bridge . Step 2',
    description:
      'Research without application is merely theory. We leverage technology to translate findings into functional mechanisms  from digital frameworks for health data interoperability to platforms that simplify regulatory compliance for innovators.',
  },
  {
    id: 'phase-3',
    title: 'Advocate',
    duration: 'The Catalyst . Step 3',
    description:
      'We mobilise public and political will through data-driven storytelling and targeted campaigns. We build coalitions among civil society, healthcare professionals, and government stakeholders to champion necessary systemic reforms.',
  },
  {
    id: 'phase-4',
    title: 'Legislate',
    duration: 'The Anchor . Step 4',
    description:
      'Our ultimate differentiator. Where advocacy creates momentum, our legal expertise codifies it. We identify legislative lacunas, draft model policies, and work directly with lawmakers  ensuring health equity is a permanent legal reality, not a temporary project.',
  },
];

export function Process() {
  return (
    <section className="relative py-12 px-8">
      <div className="container mx-auto md:grid md:grid-cols-2 md:gap-12 justify-between">
        <div className="relative md:sticky md:top-0 md:left-0 h-fit max-h-vh py-6">
          <ScrollAnimation
            spacerClass="h-0"
            className="overflow-hidden md:overflow-visible space-y-4"
          >
            <ScrollScale
              inputRange={[0, 0.2]}
              scaleRange={[1, 1.8]}
              className="origin-left py-6 place-content-center"
            >
              <h2 className="text-6xl md:text-7xl font-bold font-serif">
                How we <br /> work
              </h2>
            </ScrollScale>
            <Button variant={'secondary'}>Partner with us.</Button>
          </ScrollAnimation>
        </div>
        <div className="flex flex-col gap-12">
          {PROCESS_PHASES.map((phase) => (
            <div className="flex flex-col gap-6" key={phase.id}>
              <div className="flex ">
                <h3 className="text-4xl font-bold font-serif mr-2">
                  {phase.title}
                </h3>
                <span className="font-black text-muted-foreground">
                  {phase.duration}
                </span>
              </div>
              <p className="">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
