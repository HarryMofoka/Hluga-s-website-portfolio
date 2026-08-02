"use client";

import React, { useState } from "react";
import { CMSConfig, SectionConfig } from "../types";
import { Layers, Eye, EyeOff, ArrowUp, ArrowDown, Save, Check } from "lucide-react";

interface SectionManagerTabProps {
  config: CMSConfig;
  onUpdate: (updated: Partial<CMSConfig>) => void;
}

export const SectionManagerTab: React.FC<SectionManagerTabProps> = ({ config, onUpdate }) => {
  const [sections, setSections] = useState<SectionConfig[]>(config.sections);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const toggleSection = (id: string) => {
    const updated = sections.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s));
    setSections(updated);
  };

  const moveSection = (idx: number, direction: "up" | "down") => {
    const targetIdx = direction === "up" ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= sections.length) return;

    const newSections = [...sections];
    const temp = newSections[idx];
    newSections[idx] = newSections[targetIdx];
    newSections[targetIdx] = temp;

    // reassign order
    newSections.forEach((sec, i) => {
      sec.order = i + 1;
    });

    setSections(newSections);
  };

  const handleTitleChange = (id: string, field: "title" | "subtitle", value: string) => {
    const updated = sections.map((s) => (s.id === id ? { ...s, [field]: value } : s));
    setSections(updated);
  };

  const handleSave = () => {
    onUpdate({ sections });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="cms-tab-content">
      {/* Header */}
      <div className="cms-card-header" style={{ marginBottom: "1.5rem" }}>
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>
            Section & Layout Manager
          </h2>
          <p style={{ color: "var(--hl-muted)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
            Enable or disable sections, re-order layout sequence and customize section headings
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
            <Check size={16} /> Section Layout Saved!
          </div>
        )}
      </div>

      <div className="cms-card">
        <h3 className="cms-card-title" style={{ marginBottom: "1.5rem" }}>
          <Layers size={18} color="var(--hl-accent)" /> Homepage Sections ({sections.length})
        </h3>

        {sections.map((sec, idx) => (
          <div
            key={sec.id}
            style={{
              background: "rgba(0, 0, 0, 0.4)",
              border: `1px solid ${sec.enabled ? "rgba(117, 197, 222, 0.3)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: "10px",
              padding: "1.25rem",
              marginBottom: "1rem",
              opacity: sec.enabled ? 1 : 0.6,
              transition: "all 0.2s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  #{sec.order}
                </span>
                <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>{sec.name}</span>
                {sec.enabled ? (
                  <span style={{ color: "#48bb78", fontSize: "0.75rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.2rem" }}>
                    <Eye size={12} /> Active
                  </span>
                ) : (
                  <span style={{ color: "var(--hl-muted)", fontSize: "0.75rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.2rem" }}>
                    <EyeOff size={12} /> Hidden
                  </span>
                )}
              </div>

              {/* Action Controls */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ display: "flex", gap: "0.25rem" }}>
                  <button
                    className="cms-btn cms-btn-secondary"
                    style={{ padding: "0.3rem 0.6rem" }}
                    onClick={() => moveSection(idx, "up")}
                    disabled={idx === 0}
                  >
                    <ArrowUp size={14} />
                  </button>
                  <button
                    className="cms-btn cms-btn-secondary"
                    style={{ padding: "0.3rem 0.6rem" }}
                    onClick={() => moveSection(idx, "down")}
                    disabled={idx === sections.length - 1}
                  >
                    <ArrowDown size={14} />
                  </button>
                </div>

                <label className="cms-toggle">
                  <input
                    type="checkbox"
                    checked={sec.enabled}
                    onChange={() => toggleSection(sec.id)}
                  />
                  <span className="cms-toggle-slider" />
                </label>
              </div>
            </div>

            {/* Editable Titles */}
            <div className="cms-grid-2" style={{ marginBottom: 0 }}>
              <div>
                <label className="cms-label">Main Heading Title</label>
                <input
                  type="text"
                  className="cms-input"
                  value={sec.title}
                  onChange={(e) => handleTitleChange(sec.id, "title", e.target.value)}
                />
              </div>
              {sec.subtitle !== undefined && (
                <div>
                  <label className="cms-label">Highlighted Subtitle / Span</label>
                  <input
                    type="text"
                    className="cms-input"
                    value={sec.subtitle}
                    onChange={(e) => handleTitleChange(sec.id, "subtitle", e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
        ))}

        <button className="cms-btn" onClick={handleSave} style={{ marginTop: "1rem" }}>
          <Save size={16} /> Save Section Layout
        </button>
      </div>
    </div>
  );
};
