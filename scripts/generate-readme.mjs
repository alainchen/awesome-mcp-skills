import { readEntries, readText, writeText } from "./lib/simple-yaml.mjs";

const check = process.argv.includes("--check");

const officialMcp = readEntries("data/official-mcp-servers.yml");
const agentSkills = readEntries("data/agent-skills.yml");

const outputs = [
  ["README.md", renderEnglish(officialMcp, agentSkills)],
  ["README.zh-CN.md", renderChinese(officialMcp, agentSkills)],
];

let changed = false;
for (const [file, content] of outputs) {
  const normalized = content.endsWith("\n") ? content : `${content}\n`;
  const existing = readText(file);
  if (existing !== normalized) {
    changed = true;
    if (check) {
      console.error(`${file} is out of date. Run npm run generate:readme.`);
    } else {
      writeText(file, normalized);
      console.log(`Wrote ${file}`);
    }
  }
}

if (check && changed) process.exit(1);
if (check && !changed) console.log("README files are up to date.");

function renderEnglish(mcpEntries, skillEntries) {
  return `# Awesome Official MCP Servers & Agent Skills

[English](README.md) | [简体中文](README.zh-CN.md)

A curated list of official MCP servers, MCP platforms, registries, and agent skill ecosystems.

This project is official-first. It tracks platform-backed agent capabilities: official MCP support, official MCP servers, registries, marketplaces, skills, \`SKILL.md\` ecosystems, and governance surfaces.

## Scope

- Official MCP servers and hosted MCP endpoints
- MCP platforms, registries, marketplaces, gateways, and governance tools
- Official Agent Skills, \`SKILL.md\` systems, skill marketplaces, and skill-like agent customization surfaces
- Global, mainland China, and international service editions, with evidence levels for every entry

## Evidence Levels

| Level | Meaning |
| --- | --- |
| A | Official docs plus official repo, endpoint, server, marketplace, or product page |
| B | Official docs or official repo only |
| C | Official marketplace or registry listing with a verifiable publisher |
| D | Media/community evidence only; keep in watchlist |
| X | Third-party only; not treated as official |

## Service Scope

\`Service Scope\` describes the service/API edition, not where the company is based. Keep it simple: use \`global\` for one worldwide surface, or join market labels with \`/\` when domestic and overseas editions both matter.

| Scope | Meaning |
| --- | --- |
| \`global\` | One global service/API surface |
| \`mainland-china\` | Mainland China edition or mainland-only docs/endpoints |
| \`international\` | Non-mainland or overseas edition |
| \`mainland-china / international\` | Both domestic and overseas editions are relevant; use \`editions\` for domains or account/API differences |

## Official MCP Servers And Platforms

${mcpTable(mcpEntries, "en")}

## Official Agent Skills And Customization

${skillsTable(skillEntries, "en")}

## Data

README tables are generated from structured data:

- [data/official-mcp-servers.yml](data/official-mcp-servers.yml)
- [data/agent-skills.yml](data/agent-skills.yml)
- [data/china-vertical-apps.yml](data/china-vertical-apps.yml)
- [data/watchlist.yml](data/watchlist.yml)

## Contributing

Pull requests are welcome. Please include official evidence links and an evidence level for every new entry. Third-party-only implementations should go to the watchlist, not the official tables.
`;
}

function renderChinese(mcpEntries, skillEntries) {
  return `# Awesome 官方 MCP Servers 与 Agent Skills

[English](README.md) | [简体中文](README.zh-CN.md)

一个 official-first 的 MCP Server、MCP 平台、注册表、市场与 Agent Skill 生态索引。

本项目重点跟踪平台背书的 Agent 能力：官方 MCP 支持、官方 MCP Server、注册表、市场、Skills、\`SKILL.md\` 生态与治理能力。

## 范围

- 官方 MCP Server 与托管 MCP 端点
- MCP 平台、注册表、市场、网关与治理工具
- 官方 Agent Skills、\`SKILL.md\` 系统、Skill 市场，以及类似 skill 的 Agent 自定义能力
- 全球服务、中国大陆版、海外版服务，并为每个条目标注证据等级

## 证据等级

| 等级 | 含义 |
| --- | --- |
| A | 官方文档加官方仓库、端点、Server、市场或产品页 |
| B | 只有官方文档或官方仓库 |
| C | 官方市场或注册表中可验证发布方的条目 |
| D | 只有媒体或社区证据；放入 watchlist |
| X | 仅第三方实现；不视为官方 |

## 服务范围

\`Service Scope\` 描述的是服务/API 版本，不是公司所在地。保持简单：单一全球服务写 \`global\`；同时涉及国内版和海外版时，用 \`/\` 连接市场标签。

| 范围 | 含义 |
| --- | --- |
| \`global\` | 单一全球服务/API 面 |
| \`mainland-china\` | 中国大陆版，或仅有大陆文档/端点 |
| \`international\` | 非大陆版或海外版 |
| \`mainland-china / international\` | 同时涉及国内版和海外版；域名、账号体系或 API host 差异放到 \`editions\` |

## 官方 MCP Servers 与平台

${mcpTable(mcpEntries, "zh")}

## 官方 Agent Skills 与自定义能力

${skillsTable(skillEntries, "zh")}

## 数据

README 表格由结构化数据生成：

- [data/official-mcp-servers.yml](data/official-mcp-servers.yml)
- [data/agent-skills.yml](data/agent-skills.yml)
- [data/china-vertical-apps.yml](data/china-vertical-apps.yml)
- [data/watchlist.yml](data/watchlist.yml)

## 贡献

欢迎提交 Pull Request。新增条目请提供官方证据链接和证据等级。只有第三方实现的项目应进入 watchlist，而不是官方主表。
`;
}

function mcpTable(entries, locale) {
  const header =
    locale === "zh"
      ? "| 名称 | 组织 | 服务范围 | 角色 | 证据 | 链接 |\n| --- | --- | --- | --- | --- | --- |"
      : "| Name | Organization | Service Scope | Role | Evidence | Links |\n| --- | --- | --- | --- | --- | --- |";

  return [
    header,
    ...entries.map((entry) =>
      [
        entry.name,
        entry.organization,
        code(entry.service_scope),
        summarizeRoles(entry.role ?? [], locale),
        entry.evidence_level,
        linkFor(entry),
      ].join(" | ")
    ).map((row) => `| ${row} |`),
  ].join("\n");
}

function skillsTable(entries, locale) {
  const header =
    locale === "zh"
      ? "| 名称 | 组织 | 服务范围 | Skill 形态 | 证据 | 链接 |\n| --- | --- | --- | --- | --- | --- |"
      : "| Name | Organization | Service Scope | Skill Format | Evidence | Links |\n| --- | --- | --- | --- | --- | --- |";

  return [
    header,
    ...entries.map((entry) =>
      [
        entry.name,
        entry.organization,
        code(entry.service_scope),
        skillFormats(entry.skill_format ?? []),
        entry.evidence_level,
        linkFor(entry),
      ].join(" | ")
    ).map((row) => `| ${row} |`),
  ].join("\n");
}

function summarizeRoles(roles, locale) {
  if (!roles.length) return "";
  const mapped = roles.map((role) => (locale === "zh" ? zhRole(role) : titleRole(role)));
  return mapped.join(", ");
}

function titleRole(role) {
  const exact = {
    cli: "CLI",
    docs: "docs",
  };
  if (exact[role]) return exact[role];
  return role.replace(/-/g, " ");
}

function zhRole(role) {
  const map = {
    "remote-server": "远程 Server",
    "local-server": "本地 Server",
    "api-exploration": "API 探索",
    "social-data": "社交数据",
    registry: "注册表",
    "client-integration": "客户端集成",
    "managed-remote-servers": "托管远程 Server",
    hosting: "托管",
    governance: "治理",
    "design-to-code": "设计到代码",
    "hosted-server": "托管 Server",
    "workspace-data": "工作区数据",
    "project-management": "项目管理",
    "workplace-data": "协作数据",
    deployment: "部署",
    payments: "支付",
    automation: "自动化",
    "integration-hub": "集成平台",
    "embeddable-mcp": "可嵌入 MCP",
    "enterprise-platform": "企业平台",
    runtime: "运行时",
    gateway: "网关",
    "server-wrapper": "Server wrapper",
    "official-catalog": "官方目录",
    "platform-tools": "平台工具",
    marketplace: "市场",
    "custom-mcp": "自定义 MCP",
    "official-services": "官方服务",
    "app-builder": "应用构建",
    "coding-agent": "编码 Agent",
    "mcp-tools": "MCP 工具",
    "plugin-marketplace": "插件市场",
    cloudbase: "CloudBase",
    "agent-platform": "Agent 平台",
    server: "Server",
    "multimodal-tools": "多模态工具",
    "api-mcp-calling": "API 级 MCP 调用",
    "mcp-server": "MCP Server",
    playground: "Playground",
    cli: "CLI",
    docs: "文档",
    "browser-automation": "浏览器自动化",
    testing: "测试",
    database: "数据库",
    postgres: "Postgres",
    "vector-search": "向量检索",
    observability: "可观测性",
    "issue-triage": "问题排查",
    monitoring: "监控",
    commerce: "商业",
    shopping: "购物",
    "api-development": "API 开发",
    "containerized-servers": "容器化 Server",
    "verified-catalog": "可信目录",
  };
  return map[role] ?? titleRole(role);
}

function linkFor(entry) {
  const url = entry.official_links?.[0] ?? entry.supporting_links?.[0] ?? "";
  if (!url) return "";
  let label = "Docs";
  if (url.includes("github.com/") && !url.includes("docs.github.com")) label = "Repo";
  if (url.includes("modelscope.cn/mcp")) label = "Marketplace";
  if (url.includes("postman.com")) label = "Directory";
  return `[${label}](${url})`;
}

function code(value) {
  return `\`${value}\``;
}

function skillFormats(values) {
  return values.map((value) => (value === "SKILL.md" ? code(value) : value)).join(", ");
}
