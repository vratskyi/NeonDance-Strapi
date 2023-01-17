function faq() {
  const triggers = document.querySelectorAll(".faqButton");
  const triggerArray = Array.from(triggers).entries();
  const faqContent = document.querySelectorAll("#faqContent");

  for (let [index, trigger] of triggerArray) {
    const toggleModal = () => {
      if (faqContent[index].classList.contains("hidden")) {
        faqContent[index].classList.replace("hidden", "block");
      } else if (faqContent[index].classList.contains("block")) {
        faqContent[index].classList.replace("block", "hidden");
      } else {
        alert("Something went wrong... please update the page.");
      }
    };
    trigger.addEventListener("click", toggleModal);
  }
}

faq();
