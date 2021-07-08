let player = document.getElementById('player');
let Timer = 15;
let Coins = 0;
let flag = 0;
let bool = 0;
let flagOnOff = 0;

let colorBtns = document.getElementsByName('color');
let changedBtnColor = 'darkred';
colorBtns.forEach(e => {
    e.addEventListener('click', () => {
        changedBtnColor = e.value;
    });
});

let figureBtns = document.getElementsByName('figure');
let changedFigure = 'rectangle';
figureBtns.forEach(e => {
    e.addEventListener('click', () => {
        changedFigure = e.value;
    })
})

// jQuery
$(document).ready(function() {
    $("#settingBox").click(function() {
        $("#container").hide(1200);
        $("#settingContainer").show(1200);
    });

    $("#back").click(function() {
        $("#settingContainer").hide(1200);
        $("#container").show(1200);
    });
});

var Start = document.getElementById('playBox');
Start.addEventListener("click", function() {
    player.style.backgroundColor = changedBtnColor;
    if (changedFigure == 'circle') {
        player.style.borderRadius = "50%";
    } else {
        player.style.borderRadius = "0px";
    }
    
    var flag1 = 0;
    playBox.style.display = 'none';
    settingBox.style.display = 'none';
    container.style.display = 'inherit';
    li1.style.display = 'inherit';
    li2.style.display = 'inherit';
    li1.textContent = 'Coins: 0';
    li2.textContent = 'Timer: 15';
    box.style.display = 'inherit';
    player.style.display = 'inherit';

    setInterval(function() {
        if (flag1 == 0) {
            Timer--;
            li2.textContent = 'Timer: ' + Timer;
            if (Timer < 1) {
                box.style.display = 'none';
                player.style.display = 'none';
                Swal.fire("Your Score is " + Coins);
                playText.textContent = 'RETRY';
                playBox.style.backgroundColor = 'darkred';
                playBox.style.display = 'inherit';
                settingBox.style.display = 'inherit';
                li1.style.display = 'none';
                li2.style.display = 'none';
                Timer = 15;
                Coins = 0;
                li1.textContent = 'Coins: ' + Coins;
                li2.textContent = 'Timer: ' + Timer;
                flag1 = 1;
                flag = 1;
            }
        }
    }, 1000);

    if (flag == 0) {
        player.addEventListener('click', function() {
            Coins++;
            li1.textContent = 'Coins: ' + Coins;

            var RandomSize = Math.floor(Math.random() * 100);
            if (RandomSize < 10) {
                RandomSize = 10;
            }

            var RandomPosX = Math.floor(Math.random() * 330);
            var RandomPosY = Math.floor(Math.random() * 600);

            player.style.width = RandomSize + 'px';
            player.style.height = RandomSize + 'px';

            player.style.left = RandomPosX + 'px';
            player.style.top = RandomPosY + 'px';
        });
    }
});