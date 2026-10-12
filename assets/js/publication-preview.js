document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.publications video.preview[src$="viewsplat-preview.mp4"]').forEach((video) => {
    video.autoplay = true;
    video.defaultMuted = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    video.play().catch(() => {
      // The controls remain available if a browser blocks autoplay.
    });
  });
});
