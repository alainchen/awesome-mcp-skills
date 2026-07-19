import { readEntries } from "./lib/simple-yaml.mjs";
import { duplicateNameErrors } from "./lib/validation.mjs";

const files = [
  "data/official-mcp-servers.yml",
  "data/agent-skills.yml",
  "data/china-vertical-apps.yml",
  "data/watchlist.yml",
];

const validScopes = new Set([
  "global",
  "mainland-china",
  "international",
  "mainland-china / international",
  "unknown",
]);

const validEvidence = new Set(["A", "B", "C", "D", "X"]);
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const errors = [];

for (const file of files) {
  const entries = readEntries(file);
  if (!entries.length) errors.push(`${file}: expected at least one entry`);

  entries.forEach((entry, index) => validateEntry(file, entry, index + 1));
  errors.push(...duplicateNameErrors(file, entries));
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log("Data validation passed.");

function validateEntry(file, entry, index) {
  const label = `${file} entry ${index}${entry.name ? ` (${entry.name})` : ""}`;

  requireFields(label, entry, ["name", "service_scope", "last_checked"]);

  if (entry.service_scope && !validScopes.has(entry.service_scope)) {
    errors.push(`${label}: invalid service_scope "${entry.service_scope}"`);
  }

  if (entry.last_checked && !datePattern.test(entry.last_checked)) {
    errors.push(`${label}: last_checked must use YYYY-MM-DD`);
  }

  if (file === "data/watchlist.yml") {
    requireFields(label, entry, ["status", "reason"]);
    return;
  }

  requireFields(label, entry, ["evidence_level"]);
  if (entry.evidence_level && !validEvidence.has(entry.evidence_level)) {
    errors.push(`${label}: invalid evidence_level "${entry.evidence_level}"`);
  }

  if (file === "data/official-mcp-servers.yml") {
    requireFields(label, entry, [
      "organization",
      "category",
      "role",
      "protocols",
      "official_links",
      "risk_tags",
    ]);
    rejectMainTableEvidence(label, entry);
  }

  if (file === "data/agent-skills.yml") {
    requireFields(label, entry, ["organization", "category", "skill_format", "official_links"]);
    rejectMainTableEvidence(label, entry);
  }

  if (file === "data/china-vertical-apps.yml") {
    requireFields(label, entry, [
      "owner",
      "vertical",
      "official_status",
      "mcp_status",
      "skill_status",
    ]);
    const linkCount =
      (entry.official_links?.length ?? 0) +
      (entry.supporting_links?.length ?? 0) +
      (entry.marketplace_links?.length ?? 0) +
      (entry.third_party_links?.length ?? 0);
    if (!linkCount && entry.evidence_level !== "X") {
      errors.push(`${label}: expected at least one evidence link`);
    }
  }
}

function rejectMainTableEvidence(label, entry) {
  if (entry.evidence_level === "D" || entry.evidence_level === "X") {
    errors.push(`${label}: D/X evidence belongs in watchlist or tracking data, not a main table`);
  }
}

function requireFields(label, entry, fields) {
  for (const field of fields) {
    const value = entry[field];
    const missing = Array.isArray(value) ? value.length === 0 : value === undefined || value === "";
    if (missing) errors.push(`${label}: missing ${field}`);
  }
}
