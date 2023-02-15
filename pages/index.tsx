import Header from '@/src/components/Header'


type HomeProps = {
  children: string ;
};

export default function Home({ children, ...props }: HomeProps) {
  return (
    <>
      <Header bar={true}>               
        {children}
      </Header>
    </>
  );
}
