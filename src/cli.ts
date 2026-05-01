import { defineCommand, runMain } from 'citty';
import { scaffoldDocumentation } from './scaffold.js';
import { TEMPLATE_SECTIONS } from './templates.js';

const scaffold = defineCommand({
  meta: { description: 'Scaffold a complete SR 11-7 documentation set' },
  args: {
    outputDir: { type: 'positional', description: 'Output directory for documentation', required: true },
    modelName: { type: 'string', description: 'Model name', required: true },
    modelVersion: { type: 'string', description: 'Claude model version', default: 'claude-sonnet-4-6' },
    businessUnit: { type: 'string', description: 'Business unit', default: 'Engineering' },
    modelOwner: { type: 'string', description: 'Model owner name', default: 'TBD' },
  },
  async run({ args }) {
    const files = await scaffoldDocumentation({
      outputDir: args.outputDir,
      modelName: args.modelName,
      modelVersion: args.modelVersion,
      businessUnit: args.businessUnit,
      modelOwner: args.modelOwner,
    });
    process.stdout.write(`Scaffolded ${files.length} SR 11-7 documents:\n`);
    for (const f of files) { process.stdout.write(`  ${f}\n`); }
  },
});

const list = defineCommand({
  meta: { description: 'List available SR 11-7 template sections' },
  args: {},
  async run() {
    for (const t of TEMPLATE_SECTIONS) {
      process.stdout.write(`  ${t.id.padEnd(22)} ${t.name}\n`);
      process.stdout.write(`  ${''.padEnd(22)} ${t.description}\n\n`);
    }
  },
});

const main = defineCommand({
  meta: { name: 'sr-11-7-scaffold', version: '0.1.0', description: 'SR 11-7 / OCC 2011-12 model risk documentation templates for Claude deployments' },
  subCommands: { scaffold, list },
});

runMain(main);
