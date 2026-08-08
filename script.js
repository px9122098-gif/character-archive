const portals = document.querySelectorAll("[data-portal]");
const supportsPointerMotion = window.matchMedia("(hover: hover) and (pointer: fine)");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function updateDepth(event) {
  if (!supportsPointerMotion.matches || prefersReducedMotion.matches) return;

  const portal = event.currentTarget;
  const bounds = portal.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;

  portal.style.setProperty("--scene-x", `${x * -12}px`);
  portal.style.setProperty("--scene-y", `${y * -8}px`);
  portal.style.setProperty("--figure-x", `${x * 18}px`);
  portal.style.setProperty("--figure-y", `${y * 10}px`);
}

function resetDepth(event) {
  const portal = event.currentTarget;
  portal.style.setProperty("--scene-x", "0px");
  portal.style.setProperty("--scene-y", "0px");
  portal.style.setProperty("--figure-x", "0px");
  portal.style.setProperty("--figure-y", "0px");
}

portals.forEach((portal) => {
  portal.addEventListener("pointermove", updateDepth);
  portal.addEventListener("pointerleave", resetDepth);
});
