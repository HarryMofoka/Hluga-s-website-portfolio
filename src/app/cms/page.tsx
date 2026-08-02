"use client";

import React from "react";
import { CMSDashboard } from "../../../CMS";
import { useCMS } from "@/context/CMSContext";

export default function CMSPage() {
  const { config, updateConfig, publishToGit, isAuthenticated, login, logout } = useCMS();

  return (
    <CMSDashboard
      config={config}
      onUpdateConfig={updateConfig}
      onPublishToGit={publishToGit}
      isAuthenticated={isAuthenticated}
      onLogin={login}
      onLogout={logout}
    />
  );
}
