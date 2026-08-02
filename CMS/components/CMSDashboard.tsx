"use client";

import React, { useState } from "react";
import { CMSConfig } from "../types";
import { AnalyticsTab } from "./AnalyticsTab";
import { ContentManagerTab } from "./ContentManagerTab";
import { SectionManagerTab } from "./SectionManagerTab";
import { ColorThemeTab } from "./ColorThemeTab";
import { GitSyncTab } from "./GitSyncTab";
import { BarChart2, Edit3, Layers, Palette, GitCommit, ArrowLeft, Lock, LogOut, Key } from "lucide-react";
import Link from "next/link";
import "../cms.css";

interface CMSDashboardProps {
  config: CMSConfig;
  onUpdateConfig: (updated: Partial<CMSConfig>) => void;
  onPublishToGit?: (commitMsg: string) => Promise<void>;
  isAuthenticated?: boolean;
  onLogin?: (passkey: string) => Promise<boolean>;
  onLogout?: () => Promise<void>;
}

export const CMSDashboard: React.FC<CMSDashboardProps> = ({
  config,
  onUpdateConfig,
  onPublishToGit,
  isAuthenticated = true,
  onLogin,
  onLogout,
}) => {
  const [activeTab, setActiveTab] = useState<"analytics" | "content" | "sections" | "theme" | "git">("analytics");
  const [passkeyInput, setPasskeyInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!onLogin) return;
    setIsLoggingIn(true);
    setLoginError("");
    const success = await onLogin(passkeyInput);
    if (!success) {
      setLoginError("Invalid admin key. Default key is 'hluga2026admin'.");
    }
    setIsLoggingIn(false);
  };

  // Auth Gate: Render Login Form if Not Authenticated
  if (!isAuthenticated) {
    return (
      <div
        className="cms-container"
        style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}
      >
        <div className="cms-card" style={{ maxWidth: 420, width: "100%", padding: "2.5rem 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(117, 197, 222, 0.15)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <Lock size={28} color="var(--hl-accent)" />
            </div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>
              {config.profile?.brand || "HLUGA."} CMS
            </h2>
            <p style={{ color: "var(--hl-muted)", fontSize: "0.85rem", marginTop: "0.4rem" }}>
              Enter your admin passkey to unlock the management platform.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit}>
            <div className="cms-form-group">
              <label className="cms-label">Admin Passkey</label>
              <div style={{ position: "relative" }}>
                <input
                  type="password"
                  className="cms-input"
                  placeholder="Enter admin passkey..."
                  value={passkeyInput}
                  onChange={(e) => setPasskeyInput(e.target.value)}
                  style={{ paddingLeft: "2.5rem" }}
                  autoFocus
                />
                <Key
                  size={16}
                  color="var(--hl-muted)"
                  style={{ position: "absolute", left: "0.8rem", top: "50%", transform: "translateY(-50%)" }}
                />
              </div>
            </div>

            {loginError && (
              <div
                style={{
                  color: "#f56565",
                  fontSize: "0.8rem",
                  marginBottom: "1rem",
                  background: "rgba(229,62,62,0.1)",
                  padding: "0.5rem",
                  borderRadius: "4px",
                }}
              >
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="cms-btn"
              disabled={isLoggingIn}
              style={{ width: "100%", justifyContent: "center", padding: "0.8rem" }}
            >
              {isLoggingIn ? "Verifying..." : "Unlock Dashboard"}
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/" style={{ color: "var(--hl-muted)", fontSize: "0.8rem", textDecoration: "none" }}>
              ← Return to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

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

            {onLogout && (
              <button
                onClick={onLogout}
                className="cms-tab-btn"
                style={{ color: "#f56565" }}
                title="Log Out"
              >
                <LogOut size={16} />
              </button>
            )}
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
