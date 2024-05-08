function ButtonOn(button, visualization) {
    visualization.style.display = 'block';
    button.textContent = "Hide Piano Roll"
    button.style.backgroundColor = "lightcoral"
}
function ButtonOff(button, visualization) {
    visualization.style.display = 'none';
    button.textContent = "Show Piano Roll"
    button.style.backgroundColor = "#cde"
}


const togglePianorollRedOrg_1 = document.getElementById('togglePianorollRedOrg_1');
const unfoldPianorollRedOrg_1 = document.getElementById('unfoldPianorollRedOrg_1');
togglePianorollRedOrg_1.addEventListener('click', function () {
    if (unfoldPianorollRedOrg_1.style.display === 'none' || unfoldPianorollRedOrg_1.style.display === '') {
        ButtonOn(togglePianorollRedOrg_1, unfoldPianorollRedOrg_1)
        ButtonOff(togglePianorollRedOurs_1, unfoldPianorollRedOurs_1)
        ButtonOff(togglePianorollRedDSOBS_1, unfoldPianorollRedDSOBS_1)
        ButtonOff(togglePianorollRedDSLS_1, unfoldPianorollRedDSLS_1)
    } else {
        ButtonOff(togglePianorollRedOrg_1, unfoldPianorollRedOrg_1)
    }
});
const togglePianorollRedOurs_1 = document.getElementById('togglePianorollRedOurs_1');
const unfoldPianorollRedOurs_1 = document.getElementById('unfoldPianorollRedOurs_1');
togglePianorollRedOurs_1.addEventListener('click', function () {
    if (unfoldPianorollRedOurs_1.style.display === 'none' || unfoldPianorollRedOurs_1.style.display === '') {
        ButtonOn(togglePianorollRedOurs_1, unfoldPianorollRedOurs_1)
        ButtonOff(togglePianorollRedOrg_1, unfoldPianorollRedOrg_1)
        ButtonOff(togglePianorollRedDSOBS_1, unfoldPianorollRedDSOBS_1)
        ButtonOff(togglePianorollRedDSLS_1, unfoldPianorollRedDSLS_1)
    } else {
        ButtonOff(togglePianorollRedOurs_1, unfoldPianorollRedOurs_1)
    }
});
const togglePianorollRedDSOBS_1 = document.getElementById('togglePianorollRedDSOBS_1');
const unfoldPianorollRedDSOBS_1 = document.getElementById('unfoldPianorollRedDSOBS_1');
togglePianorollRedDSOBS_1.addEventListener('click', function () {
    if (unfoldPianorollRedDSOBS_1.style.display === 'none' || unfoldPianorollRedDSOBS_1.style.display === '') {
        ButtonOn(togglePianorollRedDSOBS_1, unfoldPianorollRedDSOBS_1)
        ButtonOff(togglePianorollRedOrg_1, unfoldPianorollRedOrg_1)
        ButtonOff(togglePianorollRedOurs_1, unfoldPianorollRedOurs_1)
        ButtonOff(togglePianorollRedDSLS_1, unfoldPianorollRedDSLS_1)
    } else {
        ButtonOff(togglePianorollRedDSOBS_1, unfoldPianorollRedDSOBS_1)
    }
});
const togglePianorollRedDSLS_1 = document.getElementById('togglePianorollRedDSLS_1');
const unfoldPianorollRedDSLS_1 = document.getElementById('unfoldPianorollRedDSLS_1');
togglePianorollRedDSLS_1.addEventListener('click', function () {
    if (unfoldPianorollRedDSLS_1.style.display === 'none' || unfoldPianorollRedDSLS_1.style.display === '') {
        ButtonOn(togglePianorollRedDSLS_1, unfoldPianorollRedDSLS_1)
        ButtonOff(togglePianorollRedOrg_1, unfoldPianorollRedOrg_1)
        ButtonOff(togglePianorollRedOurs_1, unfoldPianorollRedOurs_1)
        ButtonOff(togglePianorollRedDSOBS_1, unfoldPianorollRedDSOBS_1)
    } else {
        ButtonOff(togglePianorollRedDSLS_1, unfoldPianorollRedDSLS_1)
    }
});

const togglePianorollRedOrg_2 = document.getElementById('togglePianorollRedOrg_2');
const unfoldPianorollRedOrg_2 = document.getElementById('unfoldPianorollRedOrg_2');
togglePianorollRedOrg_2.addEventListener('click', function () {
    if (unfoldPianorollRedOrg_2.style.display === 'none' || unfoldPianorollRedOrg_2.style.display === '') {
        ButtonOn(togglePianorollRedOrg_2, unfoldPianorollRedOrg_2)
        ButtonOff(togglePianorollRedOurs_2, unfoldPianorollRedOurs_2)
        ButtonOff(togglePianorollRedDSOBS_2, unfoldPianorollRedDSOBS_2)
        ButtonOff(togglePianorollRedDSLS_2, unfoldPianorollRedDSLS_2)
    } else {
        ButtonOff(togglePianorollRedOrg_2, unfoldPianorollRedOrg_2)
    }
});
const togglePianorollRedOurs_2 = document.getElementById('togglePianorollRedOurs_2');
const unfoldPianorollRedOurs_2 = document.getElementById('unfoldPianorollRedOurs_2');
togglePianorollRedOurs_2.addEventListener('click', function () {
    if (unfoldPianorollRedOurs_2.style.display === 'none' || unfoldPianorollRedOurs_2.style.display === '') {
        ButtonOn(togglePianorollRedOurs_2, unfoldPianorollRedOurs_2)
        ButtonOff(togglePianorollRedOrg_2, unfoldPianorollRedOrg_2)
        ButtonOff(togglePianorollRedDSOBS_2, unfoldPianorollRedDSOBS_2)
        ButtonOff(togglePianorollRedDSLS_2, unfoldPianorollRedDSLS_2)
    } else {
        ButtonOff(togglePianorollRedOurs_2, unfoldPianorollRedOurs_2)
    }
});
const togglePianorollRedDSOBS_2 = document.getElementById('togglePianorollRedDSOBS_2');
const unfoldPianorollRedDSOBS_2 = document.getElementById('unfoldPianorollRedDSOBS_2');
togglePianorollRedDSOBS_2.addEventListener('click', function () {
    if (unfoldPianorollRedDSOBS_2.style.display === 'none' || unfoldPianorollRedDSOBS_2.style.display === '') {
        ButtonOn(togglePianorollRedDSOBS_2, unfoldPianorollRedDSOBS_2)
        ButtonOff(togglePianorollRedOrg_2, unfoldPianorollRedOrg_2)
        ButtonOff(togglePianorollRedOurs_2, unfoldPianorollRedOurs_2)
        ButtonOff(togglePianorollRedDSLS_2, unfoldPianorollRedDSLS_2)
    } else {
        ButtonOff(togglePianorollRedDSOBS_2, unfoldPianorollRedDSOBS_2)
    }
});
const togglePianorollRedDSLS_2 = document.getElementById('togglePianorollRedDSLS_2');
const unfoldPianorollRedDSLS_2 = document.getElementById('unfoldPianorollRedDSLS_2');
togglePianorollRedDSLS_2.addEventListener('click', function () {
    if (unfoldPianorollRedDSLS_2.style.display === 'none' || unfoldPianorollRedDSLS_2.style.display === '') {
        ButtonOn(togglePianorollRedDSLS_2, unfoldPianorollRedDSLS_2)
        ButtonOff(togglePianorollRedOrg_2, unfoldPianorollRedOrg_2)
        ButtonOff(togglePianorollRedOurs_2, unfoldPianorollRedOurs_2)
        ButtonOff(togglePianorollRedDSOBS_2, unfoldPianorollRedDSOBS_2)
    } else {
        ButtonOff(togglePianorollRedDSLS_2, unfoldPianorollRedDSLS_2)
    }
});

const togglePianorollRedOrg_3 = document.getElementById('togglePianorollRedOrg_3');
const unfoldPianorollRedOrg_3 = document.getElementById('unfoldPianorollRedOrg_3');
togglePianorollRedOrg_3.addEventListener('click', function () {
    if (unfoldPianorollRedOrg_3.style.display === 'none' || unfoldPianorollRedOrg_3.style.display === '') {
        ButtonOn(togglePianorollRedOrg_3, unfoldPianorollRedOrg_3)
        ButtonOff(togglePianorollRedOurs_3, unfoldPianorollRedOurs_3)
        ButtonOff(togglePianorollRedDSOBS_3, unfoldPianorollRedDSOBS_3)
        ButtonOff(togglePianorollRedDSLS_3, unfoldPianorollRedDSLS_3)
    } else {
        ButtonOff(togglePianorollRedOrg_3, unfoldPianorollRedOrg_3)
    }
});
const togglePianorollRedOurs_3 = document.getElementById('togglePianorollRedOurs_3');
const unfoldPianorollRedOurs_3 = document.getElementById('unfoldPianorollRedOurs_3');
togglePianorollRedOurs_3.addEventListener('click', function () {
    if (unfoldPianorollRedOurs_3.style.display === 'none' || unfoldPianorollRedOurs_3.style.display === '') {
        ButtonOn(togglePianorollRedOurs_3, unfoldPianorollRedOurs_3)
        ButtonOff(togglePianorollRedOrg_3, unfoldPianorollRedOrg_3)
        ButtonOff(togglePianorollRedDSOBS_3, unfoldPianorollRedDSOBS_3)
        ButtonOff(togglePianorollRedDSLS_3, unfoldPianorollRedDSLS_3)
    } else {
        ButtonOff(togglePianorollRedOurs_3, unfoldPianorollRedOurs_3)
    }
});
const togglePianorollRedDSOBS_3 = document.getElementById('togglePianorollRedDSOBS_3');
const unfoldPianorollRedDSOBS_3 = document.getElementById('unfoldPianorollRedDSOBS_3');
togglePianorollRedDSOBS_3.addEventListener('click', function () {
    if (unfoldPianorollRedDSOBS_3.style.display === 'none' || unfoldPianorollRedDSOBS_3.style.display === '') {
        ButtonOn(togglePianorollRedDSOBS_3, unfoldPianorollRedDSOBS_3)
        ButtonOff(togglePianorollRedOrg_3, unfoldPianorollRedOrg_3)
        ButtonOff(togglePianorollRedOurs_3, unfoldPianorollRedOurs_3)
        ButtonOff(togglePianorollRedDSLS_3, unfoldPianorollRedDSLS_3)
    } else {
        ButtonOff(togglePianorollRedDSOBS_3, unfoldPianorollRedDSOBS_3)
    }
});
const togglePianorollRedDSLS_3 = document.getElementById('togglePianorollRedDSLS_3');
const unfoldPianorollRedDSLS_3 = document.getElementById('unfoldPianorollRedDSLS_3');
togglePianorollRedDSLS_3.addEventListener('click', function () {
    if (unfoldPianorollRedDSLS_3.style.display === 'none' || unfoldPianorollRedDSLS_3.style.display === '') {
        ButtonOn(togglePianorollRedDSLS_3, unfoldPianorollRedDSLS_3)
        ButtonOff(togglePianorollRedOrg_3, unfoldPianorollRedOrg_3)
        ButtonOff(togglePianorollRedOurs_3, unfoldPianorollRedOurs_3)
        ButtonOff(togglePianorollRedDSOBS_3, unfoldPianorollRedDSOBS_3)
    } else {
        ButtonOff(togglePianorollRedDSLS_3, unfoldPianorollRedDSLS_3)
    }
});

const togglePianorollRedOrg_4 = document.getElementById('togglePianorollRedOrg_4');
const unfoldPianorollRedOrg_4 = document.getElementById('unfoldPianorollRedOrg_4');
togglePianorollRedOrg_4.addEventListener('click', function () {
    if (unfoldPianorollRedOrg_4.style.display === 'none' || unfoldPianorollRedOrg_4.style.display === '') {
        ButtonOn(togglePianorollRedOrg_4, unfoldPianorollRedOrg_4)
        ButtonOff(togglePianorollRedOurs_4, unfoldPianorollRedOurs_4)
        ButtonOff(togglePianorollRedDSOBS_4, unfoldPianorollRedDSOBS_4)
        ButtonOff(togglePianorollRedDSLS_4, unfoldPianorollRedDSLS_4)
    } else {
        ButtonOff(togglePianorollRedOrg_4, unfoldPianorollRedOrg_4)
    }
});
const togglePianorollRedOurs_4 = document.getElementById('togglePianorollRedOurs_4');
const unfoldPianorollRedOurs_4 = document.getElementById('unfoldPianorollRedOurs_4');
togglePianorollRedOurs_4.addEventListener('click', function () {
    if (unfoldPianorollRedOurs_4.style.display === 'none' || unfoldPianorollRedOurs_4.style.display === '') {
        ButtonOn(togglePianorollRedOurs_4, unfoldPianorollRedOurs_4)
        ButtonOff(togglePianorollRedOrg_4, unfoldPianorollRedOrg_4)
        ButtonOff(togglePianorollRedDSOBS_4, unfoldPianorollRedDSOBS_4)
        ButtonOff(togglePianorollRedDSLS_4, unfoldPianorollRedDSLS_4)
    } else {
        ButtonOff(togglePianorollRedOurs_4, unfoldPianorollRedOurs_4)
    }
});
const togglePianorollRedDSOBS_4 = document.getElementById('togglePianorollRedDSOBS_4');
const unfoldPianorollRedDSOBS_4 = document.getElementById('unfoldPianorollRedDSOBS_4');
togglePianorollRedDSOBS_4.addEventListener('click', function () {
    if (unfoldPianorollRedDSOBS_4.style.display === 'none' || unfoldPianorollRedDSOBS_4.style.display === '') {
        ButtonOn(togglePianorollRedDSOBS_4, unfoldPianorollRedDSOBS_4)
        ButtonOff(togglePianorollRedOrg_4, unfoldPianorollRedOrg_4)
        ButtonOff(togglePianorollRedOurs_4, unfoldPianorollRedOurs_4)
        ButtonOff(togglePianorollRedDSLS_4, unfoldPianorollRedDSLS_4)
    } else {
        ButtonOff(togglePianorollRedDSOBS_4, unfoldPianorollRedDSOBS_4)
    }
});
const togglePianorollRedDSLS_4 = document.getElementById('togglePianorollRedDSLS_4');
const unfoldPianorollRedDSLS_4 = document.getElementById('unfoldPianorollRedDSLS_4');
togglePianorollRedDSLS_4.addEventListener('click', function () {
    if (unfoldPianorollRedDSLS_4.style.display === 'none' || unfoldPianorollRedDSLS_4.style.display === '') {
        ButtonOn(togglePianorollRedDSLS_4, unfoldPianorollRedDSLS_4)
        ButtonOff(togglePianorollRedOrg_4, unfoldPianorollRedOrg_4)
        ButtonOff(togglePianorollRedOurs_4, unfoldPianorollRedOurs_4)
        ButtonOff(togglePianorollRedDSOBS_4, unfoldPianorollRedDSOBS_4)
    } else {
        ButtonOff(togglePianorollRedDSLS_4, unfoldPianorollRedDSLS_4)
    }
});

const togglePianorollRedOrg_5 = document.getElementById('togglePianorollRedOrg_5');
const unfoldPianorollRedOrg_5 = document.getElementById('unfoldPianorollRedOrg_5');
togglePianorollRedOrg_5.addEventListener('click', function () {
    if (unfoldPianorollRedOrg_5.style.display === 'none' || unfoldPianorollRedOrg_5.style.display === '') {
        ButtonOn(togglePianorollRedOrg_5, unfoldPianorollRedOrg_5)
        ButtonOff(togglePianorollRedOurs_5, unfoldPianorollRedOurs_5)
        ButtonOff(togglePianorollRedDSOBS_5, unfoldPianorollRedDSOBS_5)
        ButtonOff(togglePianorollRedDSLS_5, unfoldPianorollRedDSLS_5)
    } else {
        ButtonOff(togglePianorollRedOrg_5, unfoldPianorollRedOrg_5)
    }
});
const togglePianorollRedOurs_5 = document.getElementById('togglePianorollRedOurs_5');
const unfoldPianorollRedOurs_5 = document.getElementById('unfoldPianorollRedOurs_5');
togglePianorollRedOurs_5.addEventListener('click', function () {
    if (unfoldPianorollRedOurs_5.style.display === 'none' || unfoldPianorollRedOurs_5.style.display === '') {
        ButtonOn(togglePianorollRedOurs_5, unfoldPianorollRedOurs_5)
        ButtonOff(togglePianorollRedOrg_5, unfoldPianorollRedOrg_5)
        ButtonOff(togglePianorollRedDSOBS_5, unfoldPianorollRedDSOBS_5)
        ButtonOff(togglePianorollRedDSLS_5, unfoldPianorollRedDSLS_5)
    } else {
        ButtonOff(togglePianorollRedOurs_5, unfoldPianorollRedOurs_5)
    }
});
const togglePianorollRedDSOBS_5 = document.getElementById('togglePianorollRedDSOBS_5');
const unfoldPianorollRedDSOBS_5 = document.getElementById('unfoldPianorollRedDSOBS_5');
togglePianorollRedDSOBS_5.addEventListener('click', function () {
    if (unfoldPianorollRedDSOBS_5.style.display === 'none' || unfoldPianorollRedDSOBS_5.style.display === '') {
        ButtonOn(togglePianorollRedDSOBS_5, unfoldPianorollRedDSOBS_5)
        ButtonOff(togglePianorollRedOrg_5, unfoldPianorollRedOrg_5)
        ButtonOff(togglePianorollRedOurs_5, unfoldPianorollRedOurs_5)
        ButtonOff(togglePianorollRedDSLS_5, unfoldPianorollRedDSLS_5)
    } else {
        ButtonOff(togglePianorollRedDSOBS_5, unfoldPianorollRedDSOBS_5)
    }
});
const togglePianorollRedDSLS_5 = document.getElementById('togglePianorollRedDSLS_5');
const unfoldPianorollRedDSLS_5 = document.getElementById('unfoldPianorollRedDSLS_5');
togglePianorollRedDSLS_5.addEventListener('click', function () {
    if (unfoldPianorollRedDSLS_5.style.display === 'none' || unfoldPianorollRedDSLS_5.style.display === '') {
        ButtonOn(togglePianorollRedDSLS_5, unfoldPianorollRedDSLS_5)
        ButtonOff(togglePianorollRedOrg_5, unfoldPianorollRedOrg_5)
        ButtonOff(togglePianorollRedOurs_5, unfoldPianorollRedOurs_5)
        ButtonOff(togglePianorollRedDSOBS_5, unfoldPianorollRedDSOBS_5)
    } else {
        ButtonOff(togglePianorollRedDSLS_5, unfoldPianorollRedDSLS_5)
    }
});

const togglePianorollRedOrg_6 = document.getElementById('togglePianorollRedOrg_6');
const unfoldPianorollRedOrg_6 = document.getElementById('unfoldPianorollRedOrg_6');
togglePianorollRedOrg_6.addEventListener('click', function () {
    if (unfoldPianorollRedOrg_6.style.display === 'none' || unfoldPianorollRedOrg_6.style.display === '') {
        ButtonOn(togglePianorollRedOrg_6, unfoldPianorollRedOrg_6)
        ButtonOff(togglePianorollRedOurs_6, unfoldPianorollRedOurs_6)
        ButtonOff(togglePianorollRedDSOBS_6, unfoldPianorollRedDSOBS_6)
        ButtonOff(togglePianorollRedDSLS_6, unfoldPianorollRedDSLS_6)
    } else {
        ButtonOff(togglePianorollRedOrg_6, unfoldPianorollRedOrg_6)
    }
});
const togglePianorollRedOurs_6 = document.getElementById('togglePianorollRedOurs_6');
const unfoldPianorollRedOurs_6 = document.getElementById('unfoldPianorollRedOurs_6');
togglePianorollRedOurs_6.addEventListener('click', function () {
    if (unfoldPianorollRedOurs_6.style.display === 'none' || unfoldPianorollRedOurs_6.style.display === '') {
        ButtonOn(togglePianorollRedOurs_6, unfoldPianorollRedOurs_6)
        ButtonOff(togglePianorollRedOrg_6, unfoldPianorollRedOrg_6)
        ButtonOff(togglePianorollRedDSOBS_6, unfoldPianorollRedDSOBS_6)
        ButtonOff(togglePianorollRedDSLS_6, unfoldPianorollRedDSLS_6)
    } else {
        ButtonOff(togglePianorollRedOurs_6, unfoldPianorollRedOurs_6)
    }
});
const togglePianorollRedDSOBS_6 = document.getElementById('togglePianorollRedDSOBS_6');
const unfoldPianorollRedDSOBS_6 = document.getElementById('unfoldPianorollRedDSOBS_6');
togglePianorollRedDSOBS_6.addEventListener('click', function () {
    if (unfoldPianorollRedDSOBS_6.style.display === 'none' || unfoldPianorollRedDSOBS_6.style.display === '') {
        ButtonOn(togglePianorollRedDSOBS_6, unfoldPianorollRedDSOBS_6)
        ButtonOff(togglePianorollRedOrg_6, unfoldPianorollRedOrg_6)
        ButtonOff(togglePianorollRedOurs_6, unfoldPianorollRedOurs_6)
        ButtonOff(togglePianorollRedDSLS_6, unfoldPianorollRedDSLS_6)
    } else {
        ButtonOff(togglePianorollRedDSOBS_6, unfoldPianorollRedDSOBS_6)
    }
});
const togglePianorollRedDSLS_6 = document.getElementById('togglePianorollRedDSLS_6');
const unfoldPianorollRedDSLS_6 = document.getElementById('unfoldPianorollRedDSLS_6');
togglePianorollRedDSLS_6.addEventListener('click', function () {
    if (unfoldPianorollRedDSLS_6.style.display === 'none' || unfoldPianorollRedDSLS_6.style.display === '') {
        ButtonOn(togglePianorollRedDSLS_6, unfoldPianorollRedDSLS_6)
        ButtonOff(togglePianorollRedOrg_6, unfoldPianorollRedOrg_6)
        ButtonOff(togglePianorollRedOurs_6, unfoldPianorollRedOurs_6)
        ButtonOff(togglePianorollRedDSOBS_6, unfoldPianorollRedDSOBS_6)
    } else {
        ButtonOff(togglePianorollRedDSLS_6, unfoldPianorollRedDSLS_6)
    }
});

// ------------------------------------------------


const togglePianorollVarOrg_1 = document.getElementById('togglePianorollVarOrg_1');
const unfoldPianorollVarOrg_1 = document.getElementById('unfoldPianorollVarOrg_1');
togglePianorollVarOrg_1.addEventListener('click', function () {
    if (unfoldPianorollVarOrg_1.style.display === 'none' || unfoldPianorollVarOrg_1.style.display === '') {
        ButtonOn(togglePianorollVarOrg_1, unfoldPianorollVarOrg_1)
        ButtonOff(togglePianorollVarOurs_1, unfoldPianorollVarOurs_1)
        ButtonOff(togglePianorollVarDSOBS_1, unfoldPianorollVarDSOBS_1)
        ButtonOff(togglePianorollVarEC2VAE_1, unfoldPianorollVarEC2VAE_1)
    } else {
        ButtonOff(togglePianorollVarOrg_1, unfoldPianorollVarOrg_1)
    }
});
const togglePianorollVarOurs_1 = document.getElementById('togglePianorollVarOurs_1');
const unfoldPianorollVarOurs_1 = document.getElementById('unfoldPianorollVarOurs_1');
togglePianorollVarOurs_1.addEventListener('click', function () {
    if (unfoldPianorollVarOurs_1.style.display === 'none' || unfoldPianorollVarOurs_1.style.display === '') {
        ButtonOn(togglePianorollVarOurs_1, unfoldPianorollVarOurs_1)
        ButtonOff(togglePianorollVarOrg_1, unfoldPianorollVarOrg_1)
        ButtonOff(togglePianorollVarDSOBS_1, unfoldPianorollVarDSOBS_1)
        ButtonOff(togglePianorollVarEC2VAE_1, unfoldPianorollVarEC2VAE_1)
    } else {
        ButtonOff(togglePianorollVarOurs_1, unfoldPianorollVarOurs_1)
    }
});
const togglePianorollVarDSOBS_1 = document.getElementById('togglePianorollVarDSOBS_1');
const unfoldPianorollVarDSOBS_1 = document.getElementById('unfoldPianorollVarDSOBS_1');
togglePianorollVarDSOBS_1.addEventListener('click', function () {
    if (unfoldPianorollVarDSOBS_1.style.display === 'none' || unfoldPianorollVarDSOBS_1.style.display === '') {
        ButtonOn(togglePianorollVarDSOBS_1, unfoldPianorollVarDSOBS_1)
        ButtonOff(togglePianorollVarOrg_1, unfoldPianorollVarOrg_1)
        ButtonOff(togglePianorollVarOurs_1, unfoldPianorollVarOurs_1)
        ButtonOff(togglePianorollVarEC2VAE_1, unfoldPianorollVarEC2VAE_1)
    } else {
        ButtonOff(togglePianorollVarDSOBS_1, unfoldPianorollVarDSOBS_1)
    }
});
const togglePianorollVarEC2VAE_1 = document.getElementById('togglePianorollVarEC2VAE_1');
const unfoldPianorollVarEC2VAE_1 = document.getElementById('unfoldPianorollVarEC2VAE_1');
togglePianorollVarEC2VAE_1.addEventListener('click', function () {
    if (unfoldPianorollVarEC2VAE_1.style.display === 'none' || unfoldPianorollVarEC2VAE_1.style.display === '') {
        ButtonOn(togglePianorollVarEC2VAE_1, unfoldPianorollVarEC2VAE_1)
        ButtonOff(togglePianorollVarOrg_1, unfoldPianorollVarOrg_1)
        ButtonOff(togglePianorollVarOurs_1, unfoldPianorollVarOurs_1)
        ButtonOff(togglePianorollVarDSOBS_1, unfoldPianorollVarDSOBS_1)
    } else {
        ButtonOff(togglePianorollVarEC2VAE_1, unfoldPianorollVarEC2VAE_1)
    }
});

const togglePianorollVarOrg_2 = document.getElementById('togglePianorollVarOrg_2');
const unfoldPianorollVarOrg_2 = document.getElementById('unfoldPianorollVarOrg_2');
togglePianorollVarOrg_2.addEventListener('click', function () {
    if (unfoldPianorollVarOrg_2.style.display === 'none' || unfoldPianorollVarOrg_2.style.display === '') {
        ButtonOn(togglePianorollVarOrg_2, unfoldPianorollVarOrg_2)
        ButtonOff(togglePianorollVarOurs_2, unfoldPianorollVarOurs_2)
        ButtonOff(togglePianorollVarDSOBS_2, unfoldPianorollVarDSOBS_2)
        ButtonOff(togglePianorollVarEC2VAE_2, unfoldPianorollVarEC2VAE_2)
    } else {
        ButtonOff(togglePianorollVarOrg_2, unfoldPianorollVarOrg_2)
    }
});
const togglePianorollVarOurs_2 = document.getElementById('togglePianorollVarOurs_2');
const unfoldPianorollVarOurs_2 = document.getElementById('unfoldPianorollVarOurs_2');
togglePianorollVarOurs_2.addEventListener('click', function () {
    if (unfoldPianorollVarOurs_2.style.display === 'none' || unfoldPianorollVarOurs_2.style.display === '') {
        ButtonOn(togglePianorollVarOurs_2, unfoldPianorollVarOurs_2)
        ButtonOff(togglePianorollVarOrg_2, unfoldPianorollVarOrg_2)
        ButtonOff(togglePianorollVarDSOBS_2, unfoldPianorollVarDSOBS_2)
        ButtonOff(togglePianorollVarEC2VAE_2, unfoldPianorollVarEC2VAE_2)
    } else {
        ButtonOff(togglePianorollVarOurs_2, unfoldPianorollVarOurs_2)
    }
});
const togglePianorollVarDSOBS_2 = document.getElementById('togglePianorollVarDSOBS_2');
const unfoldPianorollVarDSOBS_2 = document.getElementById('unfoldPianorollVarDSOBS_2');
togglePianorollVarDSOBS_2.addEventListener('click', function () {
    if (unfoldPianorollVarDSOBS_2.style.display === 'none' || unfoldPianorollVarDSOBS_2.style.display === '') {
        ButtonOn(togglePianorollVarDSOBS_2, unfoldPianorollVarDSOBS_2)
        ButtonOff(togglePianorollVarOrg_2, unfoldPianorollVarOrg_2)
        ButtonOff(togglePianorollVarOurs_2, unfoldPianorollVarOurs_2)
        ButtonOff(togglePianorollVarEC2VAE_2, unfoldPianorollVarEC2VAE_2)
    } else {
        ButtonOff(togglePianorollVarDSOBS_2, unfoldPianorollVarDSOBS_2)
    }
});
const togglePianorollVarEC2VAE_2 = document.getElementById('togglePianorollVarEC2VAE_2');
const unfoldPianorollVarEC2VAE_2 = document.getElementById('unfoldPianorollVarEC2VAE_2');
togglePianorollVarEC2VAE_2.addEventListener('click', function () {
    if (unfoldPianorollVarEC2VAE_2.style.display === 'none' || unfoldPianorollVarEC2VAE_2.style.display === '') {
        ButtonOn(togglePianorollVarEC2VAE_2, unfoldPianorollVarEC2VAE_2)
        ButtonOff(togglePianorollVarOrg_2, unfoldPianorollVarOrg_2)
        ButtonOff(togglePianorollVarOurs_2, unfoldPianorollVarOurs_2)
        ButtonOff(togglePianorollVarDSOBS_2, unfoldPianorollVarDSOBS_2)
    } else {
        ButtonOff(togglePianorollVarEC2VAE_2, unfoldPianorollVarEC2VAE_2)
    }
});