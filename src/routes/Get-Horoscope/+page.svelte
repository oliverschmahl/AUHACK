<script lang="js">
  import { onMount } from 'svelte'

  const adjectives = ["unreliable", "Amodal", "Primary", "secondary", "Hybrid", "Proxemic", "Haptic", "Somaesthetic", "Social", "Speculative", "Alien ethnographic", "Semiotic", "Extruding", "Augmenting", "Participatory", "Semistructured", "Heuristic", "Intuitive", "Foveal", "Appropriate", "extended"];
  const nouns = ["Transactional segments", "Reference space", "F-formations", "Constellations", "Psychophysics", "Psychometric function", "Perception", "Presence", "Copresence", "Interpersonal distances", "Primary space", "Secondary space", "Interdependancy", "Weight", "Proxemic distances", "Proxemic interactions", "Proximity", "Social contract", "Somaesthetics", "Tactons", "Preattentive processing", "Pacinian corpuscle", "Stages of action", "Android lifecycle", "Locus of attention", "Gaze", "Waveforms", "Scenografic social", "Fused deposition modeling", "Ninjaflex", "PACT", "PEST", "Y-model" , "Fitts' Law", "Stages of action" , "Affordance" , "Bridge of execution", "Low Fidelity", "Prototype", "Stereognosis", "Musicon", "Quadrant", "Ephemeral presence", "Perceptron", "Retina", "Convolutional Deep Belief Network", "Catastrophic Forgetting", "Proprioception"];

  var horoscope = [
      {
          adjectives: 7,
          nouns: 9,
          aValue: [],
          nValue: []
      },
      {
          adjectives: 7,
          nouns: 8,
          aValue: [],
          nValue: []
      }
  ]

  function printHoroscope(i){
      var aValue = horoscope[i].aValue;
      var nValue = horoscope[i].nValue;
      const template = ["The next " + adjectives[aValue[0]] + " moon phase will enlighten your "+adjectives[aValue[1]]+" "+nouns[nValue[0]]+" and provide "+adjectives[aValue[2]]+" balance to the "+adjectives[aValue[3]]+" "+nouns[nValue[1]]+" that negatively affect your "+nouns[nValue[2]]+". "+nouns[nValue[3]]+" will guide you as you challenge yourself with other "+adjectives[aValue[4]]+" "+nouns[nValue[4]]+" and leave behind "+nouns[nValue[5]]+". Do not worry about "+adjectives[aValue[5]]+" "+nouns[nValue[6]]+", as it has no power over your "+adjectives[aValue[6]]+" "+nouns[nValue[7]]+" once you have meditated with "+nouns[nValue[8]]+".",

          "You will experience disturbances in your " + adjectives[aValue[0]] + " " + nouns[nValue[0]] + " as the " + adjectives[aValue[1]]+ " " + nouns[nValue[1]] + " gets exposed to an astral " + nouns[nValue[2]] + ". You can either approach this by exploring " + nouns[nValue[3]] + " in yourself and seek " + nouns[nValue[4]] + " in the " + adjectives[aValue[2]] + " relations you form or consult your "+adjectives[aValue[3]]+" "+nouns[nValue[5]]+". Until the next "+adjectives[aValue[4]]+" moon phase, be open to "+adjectives[aValue[5]]+" "+nouns[nValue[6]]+" in the "+adjectives[aValue[6]]+" "+nouns[nValue[7]]+". But hold on, it will be over soon enough."
          ];
      return(template[i]);
  }

  function prepRandomHoroscope(i){
      for(let j = 0; j < horoscope[i].adjectives; j++){
          let tempvalue =  Math.floor(Math.random() * adjectives.length);

          if(horoscope[i].aValue.includes(tempvalue)){
           j--;
          }
          horoscope[i].aValue[j] = tempvalue;

      }

      for(let j = 0; j < horoscope[i].nouns; j++){
      let tempvalue =  Math.floor(Math.random() * nouns.length);

      if(horoscope[i].nValue.includes(tempvalue)){
          j--;
      }
      horoscope[i].nValue[j] = tempvalue;

      }
  }

  function outputHoroscope(i){
      prepRandomHoroscope(i);
      return printHoroscope(i);
  }

  let templateNumber = Math.floor(Math.random() * horoscope.length);
  // let message = outputHoroscope(templateNumber);


  let showHoroscope = "none";
  let showInvalid = "none";
  let message = "";
  onMount(async () => {
    const submit = document.getElementById('submitKey')
    submit?.addEventListener("click", async () => {
        const keyField = document.getElementById('spiritualKey')
        if (!window.localStorage.getItem(keyField.value)) {
            showInvalid = "inherit"
            showHoroscope = "none"
            return
        }

        if (window.localStorage.getItem(keyField.value) === "true") {
            window.localStorage.setItem(keyField.value, outputHoroscope(templateNumber))
        }

        message = window.localStorage.getItem(keyField.value)
        showInvalid = "none"
        showHoroscope = "inherit"
    })
  })
</script>

<div class="content">
  <div class="text-center">
  <h2 class="pb-10">Input your spiritual key</h2>
    <input type="text" id="spiritualKey" autocomplete="off" placeholder="Input spiritual key" required><br>
    <button id="submitKey" class="m-4 bg-purple hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2">Get your horoscope</button>
  </div>

  <p id="horoscope-output" style="display: {showHoroscope};" class="text-center pt-10">{message}</p>
  <h3 id="invalid-key" class="text-center pt-10" style="display: {showInvalid};">Invalid Spiritual Key</h3>
</div>
<p class="p-10">    </p>
<p class="p-10">    </p>
<p class="p-10">    </p>
