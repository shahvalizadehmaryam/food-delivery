import DealCard from "./DealCard";
import { Deal } from "./deals.types";

type DealGridProps = {
  deals: Deal[];
};

export default function DealGrid({ deals }: DealGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
      {deals.map((deal) => (
        <DealCard key={deal.id} deal={deal} />
      ))}
    </div>
  );
}
