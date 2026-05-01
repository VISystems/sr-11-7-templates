---
title: "Model Inventory Register"
regulation: "SR 11-7 / OCC 2011-12"
section: "Model Inventory"
version: "1.0"
---

# Model Inventory Register

## 1. Model Identification

| Field | Value |
|-------|-------|
| Model Name | {{model_name}} |
| Model ID | {{model_id}} |
| Model Provider | Anthropic (Claude) |
| Model Version | {{model_version}} |
| API Endpoint | {{api_endpoint}} |
| Deployment Date | {{deployment_date}} |
| Business Unit | {{business_unit}} |
| Model Owner | {{model_owner}} |
| Model Risk Tier | {{risk_tier}} |

## 2. Model Purpose and Use

**Business objective:** {{business_objective}}

**Decision type supported:** {{decision_type}}

**Materiality assessment:**
- Financial impact scope: {{financial_impact}}
- Regulatory exposure: {{regulatory_exposure}}
- Customer impact: {{customer_impact}}

## 3. Model Architecture

| Component | Details |
|-----------|---------|
| Model family | Claude (Anthropic) |
| Specific model | {{model_version}} |
| Context window | {{context_window}} tokens |
| Max output | {{max_output}} tokens |
| Temperature | {{temperature}} |
| System prompt | {{system_prompt_summary}} |
| Tools / MCP servers | {{tools_list}} |
| Retrieval / RAG | {{rag_description}} |

## 4. Input Data

| Data Source | Classification | Sensitivity |
|-------------|---------------|-------------|
| {{data_source_1}} | {{classification_1}} | {{sensitivity_1}} |

## 5. Output Characteristics

- Output type: {{output_type}}
- Post-processing: {{post_processing}}
- Human-in-the-loop: {{hitl_description}}

## 6. Dependencies and Integrations

| System | Integration Type | Criticality |
|--------|-----------------|-------------|
| {{system_1}} | {{integration_type_1}} | {{criticality_1}} |

## 7. Change Log

| Date | Version | Change Description | Approved By |
|------|---------|-------------------|-------------|
| {{date}} | 1.0 | Initial registration | {{approver}} |
