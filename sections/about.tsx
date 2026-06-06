import { TextStaggerInview } from '@/components/systaliko-ui/text/text-stagger-inview';
import { Badge } from '@/components/ui/badge';

export function About() {
  return (
    <section className="py-16 px-8 min-h-screen place-content-center">
      <div className="flex flex-col space-y-4 justify-center items-center max-w-3xl mx-auto text-center">
        <Badge className="py-2 px-4" variant="secondary">
        Empower Africa to build equitable health systems ✨
        </Badge>
        <TextStaggerInview
          animation="bottom"
          staggerValue={0.01}
          className="text-3xl *:overflow-hidden font-medium leading-relaxed"
        >
         An evidence-led, policy-anchored think-tank that takes raw health data, engineers technological solutions, and drafts the legislative frameworks required to make health equity an enforceable reality across Africa.
        </TextStaggerInview>
      </div>
    </section>
  );
}
