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
            <a
              target="_blank"
              href="https://systaliko-ui.vercel.app/docs/templates/veo"
            >
              <Badge variant="outline" className="py-2 px-4">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/50"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </div>
                New <strong>Systaliko UI</strong> template available - Veo
                agency ✨
              </Badge>
            </a>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl md:max-w-4/5 font-bold"
            variants={animationVariants}
          >
            We build brands and products people remember
          </motion.h1>
          <motion.p
            variants={animationVariants}
            className="leading-normal tracking-tight text-muted-foreground max-w-[45ch]"
          >
            Crafting exceptional digital experiences through innovative design
            solutions. From concept to creation, we transform your vision into
            reality.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2"
            variants={animationVariants}
          >
            <Button>Start your project</Button>
            <Button variant="secondary">See our work</Button>
          </motion.div>
        </MotionConfig>
      </ContainerStagger>
    </section>
  );
}
