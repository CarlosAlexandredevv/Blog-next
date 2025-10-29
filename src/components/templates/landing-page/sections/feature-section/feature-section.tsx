import { ArrowRight } from 'lucide-react';
import {
  FeatureCardFlex,
  FeatureCardBadge,
  FeatureCardTitle,
  FeatureCardGrid,
  FeatureCardButton,
  FeatureCardImage,
} from '@/components/card-feature-section';
export function FeatureSection() {
  return (
    <section className="container bg-gray-700 grid gap-6 md:grid-cols-2 pb-8 pt-8 md:py-10">
      <FeatureCardFlex>
        <FeatureCardBadge>Simples</FeatureCardBadge>
        <FeatureCardTitle>
          Crie um catálogo de produtos online em poucos minutos
        </FeatureCardTitle>
      </FeatureCardFlex>

      <FeatureCardFlex>
        <FeatureCardBadge>Prático</FeatureCardBadge>
        <FeatureCardTitle>
          Venda para seu público através de uma plataforma única
        </FeatureCardTitle>
      </FeatureCardFlex>

      <div className="col-span-full flex flex-col gap-2">
        <FeatureCardGrid>
          <div className="flex flex-col gap-4">
            <FeatureCardBadge>Personalizável</FeatureCardBadge>
            <FeatureCardTitle>
              Tenha uma loja online personalizada com a cara da sua marca
            </FeatureCardTitle>
            <FeatureCardButton href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </FeatureCardButton>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-md overflow-hidden">
              <FeatureCardImage
                src="/feature-section.svg"
                alt="Features"
                width={440}
                height={330}
              />
            </div>
            <FeatureCardButton
              href="/criar-loja"
              className="w-full gap-2 rounded-full mt-4 md:mt-auto md:hidden"
            >
              Criar loja grátis
              <ArrowRight />
            </FeatureCardButton>
          </div>
        </FeatureCardGrid>
      </div>
    </section>
  );
}
