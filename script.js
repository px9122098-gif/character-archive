const archive = document.querySelector("#archive");
const template = document.querySelector("#portal-template");
const counter = document.querySelector("[data-archive-counter]");
const characters = Array.isArray(window.CHARACTER_ARCHIVES) ? window.CHARACTER_ARCHIVES : [];
const supportsPointerMotion = window.matchMedia("(hover: hover) and (pointer: fine)");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function createPortal(character) {
  const fragment = template.content.cloneNode(true);
  const portal = fragment.querySelector(".portal");
  const scene = fragment.querySelector(".portal__scene");
  const figure = fragment.querySelector(".portal__figure");

  portal.href = character.href;
  portal.classList.add(`portal--${character.slug}`);
  portal.dataset.portal = character.slug;
  portal.style.setProperty("--accent", character.accent);
  portal.style.setProperty("--accent-soft", character.accentSoft);

  scene.style.backgroundImage = `url("${character.scene}")`;
  scene.style.backgroundPosition = character.scenePosition || "center";
  figure.src = character.figure;
  figure.style.objectPosition = character.figurePosition || "bottom right";

  fragment.querySelector(".portal__number").textContent = character.number;
  fragment.querySelector(".portal__eyebrow").textContent = character.universe;
  fragment.querySelector(".portal__name").textContent = character.firstName;
  fragment.querySelector(".portal__surname").textContent = character.lastName;
  fragment.querySelector(".portal__description").textContent = character.description;
  fragment.querySelector(".sr-only").textContent = `Open the ${character.firstName} ${character.lastName} archive`;

  portal.addEventListener("pointermove", updateDepth);
  portal.addEventListener("pointerleave", resetDepth);
  return fragment;
}

function updateDepth(event) {
  if (!supportsPointerMotion.matches || prefersReducedMotion.matches) return;

  const portal = event.currentTarget;
  const bounds = portal.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;

  portal.style.setProperty("--scene-x", `${x * -10}px`);
  portal.style.setProperty("--scene-y", `${y * -7}px`);
  portal.style.setProperty("--figure-x", `${x * 16}px`);
  portal.style.setProperty("--figure-y", `${y * 9}px`);
}

function resetDepth(event) {
  const portal = event.currentTarget;
  portal.style.setProperty("--scene-x", "0px");
  portal.style.setProperty("--scene-y", "0px");
  portal.style.setProperty("--figure-x", "0px");
  portal.style.setProperty("--figure-y", "0px");
}

function updateColumnCount() {
  const width = window.innerWidth;
  const maximum = width >= 2200 ? 4 : width >= 1080 ? 3 : width >= 680 ? 2 : 1;
  archive.style.setProperty("--columns", Math.max(1, Math.min(maximum, characters.length)));
}

characters.forEach((character) => archive.append(createPortal(character)));

const count = characters.length.toString().padStart(2, "0");
counter.innerHTML = `<span>${count}</span> ${characters.length === 1 ? "story" : "stories"}`;
counter.setAttribute("aria-label", `${characters.length} ${characters.length === 1 ? "story is" : "stories are"} available`);

updateColumnCount();
window.addEventListener("resize", updateColumnCount, { passive: true });
