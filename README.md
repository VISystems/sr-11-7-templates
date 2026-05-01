# @visystems/sr-11-7-templates

SR 11-7 / OCC 2011-12 model risk documentation templates for Claude deployments in regulated financial services.

## What's Included

| Template | SR 11-7 Section | Description |
|----------|----------------|-------------|
| Model Inventory Register | §II | Model identification, architecture, data sources, dependencies |
| Model Risk Assessment | §III | Risk classification, identified risks, compensating controls |
| Model Validation Report | §IV | Conceptual soundness, eval results, process verification |
| Ongoing Monitoring Plan | §V | Performance metrics, review cadence, incident response |

## Quick Start

```bash
npm install -g @visystems/sr-11-7-templates

# Scaffold a complete documentation set
sr-11-7-scaffold scaffold ./compliance-docs \
  --model-name "Customer Support Agent" \
  --model-version claude-sonnet-4-6 \
  --business-unit "Customer Operations" \
  --model-owner "Jane Smith"

# List available templates
sr-11-7-scaffold list
```

## Claude-Specific Sections

These templates include Claude-specific risk factors and controls:
- **Hallucination / confabulation** risk with eval-based mitigation
- **Prompt injection** controls via permission boundaries
- **Version drift** monitoring via model-migration-kit integration
- **Token cost** budget controls and alerting
- **Eval-as-CI** gates for deployment governance

## Integration with VISystems Toolchain

- **claude-eval-runner** — Referenced in Validation Report for eval suite results
- **model-migration-kit** — Referenced in Ongoing Monitoring for version drift detection
- **eval-as-ci-action** — Referenced in Process Verification for CI governance

## License

Apache 2.0
