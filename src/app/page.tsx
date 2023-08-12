import Image from "next/image";
import clouds from "../../public/clouds_2.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        // toggle unoptimized here to see saturation drop.
        unoptimized
        quality={100}
        placeholder="blur"
        className="object-cover"
        fill
        sizes="100vw"
        src={clouds}
        alt="blue ascii clouds"
      />
    </main>
  );
}
