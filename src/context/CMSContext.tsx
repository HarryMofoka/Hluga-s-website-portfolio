"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CMSConfig } from "../../CMS/types";
import { defaultCMSConfig } from "../../CMS/utils/defaultData";

interface CMSContextType {
  config: CMSConfig;
  updateConfig: (updated: Partial<CMSConfig>) => void;
  publishToGit: (commitMessage: string) => Promise<void>;
  isLoading: boolean;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "hluga_cms_config_v1";

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<CMSConfig>(defaultCMSConfig);
  const [isLoading, setIsLoading] = useState(true);

  // Load configuration from local storage & API
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setConfig((prev) => ({ ...prev, ...parsed }));
      }
    } catch (e) {
      console.warn("Could not read local CMS config", e);
    } finally {
      setIsLoading(false);
    }

    // Also attempt server sync
    fetch("/api/cms")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.config) {
          setConfig((prev) => ({ ...prev, ...data.config }));
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data.config));
        }
      })
      .catch(() => {});
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

  const updateConfig = (updatedPartial: Partial<CMSConfig>) => {
    setConfig((prev) => {
      const nextConfig = { ...prev, ...updatedPartial };
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(nextConfig));
      } catch (e) {
        console.error(e);
      }

      // Persist to disk API asynchronously
      fetch("/api/cms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config: nextConfig }),
      }).catch((e) => console.warn("Failed to persist to API server", e));

      return nextConfig;
    });
  };

  const publishToGit = async (commitMessage: string) => {
    const res = await fetch("/api/cms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "git_commit", commitMessage, config }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Git publish failed");
    }
  };

  return (
    <CMSContext.Provider value={{ config, updateConfig, publishToGit, isLoading }}>
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
