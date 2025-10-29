import { CardCustomerSection } from '@/components/card-customer-section';

const customerStories = [
  {
    content:
      'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.',
    author: {
      name: 'Annete Bones',
      role: 'CEO na Anne Corp',
      avatar: '/customer-01.png',
    },
  },
  {
    content:
      'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!',
    author: {
      name: 'Jacob Jones',
      role: 'CEO na JJ Corp',
      avatar: '/customer-02.png',
    },
  },
];

export function CustomerStorySection() {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2 className="font-sans text-heading-xl text-gray-100">
          Quem utiliza, aprova!
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {customerStories.map((customerStory) => (
            <CardCustomerSection
              key={customerStory.author.name}
              {...customerStory}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
