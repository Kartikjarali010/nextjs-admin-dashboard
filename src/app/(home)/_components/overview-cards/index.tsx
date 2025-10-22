import { compactFormat } from "@/lib/format-number";
import { getOverviewData } from "../../fetch";
import { OverviewCard } from "./card";
import * as icons from "./icons";

export async function OverviewCardsGroup() {
  const { activeCameras, aiInsights, customerSatisfaction, serviceQuality } = await getOverviewData();

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <OverviewCard
        label="Cameras"
        data={{
          ...activeCameras,
          value: compactFormat(activeCameras.value),
        }}
        Icon={icons.Camera}
      />

      <OverviewCard
        label="AI Insights"
        data={{
          ...aiInsights,
          value: compactFormat(aiInsights.value),
        }}
        Icon={icons.AI}
      />

      <OverviewCard
        label="Satisfaction"
        data={{
          ...customerSatisfaction,
          value: customerSatisfaction.value + "%",
        }}
        Icon={icons.Satisfaction}
      />

      <OverviewCard
        label="Quality"
        data={{
          ...serviceQuality,
          value: serviceQuality.value + "%",
        }}
        Icon={icons.Quality}
      />
    </div>
  );
}
