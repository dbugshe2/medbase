import {
  ScrollAnimation,
  ScrollScale,
} from '@/components/systaliko-ui/blocks/scroll-animation';
import { Button } from '@/components/ui/button';

const PROCESS_PHASES = [
  {
    id: 'phase-1',
    title: 'Discover',
    duration: 'Week 1',
    description:
      'Our journey begins with a deep dive into your vision. In the Discovery phase, we engage in meaningful conversations to grasp your brand identity, goals, and the essence you want to convey. This phase sets the stage for all that follows.',
  },
  {
    id: 'phase-2',
    title: 'Design',
    duration: 'Weeks 2-4',
    description:
      'In the Design phase, we work together to create a comprehensive brand strategy that aligns with your goals and vision. This includes defining your brand voice, messaging, and visual identity, as well as developing a brand style guide.',
  },
  {
    id: 'phase-3',
    title: 'Build',
    duration: 'Weeks 5-8',
    description:
      "In the Build phase, we build your brand's digital presence, including your website, social media accounts, and marketing materials. This includes creating a content strategy, developing a user experience, and optimizing your website for search engines.",
  },
  {
    id: 'phase-4',
    title: 'Grow',
    duration: 'Ongoing',
    description:
      "In the Grow phase, we continue to build on your brand's digital presence, monitoring and adjusting your strategy as needed. This includes gathering feedback, analyzing data, and making data-driven decisions to improve your brand over time.",
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
              <h2 className="text-6xl md:text-7xl font-bold">
                How we <br /> work
              </h2>
            </ScrollScale>
            <Button variant={'secondary'}>Start your project</Button>
          </ScrollAnimation>
        </div>
        <div className="flex flex-col gap-12">
          {PROCESS_PHASES.map((phase) => (
            <div className="flex flex-col gap-6" key={phase.id}>
              <div className="flex ">
                <h3 className="text-4xl font-bold mr-2">{phase.title}</h3>
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
