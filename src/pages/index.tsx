import Header from "@/components/Header";
import Avatar from "@/components/Avatar";
import { Tecnologias } from "@/components/Social";
import { Title } from "@/components/Title";
import TypewriterAnimation from "@/components/TypeWriter";
import Section from "@/components/Section";
import Texto from "@/components/Texto";
import { SubTitle } from "@/components/SubTitle";
import Navbar from "@/components/Navbar";
import Link from "@/components/Link"

export default function Home() {
  return (
    <>
      <Header>
        <Navbar>
          <Link page='/'>Home</Link>
          <Link page='contato'>Contato</Link>
          <Link page='galeria'>Galeria</Link>
        </Navbar>
        <Title>
          <TypewriterAnimation>
            Alexandre Nogueira de Lira
          </TypewriterAnimation>
        </Title>
        <Avatar big='true' pixel_A={1024} pixel_L={780} urlImage={'/images/user.jpg'} />
        <Tecnologias />
      </Header>
      <Section>
        <Title secondary={true}>
          Formação
        </Title>
        <Texto>
          Olá, meu nome é Alexandre Nogueira e sou formado em Análise e Desenvolvimento de Sistemas pela Fael. Atualmente, estou cursando uma pós-graduação em Desenvolvimento Web para me manter atualizado com as novas tecnologias e tendências do mercado.
          Com minha formação acadêmica e atualização contínua, sinto-me capaz de entender as necessidades do cliente e desenvolver soluções personalizadas, eficientes e seguras para atender às suas demandas. Tenho habilidades sólidas em programação, análise de sistemas, banco de dados e outras áreas relevantes para a tecnologia da informação.
          Minha experiência em análise e desenvolvimento de sistemas, juntamente com minha especialização em Desenvolvimento Web, me torna um profissional versátil e capaz de trabalhar em diversos projetos de tecnologia. Desde o desenvolvimento de aplicações web simples até a criação de sistemas mais complexos e sofisticados, estou sempre pronto para enfrentar novos desafios e aprender coisas novas no processo.
        </Texto>
        <Title secondary={true}>
          Projetos
        </Title>
        <SubTitle>
          PROINFE
        </SubTitle>
        <Texto>
          O PROINFE é um projeto do Ministério da Educação (MEC) do Brasil, que visa a formação de professores do ensino básico (fundamental e médio), por meio da oferta de cursos de licenciatura e de formação continuada.
          O projeto tem como objetivo principal qualificar o ensino público e melhorar a qualidade da educação básica no país, por meio da formação de professores bem preparados e atualizados, capazes de promover uma educação de qualidade e de contribuir para a melhoria do desempenho dos estudantes.
          O PROINFE oferece cursos presenciais e a distância, e é composto por diversas ações, tais como a formação inicial de professores em cursos de licenciatura, a formação continuada em serviço, a elaboração e aperfeiçoamento de materiais didáticos, a promoção de intercâmbios entre professores, a pesquisa e o desenvolvimento de projetos pedagógicos inovadores.
          O projeto PROINFE é uma iniciativa importante para a melhoria da educação básica no Brasil, uma vez que a formação adequada e contínua dos professores é fundamental para garantir uma educação de qualidade, capaz de preparar os estudantes para enfrentar os desafios do mundo contemporâneo.
        </Texto>
      </Section>
    </>
  );
}
