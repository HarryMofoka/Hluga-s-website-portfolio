"use client";

import React, { useState } from "react";
import { CMSConfig, ProjectItem, ServiceItem, ExperienceItem } from "../types";
import { Plus, Trash2, Edit2, Save, User, Briefcase, Wrench, Calendar, Share2, Check } from "lucide-react";

interface ContentManagerTabProps {
  config: CMSConfig;
  onUpdate: (updated: Partial<CMSConfig>) => void;
}

export const ContentManagerTab: React.FC<ContentManagerTabProps> = ({ config, onUpdate }) => {
  const [subTab, setSubTab] = useState<"profile" | "projects" | "services" | "experience" | "socials">("profile");

  // Profile Form State
  const [profileForm, setProfileForm] = useState(config.profile);

  // Projects State
  const [projectsList, setProjectsList] = useState<ProjectItem[]>(config.projects);
  const [editingProjectIndex, setEditingProjectIndex] = useState<number | null>(null);
  const [projectForm, setProjectForm] = useState<Partial<ProjectItem>>({
    title: "",
    slug: "",
    role: "",
    client: "",
    year: "2026",
    duration: "4 weeks",
    summary: "",
    problem: "",
    approach: "",
    outcome: "",
    stack: [],
    highlights: [],
    featured: true,
  });

  // Services State
  const [servicesList, setServicesList] = useState<ServiceItem[]>(config.services);
  const [serviceForm, setServiceForm] = useState<Partial<ServiceItem>>({
    name: "",
    slug: "",
    desc: "",
    intro: "",
    includes: [],
    tools: [],
  });
  const [editingServiceIndex, setEditingServiceIndex] = useState<number | null>(null);

  // Experience State
  const [experienceList, setExperienceList] = useState<ExperienceItem[]>(config.experiences);
  const [expForm, setExpForm] = useState<Partial<ExperienceItem>>({
    year: "",
    role: "",
    company: "",
    summary: "",
    points: [],
  });
  const [editingExpIndex, setEditingExpIndex] = useState<number | null>(null);

  const [savedSuccess, setSavedSuccess] = useState(false);

  const triggerSaveNotification = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  // Profile Save
  const handleSaveProfile = () => {
    onUpdate({ profile: profileForm });
    triggerSaveNotification();
  };

  // Project Handlers
  const handleSaveProject = () => {
    if (!projectForm.title) return;
    const slug = projectForm.slug || projectForm.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const newProj: ProjectItem = {
      slug,
      title: projectForm.title || "New Project",
      role: projectForm.role || "Frontend Development",
      image: projectForm.image || "/work-ecommerce.jpg",
      year: projectForm.year || "2026",
      client: projectForm.client || "Client Name",
      duration: projectForm.duration || "4 weeks",
      stack: projectForm.stack && projectForm.stack.length > 0 ? projectForm.stack : ["React", "TypeScript"],
      summary: projectForm.summary || "Project summary description",
      problem: projectForm.problem || "Problem statement",
      approach: projectForm.approach || "Approach taken",
      outcome: projectForm.outcome || "Outcome achieved",
      highlights: projectForm.highlights || ["Feature 1", "Feature 2"],
      metrics: projectForm.metrics || [{ num: "100%", label: "Satisfaction" }],
      featured: projectForm.featured ?? true,
    };

    let updatedProjects: ProjectItem[];
    if (editingProjectIndex !== null) {
      updatedProjects = [...projectsList];
      updatedProjects[editingProjectIndex] = newProj;
    } else {
      updatedProjects = [newProj, ...projectsList];
    }

    setProjectsList(updatedProjects);
    onUpdate({ projects: updatedProjects });
    setEditingProjectIndex(null);
    setProjectForm({ title: "", summary: "", problem: "", approach: "", outcome: "" });
    triggerSaveNotification();
  };

  const handleEditProject = (idx: number) => {
    setEditingProjectIndex(idx);
    setProjectForm(projectsList[idx]);
  };

  const handleDeleteProject = (idx: number) => {
    const updated = projectsList.filter((_, i) => i !== idx);
    setProjectsList(updated);
    onUpdate({ projects: updated });
    triggerSaveNotification();
  };

  // Service Handlers
  const handleSaveService = () => {
    if (!serviceForm.name) return;
    const slug = serviceForm.slug || serviceForm.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const newService: ServiceItem = {
      slug,
      name: serviceForm.name,
      desc: serviceForm.desc || "",
      intro: serviceForm.intro || "",
      includes: serviceForm.includes || ["Deliverable 1"],
      tools: serviceForm.tools || ["React"],
    };

    let updated: ServiceItem[];
    if (editingServiceIndex !== null) {
      updated = [...servicesList];
      updated[editingServiceIndex] = newService;
    } else {
      updated = [...servicesList, newService];
    }

    setServicesList(updated);
    onUpdate({ services: updated });
    setEditingServiceIndex(null);
    setServiceForm({ name: "", desc: "", intro: "" });
    triggerSaveNotification();
  };

  const handleDeleteService = (idx: number) => {
    const updated = servicesList.filter((_, i) => i !== idx);
    setServicesList(updated);
    onUpdate({ services: updated });
    triggerSaveNotification();
  };

  // Experience Handlers
  const handleSaveExperience = () => {
    if (!expForm.role) return;
    const newExp: ExperienceItem = {
      year: expForm.year || "2026",
      role: expForm.role,
      company: expForm.company || "",
      summary: expForm.summary || "",
      points: expForm.points || ["Achievement 1"],
    };

    let updated: ExperienceItem[];
    if (editingExpIndex !== null) {
      updated = [...experienceList];
      updated[editingExpIndex] = newExp;
    } else {
      updated = [newExp, ...experienceList];
    }

    setExperienceList(updated);
    onUpdate({ experiences: updated });
    setEditingExpIndex(null);
    setExpForm({ role: "", company: "", year: "", summary: "" });
    triggerSaveNotification();
  };

  const handleDeleteExperience = (idx: number) => {
    const updated = experienceList.filter((_, i) => i !== idx);
    setExperienceList(updated);
    onUpdate({ experiences: updated });
    triggerSaveNotification();
  };

  return (
    <div className="cms-tab-content">
      {/* Header & Subtabs */}
      <div className="cms-card-header" style={{ marginBottom: "1.5rem" }}>
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>
            Content Manager
          </h2>
          <p style={{ color: "var(--hl-muted)", fontSize: "0.85rem", marginTop: "0.25rem" }}>
            Add, update, or remove profile information, projects, services & experiences
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
            <Check size={16} /> Saved to Site!
          </div>
        )}
      </div>

      {/* Sub Navigation Bar */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <button
          onClick={() => setSubTab("profile")}
          className={`cms-btn ${subTab === "profile" ? "" : "cms-btn-secondary"}`}
        >
          <User size={16} /> Profile & Bio
        </button>
        <button
          onClick={() => setSubTab("projects")}
          className={`cms-btn ${subTab === "projects" ? "" : "cms-btn-secondary"}`}
        >
          <Briefcase size={16} /> Projects ({projectsList.length})
        </button>
        <button
          onClick={() => setSubTab("services")}
          className={`cms-btn ${subTab === "services" ? "" : "cms-btn-secondary"}`}
        >
          <Wrench size={16} /> Services ({servicesList.length})
        </button>
        <button
          onClick={() => setSubTab("experience")}
          className={`cms-btn ${subTab === "experience" ? "" : "cms-btn-secondary"}`}
        >
          <Calendar size={16} /> Experience ({experienceList.length})
        </button>
      </div>

      {/* SUBTAB 1: PROFILE & BIO */}
      {subTab === "profile" && (
        <div className="cms-card">
          <h3 className="cms-card-title" style={{ marginBottom: "1.25rem" }}>
            <User size={18} color="var(--hl-accent)" /> Personal & Profile Information
          </h3>

          <div className="cms-grid-2">
            <div className="cms-form-group">
              <label className="cms-label">Full Name</label>
              <input
                type="text"
                className="cms-input"
                value={profileForm.name}
                onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
              />
            </div>
            <div className="cms-form-group">
              <label className="cms-label">Brand / Logo Title</label>
              <input
                type="text"
                className="cms-input"
                value={profileForm.brand}
                onChange={(e) => setProfileForm({ ...profileForm, brand: e.target.value })}
              />
            </div>
          </div>

          <div className="cms-grid-2">
            <div className="cms-form-group">
              <label className="cms-label">Developer Role</label>
              <input
                type="text"
                className="cms-input"
                value={profileForm.role}
                onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
              />
            </div>
            <div className="cms-form-group">
              <label className="cms-label">Location</label>
              <input
                type="text"
                className="cms-input"
                value={profileForm.location}
                onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
              />
            </div>
          </div>

          <div className="cms-grid-2">
            <div className="cms-form-group">
              <label className="cms-label">Email Address</label>
              <input
                type="email"
                className="cms-input"
                value={profileForm.email}
                onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
              />
            </div>
            <div className="cms-form-group">
              <label className="cms-label">Company / Studio Name</label>
              <input
                type="text"
                className="cms-input"
                value={profileForm.company}
                onChange={(e) => setProfileForm({ ...profileForm, company: e.target.value })}
              />
            </div>
          </div>

          <div className="cms-form-group">
            <label className="cms-label">Hero Headline</label>
            <textarea
              className="cms-textarea"
              rows={2}
              value={profileForm.headline}
              onChange={(e) => setProfileForm({ ...profileForm, headline: e.target.value })}
            />
          </div>

          <div className="cms-form-group">
            <label className="cms-label">About Me Bio</label>
            <textarea
              className="cms-textarea"
              rows={4}
              value={profileForm.bio}
              onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
            />
          </div>

          <button className="cms-btn" onClick={handleSaveProfile}>
            <Save size={16} /> Save Profile Changes
          </button>
        </div>
      )}

      {/* SUBTAB 2: PROJECTS */}
      {subTab === "projects" && (
        <div>
          {/* Add / Edit Project Form */}
          <div className="cms-card" style={{ marginBottom: "1.5rem" }}>
            <h3 className="cms-card-title" style={{ marginBottom: "1.25rem" }}>
              {editingProjectIndex !== null ? (
                <>
                  <Edit2 size={18} color="var(--hl-accent)" /> Edit Project
                </>
              ) : (
                <>
                  <Plus size={18} color="var(--hl-accent)" /> Add New Project
                </>
              )}
            </h3>

            <div className="cms-grid-2">
              <div className="cms-form-group">
                <label className="cms-label">Project Title</label>
                <input
                  type="text"
                  className="cms-input"
                  placeholder="e.g. E-Commerce Platform"
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                />
              </div>
              <div className="cms-form-group">
                <label className="cms-label">Role / Category</label>
                <input
                  type="text"
                  className="cms-input"
                  placeholder="e.g. React & Next.js"
                  value={projectForm.role}
                  onChange={(e) => setProjectForm({ ...projectForm, role: e.target.value })}
                />
              </div>
            </div>

            <div className="cms-grid-2">
              <div className="cms-form-group">
                <label className="cms-label">Client</label>
                <input
                  type="text"
                  className="cms-input"
                  placeholder="e.g. Retail startup, Sandton"
                  value={projectForm.client}
                  onChange={(e) => setProjectForm({ ...projectForm, client: e.target.value })}
                />
              </div>
              <div className="cms-form-group">
                <label className="cms-label">Year & Duration</label>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="text"
                    className="cms-input"
                    placeholder="2026"
                    value={projectForm.year}
                    onChange={(e) => setProjectForm({ ...projectForm, year: e.target.value })}
                  />
                  <input
                    type="text"
                    className="cms-input"
                    placeholder="12 weeks"
                    value={projectForm.duration}
                    onChange={(e) => setProjectForm({ ...projectForm, duration: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="cms-form-group">
              <label className="cms-label">Summary Overview</label>
              <textarea
                className="cms-textarea"
                rows={2}
                placeholder="Brief summary of what this project accomplishes"
                value={projectForm.summary}
                onChange={(e) => setProjectForm({ ...projectForm, summary: e.target.value })}
              />
            </div>

            <div className="cms-grid-2">
              <div className="cms-form-group">
                <label className="cms-label">Problem Statement</label>
                <textarea
                  className="cms-textarea"
                  rows={3}
                  value={projectForm.problem}
                  onChange={(e) => setProjectForm({ ...projectForm, problem: e.target.value })}
                />
              </div>
              <div className="cms-form-group">
                <label className="cms-label">Approach & Solution</label>
                <textarea
                  className="cms-textarea"
                  rows={3}
                  value={projectForm.approach}
                  onChange={(e) => setProjectForm({ ...projectForm, approach: e.target.value })}
                />
              </div>
            </div>

            <div className="cms-form-group">
              <label className="cms-label">Outcome & Results</label>
              <textarea
                className="cms-textarea"
                rows={2}
                value={projectForm.outcome}
                onChange={(e) => setProjectForm({ ...projectForm, outcome: e.target.value })}
              />
            </div>

            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <button className="cms-btn" onClick={handleSaveProject}>
                <Save size={16} /> {editingProjectIndex !== null ? "Update Project" : "Add Project"}
              </button>
              {editingProjectIndex !== null && (
                <button
                  className="cms-btn cms-btn-secondary"
                  onClick={() => {
                    setEditingProjectIndex(null);
                    setProjectForm({ title: "" });
                  }}
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </div>

          {/* Existing Projects List */}
          <div className="cms-card">
            <h3 className="cms-card-title" style={{ marginBottom: "1rem" }}>
              Existing Portfolio Projects ({projectsList.length})
            </h3>

            {projectsList.map((proj, idx) => (
              <div key={proj.slug + idx} className="cms-item-card">
                <div className="cms-item-info">
                  <div className="cms-item-title">{proj.title}</div>
                  <div className="cms-item-sub">
                    {proj.role} • {proj.year} • Client: {proj.client}
                  </div>
                </div>
                <div className="cms-item-actions">
                  <button className="cms-btn cms-btn-secondary" onClick={() => handleEditProject(idx)}>
                    <Edit2 size={14} /> Edit
                  </button>
                  <button className="cms-btn cms-btn-danger" onClick={() => handleDeleteProject(idx)}>
                    <Trash2 size={14} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 3: SERVICES */}
      {subTab === "services" && (
        <div>
          <div className="cms-card" style={{ marginBottom: "1.5rem" }}>
            <h3 className="cms-card-title" style={{ marginBottom: "1.25rem" }}>
              {editingServiceIndex !== null ? "Edit Service" : "Add New Service"}
            </h3>

            <div className="cms-form-group">
              <label className="cms-label">Service Title</label>
              <input
                type="text"
                className="cms-input"
                placeholder="e.g. Fullstack Web Engineering"
                value={serviceForm.name}
                onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
              />
            </div>

            <div className="cms-form-group">
              <label className="cms-label">Short Description</label>
              <input
                type="text"
                className="cms-input"
                placeholder="e.g. Designing and shipping high-performance web products."
                value={serviceForm.desc}
                onChange={(e) => setServiceForm({ ...serviceForm, desc: e.target.value })}
              />
            </div>

            <div className="cms-form-group">
              <label className="cms-label">Detailed Intro</label>
              <textarea
                className="cms-textarea"
                rows={3}
                value={serviceForm.intro}
                onChange={(e) => setServiceForm({ ...serviceForm, intro: e.target.value })}
              />
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <button className="cms-btn" onClick={handleSaveService}>
                <Save size={16} /> Save Service
              </button>
              {editingServiceIndex !== null && (
                <button
                  className="cms-btn cms-btn-secondary"
                  onClick={() => {
                    setEditingServiceIndex(null);
                    setServiceForm({ name: "" });
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>

          <div className="cms-card">
            <h3 className="cms-card-title" style={{ marginBottom: "1rem" }}>
              Current Services ({servicesList.length})
            </h3>
            {servicesList.map((s, idx) => (
              <div key={s.slug + idx} className="cms-item-card">
                <div className="cms-item-info">
                  <div className="cms-item-title">{s.name}</div>
                  <div className="cms-item-sub">{s.desc}</div>
                </div>
                <div className="cms-item-actions">
                  <button className="cms-btn cms-btn-danger" onClick={() => handleDeleteService(idx)}>
                    <Trash2 size={14} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 4: EXPERIENCE */}
      {subTab === "experience" && (
        <div>
          <div className="cms-card" style={{ marginBottom: "1.5rem" }}>
            <h3 className="cms-card-title" style={{ marginBottom: "1.25rem" }}>
              {editingExpIndex !== null ? "Edit Experience Entry" : "Add Experience Entry"}
            </h3>

            <div className="cms-grid-2">
              <div className="cms-form-group">
                <label className="cms-label">Role Title</label>
                <input
                  type="text"
                  className="cms-input"
                  placeholder="e.g. Senior Frontend Engineer"
                  value={expForm.role}
                  onChange={(e) => setExpForm({ ...expForm, role: e.target.value })}
                />
              </div>
              <div className="cms-form-group">
                <label className="cms-label">Company / Entity</label>
                <input
                  type="text"
                  className="cms-input"
                  placeholder="e.g. Nexlink Solutions ZA"
                  value={expForm.company}
                  onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                />
              </div>
            </div>

            <div className="cms-form-group">
              <label className="cms-label">Year / Duration</label>
              <input
                type="text"
                className="cms-input"
                placeholder="e.g. 2025 - Present"
                value={expForm.year}
                onChange={(e) => setExpForm({ ...expForm, year: e.target.value })}
              />
            </div>

            <div className="cms-form-group">
              <label className="cms-label">Summary</label>
              <textarea
                className="cms-textarea"
                rows={3}
                value={expForm.summary}
                onChange={(e) => setExpForm({ ...expForm, summary: e.target.value })}
              />
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <button className="cms-btn" onClick={handleSaveExperience}>
                <Save size={16} /> Save Experience
              </button>
            </div>
          </div>

          <div className="cms-card">
            <h3 className="cms-card-title" style={{ marginBottom: "1rem" }}>
              Experience Timeline ({experienceList.length})
            </h3>
            {experienceList.map((exp, idx) => (
              <div key={exp.role + idx} className="cms-item-card">
                <div className="cms-item-info">
                  <div className="cms-item-title">{exp.role}</div>
                  <div className="cms-item-sub">
                    {exp.company} ({exp.year})
                  </div>
                </div>
                <div className="cms-item-actions">
                  <button className="cms-btn cms-btn-danger" onClick={() => handleDeleteExperience(idx)}>
                    <Trash2 size={14} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
