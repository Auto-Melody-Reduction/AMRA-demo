prs = document.querySelectorAll("midi-visualizer");
for (let i = 0; i < prs.length; i++) {
    prs[i].config = {
        noteHeight: 5,
        pixelsPerTimeStep: 55,
    };
};