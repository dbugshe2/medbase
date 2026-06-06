import { cn } from "@/utils/shared-utils";

export const Logo = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
<svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"     aria-label='Medbase Logo'
    className={cn('w-32', className)}
    {...props}>
      <rect x="4" y="4" width="10" height="10" rx="2" fill="#0d1b2a"></rect>
      <rect x="18" y="4" width="10" height="10" rx="5" stroke="#0d1b2a" strokeWidth="2" fill="none"></rect>
      <polygon points="4,30 14,18 24,30" fill="none" stroke="#7a9e87" strokeWidth="2" strokeLinejoin="round"></polygon>
    </svg>
  );
};
