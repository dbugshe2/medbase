import { CardTestimonial, TestimonialAuthor, TestimonialQuote, TestimonialRating } from "@/components/systaliko-ui/cards/card-testimonial";
import { CardsContainer, CardTransformed, ContainerScrollRotatedCards } from "@/components/systaliko-ui/cards/cards-stack-rotated";
import { TextStaggerInview } from "@/components/systaliko-ui/text/text-stagger-inview";

const TESTIMONIALS = [
    {
      id: 'testimonial-3',
      name: 'Youcef Bnm.',
      profession: 'Frontend Developer',
      rating: 5,
      quote:
        'Their innovative solutions and quick turnaround time made our collaboration incredibly successful. Highly recommended!',
      avatarUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocKV3NNwtqyu8_gbuVEDARpyUpTuFtb_XPAIETgsD3wbXx4F4xlE=s576-c-no',
    },
    {
      id: 'testimonial-1',
      name: 'Jessica H.',
      profession: 'Web Designer',
      rating: 4.5,
      quote:
        "The attention to detail and user experience in their work is exceptional. I'm thoroughly impressed with the final product.",
      avatarUrl:
        'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 'testimonial-2',
      name: 'Lisa M.',
      profession: 'UX Designer',
      rating: 5,
      quote:
        'Working with them was a game-changer for our project. Their expertise and professionalism exceeded our expectations.',
      avatarUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 'testimonial-4',
      name: 'Jane D.',
      profession: 'UI/UX Designer',
      rating: 4.5,
      quote:
        'The quality of work and communication throughout the project was outstanding. They delivered exactly what we needed.',
      avatarUrl:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    },
  ];

export function Testimonials() {
    return (
        <section className="py-12 px-6">
            <div className="text-center mx-auto max-w-3xl flex flex-col items-center space-y-4">
        <TextStaggerInview animation="bottom" as={'h2'} className="text-4xl font-bold">What our clients say</TextStaggerInview>
        <p className="text-muted-foreground max-w-[38ch]">
          We have worked with some of the most successful startups in the world, and they all have something to say about us.
        </p>
      </div>

      <ContainerScrollRotatedCards className="container h-[300vh] ">
        <div className="sticky overflow-hidden left-0 top-0 h-svh w-full py-12">
          <CardsContainer className="mx-auto size-full h-[450px] w-[350px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <CardTransformed
                arrayLength={TESTIMONIALS.length}
                key={testimonial.id}
                index={index + 2}
              >
                <CardTestimonial
                  testimonialQuote={testimonial.quote}
                  testimonialRating={testimonial.rating}
                  testimonialAuthor={{
                    authorName: testimonial.name,
                    avatarUrl: testimonial.avatarUrl,
                    description: testimonial.profession,
                  }}
                  variant={'glass'}
                  role="article"
                  aria-labelledby={`card-${testimonial.id}-title`}
                  aria-describedby={`card-${testimonial.id}-content`}
                  className="h-[450px] w-[350px] justify-center items-center bg-card/50 border"
                >
                  <TestimonialRating className="text-primary" />
                  <div className="relative text-center mx-auto w-4/5 text-lg">
                    <TestimonialQuote>{testimonial.quote}</TestimonialQuote>
                  </div>

                  <TestimonialAuthor className="flex items-center gap-4" />
                </CardTestimonial>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScrollRotatedCards>
        </section>
    )
}