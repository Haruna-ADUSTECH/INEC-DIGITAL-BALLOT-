let voted = false;

function vote(party) {
    if (voted) {
        document.getElementById("resultMessage").innerText = "You have already voted!";
        return;
    }
    selectedParty = party;
    document.getElementById("resultMessage").innerText = `Selected Party: ${party}`;
}

function castVote() {
    const vin = document.getElementById("vin").value.trim();
    
    if (vin === "") {
        alert("Please enter your VIN to vote.");
        return;
    }
    
    if (!voted && selectedParty) {
        // Save vote logic here (send data to backend)
        voted = true;
        document.getElementById("resultMessage").innerText = `Thank you for voting for ${selectedParty}!`;
    } else if (!selectedParty) {
        alert("Please select a party before casting your vote.");
    }
}
