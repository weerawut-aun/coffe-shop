import Image from "next/image";
import ButtonGlobal from "@/components/ButtonGlobal";
export default function Category() {
  return (
    <section className="flex flex-col items-center gap-12">
      <div className="flex w-5/6 flex-col  gap-10">
        <h2 className="text-center text-2xl">FIND YOUR PERFECT SUBSCRIPTION</h2>
        <p className="text-center">
          Customize a subscription to the finest direct-trade coffees in the
          world.
        </p>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Box 1 */}
        <div className="flex flex-col gap-2">
          <div className="mb-5">
            <Image
              src={`https://images.unsplash.com/photo-1525088553748-01d6e210e00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwcHJvZHVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60`}
              alt="coffee"
              width={400}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div>
            <h3>ROASTER’S CHOICE</h3>
            <p>A rotation of curated coffees.</p>
          </div>
          <div>
            <ButtonGlobal>Shop ROASTER’S CHOICE</ButtonGlobal>
          </div>
        </div>
        {/* Box 2 */}
        <div className="flex flex-col gap-2">
          <div className="mb-5">
            <Image
              src={`https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZSUyMGZhdm9yaXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60`}
              alt="coffee"
              width={400}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div>
            <h3>FAVORITE BLENDS</h3>
            <p>Consistently delicious best-sellers.</p>
          </div>
          <div>
            <ButtonGlobal>Shop BLENDS</ButtonGlobal>
          </div>
        </div>
        {/* Box 3 */}
        <div className="flex flex-col gap-2">
          <div className="mb-5">
            <Image
              src={`https://images.unsplash.com/photo-1499744937866-d7e566a20a61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZSUyMGdpZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60`}
              alt="coffee"
              width={400}
              height={400}
              className=" object-cover"
            />
          </div>
          <div>
            <h3>ROASTER’S CHOICE</h3>
            <p>A rotation of curated coffees.</p>
          </div>
          <div>
            <ButtonGlobal>Shop ROASTER’S CHOICE</ButtonGlobal>
          </div>
        </div>
      </div>
    </section>
  );
}
