var answerCodesPics = ["ov20ya", "3w54eb", "ri77o7", "76m679", "vkaqg1", "lq1b4d", "nnzaaw", "qlmpla", "2gosyj"];
var answerCodes = ["N6660", "E4722", "M0223", "D8312", "V0015", "O5388", "U1636", "S2981", "O9145"];
var correctOrder = ["M0223", "O9145", "N6660", "D8312", "E4722", "V0015", "O5388", "U1636", "S2981"];
var gridItems = [];
var currentCodeIndex = 0;
var isOrderCorrect = false;
var imageCounter = 0;

function showNextImage() {
  if (currentCodeIndex < gridItems.length) {
    gridItems[currentCodeIndex].style.backgroundImage = "url(https://i.goopics.net/" + answerCodesPics[currentCodeIndex] + ".png)";
    currentCodeIndex++;
    imageCounter++;
    if (imageCounter === gridItems.length) {
      enableImageDragAndDrop();
      document.getElementById("next-button").classList.remove("hidden");
    }
  }
}

function enableImageDragAndDrop() {
  gridItems.forEach(function(gridItem) {
    gridItem.setAttribute("draggable", "true");
    gridItem.addEventListener("dragstart", dragStart);
    gridItem.addEventListener("dragover", dragOver);
    gridItem.addEventListener("dragenter", dragEnter);
    gridItem.addEventListener("dragleave", dragLeave);
    gridItem.addEventListener("drop", drop);
    gridItem.addEventListener("dragend", dragEnd);
  });
}

function dragStart(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("highlight");
}

function dragLeave(e) {
  e.target.classList.remove("highlight");
}

function drop(e) {
  e.preventDefault();
  var sourceId = e.dataTransfer.getData("text");
  var targetId = e.target.id;
  var sourceIndex = parseInt(sourceId.replace("grid-item-", ""));
  var targetIndex = parseInt(targetId.replace("grid-item-", ""));
  swapImages(sourceIndex, targetIndex);
}

function dragEnd(e) {
  e.target.classList.remove("highlight");
  checkOrder();
}

function swapImages(sourceIndex, targetIndex) {
  var sourceImage = gridItems[sourceIndex].style.backgroundImage;
  gridItems[sourceIndex].style.backgroundImage = gridItems[targetIndex].style.backgroundImage;
  gridItems[targetIndex].style.backgroundImage = sourceImage;
}

function checkOrder() {
  var currentOrder = [];
  gridItems.forEach(function(gridItem) {
    var codeIndex = answerCodes.findIndex(function(code) {
      return gridItem.style.backgroundImage.includes(code);
    });
    currentOrder.push(codeIndex);
  });
  if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
    isOrderCorrect = true;
  } else {
    isOrderCorrect = false;
  }
}

function validateCode() {
  var codeInput = document.getElementById("code-input");
  var code = codeInput.value.toUpperCase();
  if (code === answerCodes[currentCodeIndex] && currentCodeIndex < answerCodes.length) {
    showNextImage();
    codeInput.value = "";
  }
}

function init() {
  var grid = document.getElementById("grid");
  var gridItemsElements = document.getElementsByClassName("grid-item");
  for (var i = 0; i < gridItemsElements.length; i++) {
    gridItems.push(gridItemsElements[i]);
  }

  var codeInput = document.getElementById("code-input");
  codeInput.addEventListener("input", function() {
    document.getElementById("validate-button").disabled = (codeInput.value === "");
  });
  codeInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      validateCode();
    }
  });

  document.getElementById("validate-button").addEventListener("click", validateCode);
  document.getElementById("next-button").addEventListener("click", function() {
    if (isOrderCorrect) {
      window.location.href = "puzzle3_345e20ba-316a-4f3b-92ac-334d51a31f21.html";
    }
  });

  document.getElementById("grid").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", init);
