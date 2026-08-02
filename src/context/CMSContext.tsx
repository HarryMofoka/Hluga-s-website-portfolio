"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CMSConfig } from "../../CMS/types";
import { defaultCMSConfig } from "../../CMS/utils/defaultData";

interface CMSContextType {
  config: CMSConfig;
  updateConfig: (updated: Partial<CMSConfig>) => void;
  publishToGit: (commitMessage: string) => Promise<void>;
  isAuthenticated: boolean;
  login: (passkey: string) => Promise<boolean>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "hluga_cms_config_v1";

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<CMSConfig>(defaultCMSConfig);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check Auth & Fetch CMS Data
  useEffect(() => {
    // Auth Check
    fetch("/api/cms/auth")
      .then((res) => res.json())
      .then((data) => {
        setIsAuthenticated(!!data.authenticated);
      })
      .catch(() => {});

    // Data Hydration from Server REST API
    fetch("/api/cms/content")
      .then((res) => res.json())
      .then((serverData) => {
        if (serverData && !serverData.error) {
          setConfig((prev) => ({
            ...prev,
            profile: serverData.profile || prev.profile,
            projects: serverData.projects || prev.projects,
            services: serverData.services || prev.services,
            experiences: serverData.experiences || prev.experiences,
            socials: serverData.socials || prev.socials,
            stats: serverData.stats || prev.stats,
          }));
        }
      })
      .catch(() => {});

    // Fetch theme & sections
    fetch("/api/cms/theme")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.theme) {
          setConfig((prev) => ({ ...prev, theme: data.theme }));
        }
      })
      .catch(() => {});

    fetch("/api/cms/sections")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.sections) {
          setConfig((prev) => ({ ...prev, sections: data.sections }));
        }
      })
      .catch(() => {});

    fetch("/api/cms/analytics")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.analytics) {
          setConfig((prev) => ({ ...prev, analytics: data.analytics }));
        }
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, []);

  // Apply theme variables dynamically to DOM root
  useEffect(() => {
    if (!config.theme) return;
    const root = document.documentElement;
    root.style.setProperty("--hl-page", config.theme.page);
    root.style.setProperty("--hl-ink", config.theme.ink);
    root.style.setProperty("--hl-ink-deep", config.theme.inkDeep);
    root.style.setProperty("--hl-cream", config.theme.cream);
    root.style.setProperty("--hl-muted", config.theme.muted);
    root.style.setProperty("--hl-accent", config.theme.accent);
  }, [config.theme]);

  const login = async (passkey: string): Promise<boolean> => {
    try {
      const res = await fetch("/api/cms/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passkey }),
      });
      if (res.ok) {
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  };

  const logout = async () => {
    await fetch("/api/cms/auth", { method: "DELETE" }).catch(() => {});
    setIsAuthenticated(false);
  };

  const updateConfig = (updatedPartial: Partial<CMSConfig>) => {
    setConfig((prev) => {
      const nextConfig = { ...prev, ...updatedPartial };
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(nextConfig));
      } catch (e) {
        console.error(e);
      }

      // Persist to REST API server
      fetch("/api/cms/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config: nextConfig }),
      }).catch((e) => console.warn("Failed to persist content to API server", e));

      return nextConfig;
    });
  };

  const publishToGit = async (commitMessage: string) => {
    const res = await fetch("/api/cms/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commitMessage, config }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Git publish failed");
    }
  };

  return (
    <CMSContext.Provider
      value={{
        config,
        updateConfig,
        publishToGit,
        isAuthenticated,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const ctx = useContext(CMSContext);
  if (!ctx) {
    throw new Error("useCMS must be used within a CMSProvider");
  }
  return ctx;
};
