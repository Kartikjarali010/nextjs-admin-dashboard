export async function getOverviewData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    activeCameras: {
      value: 12,
      growthRate: 8.5,
    },
    aiInsights: {
      value: 2847,
      growthRate: 15.2,
    },
    customerSatisfaction: {
      value: 92.4,
      growthRate: 3.1,
    },
    serviceQuality: {
      value: 88.7,
      growthRate: 5.8,
    },
  };
}
