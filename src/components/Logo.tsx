import Image from "next/image";
import LogoMain from "@/assets/Verve_logo_main.png";

const Logo = () => {
  return (
    <>
      <Image src={LogoMain} alt="Logo" width={200} height={200} />
    </>
  );
};

export default Logo;
