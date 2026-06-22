'use client';
import { ContainerStagger } from '@/components/systaliko-ui/blocks/container-stagger';
import { TextStaggerInview } from '@/components/systaliko-ui/text/text-stagger-inview';
import { ANIMATION_VARIANTS } from '@/components/systaliko-ui/utils/animation-variants';
import { Button } from '@/components/ui/button';
import {
  ArrowUpRight,
  Axis3dIcon,
  Building2Icon,
  ListStartIcon,
} from 'lucide-react';
import { stagger } from 'motion';
import { motion, MotionConfig } from 'motion/react';

const VALUES = [
  {
    id: 'value-craft',
    title: 'Downstream Delivery',
    icon: Axis3dIcon,
    iconBg: 'from-indigo-400 to-indigo-300 ',
    description:
      'Global organisations excel at clinical delivery and humanitarian aid, but rarely alter the structural rules of the health system itself.',
  },
  {
    id: 'value-startegy',
    title: 'Upstream Research',
    icon: ListStartIcon,
    iconBg: ' from-pink-400 to-pink-300 ',
    description:
      'Traditional think-tanks produce vital, granular data that too often remains locked away in academic white papers, lacking functional application.',
  },
  {
    id: 'value-business',
    title: 'Unprotected Innovation',
    icon: Building2Icon,
    iconBg: 'from-emerald-400 to-emerald-300 ',
    description:
      'Digital tools are deployed without robust data privacy laws, and climate-health crises hit communities without proactive resource allocation policies in place.',
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
            className="text-3xl md:text-4xl font-bold font-serif"
          >
            The architecture of global health is currently fragmented.
          </TextStaggerInview>
          {/* <Button variant={'outline'}>See how we fix it →</Button> */}
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
                className="py-6 px-4 space-y-4  bg-card rounded-xl border place-content-center"
                variants={variants}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/*<div
                  className={`size-14 flex items-center justify-center -bg-linear-45 rounded ${value.iconBg}`}
                >
                  <value.icon className="size-8 text-muted" />
                </div>*/}

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
