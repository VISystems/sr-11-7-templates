import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { getTemplatePath, TEMPLATE_SECTIONS } from './templates.js';

export interface ScaffoldOptions {
  outputDir: string;
  modelName: string;
  modelVersion: string;
  businessUnit: string;
  modelOwner: string;
}

export async function scaffoldDocumentation(options: ScaffoldOptions): Promise<string[]> {
  await mkdir(options.outputDir, { recursive: true });
  const created: string[] = [];

  for (const section of TEMPLATE_SECTIONS) {
    const templatePath = getTemplatePath(section.id);
    let content: string;
    try {
      content = await readFile(templatePath, 'utf-8');
    } catch {
      content = `# ${section.name}\n\nTemplate not found. Create manually per SR 11-7 ${section.description}.\n`;
    }

    content = content
      .replace(/\{\{model_name\}\}/g, options.modelName)
      .replace(/\{\{model_version\}\}/g, options.modelVersion)
      .replace(/\{\{business_unit\}\}/g, options.businessUnit)
      .replace(/\{\{model_owner\}\}/g, options.modelOwner)
      .replace(/\{\{date\}\}/g, new Date().toISOString().split('T')[0]!);

    const outPath = join(options.outputDir, `${section.id}.md`);
    await writeFile(outPath, content, 'utf-8');
    created.push(outPath);
  }

  return created;
}
