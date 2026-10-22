import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

const config = [...nextCoreWebVitals, ...nextTypescript, prettierRecommended];

export default config;
