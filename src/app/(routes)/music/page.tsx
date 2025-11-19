import MusicPageComponent from "@/app/_components/MusicPageComponent";
import NoSSRWrapper from "@/app/_components/NoSSRWrapper";




export default function MusicPage() {
  return (
    <NoSSRWrapper>
      <MusicPageComponent/>
    </NoSSRWrapper>
  )
}