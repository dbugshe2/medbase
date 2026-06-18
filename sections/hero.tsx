'use client';
import { ContainerStagger } from '@/components/systaliko-ui/blocks/container-stagger';
import { motion, MotionConfig } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ANIMATION_VARIANTS } from '@/components/systaliko-ui/utils/animation-variants';

export function Hero() {
  const animationVariants = ANIMATION_VARIANTS['bottom'];
  return (
    <section className="min-h-[90vh] w-full relative place-content-center">
      <ContainerStagger className="flex flex-col text-center items-center gap-6 p-6">
        <MotionConfig transition={{ duration: 0.4, ease: 'easeOut' }}>
          <motion.div
            className="text-5xl font-extralight"
            variants={animationVariants}
          >
            {/* <a
              target="_blank"
              href="#0"
            > */}
              {/* <Badge variant="outline" className="py-2 px-4">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/50"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </div>
                <strong>Strategic Partnership</strong> Outline ✨
              </Badge> */}
            {/* </a> */}
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl md:max-w-4/5 font-bold font-serif"
            variants={animationVariants}
          >
            Architecting health equity through <span className="text-accent-foreground dark:text-primary">Research</span>, <span className="text-muted-foreground">Technology</span>, <span className="text-chart-1">Policy </span> <span>and </span> <span className='text-chart-3'> Advocacy</span>.
          </motion.h1>
          <motion.p
            variants={animationVariants}
            className="leading-normal text-lg tracking-tight text-muted-foreground max-w-[45ch]"
          >
            We translate raw health data into scalable solutions and binding evidence-backed policy frameworks across the African continent.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2"
            variants={animationVariants}
          >
            <Button size={"lg"}>Partner with us</Button>
            {/* <Button variant="secondary">Read The Blueprint</Button> */}
          </motion.div>
        </MotionConfig>
      </ContainerStagger>
    </section>
  );
}
