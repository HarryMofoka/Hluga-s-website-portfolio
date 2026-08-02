import fs from "fs";
import path from "path";
import { CMSConfig, ProjectItem, ServiceItem, ExperienceItem, ProfileData, ThemeConfig, SectionConfig } from "../../CMS/types";
import { defaultCMSConfig } from "../../CMS/utils/defaultData";

const CONFIG_PATH = path.join(process.cwd(), "src", "data", "cms-config.json");

/**
 * Reads the full CMS configuration from storage or fallback defaults.
 */
export function getCMSConfig(): CMSConfig {
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      const fileData = fs.readFileSync(CONFIG_PATH, "utf-8");
      const parsed = JSON.parse(fileData);
      return {
        ...defaultCMSConfig,
        ...parsed,
        profile: { ...defaultCMSConfig.profile, ...(parsed.profile || {}) },
        theme: { ...defaultCMSConfig.theme, ...(parsed.theme || {}) },
        analytics: { ...defaultCMSConfig.analytics, ...(parsed.analytics || {}) },
      };
    }
  } catch (error) {
    console.error("Error reading cms-config.json:", error);
  }
  return defaultCMSConfig;
}

/**
 * Saves the CMS configuration atomically to disk.
 */
export function saveCMSConfig(config: CMSConfig): boolean {
  try {
    const tempPath = `${CONFIG_PATH}.tmp.${Date.now()}`;
    const dir = path.dirname(CONFIG_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(tempPath, JSON.stringify(config, null, 2), "utf-8");
    fs.renameSync(tempPath, CONFIG_PATH);
    return true;
  } catch (error) {
    console.error("Error saving cms-config.json:", error);
    return false;
  }
}

/**
 * Records a real-time page view in the analytics database engine.
 */
export function recordPageView(reqData: {
  path: string;
  referrer: string;
  userAgent: string;
  ip: string;
}): void {
  try {
    const config = getCMSConfig();
    const analytics = config.analytics || defaultCMSConfig.analytics;

    // Increment total views
    analytics.totalViews = (analytics.totalViews || 0) + 1;

    // Route views count
    const pageIndex = analytics.pageViews.findIndex((p) => p.path === reqData.path);
    if (pageIndex >= 0) {
      analytics.pageViews[pageIndex].views += 1;
    } else {
      analytics.pageViews.push({
        path: reqData.path,
        title: reqData.path === "/" ? "Home Page" : reqData.path.substring(1),
        views: 1,
      });
    }

    // Daily metrics tracking (Today's date format: "Aug 02")
    const dateStr = new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit" });
    const todayIndex = analytics.dailyMetrics.findIndex((d) => d.date === dateStr);

    if (todayIndex >= 0) {
      analytics.dailyMetrics[todayIndex].views += 1;
    } else {
      analytics.dailyMetrics.push({
        date: dateStr,
        views: 1,
        visitors: 1,
      });
      // Keep max 14 days
      if (analytics.dailyMetrics.length > 14) {
        analytics.dailyMetrics.shift();
      }
    }

    // Parse referrer source
    let sourceCategory = "Direct";
    const ref = reqData.referrer.toLowerCase();
    if (ref.includes("google")) sourceCategory = "Google Search";
    else if (ref.includes("linkedin")) sourceCategory = "LinkedIn";
    else if (ref.includes("github")) sourceCategory = "GitHub";
    else if (ref.includes("twitter") || ref.includes("x.com")) sourceCategory = "Social Media";
    else if (ref.length > 0) sourceCategory = "Referrals & Other";

    const srcIndex = analytics.trafficSources.findIndex((s) => s.source === sourceCategory);
    if (srcIndex >= 0) {
      analytics.trafficSources[srcIndex].count += 1;
    } else {
      analytics.trafficSources.push({ source: sourceCategory, count: 1, percentage: 5 });
    }

    // Recalculate percentages
    const totalSourceHits = analytics.trafficSources.reduce((sum, s) => sum + s.count, 0);
    analytics.trafficSources.forEach((s) => {
      s.percentage = Math.round((s.count / (totalSourceHits || 1)) * 100);
    });

    config.analytics = analytics;
    saveCMSConfig(config);
  } catch (error) {
    console.error("Error recording page view:", error);
  }
}

/**
 * CRUD Helper Methods
 */
export function updateProfileData(profile: ProfileData): CMSConfig {
  const config = getCMSConfig();
  config.profile = { ...config.profile, ...profile };
  saveCMSConfig(config);
  return config;
}

export function saveProjectsData(projects: ProjectItem[]): CMSConfig {
  const config = getCMSConfig();
  config.projects = projects;
  saveCMSConfig(config);
  return config;
}

export function saveServicesData(services: ServiceItem[]): CMSConfig {
  const config = getCMSConfig();
  config.services = services;
  saveCMSConfig(config);
  return config;
}

export function saveExperiencesData(experiences: ExperienceItem[]): CMSConfig {
  const config = getCMSConfig();
  config.experiences = experiences;
  saveCMSConfig(config);
  return config;
}

export function saveThemeData(theme: ThemeConfig): CMSConfig {
  const config = getCMSConfig();
  config.theme = theme;
  saveCMSConfig(config);
  return config;
}

export function saveSectionsData(sections: SectionConfig[]): CMSConfig {
  const config = getCMSConfig();
  config.sections = sections;
  saveCMSConfig(config);
  return config;
}
