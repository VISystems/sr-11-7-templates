import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = join(fileURLToPath(import.meta.url), '..');
const TEMPLATES_DIR = join(__dirname, '..', 'templates');

export const TEMPLATE_SECTIONS = [
  { id: 'model-inventory', name: 'Model Inventory Register', description: 'SR 11-7 §II — Model identification, architecture, data, dependencies' },
  { id: 'risk-assessment', name: 'Model Risk Assessment', description: 'SR 11-7 §III — Risk classification, identified risks, compensating controls' },
  { id: 'validation', name: 'Model Validation Report', description: 'SR 11-7 §IV — Conceptual soundness, outcome analysis, process verification' },
  { id: 'ongoing-monitoring', name: 'Ongoing Monitoring Plan', description: 'SR 11-7 §V — Performance monitoring, periodic review, incident response' },
] as const;

export function getTemplatePath(sectionId: string): string {
  return join(TEMPLATES_DIR, sectionId, 'template.md');
}

export function listTemplates(): typeof TEMPLATE_SECTIONS {
  return TEMPLATE_SECTIONS;
}
