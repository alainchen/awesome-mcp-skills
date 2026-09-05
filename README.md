# Awesome Official MCP Servers & Agent Skills

[English](README.md) | [简体中文](README.zh-CN.md)

A curated list of official MCP servers, MCP platforms, registries, and agent skill ecosystems.

This project is official-first. It tracks platform-backed agent capabilities: official MCP support, official MCP servers, registries, marketplaces, skills, `SKILL.md` ecosystems, and governance surfaces.

## Scope

- Official MCP servers and hosted MCP endpoints
- MCP platforms, registries, marketplaces, gateways, and governance tools
- Official Agent Skills, `SKILL.md` systems, skill marketplaces, and skill-like agent customization surfaces
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

`Service Scope` describes the service/API edition, not where the company is based. Keep it simple: use `global` for one worldwide surface, or join market labels with `/` when domestic and overseas editions both matter.

| Scope | Meaning |
| --- | --- |
| `global` | One global service/API surface |
| `mainland-china` | Mainland China edition or mainland-only docs/endpoints |
| `international` | Non-mainland or overseas edition |
| `mainland-china / international` | Both domestic and overseas editions are relevant; use `editions` for domains or account/API differences |

## Official MCP Servers And Platforms

| Name | Organization | Service Scope | Role | Evidence | Links |
| --- | --- | --- | --- | --- | --- |
| GitHub MCP Server | GitHub | `global` | remote server, local server, registry, client integration | A | [Docs](https://docs.github.com/en/copilot/concepts/about-mcp) |
| OpenAI Docs MCP | OpenAI | `global` | remote server, docs | A | [Docs](https://platform.openai.com/docs/docs-mcp) |
| Cloudflare MCP Servers | Cloudflare | `global` | managed remote servers, hosting, governance | A | [Docs](https://developers.cloudflare.com/agents/model-context-protocol/) |
| Figma Dev Mode MCP | Figma | `global` | design to code, local server | A | [Docs](https://developers.figma.com/docs/figma-mcp-server/) |
| Notion MCP | Notion | `global` | hosted server, workspace data | A | [Docs](https://developers.notion.com/guides/mcp/overview) |
| Linear MCP | Linear | `global` | remote server, project management | A | [Docs](https://linear.app/docs/mcp) |
| Atlassian Rovo MCP | Atlassian | `global` | remote server, workplace data | A | [Docs](https://support.atlassian.com/rovo/docs/atlassian-remote-mcp-server/) |
| Vercel MCP | Vercel | `global` | remote server, hosting, deployment | A | [Docs](https://vercel.com/docs/mcp/vercel-mcp/) |
| Stripe MCP | Stripe | `global` | remote server, payments | A | [Docs](https://docs.stripe.com/mcp) |
| Zapier MCP | Zapier | `global` | automation, integration hub, embeddable mcp | A | [Docs](https://docs.zapier.com/mcp/home) |
| Salesforce MCP Solutions | Salesforce | `global` | hosted server, local server, enterprise platform | A | [Docs](https://developer.salesforce.com/docs/ai/agentforce/guide/mcp.html) |
| AWS Bedrock AgentCore MCP | AWS | `global` | runtime, gateway, hosted server | A | [Docs](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-mcp.html) |
| Google ADK / Gemini CLI MCP | Google | `global` | client integration, server wrapper, official catalog | A | [Docs](https://google.github.io/adk-docs/tools-custom/mcp-tools/) |
| Azure AI Foundry MCP | Microsoft | `global` | hosted server, platform tools | A | [Docs](https://learn.microsoft.com/en-us/azure/ai-foundry/mcp/get-started?view=foundry) |
| Alibaba Cloud Model Studio MCP | Alibaba Cloud | `mainland-china` | marketplace, custom mcp, official services | A | [Docs](https://help.aliyun.com/zh/model-studio/mcp-introduction) |
| ModelScope MCP Marketplace | ModelScope | `mainland-china` | marketplace, benchmark | A | [Marketplace](https://modelscope.cn/mcp) |
| Baidu Qianfan / Comate MCP | Baidu | `mainland-china` | app builder, coding agent, mcp tools | A | [Docs](https://cloud.baidu.com/doc/AI_REFERENCE/s/Dm9qfl477) |
| Tencent Yuanqi / CloudBase MCP | Tencent | `mainland-china` | plugin marketplace, cloudbase, coding agent | A | [Docs](https://yuanqi.tencent.com/guide/plugin-market-integrate-mcp-plugin) |
| Huawei AgentArts MCP | Huawei Cloud | `mainland-china` | marketplace, custom mcp, agent platform | A | [Docs](https://www.huaweicloud.com/product/agentarts.html) |
| MiniMax MCP | MiniMax | `mainland-china / international` | server, multimodal tools | A | [Docs](https://platform.minimax.io/docs/guides/mcp-guide) |
| Z.ai MCP Calling | Z.ai | `mainland-china / international` | api mcp calling, mcp server | A | [Docs](https://docs.z.ai/guides/capabilities/mcp-call) |
| Kimi Playground MCP | Moonshot AI | `mainland-china` | client integration, playground, CLI | B | [Docs](https://platform.kimi.ai/docs/guide/configure-the-modelscope-mcp-server) |
| Docker MCP Catalog and Toolkit | Docker | `global` | verified catalog, containerized servers, gateway, client integration | A | [Docs](https://docs.docker.com/ai/mcp-catalog-and-toolkit/) |
| Playwright MCP | Microsoft / Playwright | `global` | browser automation, local server, testing | A | [Docs](https://playwright.dev/docs/getting-started-mcp) |
| Agent QA MCP Server | Vostride AI | `global` | local server, testing, browser automation, mobile testing, run triage | A | [Docs](https://vostride.com/docs/agent-qa/mcp) |
| Browserbase MCP Server | Browserbase | `global` | hosted server, local server, browser automation | A | [Docs](https://docs.browserbase.com/integrations/mcp/introduction) |
| Supabase MCP | Supabase | `global` | hosted server, database, postgres, docs | A | [Docs](https://supabase.com/docs/guides/ai-tools/mcp) |
| MongoDB MCP Server | MongoDB | `global` | database, local server, client integration | A | [Docs](https://www.mongodb.com/docs/mcp-server/) |
| Neon MCP Server | Neon | `global` | hosted server, database, postgres | A | [Docs](https://neon.com/docs/ai/neon-mcp-server) |
| Redis MCP | Redis | `global` | database, local server, vector search | A | [Docs](https://redis.io/docs/latest/integrate/redis-mcp/) |
| Shopify MCP Servers | Shopify | `global` | commerce, shopping, api development, hosted server, local server | A | [Docs](https://shopify.dev/docs/apps/build/ai-toolkit) |
| Postman Official MCP Server List | Postman | `global` | official catalog, api development | A | [Directory](https://www.postman.com/getmcp/official-mcp-server-list/overview) |
| Sentry MCP Server and Monitoring | Sentry | `global` | remote server, observability, issue triage, monitoring | A | [Docs](https://docs.sentry.io/product/sentry-mcp/) |

## Official Agent Skills And Customization

| Name | Organization | Service Scope | Skill Format | Evidence | Links |
| --- | --- | --- | --- | --- | --- |
| Anthropic Agent Skills | Anthropic | `global` | `SKILL.md` | A | [Docs](https://docs.claude.com/en/docs/agents-and-tools/agent-skills) |
| Claude Code Skills | Anthropic | `global` | `SKILL.md` | A | [Docs](https://docs.claude.com/en/docs/claude-code/skills) |
| OpenAI / Codex Skills | OpenAI | `global` | `SKILL.md` | A | [Repo](https://github.com/openai/skills) |
| Windsurf Cascade Skills | Windsurf | `global` | `SKILL.md` | A | [Docs](https://docs.windsurf.com/windsurf/cascade/skills) |
| Salesforce Agentforce Skills | Salesforce | `global` | agentforce-skills, abilities | A | [Docs](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/mdexperts.html) |
| MiniMax Skills | MiniMax | `mainland-china / international` | `SKILL.md` | A | [Repo](https://github.com/MiniMax-AI/skills) |
| Huawei AgentArts Skill | Huawei Cloud | `mainland-china` | platform-skill | A | [Docs](https://www.huaweicloud.com/product/agentarts.html) |
| Coze Skills | Coze | `mainland-china / international` | platform-skill | B | [Docs](https://www.coze.cn/overview) |
| DiDi Skills | DiDi | `mainland-china` | mcp-backed-skill | B | [Docs](https://mcp.didichuxing.com/claw) |
| Sentry Agent Skills | Sentry | `global` | dotagents, npx-skills | A | [Docs](https://docs.sentry.io/platforms/javascript/guides/cloudflare/tracing/instrumentation/ai-agents-module/) |
| GitHub Copilot Custom Instructions | GitHub / Microsoft | `global` | copilot-instructions.md, instructions.md, prompt.md, chatmode.md, AGENTS.md | A | [Docs](https://docs.github.com/en/copilot/concepts/prompting/response-customization) |
| Devin Skills | Cognition | `global` | `SKILL.md`, playbooks | A | [Docs](https://docs.devin.ai/product-guides/skills) |
| Manus Skills | Manus | `global` | manus-skill, skill-upload, official-skill-library | A | [Docs](https://manus.im/docs/features/skills) |
| Cline Skills | Cline | `global` | `SKILL.md`, rules, workflows | A | [Docs](https://docs.cline.bot/customization/skills) |
| Cursor Rules | Anysphere / Cursor | `global` | .cursor/rules, .cursorrules | A | [Docs](https://docs.cursor.com/en/context/rules) |
| Continue Rules and Checks | Continue | `global` | .continue/rules, .continue/checks, .agents/checks | A | [Docs](https://docs.continue.dev/customize/rules) |
| OpenHands Microagents | OpenHands | `global` | AGENTS.md, microagents, .openhands/microagents | A | [Docs](https://docs.openhands.dev/overview/skills/repo) |
| JetBrains Junie Guidelines | JetBrains | `global` | .junie/AGENTS.md, AGENTS.md, guidelines.md | A | [Docs](https://www.jetbrains.com/help/ai-assistant/junie-agent.html) |
| Gemini CLI Context Files | Google | `global` | GEMINI.md, memory, context-imports | A | [Docs](https://google-gemini.github.io/gemini-cli/docs/cli/gemini-md.html) |
| Warp Agent Rules | Warp | `global` | AGENTS.md, WARP.md, global-rules, project-rules | A | [Docs](https://docs.warp.dev/agent-platform/capabilities/rules) |
| Zed Agent Rules | Zed | `global` | .rules, AGENTS.md, CLAUDE.md, GEMINI.md, rules-library | A | [Docs](https://zed.dev/docs/ai/rules) |
| WeChat Read Skill | Tencent / WeChat Read | `mainland-china` | downloadable-skill-zip, api-key | A | [Docs](https://weread.qq.com/r/weread-skills) |

## Data

README tables are generated from structured data:

- [data/official-mcp-servers.yml](data/official-mcp-servers.yml)
- [data/agent-skills.yml](data/agent-skills.yml)
- [data/china-vertical-apps.yml](data/china-vertical-apps.yml)
- [data/watchlist.yml](data/watchlist.yml)

## Contributing

Pull requests are welcome. Please include official evidence links and an evidence level for every new entry. Third-party-only implementations should go to the watchlist, not the official tables.
