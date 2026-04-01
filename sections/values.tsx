'use client';
import { ContainerStagger } from '@/components/systaliko-ui/blocks/container-stagger';
import { TextStaggerInview } from '@/components/systaliko-ui/text/text-stagger-inview';
import { ANIMATION_VARIANTS } from '@/components/systaliko-ui/utils/animation-variants';
import { Button } from '@/components/ui/button';
import { Axis3dIcon, Building2Icon, ListStartIcon } from 'lucide-react';
import { stagger } from 'motion';
import { motion, MotionConfig } from 'motion/react';

const VALUES = [
  {
    id: 'value-craft',
    title: 'Craft driven',
    icon: Axis3dIcon,
    iconBg: 'from-indigo-600 to-indigo-500 ',
    description:
      'We design with craft, not with a blueprint. We build modern web products using component-driven development, automated testing, and performance-first best practices. Our code is documented and deliverable-ready.',
  },
  {
    id: 'value-startegy',
    title: 'Strategy first',
    icon: ListStartIcon,
    iconBg: ' from-pink-600 to-pink-500 ',
    description:
      'We start with a clear strategy and build a product that solves real problems. We focus on user research, information architecture, and product flows that solve real problems.',
  },
  {
    id: 'value-business',
    title: 'Business minded',
    icon: Building2Icon,
    iconBg: 'from-emerald-600 to-emerald-500 ',
    description:
      'We understand the business and its needs. We craft messaging that fits your brand and speaks to real user needs — from hero lines and product microcopy to onboarding flows and launch email sequences.',
  },
];

export function Values() {
  const variants = ANIMATION_VARIANTS['right'];
  return (
    <section className="overflow-hidden">
      <div className="pt-12 pb-16 px-8 lg:grid lg:grid-cols-3 space-y-8">
        <div className="space-y-4">
          <TextStaggerInview
            as="h2"
            animation="bottom"
            className="text-3xl md:text-4xl font-bold"
          >
            Bold brands, Beautiful products for Real growth
          </TextStaggerInview>
          <Button variant={'link'}>Request demo</Button>
        </div>
        <ContainerStagger
          className="
            col-span-2 flex flex-col md:grid grid-cols-2 md:grid-rows-[50px_1fr_50px_1fr_50px] gap-6 
            [&>*]:row-span-2 
            [&>*:nth-child(2)]:row-start-2
        "
        >
          <MotionConfig transition={{ duration: 0.5, ease: 'easeOut' }}>
            {VALUES.map((value) => (
              <motion.div
                key={value.id}
                className="py-6 px-4 space-y-4 shadow bg-card rounded-xl border place-content-center"
                variants={variants}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div
                  className={`size-14 flex items-center justify-center -bg-linear-45 rounded ${value.iconBg}`}
                >
                  <value.icon className="size-8 text-muted" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{value.title}</h3>
                </div>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </MotionConfig>
        </ContainerStagger>
      </div>
    </section>
  );
}
