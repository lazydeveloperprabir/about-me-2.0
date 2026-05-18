import { writeFileSync, mkdirSync } from "fs";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import path from "path";
import { profile } from "../src/data/profile.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const resumeDir = path.join(root, "resume");
const htmlPath = path.join(resumeDir, "resume.html");
const pdfPath = path.join(root, "public", "resume.pdf");

const skillGroups = profile.skillCategories
  .map(
    (cat) =>
      `<div class="skill-group"><strong>${cat.name}:</strong> ${cat.skills.join(" · ")}</div>`
  )
  .join("");

const experienceHtml = profile.resumeExperience
  .map((job) => {
    const highlights = job.highlights
      .map((h) => `<li>${h}</li>`)
      .join("");
    return `
      <div class="job">
        <div class="job-header">
          <div>
              <h3>${job.role}</h3>
              <p class="company">${job.company}${job.project ? ` — <em>${job.project}</em>` : ""}</p>
            </div>
            <div class="job-meta">
              <span>${job.period}</span>
              ${job.location ? `<span>${job.location}</span>` : ""}
            </div>
        </div>
        <ul>${highlights}</ul>
      </div>`;
  })
  .join("");

const certs = profile.certifications
  .map((c) => `${c.name} (${c.issuer}${c.year ? `, ${c.year}` : ""})`)
  .join(" · ");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${profile.name} — Resume</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: "Segoe UI", Calibri, Arial, sans-serif;
      font-size: 10.5pt;
      line-height: 1.45;
      color: #1e293b;
      padding: 0.45in 0.5in;
      max-width: 8.5in;
    }
    h1 { font-size: 22pt; font-weight: 700; letter-spacing: -0.02em; color: #0f172a; }
    .headline { font-size: 10pt; color: #334155; margin-top: 4px; font-weight: 500; }
    .contact {
      margin-top: 8px;
      font-size: 9.5pt;
      color: #475569;
      display: flex;
      flex-wrap: wrap;
      gap: 6px 14px;
    }
    .contact a { color: #2563eb; text-decoration: none; }
    section { margin-top: 14px; }
    h2 {
      font-size: 11pt;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #1d4ed8;
      border-bottom: 1.5px solid #cbd5e1;
      padding-bottom: 3px;
      margin-bottom: 8px;
    }
    .summary p { color: #334155; text-align: justify; }
    .skill-group { margin-bottom: 5px; font-size: 9.5pt; color: #334155; }
    .skill-group strong { color: #0f172a; }
    .job { margin-bottom: 11px; page-break-inside: avoid; }
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 3px;
    }
    .job h3 { font-size: 10.5pt; font-weight: 600; color: #0f172a; }
    .company { font-size: 9.5pt; color: #475569; margin-top: 1px; }
    .job-meta {
      text-align: right;
      font-size: 9pt;
      color: #64748b;
      white-space: nowrap;
      display: flex;
      flex-direction: column;
      gap: 1px;
    }
    ul { margin-left: 16px; margin-top: 3px; }
    li { font-size: 9.5pt; color: #334155; margin-bottom: 2px; }
    .education p { font-size: 9.5pt; color: #334155; }
    .certs { font-size: 9.5pt; color: #334155; }
    @media print {
      body { padding: 0.4in 0.45in; }
    }
  </style>
</head>
<body>
  <header>
    <h1>${profile.name.toUpperCase()}</h1>
    <p class="headline">${profile.title} · AWS Certified Solutions Architect</p>
    <div class="contact">
      <span>${profile.resume.phone}</span>
      <span><a href="mailto:${profile.email}">${profile.email}</a></span>
      <span><a href="${profile.linkedin}">LinkedIn</a></span>
      <span><a href="${profile.github}">GitHub</a></span>
      <span>${profile.location}</span>
    </div>
  </header>

  <section class="summary">
    <h2>Summary</h2>
    <p>${profile.resume.summary}</p>
  </section>

  <section>
    <h2>Skills</h2>
    ${skillGroups}
  </section>

  <section>
    <h2>Experience</h2>
    ${experienceHtml}
  </section>

  <section class="education">
    <h2>Education</h2>
    <p><strong>${profile.education.school}</strong></p>
    <p>${profile.education.degree}, ${profile.education.field} · ${profile.education.period}</p>
  </section>

  <section>
    <h2>Certifications</h2>
    <p class="certs">${certs}</p>
  </section>
</body>
</html>`;

mkdirSync(resumeDir, { recursive: true });
writeFileSync(htmlPath, html);

const chrome =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const fileUrl = `file://${htmlPath}`;

try {
  execSync(
    `"${chrome}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${fileUrl}"`,
    { stdio: "inherit" }
  );
  console.log(`Resume PDF written to ${pdfPath}`);
} catch (err) {
  console.error("Chrome PDF generation failed. HTML saved at:", htmlPath);
  console.error(err.message);
  process.exit(1);
}
