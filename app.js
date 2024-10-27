const { createApp, ref } = Vue;

createApp({
  setup() {
    const likeGames = ref(null);
    const yearsPlaying = ref(0);
    const consoles = ref("");
    const gamesPlayed = ref("");
    const responses = ref([]);

    const handleAnswer = (answer) => {
      likeGames.value = answer;
      resetResponses();
    };

    const resetResponses = () => {
      yearsPlaying.value = 0;
      consoles.value = "";
      gamesPlayed.value = "";
      responses.value = [];
    };

    const registerGames = () => {
      if (gamesPlayed.value) {
        responses.value.push(` ${gamesPlayed.value}`);
        gamesPlayed.value = ""; // Limpiar el campo después de registrar
      }
    };

    return {
      likeGames,
      yearsPlaying,
      consoles,
      gamesPlayed,
      responses,
      handleAnswer,
      registerGames,
    };
  },
}).mount("#app");
