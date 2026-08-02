"use client";

import React, { useState } from "react";
import { CMSConfig } from "../types";
import { AnalyticsTab } from "./AnalyticsTab";
import { ContentManagerTab } from "./ContentManagerTab";
import { SectionManagerTab } from "./SectionManagerTab";
import { ColorThemeTab } from "./ColorThemeTab";
import { GitSyncTab } from "./GitSyncTab";
import { BarChart2, Edit3, Layers, Palette, GitCommit, ArrowLeft } from "lucide-react";
import Link from "next/link";
import "../cms.css";

interface CMSDashboardProps {
  config: CMSConfig;
  onUpdateConfig: (updated: Partial<CMSConfig>) => void;
  onPublishToGit?: (commitMsg: string) => Promise<void>;
}

export const CMSDashboard: React.FC<CMSDashboardProps> = ({
  config,
  onUpdateConfig,
  onPublishToGit,
}) => {
  const [activeTab, setActiveTab] = useState<"analytics" | "content" | "sections" | "theme" | "git">("analytics");

  return (
    <div className="cms-container">
      {/* CMS Master Header */}
      <header className="cms-header">
        <div className="cms-header-inner">
          <div className="cms-brand">
            <Link
              href="/"
              style={{
                color: "var(--hl-muted)",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.85rem",
                textDecoration: "none",
                marginRight: "1rem",
              }}
            >
              <ArrowLeft size={16} /> Portfolio
            </Link>
            <div className="cms-logo">{config.profile.brand || "HLUGA."}</div>
            <span className="cms-badge">CMS PLATFORM</span>
          </div>

          {/* Nav Tabs */}
          <nav className="cms-nav-tabs">
            <button
              onClick={() => setActiveTab("analytics")}
              className={`cms-tab-btn ${activeTab === "analytics" ? "active" : ""}`}
            >
              <BarChart2 size={16} /> Analytics
            </button>
            <button
              onClick={() => setActiveTab("content")}
              className={`cms-tab-btn ${activeTab === "content" ? "active" : ""}`}
            >
              <Edit3 size={16} /> Content
            </button>
            <button
              onClick={() => setActiveTab("sections")}
              className={`cms-tab-btn ${activeTab === "sections" ? "active" : ""}`}
            >
              <Layers size={16} /> Sections
            </button>
            <button
              onClick={() => setActiveTab("theme")}
              className={`cms-tab-btn ${activeTab === "theme" ? "active" : ""}`}
            >
              <Palette size={16} /> Colors & Theme
            </button>
            <button
              onClick={() => setActiveTab("git")}
              className={`cms-tab-btn ${activeTab === "git" ? "active" : ""}`}
            >
              <GitCommit size={16} /> Git Commit
            </button>
          </nav>
        </div>
      </header>

      {/* Main Tab Panels */}
      <main className="cms-main">
        {activeTab === "analytics" && <AnalyticsTab analytics={config.analytics} />}
        {activeTab === "content" && <ContentManagerTab config={config} onUpdate={onUpdateConfig} />}
        {activeTab === "sections" && <SectionManagerTab config={config} onUpdate={onUpdateConfig} />}
        {activeTab === "theme" && <ColorThemeTab config={config} onUpdate={onUpdateConfig} />}
        {activeTab === "git" && <GitSyncTab onPublishToGit={onPublishToGit} />}
      </main>
    </div>
  );
};
