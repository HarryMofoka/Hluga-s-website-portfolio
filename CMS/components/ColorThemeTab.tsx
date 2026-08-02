"use client";

import React, { useState } from "react";
import { CMSConfig, ThemeConfig } from "../types";
import { Palette, Check, RefreshCw, Eye } from "lucide-react";

interface ColorThemeTabProps {
  config: CMSConfig;
  onUpdate: (updated: Partial<CMSConfig>) => void;
}

export const PRESET_THEMES: { id: string; name: string; colors: Omit<ThemeConfig, "preset"> }[] = [
  {
    id: "original",
    name: "HLUGA Classic Light",
    colors: {
      page: "#e4e4e4",
      ink: "#111111",
      inkDeep: "#0b0b0b",
      cream: "#f4f1e8",
      muted: "#9a9590",
      accent: "#75c5de",
    },
  },
  {
    id: "cyber-cyan",
    name: "Cyber Cyan Dark",
    colors: {
      page: "#0d1117",
      ink: "#f0f6fc",
      inkDeep: "#161b22",
      cream: "#e6edf3",
      muted: "#8b949e",
      accent: "#38bdf8",
    },
  },
  {
    id: "midnight-emerald",
    name: "Midnight Emerald",
    colors: {
      page: "#06130e",
      ink: "#ecfdf5",
      inkDeep: "#064e3b",
      cream: "#d1fae5",
      muted: "#6ee7b7",
      accent: "#10b981",
    },
  },
  {
    id: "sandton-gold",
    name: "Sandton Luxury Gold",
    colors: {
      page: "#141414",
      ink: "#fef08a",
      inkDeep: "#1c1917",
      cream: "#fef3c7",
      muted: "#a1a1aa",
      accent: "#eab308",
    },
  },
  {
    id: "obsidian-violet",
    name: "Obsidian Violet",
    colors: {
      page: "#0f0720",
      ink: "#f3e8ff",
      inkDeep: "#1e1b4b",
      cream: "#e9d5ff",
      muted: "#c084fc",
      accent: "#a855f7",
    },
  },
];

export const ColorThemeTab: React.FC<ColorThemeTabProps> = ({ config, onUpdate }) => {
  const [theme, setTheme] = useState<ThemeConfig>(config.theme);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const applyPreset = (presetId: string) => {
    const preset = PRESET_THEMES.find((p) => p.id === presetId);
    if (!preset) return;
    const newTheme: ThemeConfig = {
      ...preset.colors,
      preset: presetId,
    };
    setTheme(newTheme);
    onUpdate({ theme: newTheme });
    triggerSaveNotification();
  };

  const handleColorChange = (key: keyof ThemeConfig, value: string) => {
    const newTheme = { ...theme, [key]: value, preset: "custom" };
    setTheme(newTheme);
    onUpdate({ theme: newTheme });
    triggerSaveNotification();
  };

  const triggerSaveNotification = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="cms-tab-content">
      {/* Header */}
      <div className="cms-card-header" style={{ marginBottom: "1.5rem" }}>
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>
            Color & Theme Customizer
          </h2>
          <p style={{ color: "var(--hl-muted)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
            Tune brand colors, select curated themes & preview changes live
          </p>
        </div>
        {savedSuccess && (
          <div
            style={{
              background: "#22c55e",
              color: "#000",
              padding: "0.4rem 0.8rem",
              borderRadius: "6px",
              fontWeight: 700,
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <Check size={16} /> Theme Updated Live!
          </div>
        )}
      </div>

      <div className="cms-grid-2">
        {/* Left Column: Preset Themes & Color Controls */}
        <div>
          {/* Presets */}
          <div className="cms-card" style={{ marginBottom: "1.5rem" }}>
            <h3 className="cms-card-title" style={{ marginBottom: "1rem" }}>
              <Palette size={18} color="var(--hl-accent)" /> Preset Color Schemes
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {PRESET_THEMES.map((p) => (
                <div
                  key={p.id}
                  onClick={() => applyPreset(p.id)}
                  style={{
                    background: theme.preset === p.id ? "rgba(117, 197, 222, 0.15)" : "rgba(0,0,0,0.3)",
                    border: `1px solid ${theme.preset === p.id ? "var(--hl-accent)" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: "8px",
                    padding: "0.75rem 1rem",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{p.name}</span>
                  <div style={{ display: "flex", gap: "0.3rem" }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: p.colors.page }} />
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: p.colors.ink }} />
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: p.colors.accent }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Color Inputs */}
          <div className="cms-card">
            <h3 className="cms-card-title" style={{ marginBottom: "1.25rem" }}>
              Custom Palette Tuning
            </h3>

            <div className="cms-form-group">
              <label className="cms-label">Primary Accent Color (--hl-accent)</label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="color"
                  value={theme.accent}
                  onChange={(e) => handleColorChange("accent", e.target.value)}
                  style={{ width: 44, height: 38, border: "none", borderRadius: 4, cursor: "pointer" }}
                />
                <input
                  type="text"
                  className="cms-input"
                  value={theme.accent}
                  onChange={(e) => handleColorChange("accent", e.target.value)}
                />
              </div>
            </div>

            <div className="cms-form-group">
              <label className="cms-label">Page Background (--hl-page)</label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="color"
                  value={theme.page}
                  onChange={(e) => handleColorChange("page", e.target.value)}
                  style={{ width: 44, height: 38, border: "none", borderRadius: 4, cursor: "pointer" }}
                />
                <input
                  type="text"
                  className="cms-input"
                  value={theme.page}
                  onChange={(e) => handleColorChange("page", e.target.value)}
                />
              </div>
            </div>

            <div className="cms-form-group">
              <label className="cms-label">Ink Dark (--hl-ink)</label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="color"
                  value={theme.ink}
                  onChange={(e) => handleColorChange("ink", e.target.value)}
                  style={{ width: 44, height: 38, border: "none", borderRadius: 4, cursor: "pointer" }}
                />
                <input
                  type="text"
                  className="cms-input"
                  value={theme.ink}
                  onChange={(e) => handleColorChange("ink", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Portfolio Preview */}
        <div className="cms-card">
          <h3 className="cms-card-title" style={{ marginBottom: "1rem" }}>
            <Eye size={18} color="var(--hl-accent)" /> Live Site Preview
          </h3>

          <div
            className="cms-preview-frame"
            style={{
              background: theme.page,
              color: theme.ink,
              padding: "1.5rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {/* Header Mock */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "1rem",
                borderBottom: `1px solid ${theme.ink}20`,
              }}
            >
              <div style={{ fontWeight: 800, fontSize: "1.2rem", color: theme.ink }}>
                {config.profile.brand}
              </div>
              <div
                style={{
                  background: theme.accent,
                  color: "#000",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                }}
              >
                Let's Talk →
              </div>
            </div>

            {/* Hero Mock */}
            <div style={{ padding: "2rem 0" }}>
              <div style={{ color: theme.muted, fontSize: "0.8rem", textTransform: "uppercase" }}>
                {config.profile.role}
              </div>
              <h1
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  margin: "0.5rem 0 1rem 0",
                  lineHeight: 1.2,
                  color: theme.ink,
                }}
              >
                {config.profile.headline}
              </h1>

              {/* Sample Work Card */}
              <div
                style={{
                  background: theme.cream,
                  color: theme.ink,
                  padding: "1.25rem",
                  borderRadius: "10px",
                  marginTop: "1rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <span
                  style={{
                    background: theme.accent,
                    color: "#000",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                  }}
                >
                  FEATURED WORK
                </span>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0.5rem 0 0.25rem 0" }}>
                  {config.projects[0]?.title || "E-Commerce Platform"}
                </h3>
                <p style={{ fontSize: "0.8rem", opacity: 0.8, margin: 0 }}>
                  {config.projects[0]?.summary || "A storefront built for fast browsing..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
