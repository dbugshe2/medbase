import { CardsStackContainer, CardSticky } from "@/components/systaliko-ui/cards/cards-stack";
import { TextStaggerInview } from "@/components/systaliko-ui/text/text-stagger-inview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const WORK_PROJECTS = [
    {
      id: 'work-project-3',
      title: 'BMW',
      services: ['Branding', 'Strategy'],
      imageUrl:
      'https://images.pexels.com/photos/7585399/pexels-photo-7585399.jpeg',

    },
    {
      id: 'work-project-2',
      title: 'NBA',
      services: ['Market Research', 'Strategy'],
      imageUrl:
      'https://images.pexels.com/photos/1293265/pexels-photo-1293265.jpeg',
    },
    {
      id: 'work-project-1',
      title: 'ROLEX',
      services: ['Branding', 'Identity'],
      imageUrl:
        'https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg'    },
  ];
  

export function Work() {
    return (
        <section className="py-12 px-8">
                <div className="flex justify-between gap-4 mb-8">
                    <div className="space-y-4">
                    <TextStaggerInview animation="bottom" as="h2" className="text-5xl md:text-6xl font-extrabold">Case studies</TextStaggerInview>
                    <p className="text-muted-foreground max-w-[45ch] text-sm">
                        We design and build digital products that combine brand clarity, user-focused UX, and fast front-end engineering. 
                    </p>

                    </div>
                    <Button variant={'secondary'}>
                        Explore all cases
                    </Button>
                </div>

                <CardsStackContainer className="min-h-[300vh] flex flex-col items-center gap-16">
                {WORK_PROJECTS.map((project, index) => (
                  <CardSticky
                    key={project.id}
                    index={index}
                    incrementY={10}
                    incrementZ={10}
                    className="md:w-4/5 mx-auto bg-card border"
                  >
                  
                  <div className="max-h-[80vh] aspect-video">
                  <Image
                    className="w-full max-h-full"
                    width={906}
                    height={604}
                    src={project.imageUrl}
                    alt="project"
                  />
                  </div>
                      <div className="flex flex-wrap items-center justify-between gap-4 p-6">
                      <h2 className="text-4xl font-bold">
                        {project.title}
                      </h2>
                      <div className="flex flex-wrap gap-1">
                        {project.services.map((service) => (
                          <Badge variant={'outline'} key={service}>
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardSticky>
                ))}
      </CardsStackContainer>
        </section>
    )
}