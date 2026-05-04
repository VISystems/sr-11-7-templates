---
title: "Model Validation Report"
regulation: "SR 11-7 / OCC 2011-12"
section: "Validation"
version: "1.0"
---

# Model Validation Report

## 1. Validation Scope

| Field | Value |
|-------|-------|
| Model Name | {{model_name}} |
| Model Version | {{model_version}} |
| Validation Date | {{validation_date}} |
| Validator | {{validator_name}} |
| Validation Type | {{validation_type}} |

## 2. Conceptual Soundness

### 2.1 Model Selection Rationale
{{model_selection_rationale}}

### 2.2 Architecture Appropriateness
- Task suitability for LLM: {{task_suitability}}
- Alternative approaches considered: {{alternatives}}
- {{model_family}} version selection rationale: {{version_rationale}}

## 3. Outcome Analysis

### 3.1 Eval Suite Results

| Eval Suite | Cases | Passed | Failed | Pass Rate |
|-----------|-------|--------|--------|-----------|
| {{suite_1}} | {{cases_1}} | {{passed_1}} | {{failed_1}} | {{rate_1}} |

### 3.2 Performance Benchmarks

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Accuracy (eval pass rate) | ≥{{target_accuracy}}% | {{actual_accuracy}}% | {{status_accuracy}} |
| Latency (p95) | ≤{{target_latency}}ms | {{actual_latency}}ms | {{status_latency}} |
| Cost per request | ≤${{target_cost}} | ${{actual_cost}} | {{status_cost}} |

### 3.3 Edge Case Testing
{{edge_case_results}}

## 4. Process Verification

- [ ] Eval suite covers all production use cases
- [ ] Eval-as-CI gate is active on production branch
- [ ] Prompt injection test cases included
- [ ] PII handling verified
- [ ] Error handling and fallback behavior tested
- [ ] Token budget and rate limiting configured
- [ ] Observability and logging in place
- [ ] Runbook documented

## 5. Limitations and Assumptions

{{limitations}}

## 6. Validation Conclusion

**Recommendation:** {{recommendation}}

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Validator | {{validator_name}} | | |
| Model Risk Officer | {{mro_name}} | | |
