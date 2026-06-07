import Image from "next/image";
import StoreBadges from "./StoreBadges";

export default function GetTheApp() {
  return (
    <section className="py-3">
      <div className="relative aspect-[1528/651] w-full overflow-hidden rounded-lg border border-border">
        <Image
          src="/images/get-app/get-app.svg"
          alt="Download the Order.uk app for faster ordering"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute bottom-[23%] left-[60%] z-10 max-sm:bottom-[6%] max-sm:left-1/2 max-sm:-translate-x-1/2">
          <StoreBadges />
        </div>
      </div>
    </section>
  );
}
