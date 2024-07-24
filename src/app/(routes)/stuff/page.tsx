import Header from "@/app/_components/header";
import NoSSRWrapper from "@/app/_components/NoSSRWrapper";
import Background from "@/app/_p5/background";




export default function HomePage() {
  return (
    <NoSSRWrapper>
            <main className="bg-black">


      <Header title="blindcinema"></Header>
      <Background></Background>
      </main>
    </NoSSRWrapper>
  )
}