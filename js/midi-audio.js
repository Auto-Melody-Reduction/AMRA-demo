// midi-audio.js

var midiPlayer = new MidiPlayer.Player(function(event) {
    if (event.name === 'Note on') {
        highlightNote(event.noteNumber);
    }
});

midiPlayer.loadFile("melody_reduction_samples/005-red-v1.mid");

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
});

wavesurfer.load('path/to/your/audio/file.mp3');

function playAudio() {
    midiPlayer.play();
    wavesurfer.play();
}

function highlightNote(noteNumber) {
    console.log('Note Played:', noteNumber);
    // Add your visualization logic here
}


visualizer.config = {
    noteHeight: 4,
    pixelsPerTimeStep: 600,
    minPitch: 30
  };