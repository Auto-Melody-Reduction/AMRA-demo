---
# title: 'Automatic Melody Reduction via Shortest Path Finding'
draft: false
menu: "main"
align: justify
---

<script src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.23.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.5.0"></script>
<script src="https://cdn.jsdelivr.net/npm/midi-player-js/dist/MidiPlayer.min.js"></script>
<script src="https://unpkg.com/wavesurfer.js"></script>

<script src="js/midi-audio.js"></script>

<div style="text-align: justify;">

<!-- # Automatic Melody Reduction via Shortest Path Finding -->
## Abstract
Melody reduction, as an abstract representation of musical compositions, could serve as an analytical tool in music theory as well as a useful intermediate feature for automated music understanding and generation. Previous computational music theories, often based on formal music grammar, have struggled to yield melody reductions for practical use, particularly in non-classical genres where traditional music theories do not always apply. In this paper, we introduce a novel computational approach to extract melody reduction under an intuitive graph representation inspired by human cognitive principles, in which edges represent various types of note connections. The melody reduction is achieved using a shortest-path algorithm. We evaluate our algorithm on pop, folk, and classical genres, and experimental results show that the algorithm produces melody reductions that are more faithful to the original melody and more musically coherent than other common melody downsampling methods. Furthermore, we use the melody reductions for downstream music variation generation. Experiments show that our method achieves higher quality than state-of-the-art style transfer methods for symbolic music.


## Melody Reduction Demo
<a id="reduction"></a>

Here we show some melody reduction samples of pop, folk and classical genres. We compare to two baselines as mentioned in paper: DS-OBS and DS-LS.

### Melody 1 (Pop Genre)

- Original Melody
    <section class="vis type1">
        <audio controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop1-org-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/pop1-org-120.mid" type="piano-roll" style="position: relative"> 
        </midi-visualizer>
    </section>

- Ours
    <section class="vis type2">
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop1-ours-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/pop1-ours-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>


- Baseline: DS-OBS
    <section class="vis type3">
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop1-dsobs-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/pop1-dsobs-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Baseline: DS-LS
    <section class="vis type3">
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop1-dsls-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/pop1-dsls-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section> 

### Melody 2 (Pop Genre)

- Original Melody
    <section class="vis type1">
        <audio controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop2-org-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/pop2-org-120.mid" type="piano-roll" style="position: relative"> 
        </midi-visualizer>
    </section>

- Ours
    <section class="vis type2">
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop2-ours-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/pop2-ours-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Baseline: DS-OBS
    <section class="vis type3">
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop2-dsobs-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/pop2-dsobs-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Baseline: DS-LS
    <section class="vis type3">
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop2-dsls-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/pop2-dsls-1201.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section> 


### Melody 3 (Folk Genre)

- Original Melody
    <section class="vis type1">
        <audio controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk1-org-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/folk1-org-120.mid" type="piano-roll" style="position: relative"> 
        </midi-visualizer>
    </section>

- Ours
    <section class="vis type2">
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk1-ours-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/folk1-ours-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Baseline: DS-OBS
    <section class="vis type3">
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk1-dsobs-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/folk1-dsobs-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Baseline: DS-LS
    <section class="vis type3">
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk1-dsls-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/folk1-dsls-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section> 

### Melody 4 (Folk Genre)

- Original Melody
    <section class="vis type1">
        <audio controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk2-org-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/folk2-org-120.mid" type="piano-roll" style="position: relative"> 
        </midi-visualizer>
    </section>

- Ours
    <section class="vis type2">
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk2-ours-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/folk2-ours-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Baseline: DS-OBS
    <section class="vis type3">
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk2-dsobs-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/folk2-dsobs-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Baseline: DS-LS
    <section class="vis type3">
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk2-dsls-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/folk2-dsls-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section> 

### Melody 5 (Classical Genre)

- Original Melody
    <section class="vis type1">
        <audio controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical1-org-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/classical1-org-120.mid" type="piano-roll" style="position: relative"> 
        </midi-visualizer>
    </section>

- Ours
    <section class="vis type2">
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical1-ours-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/classical1-ours-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Baseline: DS-OBS
    <section class="vis type3">
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical1-dsobs-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/classical1-dsobs-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Baseline: DS-LS
    <section class="vis type3">
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical1-dsls-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/classical1-dsls-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section> 

### Melody 6 (Classical Genre)

- Original Melody
    <section class="vis type1">
        <audio controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical2-org-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/classical2-org-120.mid" type="piano-roll" style="position: relative"> 
        </midi-visualizer>
    </section>

- Ours + Diff.
    <section class="vis type2">
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical2-ours-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/classical2-ours-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Baseline: DS-OBS + Diff.
    <section class="vis type3">
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical2-dsobs-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/classical2-dsobs-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Baseline: EC2-VAE Sampling
    <section class="vis type3">
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical2-dsls-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/classical2-dsls-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section> 






## Melody Variation Demo

<a id="variation"></a>

To evaluate the effectiveness of the melody reduction for downstream music generation tasks, we use the melody reduction as an intermediate feature for music variation generation. Here we show some melody variation samples comparing the generation model trained with our algorithm and two baselines.

### Example 1

- Human Composition
    <section class="vis type1">
        <audio id="audio-2-gt" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/chorus2-gt-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/chorus2-gt.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Ours + Diff.
    <section class="vis type2">
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/chorus2-ours-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/chorus2-ours.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Baseline: DS-OBS + Diff.
    <section class="vis type3">
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/chorus2-ds-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/chorus2-ds.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Baseline: EC2-VAE Sampling
    <section class="vis type3">
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/chorus2-ec2-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/chorus2-ec2.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section> 

### Example 2

- Human Composition
    <section class="vis type1">
        <audio id="audio-3-gt" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/verse1-gt-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/verse1-gt.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Ours + Diff.
    <section class="vis type2">
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/verse1-ours-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/verse1-ours.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Baseline: DS-OBS + Diff.
    <section class="vis type3">
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/verse1-ds-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/verse1-ds.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section>

- Baseline: EC2-VAE Sampling
    <section class="vis type3">
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/verse1-ec2-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/verse1-ec2.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section> 




<script>
    prs = document.querySelectorAll("midi-visualizer");
    for (let i = 0; i < prs.length; i++) {
        prs[i].config = {
            noteHeight: 2,
            pixelsPerTimeStep: 55,
        };
    };
</script>

</div>