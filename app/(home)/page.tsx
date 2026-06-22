import { About } from '@/sections/about';
import { Process } from '@/sections/process';
import { Hero } from '@/sections/hero';
import { Services } from '@/sections/services';
import { Team } from '@/sections/team';
import { Testimonials } from '@/sections/testimonials';
import { Values } from '@/sections/values';
import { Who } from '@/sections/who';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <Who />
      <Services />
      <Team />
      <Process />
      <Testimonials />
    </>
  );
}
