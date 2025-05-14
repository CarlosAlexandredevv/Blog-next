import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
}

export function ActiveLink({ href, children, ...rest }: ActiveLinkProps) {
  const router = useRouter();
  const isCurrentPath =
    router.asPath === href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(String(rest.as));

  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-blue-500',
        isCurrentPath ? 'text-blue-500' : 'text-muted-foreground',
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
