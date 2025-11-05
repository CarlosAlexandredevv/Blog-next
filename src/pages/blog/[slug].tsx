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

export default function BlogPostPage() {
  const router = useRouter();
  const slug = router.query.slug as string;

  const post = allPosts.find((post) =>
    post.slug.toLowerCase().includes(slug.toLowerCase()),
  );

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
        </article>
      </div>
    </main>
  );
}
