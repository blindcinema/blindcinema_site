import ContactPageComponent from "@/app/_components/ContactPageComponent";
import MusicPageComponent from "@/app/_components/MusicPageComponent";
import NoSSRWrapper from "@/app/_components/NoSSRWrapper";
import SoundDesignComponent from "@/app/_components/SoundDesignComponent";




export default function ContactPage() {
  return (
    <NoSSRWrapper>
      <ContactPageComponent/>
    </NoSSRWrapper>
  )
}