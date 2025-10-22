import { CustomerExperienceOverview } from "@/components/Charts/customer-experience-overview";
import { AIInsightsChart } from "@/components/Charts/ai-insights-chart";
import { ServiceQualityTrends } from "@/components/Charts/service-quality-trends";
import { TopInsights } from "@/components/Tables/top-insights";
import { TopInsightsSkeleton } from "@/components/Tables/top-insights/skeleton";
import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { Suspense } from "react";
import { LiveAlertsCard } from "./_components/live-alerts-card";
import { OverviewCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import { CameraStatusGrid } from "./_components/camera-status-grid";

type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

export default async function Home({ searchParams }: PropsType) {
  const { selected_time_frame } = await searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  return (
    <>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewCardsGroup />
      </Suspense>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <CustomerExperienceOverview
          className="col-span-12 xl:col-span-7"
          key={extractTimeFrame("customer_experience")}
          timeFrame={extractTimeFrame("customer_experience")?.split(":")[1]}
        />

        <AIInsightsChart
          key={extractTimeFrame("ai_insights")}
          timeFrame={extractTimeFrame("ai_insights")?.split(":")[1]}
          className="col-span-12 xl:col-span-5"
        />

        <ServiceQualityTrends
          className="col-span-12 xl:col-span-5"
          key={extractTimeFrame("service_quality")}
          timeFrame={extractTimeFrame("service_quality")?.split(":")[1]}
        />

        <CameraStatusGrid />

        <div className="col-span-12 grid xl:col-span-8">
          <Suspense fallback={<TopInsightsSkeleton />}>
            <TopInsights />
          </Suspense>
        </div>

        <Suspense fallback={null}>
          <LiveAlertsCard />
        </Suspense>
      </div>
    </>
  );
}
