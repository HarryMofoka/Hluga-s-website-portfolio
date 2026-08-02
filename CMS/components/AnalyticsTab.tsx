"use client";

import React, { useState } from "react";
import { AnalyticsData } from "../types";
import {
  TrendingUp,
  Users,
  Eye,
  Clock,
  Activity,
  Globe,
  Smartphone,
  Layers,
  ArrowUpRight,
} from "lucide-react";

interface AnalyticsTabProps {
  analytics: AnalyticsData;
}

export const AnalyticsTab: React.FC<AnalyticsTabProps> = ({ analytics }) => {
  const [timeRange, setTimeRange] = useState<"7d" | "30d" | "90d" | "all">("7d");

  // Calculate SVG curve path for trend chart
  const maxViews = Math.max(...analytics.dailyMetrics.map((m) => m.views), 1);
  const chartHeight = 160;
  const chartWidth = 600;
  const points = analytics.dailyMetrics.map((m, idx) => {
    const x = (idx / (analytics.dailyMetrics.length - 1)) * chartWidth;
    const y = chartHeight - (m.views / maxViews) * (chartHeight - 20) - 10;
    return { x, y, date: m.date, views: m.views, visitors: m.visitors };
  });

  const pathD = points.reduce(
    (acc, pt, idx) => (idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`),
    ""
  );

  const areaD = `${pathD} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`;

  return (
    <div className="cms-tab-content">
      {/* Top Header Controls */}
      <div className="cms-card-header" style={{ marginBottom: "1.5rem" }}>
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>
            Analytics Overview
          </h2>
          <p style={{ color: "var(--hl-muted)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
            Real-time portfolio performance, visitor trends & engagement metrics
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {(["7d", "30d", "90d", "all"] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`cms-btn ${timeRange === range ? "" : "cms-btn-secondary"}`}
              style={{ padding: "0.4rem 0.8rem", fontSize: "0.75rem" }}
            >
              {range.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="cms-grid-4">
        <div className="cms-card">
          <div className="cms-card-header">
            <span className="cms-card-title">
              <Eye size={18} color="var(--hl-accent)" /> Total Page Views
            </span>
            <span style={{ color: "#48bb78", fontSize: "0.75rem", fontWeight: 700 }}>
              +18.4% ↑
            </span>
          </div>
          <div className="cms-metric-num">
            {analytics.totalViews.toLocaleString()}
          </div>
          <div className="cms-metric-label">Across all portfolio routes</div>
        </div>

        <div className="cms-card">
          <div className="cms-card-header">
            <span className="cms-card-title">
              <Users size={18} color="var(--hl-accent)" /> Unique Visitors
            </span>
            <span style={{ color: "#48bb78", fontSize: "0.75rem", fontWeight: 700 }}>
              +12.6% ↑
            </span>
          </div>
          <div className="cms-metric-num">
            {analytics.uniqueVisitors.toLocaleString()}
          </div>
          <div className="cms-metric-label">Individual active sessions</div>
        </div>

        <div className="cms-card">
          <div className="cms-card-header">
            <span className="cms-card-title">
              <Clock size={18} color="var(--hl-accent)" /> Avg. Session
            </span>
            <span style={{ color: "#48bb78", fontSize: "0.75rem", fontWeight: 700 }}>
              +8.2% ↑
            </span>
          </div>
          <div className="cms-metric-num">{analytics.avgTimeOnSite}</div>
          <div className="cms-metric-label">Time spent exploring</div>
        </div>

        <div className="cms-card">
          <div className="cms-card-header">
            <span className="cms-card-title">
              <TrendingUp size={18} color="var(--hl-accent)" /> Bounce Rate
            </span>
            <span style={{ color: "#48bb78", fontSize: "0.75rem", fontWeight: 700 }}>
              -4.1% ↓
            </span>
          </div>
          <div className="cms-metric-num">{analytics.bounceRate}</div>
          <div className="cms-metric-label">Single page sessions</div>
        </div>
      </div>

      {/* Traffic Trend SVG Chart */}
      <div className="cms-card" style={{ marginBottom: "2rem" }}>
        <div className="cms-card-header">
          <span className="cms-card-title">
            <Activity size={18} color="var(--hl-accent)" /> Visitor Traffic & Page Views Trend
          </span>
          <span style={{ fontSize: "0.8rem", color: "var(--hl-muted)" }}>
            Live updating stream
          </span>
        </div>
        <div className="cms-chart-container">
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--hl-accent)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--hl-accent)" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            {[0.2, 0.5, 0.8].map((ratio) => (
              <line
                key={ratio}
                x1="0"
                y1={chartHeight * ratio}
                x2={chartWidth}
                y2={chartHeight * ratio}
                stroke="rgba(255,255,255,0.06)"
                strokeDasharray="4 4"
              />
            ))}

            {/* Area Fill */}
            <path d={areaD} fill="url(#chartGrad)" />

            {/* Main Trend Line */}
            <path
              d={pathD}
              fill="none"
              stroke="var(--hl-accent)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Data Points */}
            {points.map((pt, i) => (
              <g key={i}>
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r="5"
                  fill="var(--hl-ink-deep)"
                  stroke="var(--hl-accent)"
                  strokeWidth="2.5"
                />
                <text
                  x={pt.x}
                  y={chartHeight + 18}
                  fill="var(--hl-muted)"
                  fontSize="10"
                  textAnchor="middle"
                >
                  {pt.date}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Breakdown Grids */}
      <div className="cms-grid-2">
        {/* Traffic Sources */}
        <div className="cms-card">
          <div className="cms-card-header">
            <span className="cms-card-title">
              <Globe size={18} color="var(--hl-accent)" /> Traffic Sources
            </span>
          </div>
          {analytics.trafficSources.map((src) => (
            <div key={src.source} className="cms-bar-row">
              <div className="cms-bar-meta">
                <span>{src.source}</span>
                <span style={{ fontWeight: 700 }}>
                  {src.count.toLocaleString()} ({src.percentage}%)
                </span>
              </div>
              <div className="cms-bar-track">
                <div className="cms-bar-fill" style={{ width: `${src.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Top Performing Projects */}
        <div className="cms-card">
          <div className="cms-card-header">
            <span className="cms-card-title">
              <Layers size={18} color="var(--hl-accent)" /> Most Viewed Projects
            </span>
          </div>
          {analytics.topProjects.map((proj) => (
            <div key={proj.title} className="cms-bar-row">
              <div className="cms-bar-meta">
                <span>{proj.title}</span>
                <span style={{ fontWeight: 700 }}>
                  {proj.views.toLocaleString()} views ({proj.percentage}%)
                </span>
              </div>
              <div className="cms-bar-track">
                <div
                  className="cms-bar-fill"
                  style={{
                    width: `${proj.percentage}%`,
                    background: "var(--hl-cream)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pages & Devices */}
      <div className="cms-grid-2">
        {/* Page Views Breakdown */}
        <div className="cms-card">
          <div className="cms-card-header">
            <span className="cms-card-title">
              <ArrowUpRight size={18} color="var(--hl-accent)" /> Page Views by Route
            </span>
          </div>
          {analytics.pageViews.map((pv) => (
            <div
              key={pv.path}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.6rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                fontSize: "0.85rem",
              }}
            >
              <div>
                <span style={{ fontWeight: 700, color: "var(--hl-accent)" }}>
                  {pv.path}
                </span>{" "}
                <span style={{ color: "var(--hl-muted)", marginLeft: "0.5rem" }}>
                  {pv.title}
                </span>
              </div>
              <div style={{ fontWeight: 700 }}>{pv.views.toLocaleString()}</div>
            </div>
          ))}
        </div>

        {/* Device & Country Breakdown */}
        <div className="cms-card">
          <div className="cms-card-header">
            <span className="cms-card-title">
              <Smartphone size={18} color="var(--hl-accent)" /> Devices & Audience
            </span>
          </div>
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--hl-muted)", marginBottom: "0.5rem" }}>
              DEVICE PLATFORMS
            </div>
            {analytics.deviceStats.map((dev) => (
              <div key={dev.device} className="cms-bar-row">
                <div className="cms-bar-meta">
                  <span>{dev.device}</span>
                  <span style={{ fontWeight: 700 }}>{dev.percentage}%</span>
                </div>
                <div className="cms-bar-track">
                  <div className="cms-bar-fill" style={{ width: `${dev.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--hl-muted)", marginBottom: "0.5rem" }}>
              TOP COUNTRIES
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {analytics.countryStats.map((c) => (
                <div
                  key={c.code}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                  }}
                >
                  <span style={{ fontWeight: 700, color: "var(--hl-accent)" }}>
                    {c.code}
                  </span>{" "}
                  {c.country}: <b>{c.count.toLocaleString()}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
