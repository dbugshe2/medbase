import {
  CardsStackContainer,
  CardSticky,
} from '@/components/systaliko-ui/cards/cards-stack';

const SERVICES_CARDS = [
  {
    id: 'service-starategy-identity-service',
    title: 'Digital Health & Data',
    description:
      'Pioneering legal and technological frameworks that promote digital health adoption while fiercely protecting patient data rights and privacy. We build the compliance infrastructure that makes health innovation safe to scale.',
  },
  {
    id: 'UX-Product-design-service',
    title: 'Health Equity',
    description:
      'Dismantling structural, gender-based, and socioeconomic barriers to essential healthcare access. We move beyond advocacy rhetoric to the legislative instruments that make equality enforceable.',
  },
  {
    id: 'web-development-service',
    title: 'Health Financing',
    description:
      "Researching and advocating for sustainable, innovative domestic financing models to reduce catastrophic out-of-pocket health expenditures for Africa's most vulnerable populations.",
  },
  {
    id: 'Motion-interaction-service',
    title: 'Climate Resilience',
    description:
      'Developing adaptive health policies that protect vulnerable communities from the public health impacts of climate change — from heat mortality to waterborne disease surges driven by extreme weather.',
  },
  {
    id: 'content-copywriting-service',
    title: 'Policy & Advocacy',
    description:
      'The cross-cutting anchor that ensures advancements in all four areas are enshrined in law and public policy. We measure success by laws passed and systems adopted — not reports published.',
  },
  // {
  //   id: 'growth-anilytics-service',
  //   title: 'Growth & Analytics',
  //   description:
  //     'We instrument analytics, design experiments, and run A/B tests that answer the questions behind growth. We build dashboards and recommend prioritized experiments that directly tie to business goals.',
  // },
];

export function Services() {
  return (
    <section>
      <CardsStackContainer className="min-h-[300vh] flex flex-col gap-12">
        {SERVICES_CARDS.map((service, index) => (
          <CardSticky
            key={service.id}
            index={index}
            // className="min-h-[50vh] py-8 px-12 flex flex-wrap md:flex-nowrap md:gap-8 justify-between items-start even:border bg-card odd:bg-muted"
            className="min-h-[50vh] py-8 px-12 flex gap-6 justify-between flex-wrap even:border bg-card odd:bg-accent"
            incrementY={80}
            incrementZ={0}
          >
            <div className="md:basis-1/3 flex items-start gap-2">
              <sup className="font-black text-muted-foreground">
                {index + 1}
              </sup>
              <h3 className="text-5xl max-w-[13ch] font-serif font-bold">
                {service.title}
              </h3>
            </div>

            <p className="text-xl md:basis-1/2">{service.description}</p>
          </CardSticky>
        ))}
      </CardsStackContainer>
    </section>
  );
}
