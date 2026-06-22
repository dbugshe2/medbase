import { cn } from "@/utils/shared-utils";
import Image, { ImageProps } from "next/image";

export const Logo = ({
  className,
  ...props
}: ImageProps) => {
  return (
<Image alt="" width={32} height={32} className={cn("", className)} src="/medbase_light_logo.png"   />
  );
};
