import { Button } from "@/components/ui/button";
import { Check, Calendar, Clock, Monitor, Users, Shield, Quote, ChevronDown } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";

import { useState } from "react";

const CTA_URL = "https://pay.kiwify.com.br/VrHaDPn";

const Divider = () => (
  <div className="flex items-center justify-center py-6">
    <span className="block w-16 h-px bg-accent/30" />
    <span className="mx-3 text-accent/40 text-sm">✦</span>
    <span className="block w-16 h-px bg-accent/30" />
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="text-foreground font-bold text-base pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-accent shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0">
          <p className="text-muted-foreground text-base leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Index = () => {
  const handleCTAClick = () => {
    if (typeof window !== "undefined" && (window as any).lintrk) {
      (window as any).lintrk("track", { conversion_id: 26913521 });
    }
    window.open(CTA_URL, "_blank");
  };

  const ctaButton = (
    <a onClick={handleCTAClick} className="cursor-pointer">
      <Button
        size="lg"
        className="bg-primary hover:bg-cta-hover text-primary-foreground font-bold text-sm sm:text-base px-10 sm:px-14 py-7 sm:py-8 rounded-lg shadow-xl shadow-primary/20 tracking-wide transition-all duration-300 hover:scale-105 w-full sm:w-auto"
      >
        GARANTIR MINHA VAGA
      </Button>
    </a>
  );

  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <SealBadge />

      {/* ═══════════ 1. HERO ═══════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="relative container mx-auto px-4 sm:px-6 pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-foreground text-center lg:text-left">
              <p className="text-accent text-sm uppercase tracking-widest font-bold mb-4">Imersão Presencial Online · Maio 2026</p>
              <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-8">
                Sua carreira já te trouxe até aqui.
                <br />
                <span className="text-accent">O próximo passo exige direção.</span>
              </h1>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0">
                Um dia inteiro de trabalho estratégico para executivas e profissionais seniores que precisam decidir o próximo movimento de carreira — com método, não com impulso.
              </p>
              <p className="text-base font-semibold mb-10 max-w-lg mx-auto lg:mx-0">
                Não é aula. Não é palestra. É a imersão onde você sai com uma decisão tomada e um plano para os próximos 30 dias.
              </p>

              <div className="flex flex-col items-center lg:items-start gap-3">
                <span className="inline-block text-xs uppercase tracking-wider font-bold text-accent border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5">
                  Grupo fechado para até 15 executivas
                </span>
                {ctaButton}
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mt-8 text-sm opacity-80">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 16 de maio</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 9h às 15h</span>
                <span className="flex items-center gap-1.5"><Monitor className="w-4 h-4" /> Online e ao vivo</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 15 vagas</span>
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src="/images/foto_terno.jpeg"
                alt="Fernanda Moura — Estrategista Executiva de Carreira"
                className="w-full max-w-md lg:max-w-lg max-h-[400px] rounded-2xl shadow-2xl object-cover object-[center_15%]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 2. PARA QUEM É ═══════════ */}
      <section className="relative bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Para quem é essa imersão
          </h2>
          <ul className="space-y-4 max-w-xl mx-auto mb-10">
            {[
              "Você ocupa uma posição de liderança ou influência há anos",
              "Sabe que precisa tomar uma decisão sobre carreira, mas não quer agir por impulso",
              "Já investiu em cursos e mentorias que não mudaram o que realmente importa",
              "Quer estruturar os próximos 5 a 10 anos com critério — não por reação ao mercado",
              "Precisa de um espaço estratégico, não motivacional, para pensar o próximo movimento",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-foreground">
                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 max-w-xl mx-auto text-center">
            <p className="text-foreground font-bold text-lg mb-2">
              Você não precisa estar em crise para participar.
            </p>
            <p className="text-muted-foreground text-base">
              Mas se já percebeu que deixar a carreira no automático tem um custo, essa é a sala certa.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 3. O QUE A PARTICIPANTE VIVE ═══════════ */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que acontece em 6 horas de imersão
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Cada etapa foi desenhada para levar você de um cenário indefinido a uma decisão concreta.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {[
              "Você identifica com precisão o que está travando seu avanço hoje",
              "Analisa os caminhos possíveis — e descarta os que parecem bons, mas não fazem sentido para o seu momento",
              "Define o próximo movimento com critério, não por pressão ou impulso",
              "Sai com um plano estruturado para os próximos 30 dias",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-border rounded-xl p-6 text-left hover:shadow-md transition-shadow bg-card"
              >
                <span className="text-accent font-display text-2xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-foreground text-lg mt-3">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl py-8 px-6 mb-10">
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary">
              Você não sai com mais conteúdo.
            </p>
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary mt-2">
              Sai com uma decisão tomada.
            </p>
          </div>

          {ctaButton}
        </div>
      </section>

      <Divider />

      {/* ═══════════ 4. O QUE ELA SAI LEVANDO ═══════════ */}
      <section className="relative bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            O que você leva ao final da imersão
          </h2>
          <ul className="space-y-5 max-w-xl mx-auto">
            {[
              "Uma decisão clara sobre seu próximo movimento de carreira",
              "Um diagnóstico objetivo do que está travando seu avanço",
              "Um mapa dos caminhos possíveis com análise estratégica real",
              "Um plano de ação para os próximos 30 dias — da intenção à execução",
              "Clareza sobre o que parar de fazer para não continuar investindo no caminho errado",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-foreground">
                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 5. POR QUE ESSA IMERSÃO É DIFERENTE ═══════════ */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
            O problema não é falta de capacidade.
            <br />
            É excesso de caminho sem critério.
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-muted-foreground space-y-6 max-w-2xl mx-auto">
            <p>
              Você pode continuar estudando.
              <br />Pode fazer mais um curso.
              <br />Pode esperar a próxima oportunidade aparecer.
            </p>
            <p>
              Mas isso não garante direção.
              <br />Nem posicionamento.
              <br />Nem movimento real.
            </p>
            <p className="font-bold text-foreground">
              O que muda a carreira de alguém sênior não é consumir mais informação.
              <br />É decidir com método.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-14 max-w-2xl mx-auto">
            {[
              { label: "Grupo fechado", detail: "Máximo 15 participantes" },
              { label: "Método real", detail: "Não é palestra ou workshop genérico" },
              { label: "Resultado concreto", detail: "Você sai com decisão e plano" },
            ].map((item) => (
              <div key={item.label} className="bg-card border border-border rounded-xl p-5 text-center">
                <p className="text-accent font-bold text-sm uppercase tracking-wide mb-1">{item.label}</p>
                <p className="text-muted-foreground text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 6. SOBRE FERNANDA MOURA ═══════════ */}
      <section className="relative bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
            Quem conduz
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="flex-shrink-0">
              <img
                src="/images/sobre-poltrona.png"
                alt="Fernanda Moura — Estrategista Executiva"
                className="w-72 md:w-80 rounded-2xl shadow-xl object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                Fernanda Moura
              </h3>
              <p className="text-accent font-bold mb-6">
                Estrategista Executiva de Carreira
              </p>
              <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
                <p>
                  26 anos dentro do sistema corporativo —{" "}
                  <strong className="text-foreground">Coca-Cola, Cargill, Kraft Heinz, Kimberly-Clark e MBRF (Sadia e Perdigão)</strong>.
                  Passou por gerência, diretoria e C-Level internacional para América Latina e América Central, liderando projetos globais e equipes em 15 países simultaneamente.
                </p>
                <p>
                  Em 2021, fez o que muitas executivas pensam mas não executam:{" "}
                  <strong className="text-foreground">parou. Intencionalmente.</strong>{" "}
                  Para decidir o próximo movimento com método — não com impulso.
                </p>
                <p>
                  Já conduziu 23 transições profissionais reais na própria carreira. Sabe exatamente o que funciona — e o que é perda de tempo.
                </p>
                <p className="font-bold text-foreground">
                  Quem conduz essa imersão não fala de carreira de fora.
                  Ela tomou essas decisões de dentro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 7. DEPOIMENTOS ═══════════ */}
      <section className="relative bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Quem já passou pela consultoria estratégica
          </h2>

          <div className="space-y-8">
            {/* Carla */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 relative">
              <Quote className="w-10 h-10 text-accent/30 absolute top-6 left-6" />
              <div className="pt-8 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Minha carreira como executiva estava indo bem. Bônus, promoções, resultados e reconhecimento — tudo o que o mercado usa para medir sucesso. Mas por dentro eu estava quebrando, e ninguém via. A Fernanda não me disse o que fazer — ela montou a estratégia junto comigo e colocou as decisões na mesa para eu escolher. Foi a primeira vez que alguém tratou minha carreira com método e como decisão estratégica, não como problema emocional. Resultado: saí da paralisia da executiva bem-sucedida à beira do burnout e abri minha consultoria."
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-bold text-foreground">Carla Negrão</p>
                <p className="text-muted-foreground text-sm">Ex-executiva de Multinacional | Fundadora, CN Food Consulting</p>
              </div>
            </div>

            {/* Juliana */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 relative">
              <Quote className="w-10 h-10 text-accent/30 absolute top-6 left-6" />
              <div className="pt-8 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Eu já era Diretora de Impostos para a América Latina. Resultado não faltava. O que faltava era clareza sobre o próximo passo — e a segurança para me posicionar além da área técnica. A Fernanda montou comigo uma estratégia que eu não conseguia enxergar sozinha. Ganhei estrutura na comunicação, presença nos fóruns que importam e passei a atrair as oportunidades certas em vez de esperar por elas. Não precisei mudar de empresa. Mudei de posicionamento."
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-bold text-foreground">Juliana Zobaran</p>
                <p className="text-muted-foreground text-sm">Diretora de Impostos para América Latina · Vantiva</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 8. INFORMAÇÕES PRÁTICAS + INVESTIMENTO ═══════════ */}
      <section className="relative bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Informações práticas
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
            {[
              { icon: Calendar, label: "16 de maio de 2026" },
              { icon: Clock, label: "9h às 15h (horário de Brasília)" },
              { icon: Monitor, label: "Online e ao vivo" },
              { icon: Users, label: "Grupo fechado — até 15 vagas" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                <Icon className="w-5 h-5 text-accent shrink-0" />
                <span className="text-foreground text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            Investimento
          </h3>

          <div className="bg-card rounded-xl p-6 mb-8 max-w-xl mx-auto text-left">
            <p className="text-muted-foreground text-base leading-relaxed">
              Uma sessão individual com uma ex-diretora executiva C-level custa entre{" "}
              <strong className="text-foreground">R$ 3.000 e R$ 10.000</strong>.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mt-4">
              Nesta imersão, você participa de um dia inteiro de trabalho estratégico, com profundidade real e aplicação direta no seu contexto, por:
            </p>
          </div>

          <div className="bg-card rounded-2xl py-10 px-8 mb-8 inline-block">
            <p className="font-body text-primary text-xl md:text-2xl font-semibold">
              12x de R$ 139,90
            </p>
            <p className="text-muted-foreground text-sm mt-2">ou R$ 1.497 à vista</p>
          </div>

          <div className="max-w-xl mx-auto mb-8">
            <p className="text-muted-foreground text-base">
              O grupo é reduzido para garantir qualidade nas discussões e profundidade na condução.
            </p>
            <p className="text-foreground font-bold text-base mt-2">
              Por isso, as vagas são limitadas.
            </p>
          </div>

          <CountdownTimer />

          {ctaButton}

          {/* Garantia */}
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 flex flex-col items-center gap-4 max-w-xl mx-auto mt-12">
            <Shield className="w-10 h-10 text-accent" />
            <p className="font-display text-2xl font-bold text-foreground">
              Garantia de resultado
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Se ao final da imersão você não sair com sua decisão sobre o próximo movimento e com um plano estruturado para os próximos 30 dias, eu devolvo 100% do seu investimento.
            </p>
            <p className="text-foreground font-bold text-lg">
              Sem burocracia.
            </p>
          </div>

          {/* Amigos do Bem */}
          <a
            href="https://www.amigosdobem.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-accent/5 border border-accent/20 rounded-xl p-5 max-w-xl mx-auto mt-8 hover:bg-accent/10 transition-colors"
          >
            <img
              src="/images/amigos-do-bem-icon.png"
              alt="ONG Amigos do Bem"
              className="w-14 h-14 object-contain shrink-0"
            />
            <p className="text-muted-foreground text-sm text-left">
              Parte das vendas desta imersão é direcionada para a ONG{" "}
              <strong className="text-foreground">Amigos do Bem</strong>.
            </p>
          </a>
        </div>
      </section>

      <Divider />

      {/* ═══════════ 9. FAQ ═══════════ */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Perguntas frequentes
          </h2>
          <div className="space-y-3">
            <FAQItem
              question="Preciso estar em transição de carreira para participar?"
              answer="Não. A imersão é para qualquer profissional sênior que queira estruturar o próximo movimento com mais critério — esteja planejando uma mudança ou querendo crescer de forma mais intencional onde está."
            />
            <FAQItem
              question="A imersão é individual ou em grupo?"
              answer="É em grupo — mas um grupo reduzido de até 15 participantes, o que garante profundidade e espaço para cada situação individual ser trabalhada."
            />
            <FAQItem
              question="Como funciona a garantia?"
              answer="Se ao final da imersão você não sair com uma decisão clara sobre o próximo movimento e um plano para os próximos 30 dias, devolvemos 100% do valor investido. Sem burocracia."
            />
            <FAQItem
              question="Qual é o formato?"
              answer="Online e ao vivo, das 9h às 15h (horário de Brasília). Não é aula gravada. É um dia de trabalho estratégico, conduzido em tempo real pela Fernanda Moura."
            />
            <FAQItem
              question="Preciso me preparar de alguma forma?"
              answer="Sim. Após a inscrição, você receberá um material pré-imersão com perguntas estratégicas para que o trabalho no dia seja ainda mais produtivo."
            />
            <FAQItem
              question="E se eu não puder participar no dia?"
              answer="Como o grupo é fechado e a experiência é ao vivo, não oferecemos gravação. Se precisar remarcar, entre em contato e avaliaremos a possibilidade de participação na próxima edição."
            />
          </div>
        </div>
      </section>

      {/* ═══════════ 10. CTA FINAL ═══════════ */}
      <section className="relative overflow-hidden pt-40 sm:pt-48 md:pt-64 pb-12">
        <img
          src="/images/final-equipe.png"
          alt="Fernanda Moura com equipe"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative container mx-auto px-4 sm:px-6 max-w-3xl text-center text-foreground flex flex-col justify-end min-h-[320px] sm:min-h-[400px]">
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Se você já percebeu que deixar a carreira no automático pode custar caro,
            <br />essa é a sala para decidir com método.
          </p>
          <div className="flex flex-col items-center gap-2 mb-10">
            <span className="text-foreground font-bold">Grupo reduzido. Discussão estratégica real.</span>
            <span className="text-foreground font-bold">Próximo movimento com direção.</span>
          </div>
          {ctaButton}
        </div>
      </section>

      {/* RODAPÉ */}
      <footer
        className="py-10"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center text-foreground">
          <p className="font-display text-lg font-bold">Fernanda Moura</p>
          <p className="text-sm opacity-70 mt-1">Estrategista Executiva de Carreira</p>
          <p className="text-xs opacity-50 mt-4">© 2026 O Próximo Passo</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
