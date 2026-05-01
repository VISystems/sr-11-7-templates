---
title: "Ongoing Monitoring Plan"
regulation: "SR 11-7 / OCC 2011-12"
section: "Ongoing Monitoring"
version: "1.0"
---

# Ongoing Monitoring Plan

## 1. Monitoring Scope

| Field | Value |
|-------|-------|
| Model Name | {{model_name}} |
| Monitoring Start Date | {{start_date}} |
| Review Frequency | {{review_frequency}} |
| Responsible Team | {{responsible_team}} |

## 2. Performance Monitoring

### 2.1 Automated Monitoring

| Metric | Threshold | Alert Channel | Frequency |
|--------|-----------|--------------|-----------|
| Eval pass rate | <{{pass_rate_threshold}}% | {{alert_channel}} | Per-deployment |
| Latency p95 | >{{latency_threshold}}ms | {{alert_channel}} | Real-time |
| Error rate | >{{error_threshold}}% | {{alert_channel}} | Real-time |
| Token cost/day | >${{cost_threshold}} | {{alert_channel}} | Daily |
| Cache hit rate | <{{cache_threshold}}% | {{alert_channel}} | Daily |

### 2.2 Model Version Monitoring

| Trigger | Action | SLA |
|---------|--------|-----|
| New Claude model release | Automated migration diff via model-migration-kit | 48h analysis |
| Regression detected | PMO ticket auto-created, engineering review | 5 BD triage |
| Pass-to-fail threshold breached | Immediate alert, deployment hold | Same BD |

## 3. Periodic Review

### 3.1 Quarterly Review Checklist

- [ ] Eval suite pass rates trended and analyzed
- [ ] Cost trends reviewed against budget
- [ ] Latency distribution reviewed
- [ ] New Claude model version assessed
- [ ] Prompt effectiveness reviewed
- [ ] Incident log reviewed
- [ ] Compensating control effectiveness assessed
- [ ] Risk assessment updated if material changes

### 3.2 Annual Re-Validation

- [ ] Full re-validation per Validation Report template
- [ ] Risk tier reassessment
- [ ] Model inventory register updated
- [ ] Regulatory guidance changes incorporated

## 4. Incident Response

| Severity | Definition | Response SLA | Escalation |
|----------|-----------|-------------|------------|
| P1 — Critical | Model producing harmful/incorrect outputs in production | 1 hour | Model Owner + Risk Manager |
| P2 — High | Eval pass rate drops below threshold | 4 hours | Model Owner |
| P3 — Medium | Latency or cost threshold breached | 1 BD | Engineering team |
| P4 — Low | Non-critical behavioral change detected | 5 BD | Quarterly review |

## 5. Documentation Requirements

| Document | Update Trigger | Owner |
|----------|---------------|-------|
| Model Inventory Register | Any model change | Model Owner |
| Risk Assessment | Material risk change | Risk Manager |
| Validation Report | Re-validation event | Validator |
| This Monitoring Plan | Annual review | Model Owner |
