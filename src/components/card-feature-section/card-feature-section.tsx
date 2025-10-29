import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  children: React.ReactNode;
}

export function FeatureCardFlex({ children }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-500 md:p-12">
      {children}
    </div>
  );
}

export function FeatureCardGrid({ children }: FeatureCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
      {children}
    </div>
  );
}

interface FeatureCardImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function FeatureCardImage({
  src,
  alt,
  width,
  height,
}: FeatureCardImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="object-contain w-full"
    />
  );
}

interface FeatureCardButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export function FeatureCardButton({
  children,
  className,
  href,
}: FeatureCardButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        'w-fit rounded-full hidden mt-4 md:mt-auto md:flex',
        className,
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export function FeatureCardBadge({ children }: FeatureCardProps) {
  return (
    <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">
      {children}
    </span>
  );
}

export function FeatureCardTitle({ children }: FeatureCardProps) {
  return (
    <h2 className="font-sans text-gray-100 text-heading-lg">{children}</h2>
  );
}
