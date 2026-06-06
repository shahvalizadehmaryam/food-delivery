import Image from "next/image";
import Link from "next/link";
import { Deal } from "./deals.types";

type DealCardProps = {
  deal: Deal;
};

function DealCard({ deal }: DealCardProps) {
  return (
    <Link
      href={deal.href}
      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
    >
      <Image
        src={deal.image}
        alt={deal.restaurantName}
        fill
        className="object-cover transition group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-secondary/75 via-secondary/25 to-secondary/10" />

      <span className="absolute right-4 top-0 rounded-md bg-secondary px-4 py-3 text-sm font-bold text-white">
        {deal.discount}
      </span>

      <div className="absolute bottom-6 left-5 right-5">
        <p className="text-md font-medium text-primary">Restaurant</p>
        <p className="text-lg font-bold text-white sm:text-xl">
          {deal.restaurantName}
        </p>
      </div>
    </Link>
  );
}

export default DealCard;
