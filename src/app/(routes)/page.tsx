import Home from "../_components/Home";
import NoSSRWrapper from "../_components/NoSSRWrapper";



export default function HomePage() {
  return (
    <NoSSRWrapper>
      <Home/>
    </NoSSRWrapper>
  )
}