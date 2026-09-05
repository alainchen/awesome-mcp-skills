# Awesome 官方 MCP Servers 与 Agent Skills

[English](README.md) | [简体中文](README.zh-CN.md)

一个 official-first 的 MCP Server、MCP 平台、注册表、市场与 Agent Skill 生态索引。

本项目重点跟踪平台背书的 Agent 能力：官方 MCP 支持、官方 MCP Server、注册表、市场、Skills、`SKILL.md` 生态与治理能力。

## 范围

- 官方 MCP Server 与托管 MCP 端点
- MCP 平台、注册表、市场、网关与治理工具
- 官方 Agent Skills、`SKILL.md` 系统、Skill 市场，以及类似 skill 的 Agent 自定义能力
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

`Service Scope` 描述的是服务/API 版本，不是公司所在地。保持简单：单一全球服务写 `global`；同时涉及国内版和海外版时，用 `/` 连接市场标签。

| 范围 | 含义 |
| --- | --- |
| `global` | 单一全球服务/API 面 |
| `mainland-china` | 中国大陆版，或仅有大陆文档/端点 |
| `international` | 非大陆版或海外版 |
| `mainland-china / international` | 同时涉及国内版和海外版；域名、账号体系或 API host 差异放到 `editions` |

## 官方 MCP Servers 与平台

| 名称 | 组织 | 服务范围 | 角色 | 证据 | 链接 |
| --- | --- | --- | --- | --- | --- |
| GitHub MCP Server | GitHub | `global` | 远程 Server, 本地 Server, 注册表, 客户端集成 | A | [Docs](https://docs.github.com/en/copilot/concepts/about-mcp) |
| OpenAI Docs MCP | OpenAI | `global` | 远程 Server, 文档 | A | [Docs](https://platform.openai.com/docs/docs-mcp) |
| Cloudflare MCP Servers | Cloudflare | `global` | 托管远程 Server, 托管, 治理 | A | [Docs](https://developers.cloudflare.com/agents/model-context-protocol/) |
| Figma Dev Mode MCP | Figma | `global` | 设计到代码, 本地 Server | A | [Docs](https://developers.figma.com/docs/figma-mcp-server/) |
| Notion MCP | Notion | `global` | 托管 Server, 工作区数据 | A | [Docs](https://developers.notion.com/guides/mcp/overview) |
| Linear MCP | Linear | `global` | 远程 Server, 项目管理 | A | [Docs](https://linear.app/docs/mcp) |
| Atlassian Rovo MCP | Atlassian | `global` | 远程 Server, 协作数据 | A | [Docs](https://support.atlassian.com/rovo/docs/atlassian-remote-mcp-server/) |
| Vercel MCP | Vercel | `global` | 远程 Server, 托管, 部署 | A | [Docs](https://vercel.com/docs/mcp/vercel-mcp/) |
| Stripe MCP | Stripe | `global` | 远程 Server, 支付 | A | [Docs](https://docs.stripe.com/mcp) |
| Zapier MCP | Zapier | `global` | 自动化, 集成平台, 可嵌入 MCP | A | [Docs](https://docs.zapier.com/mcp/home) |
| Salesforce MCP Solutions | Salesforce | `global` | 托管 Server, 本地 Server, 企业平台 | A | [Docs](https://developer.salesforce.com/docs/ai/agentforce/guide/mcp.html) |
| AWS Bedrock AgentCore MCP | AWS | `global` | 运行时, 网关, 托管 Server | A | [Docs](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-mcp.html) |
| Google ADK / Gemini CLI MCP | Google | `global` | 客户端集成, Server wrapper, 官方目录 | A | [Docs](https://google.github.io/adk-docs/tools-custom/mcp-tools/) |
| Azure AI Foundry MCP | Microsoft | `global` | 托管 Server, 平台工具 | A | [Docs](https://learn.microsoft.com/en-us/azure/ai-foundry/mcp/get-started?view=foundry) |
| Alibaba Cloud Model Studio MCP | Alibaba Cloud | `mainland-china` | 市场, 自定义 MCP, 官方服务 | A | [Docs](https://help.aliyun.com/zh/model-studio/mcp-introduction) |
| ModelScope MCP Marketplace | ModelScope | `mainland-china` | 市场, benchmark | A | [Marketplace](https://modelscope.cn/mcp) |
| Baidu Qianfan / Comate MCP | Baidu | `mainland-china` | 应用构建, 编码 Agent, MCP 工具 | A | [Docs](https://cloud.baidu.com/doc/AI_REFERENCE/s/Dm9qfl477) |
| Tencent Yuanqi / CloudBase MCP | Tencent | `mainland-china` | 插件市场, CloudBase, 编码 Agent | A | [Docs](https://yuanqi.tencent.com/guide/plugin-market-integrate-mcp-plugin) |
| Huawei AgentArts MCP | Huawei Cloud | `mainland-china` | 市场, 自定义 MCP, Agent 平台 | A | [Docs](https://www.huaweicloud.com/product/agentarts.html) |
| MiniMax MCP | MiniMax | `mainland-china / international` | Server, 多模态工具 | A | [Docs](https://platform.minimax.io/docs/guides/mcp-guide) |
| Z.ai MCP Calling | Z.ai | `mainland-china / international` | API 级 MCP 调用, MCP Server | A | [Docs](https://docs.z.ai/guides/capabilities/mcp-call) |
| Kimi Playground MCP | Moonshot AI | `mainland-china` | 客户端集成, Playground, CLI | B | [Docs](https://platform.kimi.ai/docs/guide/configure-the-modelscope-mcp-server) |
| Docker MCP Catalog and Toolkit | Docker | `global` | 可信目录, 容器化 Server, 网关, 客户端集成 | A | [Docs](https://docs.docker.com/ai/mcp-catalog-and-toolkit/) |
| Playwright MCP | Microsoft / Playwright | `global` | 浏览器自动化, 本地 Server, 测试 | A | [Docs](https://playwright.dev/docs/getting-started-mcp) |
| Agent QA MCP Server | Vostride AI | `global` | 本地 Server, 测试, 浏览器自动化, mobile testing, run triage | A | [Docs](https://vostride.com/docs/agent-qa/mcp) |
| Browserbase MCP Server | Browserbase | `global` | 托管 Server, 本地 Server, 浏览器自动化 | A | [Docs](https://docs.browserbase.com/integrations/mcp/introduction) |
| Supabase MCP | Supabase | `global` | 托管 Server, 数据库, Postgres, 文档 | A | [Docs](https://supabase.com/docs/guides/ai-tools/mcp) |
| MongoDB MCP Server | MongoDB | `global` | 数据库, 本地 Server, 客户端集成 | A | [Docs](https://www.mongodb.com/docs/mcp-server/) |
| Neon MCP Server | Neon | `global` | 托管 Server, 数据库, Postgres | A | [Docs](https://neon.com/docs/ai/neon-mcp-server) |
| Redis MCP | Redis | `global` | 数据库, 本地 Server, 向量检索 | A | [Docs](https://redis.io/docs/latest/integrate/redis-mcp/) |
| Shopify MCP Servers | Shopify | `global` | 商业, 购物, API 开发, 托管 Server, 本地 Server | A | [Docs](https://shopify.dev/docs/apps/build/ai-toolkit) |
| Postman Official MCP Server List | Postman | `global` | 官方目录, API 开发 | A | [Directory](https://www.postman.com/getmcp/official-mcp-server-list/overview) |
| Sentry MCP Server and Monitoring | Sentry | `global` | 远程 Server, 可观测性, 问题排查, 监控 | A | [Docs](https://docs.sentry.io/product/sentry-mcp/) |

## 官方 Agent Skills 与自定义能力

| 名称 | 组织 | 服务范围 | Skill 形态 | 证据 | 链接 |
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

## 数据

README 表格由结构化数据生成：

- [data/official-mcp-servers.yml](data/official-mcp-servers.yml)
- [data/agent-skills.yml](data/agent-skills.yml)
- [data/china-vertical-apps.yml](data/china-vertical-apps.yml)
- [data/watchlist.yml](data/watchlist.yml)

## 贡献

欢迎提交 Pull Request。新增条目请提供官方证据链接和证据等级。只有第三方实现的项目应进入 watchlist，而不是官方主表。
