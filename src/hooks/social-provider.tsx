import { Facebook, Linkedin, Slack } from 'lucide-react';

export interface SharedConfig {
  url: string;
  title?: string;
  text?: string;
}

export const SOCIAL_PROVIDER = {
  linkedin: {
    name: 'LinkedIn',
    icon: <Linkedin className="h-4 w-4" />,
    shareUrl: (config: any) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        config.url,
      )},`,
  },
  facebook: {
    name: 'Facebook',
    icon: <Facebook className="h-4 w-4" />,
    shareUrl: (config: any) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        config.url,
      )}`,
  },
  slack: {
    name: 'Slack',
    icon: <Slack className="h-4 w-4" />,
    shareUrl: (config: any) =>
      `https://slack.com/intl/en-br/client/web/share?url=${encodeURIComponent(
        config.url,
      )}`,
  },
};
