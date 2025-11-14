import { BlogList } from '@/components/templates/blog';
import { allPosts } from 'contentlayer/generated';

export default function BlogPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return <BlogList posts={sortedPosts} />;
}
