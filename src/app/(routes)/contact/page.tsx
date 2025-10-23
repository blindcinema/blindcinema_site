import MusicPageComponent from "@/app/_components/MusicPageComponent";
import NoSSRWrapper from "@/app/_components/NoSSRWrapper";
import SoundDesignComponent from "@/app/_components/SoundDesignComponent";




export default function MusicPage() {
  return (
    <NoSSRWrapper>
      <MusicPageComponent/>
    </NoSSRWrapper>
  )
}