# PROTOCOL.md — 团队协作协议

## 团队成员
| 角色 | 代号 | 职责 |
|------|------|------|
| Orchestrator | main | 总指挥、路由、门禁、汇报 |
| PM | pm-agent | 产品规划、PRD撰写 |
| GUI | gui-agent | UI/UX设计、DESIGN.md |
| Dev | dev-agent | 代码实现、工程落地 |

## 工作流协议

### 流程图
```
PM Agent (PRD) 
    ↓ 评审通过
GUI Agent (DESIGN.md)
    ↓ 评审通过  
Dev Agent (CODE)
    ↓ Code Review
Orchestrator (最终验收)
```

### 任务状态流转
```
PENDING → IN_PROGRESS → REVIEW → APPROVED / REVISED → DONE
```

### Handoff 格式
每次Agent完成任务并交接时，消息必须包含：

```markdown
## 📋 交接报告
- **来自**: [Agent角色]
- **交付物**: [文件路径列表]
- **完成内容**: [做了什么]
- **验收方式**: [如何验证产出]
- **已知问题**: [遗留问题或不完整项]
- **下一步建议**: [下一个Agent应该关注什么]
```

## 共享目录约定
```
.team/shared/
├── specs/        ← PM和GUI的文档产出
│   ├── PRD.md
│   └── DESIGN.md
├── artifacts/    ← Dev的构建产物（如有）
└── reviews/      ← 评审记录
```

## 冲突解决机制
1. **PRD vs DESIGN 不一致** → Orchestrator裁决，以PRD功能为准调整设计
2. **DESIGN vs CODE 无法实现** → Dev提出替代方案，GUI确认
3. **进度阻塞超过10分钟** → 立即上报Orchestrator

## 沟通礼仪
- 所有交接通过 send_message 完成
- 问题反馈要具体（"XX文件的YY部分不符合ZZ要求"而非"有问题"）
- 不要静默失败，遇到block就上报

## ⚡ 用户审核机制（User Review Gate）【最高优先级】

**每个阶段完成后，必须由用户（Orchestrator）审核通过才能进入下一阶段。**

流程：
1. Agent 完成工作 → 通知 Orchestrator
2. Orchestrator 整理交付物摘要 + 关键决策点
3. **向用户展示交付物并等待用户明确确认** ✋
4. 用户批准 → 启动下一个 Agent
5. 用户要求修改 → 将反馈转达给当前 Agent 迭代

**严禁跳过用户审核直接推进下一阶段。**
