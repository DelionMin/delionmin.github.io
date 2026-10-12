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

    const publication = video.closest("li");
    const venueBadge = publication?.querySelector(".abbr > abbr");
    const venueName = publication?.querySelector("[id] .periodical em");

    if (venueBadge && venueName) {
      const abbreviation = document.createElement("strong");
      abbreviation.className = "publication-venue-name";
      abbreviation.textContent = ` (${venueBadge.textContent.trim()})`;
      venueName.appendChild(abbreviation);
    }
  });

  document.querySelectorAll('.publications a[href="https://cvlab-uos.github.io/ViewSplat/"]').forEach((link) => {
    link.textContent = "Project";

    const codeLink = link.parentElement.querySelector('a[href="https://github.com/cvlab-uos/ViewSplat"]');
    if (codeLink) {
      link.parentElement.insertBefore(link, codeLink);
    }
  });
});
