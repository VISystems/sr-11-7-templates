import { describe, it, expect } from 'vitest';
import { TEMPLATE_SECTIONS, getTemplatePath, listTemplates } from '../src/templates.js';

describe('templates', () => {
  it('has 4 template sections', () => {
    expect(TEMPLATE_SECTIONS).toHaveLength(4);
  });
  it('returns template paths', () => {
    const path = getTemplatePath('model-inventory');
    expect(path).toContain('model-inventory/template.md');
  });
  it('listTemplates returns all sections', () => {
    expect(listTemplates()).toEqual(TEMPLATE_SECTIONS);
  });
});
