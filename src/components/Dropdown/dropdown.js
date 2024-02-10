var mainButtons = document.getElementsByClassName("dropdown__btn");
var buttonContainers = document.getElementsByClassName("dropdown__body");
var dynamicButtons = document.getElementsByClassName("dropdown__item");

for (var i = 0; i < mainButtons.length; i++) {
    mainButtons[i].addEventListener("click", function() {
        var container = this.nextElementSibling;
        container.style.display = "block";
    });
}

function replaceMainButton(button, containerIndex) {
    var container = buttonContainers[containerIndex - 1];
    var mainButton = container.previousElementSibling;
    mainButton.innerHTML = button.innerHTML;
    container.style.display = "none";
}

// Set the first buttons as selected initially
replaceMainButton(dynamicButtons[0], '1');
// replaceMainButton(dynamicButtons[0], '2');
