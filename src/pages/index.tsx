import Header from "@/components/Header";
import Avatar from "@/components/Avatar";
import { Tecnologias } from "@/components/Social";
import { Title } from "@/components/Title";
import TypewriterAnimation from "@/components/TypeWriter";



export default function Home() {
  return (
    <>
      <Header>
        <Title>
          <TypewriterAnimation>
            Alexandre Nogueira de Lira
          </TypewriterAnimation>
        </Title>
        <Avatar big='true' pixel_A={1024} pixel_L={780} urlImage={'/images/user.jpg'} />
        <Tecnologias />
      </Header>
    </>
  );
}
