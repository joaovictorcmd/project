document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("#background-video");

  video.muted = true;
  video.loop = true;
  video.playsinline = true;
  video.autoplay = true;

  if (video) {
    video.play().catch((error) => {
      console.error(`Erro ao tentar iniciar o vídeo: ${error}`);
    });

    document.body.addEventListener("touchstart", () => {
      if (video.paused) {
        video.play().catch((error) => {
          console.error(
            `Erro ao tentar iniciar o vídeo após o toque: ${error}`
          );
        });
      }
    });
  }
});
