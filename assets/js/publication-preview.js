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
    const periodical = publication?.querySelector("[id] .periodical");

    if (venueBadge && periodical) {
      const yearText = Array.from(periodical.childNodes).find(
        (node) => node.nodeType === Node.TEXT_NODE && /,\s*\d{4}/.test(node.textContent),
      );

      venueBadge.classList.add("publication-venue-inline");
      if (yearText) {
        periodical.insertBefore(document.createTextNode(" "), yearText);
        periodical.insertBefore(venueBadge, yearText);
      } else {
        periodical.appendChild(document.createTextNode(" "));
        periodical.appendChild(venueBadge);
      }
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
