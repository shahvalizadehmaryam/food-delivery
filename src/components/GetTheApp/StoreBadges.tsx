import Image from "next/image";
import Link from "next/link";

export default function StoreBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="#"
        aria-label="Download on the App Store"
        className="inline-flex items-center gap-3 rounded-lg bg-secondary px-4 py-2.5 text-white transition-opacity hover:opacity-80"
      >
        <Image
          src="/images/get-app/apple-icon.svg"
          alt=""
          width={24}
          height={24}
          aria-hidden
        />
        <span className="text-left leading-none">
          <span className="block text-[10px]">Download on the</span>
          <span className="block text-base font-semibold">App Store</span>
        </span>
      </Link>

      <Link
        href="#"
        aria-label="Get it on Google Play"
        className="inline-flex items-center gap-3 rounded-lg bg-secondary px-4 py-2.5 text-white transition-opacity hover:opacity-80"
      >
        <Image
          src="/images/get-app/google-play-icon.svg"
          alt=""
          width={24}
          height={24}
          aria-hidden
        />
        <span className="text-left leading-none">
          <span className="block text-[10px] uppercase tracking-wide">
            Get it on
          </span>
          <span className="block text-base font-semibold">Google Play</span>
        </span>
      </Link>
    </div>
  );
}
