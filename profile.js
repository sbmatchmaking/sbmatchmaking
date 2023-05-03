const pfp = document.getElementById("profile-pic");
const userPicture = document.getElementById("pfp");
const name = document.getElementById("name")
const userInfo = document.getElementById("user-data")
const uuid = localStorage.getItem("user-uid");

function updateElo(winner, loser) {
    fetch("http://ec2-54-183-137-187.us-west-1.compute.amazonaws.com:8000/api/v1.0.0/json/p/upd", {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({"winner-id": winner, "loser-id": loser})
    })
}

// Initialize on load
window.onload = function () {
    const uid = localStorage.getItem("user-uid");
    if (uid == null) {
        window.location.href = "index.html";
    }

    pfp.src = localStorage.getItem("profile-pic");

    fetch("http://ec2-54-183-137-187.us-west-1.compute.amazonaws.com:8000/api/v1.0.0/json/g/userelo", {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({"uuid": uuid})
    })
        .then(response => response.json())
        .then(data => {
            userPicture.src = data[0].fields.pfp_src;
            name.textContent = data[0].fields.fname + " " + data[0].fields.lname;
            userInfo.textContent = "Elo: " + data[0].fields.elo_rating;
        });
}
