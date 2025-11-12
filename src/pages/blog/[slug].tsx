import { useRouter } from 'next/router';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import { Avatar } from '@/components/avatar';
import { AvatarContent } from '@/components/avatar/avatar-content';

export default function BlogPostPage() {
  const router = useRouter();
  const slug = router.query.slug as string;

  const post = allPosts.find(
    (post) => post.slug.toLowerCase() === slug?.toLowerCase(),
  )!;

  const publishedDate = new Date(post?.date).toLocaleDateString('pt-BR');

  return (
    <main className="mt-32 text-gray-100">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/blog" className="text-action-sm">
                Blog
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                className="text-blue-200 text-action-sm"
                href={`/blog/${post?.slug}`}
              >
                {post?.title}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
        <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border">
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            <Image
              src={post?.image || ''}
              alt={post?.title || ''}
              fill
              className=" object-cover"
            />
          </figure>
          <header className="p-4 md:p-6 lg:p-12">
            <h1 className="mb-6 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
              {post?.title}
            </h1>

            <Avatar.Container>
              <Avatar.Image src={post.author.avatar} alt={post?.title} />
              <AvatarContent>
                <Avatar.Title>{post?.author.name}</Avatar.Title>
                <Avatar.Description>
                  Publicado em time{' '}
                  <time dateTime={post.date}>{publishedDate}</time>
                </Avatar.Description>
              </AvatarContent>
            </Avatar.Container>
          </header>
        </article>
      </div>
    </main>
  );
}
