import Pusher from "pusher-js";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const Vue3Pusher = {
    install: (app, options) => {
      app.config.globalProperties.$pusher = new Pusher(
        options.api_key,
        options.options
      );
    },
  };

  nuxtApp.vueApp.use(Vue3Pusher, {
    api_key: config.public.pusherAppKey,
    options: {
      cluster: "eu",
    },
  });
});
