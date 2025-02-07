
// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-18',
    devtools: {enabled: true},
    css: [
        '~/assets/css/main.css',
    ],
    vite: {
        plugins: [
            tailwindcss(),
        ]
    }
})
