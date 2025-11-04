import { Search } from '@/components/search';
import { useRouter } from 'next/router';
import { PostCard } from './components/post-card';
import { PostGridCard } from './components/post-grid-card/post-grid-card';
const posts = [
  {
    title: 'Transformando seu negócio em uma loja virtual',
    description:
      'Se você está buscando uma maneira simples e eficaz de vender seus produtos online...',
    date: '20/12/2024',
    slug: 'transformando',
    image: '/assets/primeiro-post.png',
    author: {
      avatar: '/customer-01.png',
      name: 'Aspen Dokidis',
    },
  },
];

export function BlogList() {
  const router = useRouter();
  const query = router.query.q as string;
  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : 'Dicas e estratégias para impulsionar seu negócio';

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="pb-14">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            {/* TAG */}
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              BLOG
            </span>

            {/* Titulo */}
            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>
          {/* Search */}
          <Search />
        </div>
      </header>

      {/* Listagem de posts */}
      <PostGridCard>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </PostGridCard>
    </div>
  );
}
