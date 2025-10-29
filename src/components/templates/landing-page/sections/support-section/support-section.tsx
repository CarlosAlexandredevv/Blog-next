import { HeartHandshake, PaintbrushVertical, Store } from 'lucide-react';
import { CardSupportSection } from '@/components/card-support-section';

export function SupportSection() {
  return (
    <section className="relative pb-8 md:py-10 bg-gray-700">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="container flex flex-col items-center gap-12 relative">
        <h2 className="font-sans text-balance text-center text-heading-xl text-gray-100">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Primeiro Card */}
          <CardSupportSection
            title="Personalize seu site"
            paragraph="Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com a sua cara."
            icon={<PaintbrushVertical className="h-6 w-6 text-white" />}
            bgCard="bg-blue-400"
            bgIcon="bg-blue-300"
          />

          {/* Segundo Card */}
          <CardSupportSection
            title="Venda de qualquer loja"
            paragraph="Não importa a loja, o Site.Set permite que você insira qualquer link de afiliado."
            icon={<Store className="h-6 w-6 text-white" />}
            bgCard="bg-cyan-300"
            bgIcon="bg-cyan-200"
          />

          {/* Terceiro Card */}
          <CardSupportSection
            title="Receba suporte amigável"
            paragraph="Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso."
            icon={<HeartHandshake className="h-6 w-6 text-white" />}
            bgCard="bg-blue-400"
            bgIcon="bg-blue-300"
          />
        </div>
      </div>
    </section>
  );
}
