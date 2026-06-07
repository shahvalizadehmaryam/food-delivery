import BannerSearch from "./BannerSearch";

export default function BannerContent() {
  return (
    <div className="flex flex-col justify-center gap-6 py-8 px-7 lg:py-12">
      <p className="text-sm text-secondary sm:text-base">
        Order Restaurant food, takeaway and groceries.
      </p>
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-secondary sm:text-4xl lg:text-4xl">
        <span className="block">Feast Your Senses,</span>
        <span className="text-primary">Fast and Fresh</span>
      </h1>
      <div className="flex flex-col justify-center gap-2 space-y-4">
        <span className="text-sm text-secondary sm:text-base">
          Enter a postcode to see what we deliver
        </span>
        <BannerSearch />
      </div>
    </div>
  );
}
