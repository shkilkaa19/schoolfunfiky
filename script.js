let selectedCharacters = [];

function selectCharacter(name) {
    const index = selectedCharacters.indexOf(name);

    if (index !== -1) {
        selectedCharacters.splice(index, 1);
    } else if (selectedCharacters.length < 2) {
        selectedCharacters.push(name);
    }

    document.getElementById("selection-status").innerText = `Выбрано: ${selectedCharacters.length}/2`;
    document.getElementById("continue-btn").disabled = selectedCharacters.length !== 2;
}

function goToSettings() {
    const query = new URLSearchParams({
        c1: selectedCharacters[0],
        c2: selectedCharacters[1]
    });
    window.location.href = `settings.html?${query.toString()}`;
}