const createDobbySpan = () => {
  const spanElement = document.createElement("span");
  //   spanElement.style.setProperty("--position", `${Math.random() * 100}vh`);
  const startPositionMath = Math.random() * 100;
  spanElement.style.setProperty("--startPositionX", `${startPositionMath}vw`);
  spanElement.style.setProperty("--startPositionY", `100vh`);
  spanElement.style.setProperty("--endPositionX", `${Math.random() * 100}vw`);
  spanElement.style.setProperty("--endPositionY", `-50vh`);
  const speedMath = Math.random() * 15;
  spanElement.style.setProperty("--speed", `${speedMath}s`);
  spanElement.setAttribute("id", `dobby-span-${startPositionMath}`);
  spanElement.classList.add(startPositionMath > 50 ? "lupin" : "dobby");
  //   spanElement.classList.add("lupin");
  const wrapperElement = document.getElementById("dobby");
  wrapperElement.appendChild(spanElement);
  setTimeout(() => {
    deleteDobbySpan(`dobby-span-${startPositionMath}`);
  }, speedMath * 1000);
};

setInterval(() => {
  createDobbySpan();
}, 500);

const deleteDobbySpan = (id) => {
  const deleteSpan = document.getElementById(id);
  deleteSpan.remove();
};
