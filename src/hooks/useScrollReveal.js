import { useEffect } from "react";

/**
 * Adds `.is-visible` to any `.reveal` element when it enters the viewport.
 * Runs once on mount and observes all current and future `.reveal` nodes.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const revealElements = (root) => {
      const elements = root.matches?.(".reveal")
        ? [root]
        : Array.from(root.querySelectorAll(".reveal"));

      elements.forEach((element) => observer.observe(element));
    };

    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll(".reveal")
        .forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    revealElements(document);

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            revealElements(node);
          }
        });
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);
}
