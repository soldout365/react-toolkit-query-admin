import js from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		ignores: ['dist', 'vite.config.ts', 'vite.config.js'],
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			'prettier/prettier': [
				'warn',
				{
					arrowParens: 'always',
					semi: false,
					trailingComma: 'none',
					tabWidth: 2,
					endOfLine: 'auto',
					useTabs: false,
					singleQuote: true,
					printWidth: 120,
					jsxSingleQuote: true,
				},
			],
		},
	},
]);
