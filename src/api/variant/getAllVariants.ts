import { katanaVariant } from '.';
import path from 'path';
import { getDirname } from '../../utils/dirname';
import { Variant } from '../../types/variant';
import { writeFile } from 'fs/promises';

export default async function getAllVariants(
  page = 1,
  limit = 250,
  accumulatedVariants: Variant[] = []
): Promise<Variant[]> {
  const foundVariants = await katanaVariant.get({ limit, page });

  const allVariants = [...accumulatedVariants, ...foundVariants];

  if (foundVariants.length === limit) {
    return getAllVariants(page + 1, limit, allVariants);
  } else {
    const __dirname = getDirname(import.meta.url);
    const pathToFile = path.resolve(
      __dirname,
      '../../data/katanaVariantsList.json'
    );
    await writeFile(pathToFile, JSON.stringify(allVariants, null, 2), 'utf-8');
    return allVariants;
  }
}
