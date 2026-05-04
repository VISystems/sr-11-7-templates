---
title: "Model Risk Assessment"
regulation: "SR 11-7 / OCC 2011-12"
section: "Risk Assessment"
version: "1.0"
---

# Model Risk Assessment

## 1. Risk Classification

| Criterion | Assessment | Score (1-5) |
|-----------|-----------|-------------|
| Financial materiality | {{financial_materiality}} | {{score_financial}} |
| Regulatory sensitivity | {{regulatory_sensitivity}} | {{score_regulatory}} |
| Operational complexity | {{operational_complexity}} | {{score_complexity}} |
| Data sensitivity | {{data_sensitivity}} | {{score_data}} |
| Model opacity | High (LLM) | 5 |
| **Overall risk tier** | **{{overall_tier}}** | **{{overall_score}}** |

## 2. Identified Risks

### 2.1 Model Risk
- **Hallucination / confabulation:** LLMs may generate plausible but incorrect outputs. Mitigation: {{hallucination_mitigation}}
- **Prompt injection:** Adversarial inputs may alter model behavior. Mitigation: {{injection_mitigation}}
- **Version drift:** {{model_provider}} model updates may change behavior. Mitigation: {{drift_mitigation}}

### 2.2 Data Risk
- **PII exposure:** {{pii_risk}}
- **Training data contamination:** {{contamination_risk}}
- **Input validation:** {{input_validation}}

### 2.3 Operational Risk
- **Availability dependency:** Single-provider API dependency. Mitigation: {{availability_mitigation}}
- **Cost overrun:** Token-based pricing may spike. Mitigation: {{cost_mitigation}}
- **Latency variance:** API response times may vary. Mitigation: {{latency_mitigation}}

## 3. Compensating Controls

| Risk | Control | Control Type | Frequency |
|------|---------|-------------|-----------|
| Hallucination | Eval suite regression testing | Detective | Per-deployment |
| Version drift | Automated migration diff analysis | Detective | Per-model-release |
| Prompt injection | Input sanitization + permission boundaries | Preventive | Real-time |
| Cost overrun | Token budget alerts + model-tier routing | Preventive | Real-time |
| Behavioral regression | Eval-as-CI gate on PR merge | Preventive | Per-PR |

## 4. Residual Risk Assessment

After compensating controls, residual risk level: **{{residual_risk}}**

## 5. Risk Acceptance

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Model Owner | {{model_owner}} | | |
| Risk Manager | {{risk_manager}} | | |
| Line of Business Head | {{lob_head}} | | |
