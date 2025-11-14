import { SharedConfig } from './social-provider';

interface UseShareProps extends SharedConfig {
  clipboardTimeout?: number;
}

export function useShare({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: UseShareProps) {
  const shareConfig = {
    url,
    ...(title && { title }),
    ...(text && { text }),
  };
  return {};
}
