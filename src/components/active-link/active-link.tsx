import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
}

export function ActiveLink({ href, children, ...rest }: ActiveLinkProps) {
  const router = useRouter();
  const isCurrentPath = router.pathname === href || router.pathname === rest.as;

  return (
    <Link
      href={href}
      className={cn(
        'text-action-sm transition-colors hover:text-blue-200',
        isCurrentPath ? 'text-blue-200' : 'text-gray-100',
      )}
    >
      {children}
    </Link>
  );
}
