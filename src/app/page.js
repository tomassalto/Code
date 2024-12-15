import Hero from "../components/Hero";
import UniqueTouch from "../components/UniqueTouch";
import KindOfDesing from "../components/KindOfDesing";
import PlateComposition from "../components/PlateComposition";
import OurClients from "../components/OurClients/OurClients";
import Form from "../components/Form";
import FollowUs from "../components/FollowUs";
export default function App() {
  return (
    <>
      <Hero />
      <UniqueTouch />
      <KindOfDesing />
      <PlateComposition />
      <OurClients />
      <Form />
      <FollowUs color="primary" />
    </>
  );
}
