import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'main.ts',
      name: 'main',
      fileName: 'main',
    },
		watch: {
			include: './main.ts'
		}
  },
})
