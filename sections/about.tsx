import { TextStaggerInview } from '@/components/systaliko-ui/text/text-stagger-inview';
import { Badge } from '@/components/ui/badge';

export function About() {
  return (
    <section className="py-16 px-8 min-h-screen place-content-center bg-accent">
      <div className="flex flex-col space-y-4 justify-center items-center max-w-3xl mx-auto text-center">
        <Badge   variant="outline">
          <span className="text-base">Empower Africa to build equitable health systems</span>
        </Badge>
        <TextStaggerInview
          animation="bottom"
          staggerValue={0.01}
          className="text-4xl font-medium tracking-tight *:overflow-hidden leading-[2.8rem] font-serif italic"
        >
        An evidence-led, policy-anchored think-tank that takes raw health data, engineers solutions, and design policy frameworks required to make health equity an enforceable reality across Africa.
        </TextStaggerInview>
      </div>
    </section>
  );
}
