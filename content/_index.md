---
# title: 'Automatic Melody Reduction via Shortest Path Finding'
draft: false
menu: "main"
align: justify
---

<script src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.23.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.5.0"></script>
<script src="https://cdn.jsdelivr.net/npm/midi-player-js/dist/MidiPlayer.min.js"></script>
<script src="https://unpkg.com/wavesurfer.js"></script>

<div style="text-align: justify;">

<!-- # Automatic Melody Reduction via Shortest Path Finding -->
## Abstract
Melody reduction, as an abstract representation of musical compositions, could serve as an analytical tool in music theory as well as a useful intermediate feature for automated music understanding and generation. Previous computational music theories, often based on formal music grammar, have struggled to yield melody reductions for practical use, particularly in non-classical genres where traditional music theories do not always apply. In this paper, we introduce a novel computational approach to extract melody reduction under an intuitive graph representation inspired by human cognitive principles, in which edges represent various types of note connections. The melody reduction is achieved using a shortest-path algorithm. We evaluate our algorithm on pop, folk, and classical genres, and experimental results show that the algorithm produces melody reductions that are more faithful to the original melody and more musically coherent than other common melody downsampling methods. Furthermore, we use the melody reductions for downstream music variation generation. Experiments show that our method achieves higher quality than state-of-the-art style transfer methods for symbolic music.


## Melody Reduction Demo
<a id="reduction"></a>

Here we show some melody reduction samples of pop, folk and classical genres. We compare to two baselines as mentioned in paper: DS-OBS and DS-LS.

### Melody 1 (Pop Genre)

<table>
  <tr>
    <th style="background-color: lavender; color: black; width: 50%">
        Original Melody <button id="togglePianorollRedOrg_1" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: lavender; color: black; width: 50%">
        Ours <button id="togglePianorollRedOurs_1" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop1-org-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop1-ours-120.mp3">
        </audio>
    </td>
  </tr>

  <tr>
    <th style="background-color: lavender; color: black; width: 50%">
        Baseline: DS-OBS <button id="togglePianorollRedDSOBS_1" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: lavender; color: black; width: 50%">
        Baseline: DS-LS  <button id="togglePianorollRedDSLS_1" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop1-dsobs-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop1-dsls-120.mp3">
        </audio>
    </td>
  </tr>
</table>
<section id="unfoldPianorollRedOrg_1" class="vis type1" style="display: none">
    <midi-visualizer src="melody_variation_samples/pop1-org-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedOurs_1" class="vis type2" style="display: none">
    <midi-visualizer src="melody_variation_samples/pop1-ours-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedDSOBS_1" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/pop1-dsobs-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedDSLS_1" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/pop1-dsls-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>


<!-- - Original Melody
    <section class="vis type1">
        <audio controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop1-org-120.mp3">
        </audio>
        <midi-visualizer src="melody_variation_samples/pop1-org-120.mid" type="piano-roll" style="position: relative"> 
        </midi-visualizer>
    </section>
    
    <div class="center-stuff">
    <img id="unfoldImage" src="/img/score_annotation.jpeg" style="display: none; width: 90%; margin-bottom: 30px">
    </div>

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
    </section>  -->

### Melody 2 (Pop Genre)
<table>
  <tr>
    <th style="background-color: lavender; color: black; width: 50%">
        Original Melody <button id="togglePianorollRedOrg_2" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: lavender; color: black; width: 50%">
        Ours <button id="togglePianorollRedOurs_2" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop2-org-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop2-ours-120.mp3">
        </audio>
    </td>
  </tr>

  <tr>
    <th style="background-color: lavender; color: black; width: 50%">
        Baseline: DS-OBS <button id="togglePianorollRedDSOBS_2" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: lavender; color: black; width: 50%">
        Baseline: DS-LS  <button id="togglePianorollRedDSLS_2" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop2-dsobs-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/pop2-dsls-120.mp3">
        </audio>
    </td>
  </tr>
</table>
<section id="unfoldPianorollRedOrg_2" class="vis type1" style="display: none">
    <midi-visualizer src="melody_variation_samples/pop2-org-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedOurs_2" class="vis type2" style="display: none">
    <midi-visualizer src="melody_variation_samples/pop2-ours-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedDSOBS_2" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/pop2-dsobs-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedDSLS_2" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/pop2-dsls-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>

<!-- - Original Melody
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
        <midi-visualizer src="melody_variation_samples/pop2-dsls-120.mid" type="piano-roll" id="Vis-2" style="position: relative"> 
        </midi-visualizer>
    </section> 
 -->

### Melody 3 (Folk Genre)
<table>
  <tr>
    <th style="background-color: lavender; color: black; width: 50%">
        Original Melody <button id="togglePianorollRedOrg_3" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: lavender; color: black; width: 50%">
        Ours <button id="togglePianorollRedOurs_3" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk1-org-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk1-ours-120.mp3">
        </audio>
    </td>
  </tr>

  <tr>
    <th style="background-color: lavender; color: black; width: 50%">
        Baseline: DS-OBS <button id="togglePianorollRedDSOBS_3" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: lavender; color: black; width: 50%">
        Baseline: DS-LS  <button id="togglePianorollRedDSLS_3" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk1-dsobs-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk1-dsls-120.mp3">
        </audio>
    </td>
  </tr>
</table>
<section id="unfoldPianorollRedOrg_3" class="vis type1" style="display: none">
    <midi-visualizer src="melody_variation_samples/folk1-org-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedOurs_3" class="vis type2" style="display: none">
    <midi-visualizer src="melody_variation_samples/folk1-ours-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedDSOBS_3" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/folk1-dsobs-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedDSLS_3" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/folk1-dsls-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>

<!-- - Original Melody
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
    </section>  -->

### Melody 4 (Folk Genre)
<table>
  <tr>
    <th style="background-color: lavender; color: black; width: 50%">
        Original Melody <button id="togglePianorollRedOrg_4" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: lavender; color: black; width: 50%">
        Ours <button id="togglePianorollRedOurs_4" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk2-org-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk2-ours-120.mp3">
        </audio>
    </td>
  </tr>

  <tr>
    <th style="background-color: lavender; color: black; width: 50%">
        Baseline: DS-OBS <button id="togglePianorollRedDSOBS_4" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: lavender; color: black; width: 50%">
        Baseline: DS-LS  <button id="togglePianorollRedDSLS_4" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk2-dsobs-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/folk2-dsls-120.mp3">
        </audio>
    </td>
  </tr>
</table>
<section id="unfoldPianorollRedOrg_4" class="vis type1" style="display: none">
    <midi-visualizer src="melody_variation_samples/folk2-org-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedOurs_4" class="vis type2" style="display: none">
    <midi-visualizer src="melody_variation_samples/folk2-ours-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedDSOBS_4" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/folk2-dsobs-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedDSLS_4" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/folk2-dsls-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>

<!-- - Original Melody
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
    </section>  -->

### Melody 5 (Classical Genre)
<table>
  <tr>
    <th style="background-color: lavender; color: black; width: 50%">
        Original Melody <button id="togglePianorollRedOrg_5" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: lavender; color: black; width: 50%">
        Ours <button id="togglePianorollRedOurs_5" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical1-org-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical1-ours-120.mp3">
        </audio>
    </td>
  </tr>

  <tr>
    <th style="background-color: lavender; color: black; width: 50%">
        Baseline: DS-OBS <button id="togglePianorollRedDSOBS_5" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: lavender; color: black; width: 50%">
        Baseline: DS-LS  <button id="togglePianorollRedDSLS_5" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical1-dsobs-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical1-dsls-120.mp3">
        </audio>
    </td>
  </tr>
</table>
<section id="unfoldPianorollRedOrg_5" class="vis type1" style="display: none">
    <midi-visualizer src="melody_variation_samples/classical1-org-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedOurs_5" class="vis type2" style="display: none">
    <midi-visualizer src="melody_variation_samples/classical1-ours-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedDSOBS_5" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/classical1-dsobs-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedDSLS_5" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/classical1-dsls-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>

<!-- - Original Melody
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
    </section>  -->

### Melody 6 (Classical Genre)
<table>
  <tr>
    <th style="background-color: lavender; color: black; width: 50%">
        Original Melody <button id="togglePianorollRedOrg_6" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: lavender; color: black; width: 50%">
        Ours <button id="togglePianorollRedOurs_6" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical2-org-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical2-ours-120.mp3">
        </audio>
    </td>
  </tr>

  <tr>
    <th style="background-color: lavender; color: black; width: 50%">
        Baseline: DS-OBS <button id="togglePianorollRedDSOBS_6" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: lavender; color: black; width: 50%">
        Baseline: DS-LS  <button id="togglePianorollRedDSLS_6" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical2-dsobs-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/classical2-dsls-120.mp3">
        </audio>
    </td>
  </tr>
</table>
<section id="unfoldPianorollRedOrg_6" class="vis type1" style="display: none">
    <midi-visualizer src="melody_variation_samples/classical2-org-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedOurs_6" class="vis type2" style="display: none">
    <midi-visualizer src="melody_variation_samples/classical2-ours-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedDSOBS_6" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/classical2-dsobs-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollRedDSLS_6" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/classical2-dsls-120.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>

<!-- - Original Melody
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




 -->

## Melody Variation Demo

<a id="variation"></a>

To evaluate the effectiveness of the melody reduction for downstream music generation tasks, we use the melody reduction as an intermediate feature for music variation generation. Here we show some melody variation samples comparing the generation model trained with our algorithm and two baselines.

### Example 1
<table>
  <tr>
    <th style="background-color: cornsilk; color: black; width: 50%">
        Original Melody <button id="togglePianorollVarOrg_1" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: cornsilk; color: black; width: 50%">
        Ours <button id="togglePianorollVarOurs_1" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/chorus2-gt-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/chorus2-ours-120.mp3">
        </audio>
    </td>
  </tr>

  <tr>
    <th style="background-color: cornsilk; color: black; width: 50%">
        Baseline: DS-OBS <button id="togglePianorollVarDSOBS_1" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: cornsilk; color: black; width: 50%">
        Baseline: DS-LS  <button id="togglePianorollVarEC2VAE_1" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/chorus2-ds-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/chorus2-ec2-120.mp3">
        </audio>
    </td>
  </tr>
</table>
<section id="unfoldPianorollVarOrg_1" class="vis type1" style="display: none">
    <midi-visualizer src="melody_variation_samples/chorus2-gt.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollVarOurs_1" class="vis type2" style="display: none">
    <midi-visualizer src="melody_variation_samples/chorus2-ours.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollVarDSOBS_1" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/chorus2-ds.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollVarEC2VAE_1" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/chorus2-ec2.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>

<!-- - Human Composition
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
    </section>  -->

### Example 2
<table>
  <tr>
    <th style="background-color: cornsilk; color: black; width: 50%">
        Original Melody <button id="togglePianorollVarOrg_2" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: cornsilk; color: black; width: 50%">
        Ours <button id="togglePianorollVarOurs_2" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/verse1-gt-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ours" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/verse1-ours-120.mp3">
        </audio>
    </td>
  </tr>

  <tr>
    <th style="background-color: cornsilk; color: black; width: 50%">
        Baseline: DS-OBS <button id="togglePianorollVarDSOBS_2" class="btn">Show Piano Roll</button>
    </th>
    <th style="background-color: cornsilk; color: black; width: 50%">
        Baseline: DS-LS  <button id="togglePianorollVarEC2VAE_2" class="btn">Show Piano Roll</button>
    </th>
  </tr>
  <tr>
    <td>
        <audio id="audio-2-ds" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/verse1-ds-120.mp3">
        </audio>
    </td>
    <td>
        <audio id="audio-2-ec2" controls controlsList="nodownload" preload="none">
            <source src="melody_variation_samples/verse1-ec2-120.mp3">
        </audio>
    </td>
  </tr>
</table>
<section id="unfoldPianorollVarOrg_2" class="vis type1" style="display: none">
    <midi-visualizer src="melody_variation_samples/verse1-gt.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollVarOurs_2" class="vis type2" style="display: none">
    <midi-visualizer src="melody_variation_samples/verse1-ours.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollVarDSOBS_2" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/verse1-ds.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>
<section id="unfoldPianorollVarEC2VAE_2" class="vis type3" style="display: none">
    <midi-visualizer src="melody_variation_samples/verse1-ec2.mid" type="piano-roll" style="position: relative"> 
    </midi-visualizer>
</section>


<script src="js/midi-vis.js"></script>

<script src="js/button.js"></script>

</div>