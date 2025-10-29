import Image from 'next/image';

interface CardCustomerSectionProps {
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}
export function CardCustomerSection({
  content,
  author,
}: CardCustomerSectionProps) {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12">
      <p className="text-balance text-gray-200">{content}</p>

      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <strong className="text-gray-200 text-sm">{author.name}</strong>
          <span className="text-xs text-gray-300">{author.role}</span>
        </div>
      </div>
    </div>
  );
}
