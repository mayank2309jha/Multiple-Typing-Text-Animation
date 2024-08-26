const text = document.querySelector(".text");
let identities = ["Developer", "Philosopher", "Problem Solver", "Liver"];
const message = text.innerHTML;
let i = 0;
let j = 0;
let growing = true;

const updateIdentity = () => {
  let id = identities[i];
  let length = id.length;

  if (growing) {
    if (j < length) {
      j++;
    } else {
      growing = false;
      j--;
    }
  } else {
    if (j > 0) {
      j--;
    } else {
      growing = true;
      i = (i + 1) % identities.length;
    }
  }

  text.innerHTML = message + id.substring(0, j);
};

setInterval(updateIdentity, 100); // Adjust the interval as needed
