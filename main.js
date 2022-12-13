let message = document.querySelector("#message-content");
let addToast = document.querySelector("#add-button");
let box = document.querySelector("#toasts");
let clearToast = document.getElementById("clear-button");
let cancelAble = document.getElementById("cancelable");
let successEl = document.getElementById("success");
let errorEl = document.getElementById("error");
let duration = document.getElementById("duration");

let inputValue;

message.addEventListener("input", function () {
  inputValue = message.value.trim();
  console.log(inputValue);
});

addToast.addEventListener("click", function () {
  let toastDiv = document.createElement("div");
  toastDiv.classList.add("toast");
  let messageP = document.createElement("p");
  messageP.classList.add("message");
  messageP.innerText = inputValue;
  toastDiv.append(messageP);

  setTimeout(() => {
    box.innerHTML = "";
    messageP.innerText = "";
  }, duration.value);

  if (cancelAble.checked) {
    let cancelButton = document.createElement("button");
    cancelButton.innerText = "x";
    toastDiv.appendChild(cancelButton);
    cancelButton.addEventListener("click", function () {
      toastDiv.remove();
    });
  }

  if (successEl.checked) {
    toastDiv.classList.add("success-toast");
  }
  if (errorEl.checked) {
    toastDiv.classList.add("error-toast");
  }
  if (!inputValue) {
    if (successEl.checked) {
      messageP.innerText = "Success";
    }
    if (errorEl.checked) {
      messageP.innerText = "Error";
    }
  }
    message.value = "";

  box.append(toastDiv);
});

clearToast.addEventListener("click", function () {
  box.innerHTML = "";
});
