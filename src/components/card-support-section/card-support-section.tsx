import { ReactNode } from 'react';

interface CardSupportSectionProps {
  title: string;
  paragraph: string;
  bgCard: string;
  bgIcon: string;
  icon: ReactNode;
}
export function CardSupportSection({
  title,
  paragraph,
  bgCard,
  bgIcon,
  icon,
}: CardSupportSectionProps) {
  return (
    <div
      className={`flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 ${bgCard}`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-lg ${bgIcon} mb-4`}
      >
        {icon}
      </div>
      <strong className="text-heading-sm text-gray-100">{title}</strong>
      <p className="text-body-sm text-gray-200">{paragraph}</p>
    </div>
  );
}
