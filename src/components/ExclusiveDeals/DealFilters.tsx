import { DealFilter } from "./deals.types";

type DealFiltersProps = {
  filters: DealFilter[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
};

export default function DealFilters({
  filters,
  activeFilter,
  onFilterChange,
}: DealFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-4">
      {filters.map((filter) => {
        const isActive = filter.id === activeFilter;

        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onFilterChange(filter.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition sm:text-base ${
              isActive
                ? "border border-primary text-primary"
                : "text-secondary hover:text-primary"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
