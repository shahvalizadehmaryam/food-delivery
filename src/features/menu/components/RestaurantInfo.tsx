import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { restaurantInfo } from "../data/restaurant-info.data";

function SectionIcon({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={30}
      height={30}
      className="size-7 shrink-0"
      aria-hidden
    />
  );
}

type InfoSectionProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  variant?: "light" | "dark";
};

function InfoSection({
  icon,
  title,
  children,
  variant = "light",
}: InfoSectionProps) {
  const isDark = variant === "dark";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className={isDark ? "text-white" : "text-secondary"}>{icon}</span>
        <h3
          className={`text-base font-bold sm:text-lg ${
            isDark ? "text-white" : "text-secondary"
          }`}
        >
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

function ScheduleList({
  schedule,
  variant = "light",
}: {
  schedule: { label: string; hours: string }[];
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <ul className="flex flex-col gap-2">
      {schedule.map((entry) => (
        <li
          key={entry.label}
          className={`text-sm leading-relaxed ${
            isDark ? "text-white/90" : "text-secondary"
          }`}
        >
          <span className="font-bold">{entry.label}:</span> {entry.hours}
        </li>
      ))}
    </ul>
  );
}

export default function RestaurantInfo() {
  const { delivery, contact, operational } = restaurantInfo;

  return (
    <section className="mt-10 overflow-hidden rounded-2xl shadow-[0_2px_16px_rgba(3,8,31,0.08)]">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-1 flex-col gap-8 bg-card p-6 sm:p-8 md:flex-row md:gap-10 lg:gap-12">
          <div className="flex-1">
            <InfoSection
              icon={<SectionIcon src="/images/icons/location.svg" />}
              title="Delivery information"
            >
              <ScheduleList schedule={delivery.schedule} />
              <p className="text-sm text-secondary">
                <span className="font-bold pr-1">
                  Estimated time until delivery: 
                </span>
                {delivery.estimatedDelivery}
              </p>
            </InfoSection>
          </div>

          <div className="flex-1">
            <InfoSection
              icon={<SectionIcon src="/images/icons/contact-info.svg" />}
              title="Contact information"
            >
              <p className="text-sm leading-relaxed text-secondary">
                {contact.allergyNote}
              </p>
              <div className="flex flex-col gap-2 text-sm text-secondary">
                <p>
                  <span className="font-bold">Phone number</span>
                  <br />
                  {contact.phone}
                </p>
                <p>
                  <span className="font-bold">Website</span>
                  <br />
                  <Link
                    href={contact.website}
                    className="break-all hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.website}
                  </Link>
                </p>
              </div>
            </InfoSection>
          </div>
        </div>

        <div className="bg-secondary p-6 sm:p-8 lg:w-[34%] lg:min-w-[300px]">
          <InfoSection
            icon={<SectionIcon src="/images/icons/clock.svg" />}
            title="Operational Times"
            variant="dark"
          >
            <ScheduleList schedule={operational.schedule} variant="dark" />
          </InfoSection>
        </div>
      </div>
    </section>
  );
}
