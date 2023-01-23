// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: { pusherAppKey: process.env.PUSHER_APP_KEY },
  },
});
