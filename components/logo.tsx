'use client';
import { cn } from '@/utils/shared-utils';
import { useTheme } from 'next-themes';
import Image, { ImageProps } from 'next/image';

export const Logo = ({
  className,
  ...props
}: { className: string } & Omit<ImageProps, 'src' | 'alt'>) => {
  const { theme } = useTheme();
  return (
    <Image
      alt="mebase africa logo"
      width={32}
      height={32}
      className={cn('', className)}
      src={
        theme === 'dark' ? '/medbase_dark_logo.png' : '/medbase_light_logo.png'
      }
      {...props}
    />
  );
};
