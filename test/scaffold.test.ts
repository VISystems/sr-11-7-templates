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
