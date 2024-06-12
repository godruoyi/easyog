import path from 'node:path'
import { defineConfig } from 'wxt'
import react from '@vitejs/plugin-react'

export default defineConfig({
    srcDir: 'src',
    entrypointsDir: 'entrypoints',
    publicDir: path.resolve('public'),
    vite: () => ({
        plugins: [react()],
    }),
    manifest: {
        action: {
            default_icon: 'icon/48.png',
            default_title: 'Easy',
        },
        permissions: ['tabs', 'contextMenus', 'nativeMessaging'],
    },
})
