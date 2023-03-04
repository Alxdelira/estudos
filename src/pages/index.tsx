import Header from "@/components/Header";
import Avatar from "@/components/Avatar";
import  {Tecnologias}  from "@/components/Social";



export default function Home() {
  return (
    <>
      <Header bar>
        <Avatar big pixel_A={1024} pixel_L={780} urlImage={'/images/user.jpg'} />
        <Tecnologias />       
      </Header>

    </>
  );
}
