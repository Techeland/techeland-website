export const siteMeta = {
  title: "TechEland — Fast, transparent software development",
  description:
    "Next.js, client portals, dashboards and MVPs for startups and small businesses.",
};

export function generateMeta(overrides: Partial<typeof siteMeta>) {
  return { ...siteMeta, ...overrides };
}
