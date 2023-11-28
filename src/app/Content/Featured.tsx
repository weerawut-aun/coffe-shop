import SliderMoblie from "@/components/SliderMoblie";
import ButtonGlobal from "../../components/ButtonGlobal";
import Slider from "@/components/Slider";

export default async function Featured() {
  return (
    <div className="relative ">
      <div className="flex flex-col items-center justify-center gap-10 py-14 pr-12 lg:flex-row lg:gap-0 lg:pr-20">
        <div className="flex flex-1 flex-col items-start  pl-10 pr-20 lg:w-5/12 lg:px-40">
          <h2 className="mb-5 text-2xl font-light uppercase">
            swing into the harvest season
          </h2>
          <p className="mb-5 text-sm font-light">
            These September coffees are brimming with fruity notes and colorful
            aromas.
          </p>
          <ButtonGlobal>shop new coffees</ButtonGlobal>
        </div>

        <div className="relative w-full flex-1 pl-8 lg:flex lg:w-7/12 lg:flex-col lg:justify-center lg:pl-2">
          <Slider />
          <SliderMoblie />
        </div>
      </div>
    </div>
  );
}
