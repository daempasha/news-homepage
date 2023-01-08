import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import type { InlineConfig } from 'vitest';

const TestConfig: InlineConfig = {
  environment: "jsdom"
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: TestConfig,
  base: "/news-homepage/"
})
