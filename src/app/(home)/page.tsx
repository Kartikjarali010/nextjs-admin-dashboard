import { CustomerExperienceOverview } from "@/components/Charts/customer-experience-overview";
import { AIInsightsChart } from "@/components/Charts/ai-insights-chart";
import { ServiceQualityTrends } from "@/components/Charts/service-quality-trends";
import { Suspense } from "react";
import { LiveAlertsCard } from "./_components/live-alerts-card";
import { OverviewCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import { CameraStatusGrid } from "./_components/camera-status-grid";

export default function Home() {
  return (
    <>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewCardsGroup />
      </Suspense>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <CustomerExperienceOverview className="col-span-12 xl:col-span-7" />
        <AIInsightsChart className="col-span-12 xl:col-span-5" />
        <ServiceQualityTrends className="col-span-12 xl:col-span-5" />
        <CameraStatusGrid />


        <Suspense fallback={null}>
          <LiveAlertsCard />
        </Suspense>
      </div>
    </>
  );
}
