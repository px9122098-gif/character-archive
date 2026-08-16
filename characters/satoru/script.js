const aboutDialog = document.querySelector("#about-dialog");
const openAboutButton = document.querySelector("[data-open-about]");
const closeAboutButton = document.querySelector("[data-close-about]");

let closeTimer;

function openAbout() {
    if (!aboutDialog || aboutDialog.open) {
        return;
    }

    window.clearTimeout(closeTimer);
    aboutDialog.showModal();
    document.body.classList.add("is-modal-open");
    openAboutButton?.setAttribute("aria-expanded", "true");

    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            aboutDialog.classList.add("is-visible");
        });
    });
}

function closeAbout() {
    if (!aboutDialog?.open) {
        return;
    }

    aboutDialog.classList.remove("is-visible");
    openAboutButton?.setAttribute("aria-expanded", "false");

    closeTimer = window.setTimeout(() => {
        if (aboutDialog.open) {
            aboutDialog.close();
        }

        document.body.classList.remove("is-modal-open");
    }, 300);
}

openAboutButton?.addEventListener("click", openAbout);
closeAboutButton?.addEventListener("click", closeAbout);

aboutDialog?.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeAbout();
});

aboutDialog?.addEventListener("click", (event) => {
    if (event.target === aboutDialog) {
        closeAbout();
    }
});

aboutDialog?.addEventListener("close", () => {
    document.body.classList.remove("is-modal-open");
    openAboutButton?.setAttribute("aria-expanded", "false");
    openAboutButton?.focus();
});

function prepareMarquee(row) {
    const track = row.querySelector(".gallery-track");
    const originalGroup = row.querySelector(".gallery-group");

    if (!track || !originalGroup || row.dataset.marqueeReady === "true") {
        return;
    }

    /*
     * Lazy images outside the viewport can wait indefinitely. That used to
     * prevent the second row from ever receiving its animation class. Marking
     * the gallery images as eager and cloning immediately separates loading
     * from motion, so both rows always start together.
     */
    originalGroup.querySelectorAll("img").forEach((image) => {
        image.loading = "eager";
    });

    const duplicateGroup = originalGroup.cloneNode(true);
    duplicateGroup.setAttribute("aria-hidden", "true");

    duplicateGroup.querySelectorAll("img").forEach((image) => {
        image.alt = "";
        image.setAttribute("aria-hidden", "true");
    });

    track.append(duplicateGroup);
    row.dataset.marqueeReady = "true";

    window.requestAnimationFrame(() => {
        row.classList.add("is-ready");
    });
}

document.querySelectorAll("[data-marquee]").forEach(prepareMarquee);