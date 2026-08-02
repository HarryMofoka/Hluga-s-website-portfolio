"use client";

import React, { useState } from "react";
import { GitBranch, GitCommit, UploadCloud, Check, RefreshCw, Code, ShieldCheck } from "lucide-react";

interface GitSyncTabProps {
  onPublishToGit?: (commitMsg: string) => Promise<void>;
}

export const GitSyncTab: React.FC<GitSyncTabProps> = ({ onPublishToGit }) => {
  const [commitMsg, setCommitMsg] = useState("Feat(CMS): Update portfolio content, analytics & design theme");
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusText, setStatusText] = useState("");

  const handleCommitAndPush = async () => {
    setIsSyncing(true);
    setSyncStatus("idle");
    setStatusText("Preparing changes and staging files...");

    try {
      if (onPublishToGit) {
        await onPublishToGit(commitMsg);
      } else {
        // Fallback simulation/API call
        const res = await fetch("/api/cms", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "git_commit", commitMessage: commitMsg }),
        });
        if (!res.ok) throw new Error("Git command failed");
      }

      setSyncStatus("success");
      setStatusText("Successfully committed and pushed changes to GitHub origin/main!");
    } catch (err: any) {
      setSyncStatus("error");
      setStatusText(err?.message || "Failed to push to GitHub. Check terminal logs.");
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="cms-tab-content">
      {/* Header */}
      <div className="cms-card-header" style={{ marginBottom: "1.5rem" }}>
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>
            GitHub Repository Integration & Deployment
          </h2>
          <p style={{ color: "var(--hl-muted)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
            Commit CMS updates directly to remote repository: <b>https://github.com/HarryMofoka/Hluga-s-website-portfolio.git</b>
          </p>
        </div>
      </div>

      <div className="cms-grid-2">
        {/* Commit Control Panel */}
        <div className="cms-card">
          <h3 className="cms-card-title" style={{ marginBottom: "1.25rem" }}>
            <GitCommit size={18} color="var(--hl-accent)" /> Commit & Publish Changes
          </h3>

          <div className="cms-form-group">
            <label className="cms-label">Target Repository Branch</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(0,0,0,0.4)",
                padding: "0.75rem 1rem",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.1)",
                fontWeight: 700,
                fontSize: "0.9rem",
              }}
            >
              <GitBranch size={16} color="var(--hl-accent)" /> origin/main
            </div>
          </div>

          <div className="cms-form-group">
            <label className="cms-label">Commit Message</label>
            <input
              type="text"
              className="cms-input"
              value={commitMsg}
              onChange={(e) => setCommitMsg(e.target.value)}
              placeholder="e.g. Update portfolio content and theme"
            />
          </div>

          <button
            className="cms-btn"
            onClick={handleCommitAndPush}
            disabled={isSyncing}
            style={{ width: "100%", justifyContent: "center", padding: "0.9rem 1.25rem" }}
          >
            {isSyncing ? (
              <>
                <RefreshCw size={18} className="spin" /> Publishing to GitHub...
              </>
            ) : (
              <>
                <UploadCloud size={18} /> Commit & Push to GitHub Repo
              </>
            )}
          </button>

          {syncStatus === "success" && (
            <div
              style={{
                marginTop: "1.25rem",
                background: "rgba(34, 197, 94, 0.15)",
                border: "1px solid #22c55e",
                color: "#48bb78",
                padding: "0.9rem",
                borderRadius: "6px",
                fontSize: "0.85rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Check size={18} /> {statusText}
            </div>
          )}

          {syncStatus === "error" && (
            <div
              style={{
                marginTop: "1.25rem",
                background: "rgba(229, 62, 62, 0.15)",
                border: "1px solid #e53e3e",
                color: "#f56565",
                padding: "0.9rem",
                borderRadius: "6px",
                fontSize: "0.85rem",
              }}
            >
              {statusText}
            </div>
          )}
        </div>

        {/* Repository Status Info */}
        <div className="cms-card">
          <h3 className="cms-card-title" style={{ marginBottom: "1.25rem" }}>
            <ShieldCheck size={18} color="var(--hl-accent)" /> Synchronization Safeguards
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.85rem", opacity: 0.9 }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <Code size={18} color="var(--hl-accent)" style={{ flexShrink: 0, marginTop: "0.1rem" }} />
              <div>
                <b>Automated File Staging:</b> Automatically stages modified CMS JSON content and source files in `src/data/cms-config.json`.
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <GitBranch size={18} color="var(--hl-accent)" style={{ flexShrink: 0, marginTop: "0.1rem" }} />
              <div>
                <b>Direct Repo Sync:</b> Pushes clean commit histories directly to your configured GitHub remote: <code>https://github.com/HarryMofoka/Hluga-s-website-portfolio.git</code>.
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <ShieldCheck size={18} color="var(--hl-accent)" style={{ flexShrink: 0, marginTop: "0.1rem" }} />
              <div>
                <b>Production Deployment Ready:</b> Any deployment platform (Vercel, Netlify, GitHub Pages) connected to `main` branch will automatically trigger a clean build on push.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
