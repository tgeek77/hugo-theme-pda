const clock = document.querySelector("[data-clock]");
if (clock) {
  const tick = () => {
    const now = new Date();
    clock.textContent = now.toLocaleString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      month: "short",
      day: "2-digit",
    });
  };
  tick();
  window.setInterval(tick, 30000);
}
