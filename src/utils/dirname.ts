import path from 'path';
import { fileURLToPath } from 'url';

export function getDirname(importMetaUrl: string) {
  return path.dirname(fileURLToPath(importMetaUrl));
}
