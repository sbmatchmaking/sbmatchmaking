// Get the left and right images and their text elements
const leftImage = document.getElementById("left-image");
const leftText = document.getElementById("left-text");
const rightImage = document.getElementById("right-image");
const rightText = document.getElementById("right-text");
const userPicture = document.getElementById("profile-pic");
const uuid = localStorage.getItem("user-uid");

const replaceBothChance = 1.0

let queue = [];
let canClick = true;


function updateImg(side) {
    if (queue.length > 0) {
        const student = queue.shift();

        if (side == 'left') {
            leftImage.src = student.imgSrc;
            leftText.textContent = student.name;
            leftText.uid = student.pk;
        } else {
            rightImage.src = student.imgSrc;
            rightText.textContent = student.name;
            rightText.uid = student.pk;
        }
    } else {
        fetch("https://sbmmbk.lol/api/v1.0.0/json/skillbasedmatchmake", {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({"uuid": uuid})
        })
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    let student = data[i].fields;
                    const option = {
                        imgSrc: student.pfp_src, name: (student.fname) + " " + (student.lname), pk: data[i].pk,
                    };
                    queue.push(option);
                }

                updateImg(side);
            });
    }
}

function updateElo(winner, loser) {
    fetch("https://sbmmbk.lol/api/v1.0.0/json/p/upd", {
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

    updateImg('left');
    updateImg('right');

    userPicture.src = localStorage.getItem("profile-pic");
}


// Add a click event listener to the left image
leftImage.addEventListener("click", () => {
    if (canClick) {
        canClick = false;
        setTimeout(function () {
            canClick = true;
        }, 1000); // set timeout for 1 second

        // Add the shake animation class
        leftImage.classList.add("clicked");

        setTimeout(() => {
            leftImage.classList.remove("clicked");
            updateElo(leftText.uid, rightText.uid)
            updateImg('left');
            if (Math.random() < replaceBothChance) updateImg('right');
        }, 500);
    }
});

// Add a click event listener to the right image
rightImage.addEventListener("click", () => {
    if (canClick) {
        canClick = false;
        setTimeout(function () {
            canClick = true;
        }, 1000); // set timeout for 1 second

        // Add the shake animation class
        rightImage.classList.add("clicked");

        setTimeout(() => {
            rightImage.classList.remove("clicked");
            updateElo(rightText.uid, leftText.uid)
            updateImg('right');
            if (Math.random() < replaceBothChance) updateImg('left');
        }, 500);
    }
});

