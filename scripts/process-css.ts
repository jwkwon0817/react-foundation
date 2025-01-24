import fs from 'fs';
import { glob } from 'glob';

async function matchCSSAssets(moduleSystem: string) {
  return await glob(`dist/${moduleSystem}/**/*.css`);
}

async function generateCSSFiles() {
  ['esm', 'cjs'].forEach(async (moduleSystem) => {
    const cssAssets = await matchCSSAssets(moduleSystem);
    const fileContent = cssAssets.map((cssAsset) => {
      const css = fs.readFileSync(cssAsset, 'utf-8');
      return css;
    });

    fs.writeFileSync(`dist/${moduleSystem}/styles.css`, fileContent.join('\n'));
  });
}

generateCSSFiles().catch((error) => {
  console.error(error);
});
