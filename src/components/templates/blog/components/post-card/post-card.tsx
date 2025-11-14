import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/model/post';
import { Avatar } from '@/components/avatar';
interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR');
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="w-full max-w-2xl rounded-[12px] border-[1px] border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-300"
    >
      {/* Post Content */}
      <div className="p-2 rounded-md overflow-hidden">
        {/* Imagem Container */}
        <div className="relative">
          <div className="absolute top-0 right-0 px-3 py-1 bg-gray-600 backdrop-blur-sm rounded-bl-[10px]">
            <span className="text-body-xs text-gray-300">{formattedDate}</span>
          </div>
          <Image
            src={post.image}
            alt={post.title}
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center rounded-[8px]"
          />
        </div>

        {/* Post info */}
        <div className="px-2 mt-4 space-y-4 mb-2">
          <h2 className="text-heading-sm text-gray-100 line-clamp-3">
            {post.title}
          </h2>

          <p className="text-gray-300 text-body-sm line-clamp-3">
            {post.description}
          </p>
        </div>

        {/* Post footer */}
        <div className="flex items-center gap-3 border-t border-gray-400 py-4">
          <Avatar.Container>
            <Avatar.Image
              src={post.author.avatar}
              alt={post.author.name}
              size="xs"
            />
          </Avatar.Container>
          <span className="text-body-sm text-gray-300">{post.author.name}</span>
        </div>
      </div>
    </Link>
  );
}
