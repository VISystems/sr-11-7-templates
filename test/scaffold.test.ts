import { describe, it, expect, afterAll } from 'vitest';
import { scaffoldDocumentation } from '../src/scaffold.js';
import { readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

const testDir = join(import.meta.dirname, 'scaffold-output');

afterAll(async () => { await rm(testDir, { recursive: true, force: true }); });

describe('scaffoldDocumentation', () => {
  it('creates 4 documentation files', async () => {
    const files = await scaffoldDocumentation({
      outputDir: testDir, modelName: 'TestBot', modelVersion: 'claude-sonnet-4-6',
      businessUnit: 'Engineering', modelOwner: 'Test Owner',
    });
    expect(files).toHaveLength(4);
  });

  it('replaces placeholders in output', async () => {
    const content = await readFile(join(testDir, 'model-inventory.md'), 'utf-8');
    expect(content).toContain('TestBot');
    expect(content).toContain('claude-sonnet-4-6');
    expect(content).toContain('Engineering');
    expect(content).toContain('Test Owner');
  });

  it('does not contain unreplaced model placeholders', async () => {
    const content = await readFile(join(testDir, 'model-inventory.md'), 'utf-8');
    expect(content).not.toContain('{{model_name}}');
    expect(content).not.toContain('{{model_version}}');
  });
});

describe('template provider-neutrality', () => {
  const templatesDir = join(import.meta.dirname, '..', 'templates');
  const hardcodedPatterns = [
    'Anthropic (Claude)',
    'Claude (Anthropic)',
    'New Claude model',
    'Claude version selection',
    'Anthropic model updates',
  ];

  it('contains no hardcoded provider names in any template', async () => {
    const { readdir } = await import('node:fs/promises');
    const sections = await readdir(templatesDir);
    for (const section of sections) {
      const templatePath = join(templatesDir, section, 'template.md');
      let content: string;
      try {
        content = await readFile(templatePath, 'utf-8');
      } catch {
        continue; // skip non-template directories
      }
      for (const pattern of hardcodedPatterns) {
        expect(content, `Found "${pattern}" in ${section}/template.md`).not.toContain(pattern);
      }
    }
  });
});
