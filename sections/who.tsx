import { TextStaggerInview } from '@/components/systaliko-ui/text/text-stagger-inview';

export function Who() {
  return (
    <section className="p-8 place-content-center bg-background">
      <div className="flex flex-col p-8 space-y-4 rounded-2xl bg-accent-foreground mx-auto max-w-4xl">
        <div className="flex space-x-2 items-center">
          {/*<span className="min-h-4 min-w-4 h-4 w-4" />*/}
          <h4 className="text-4xl font-serif font-bold text-accent">
            We are the missing middle.
          </h4>
        </div>
        <TextStaggerInview
          animation="bottom"
          staggerValue={0.01}
          className="font-medium tracking-tight text-secondary/70 italic"
        >
          The African ecosystem desperately lacks "translators." Medbase Africa
          exists to fill this void ensuring that innovation is legally
          protected, ethically deployed, and sustainably funded.
        </TextStaggerInview>
      </div>
    </section>
  );
}
