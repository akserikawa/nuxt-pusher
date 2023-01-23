<template>
  <h1>Pusher Test</h1>
  <p>
    Publish an event to channel <code>my-channel</code> with event name
    <code>my-event</code>; it will appear below:
  </p>
  <ul>
    <div v-if="messages.length > 0">
      <li v-for="message in messages">
        {{ message }}
      </li>
    </div>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  created() {},
  mounted() {
    const channel = this.$pusher.subscribe("my-channel");
    channel.bind("my-event", (data) => {
      this.messages.push(JSON.stringify(data));
    });
  },
  beforeDestroy() {
    this.$pusher.unsubscribe("my-channel");
  },
};
</script>
