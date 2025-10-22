import { CustomerExperienceOverview } from "@/components/Charts/customer-experience-overview";
import { ServiceQualityTrends } from "@/components/Charts/service-quality-trends";
import { Suspense } from "react";
import { OverviewCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import { LiveCustomerFeed } from "./_components/live-customer-feed";
import { LiveServiceQualityFeed } from "./_components/live-service-quality-feed";
import { DailyHighlightClip } from "./_components/daily-highlight-clip";
import { DetectedEvents } from "./_components/detected-events";

export default function Home() {
  return (
    <>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewCardsGroup />
      </Suspense>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <DailyHighlightClip className="col-span-12 xl:col-span-6" />
        <DetectedEvents className="col-span-12 xl:col-span-6" />
        <CustomerExperienceOverview className="col-span-12 xl:col-span-6" />
        <LiveCustomerFeed className="col-span-12 xl:col-span-6" />
        <LiveServiceQualityFeed className="col-span-12 xl:col-span-6" />
        <ServiceQualityTrends className="col-span-12 xl:col-span-6" />
      </div>
    </>
  );
}
