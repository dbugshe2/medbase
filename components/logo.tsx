import { cn } from '@/utils/shared-utils';
import Image, { ImageProps } from 'next/image';

export const Logo = ({
  className,
  ...props
}: { className: string } & Omit<ImageProps, 'src' | 'alt'>) => {
  return (
    <Image
      alt="mebase africa logo"
      width={32}
      height={32}
      className={cn('', className)}
      src="/medbase_light_logo.png"
      {...props}
    />
  );
};
