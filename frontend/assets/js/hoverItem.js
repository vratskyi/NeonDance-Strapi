function hoverItem() {
  const triggers = document.querySelectorAll("#hoverItem");
  const triggerArray = Array.from(triggers).entries();

  for (let [index, trigger] of triggerArray) {
    const addHover = () => {
      triggers[index].classList.add("pulseNeon");
    };
    const removeHover = () => {
      triggers[index].classList.remove("pulseNeon");
    };
    trigger.addEventListener("mouseenter", addHover);
    trigger.addEventListener("mouseleave", removeHover);
  }
}

hoverItem();
