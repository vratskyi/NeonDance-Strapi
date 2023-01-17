function showModal() {
  const triggers = document.getElementsByClassName("modalTrigger");
  const triggerArray = Array.from(triggers).entries();
  const modals = document.querySelectorAll("#modal");
  const closeButtons = document.getElementsByClassName("closeModal");
  const overflow = document.querySelector(".overflow-y-auto");
  const blurContent = document.querySelector("#blurContent");

  for (let [index, trigger] of triggerArray) {
    const toggleModal = () => {
      if (modals[index].classList.contains("hideModal")) {
        modals[index].classList.replace("hideModal", "showModal");
        overflow.classList.remove("overflow-y-auto");
        blurContent.classList.add("blur");
      } else if (modals[index].classList.contains("showModal")) {
        modals[index].classList.replace("showModal", "hideModal");
        overflow.classList.add("overflow-y-auto");
        blurContent.classList.remove("blur");
      } else {
        console.log("Error: can't open modal. ", modals[index]);
      }
    };
    trigger.addEventListener("click", toggleModal);
    closeButtons[index].addEventListener("click", toggleModal);
  }
}
showModal();
