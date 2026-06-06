"use client";

import { useMemo, useState } from "react";
import { dealFilters } from "./deal-filters.data";
import { deals } from "./deals.data";
import DealFilters from "./DealFilters";
import DealGrid from "./DealGrid";

export default function ExclusiveDeals() {
  const [activeFilter, setActiveFilter] = useState("pizza-fast-food");

  const filteredDeals = useMemo(
    () => deals.filter((deal) => deal.category === activeFilter),
    [activeFilter],
  );

  return (
    <section className="py-8">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-2xl font-bold text-secondary">
          Up to -40% 🎊 Order.uk exclusive deals
        </h2>
        <DealFilters
          filters={dealFilters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>

      <DealGrid deals={filteredDeals} />
    </section>
  );
}
