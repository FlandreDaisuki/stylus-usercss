import { defineConfig } from 'eslint/config';
import flandre from '@flandredaisuki/eslint-config';

export default defineConfig([
  ...flandre.javascript,
  ...flandre.stylistic,
  ...flandre.jsonc,
  ...flandre.sort,
]);
