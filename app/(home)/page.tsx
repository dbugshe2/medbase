import { About } from '@/sections/about';
import { Process } from '@/sections/process';
import { Hero } from '@/sections/hero';
import { Services } from '@/sections/services';
import { Team } from '@/sections/team';
import { Testimonials } from '@/sections/testimonials';
import { Values } from '@/sections/values';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <Services />
      <Team />
      <Process />
      <Testimonials />
    </>
  );
}
