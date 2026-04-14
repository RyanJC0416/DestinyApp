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
