
<script>
  let display1 = "inherit";
  let display2 = "none";
  let display3 = "none";
  let loading = "none";
  let more_info = "none";
  let spiritualKey = "none";
  let spiritual_more_info = "none";

  function handleClick1(){
    display1 = "none";
    display2 = "inherit";
  }

  function handleClick2(){
    display2 = "none";
    loading = "inherit";
    delayTime();
  }

  function handleClick3(){
    more_info = "none";
    display3 = "inherit";
  }

  function handleRetry(){
    spiritual_more_info = "none";
    display1 = "inherit";
  }

  function delayTime(){
    setTimeout(function() {
      loading = "none";
      more_info = "inherit";
    }, 5000);
   }

  import { getHash } from "emoji-hash-gen"
  import { onMount } from 'svelte'

  onMount(async () => {
    const schoolField = document.querySelector("#school")
    const petField = document.querySelector("#pet")
    const numberField = document.querySelector("#number")
    const mothersField = document.querySelector("#mothers")
    const astrologicalField = document.querySelector("#astrological")
    const carField = document.querySelector("#car")
    const movieField = document.querySelector("#movie")
    const foodField = document.querySelector("#food")

    // window.localStorage.getItem("school") ? schoolField.value = window.localStorage.getItem("school") : null
    // window.localStorage.getItem("pet") ? petField.value = window.localStorage.getItem("pet") : null
    // window.localStorage.getItem("number") ? numberField.value = window.localStorage.getItem("number") : null
    // window.localStorage.getItem("mothers") ? mothersField.value = window.localStorage.getItem("mothers") : null
    // window.localStorage.getItem("astrological") ? astrologicalField.value = window.localStorage.getItem("astrological") : null
    // window.localStorage.getItem("car") ? carField.value = window.localStorage.getItem("car") : null
    // window.localStorage.getItem("movie") ? movieField.value = window.localStorage.getItem("movie") : null
    // window.localStorage.getItem("food") ? foodField.value = window.localStorage.getItem("food") : null

    const submitQuestions = document.querySelector("#submitQuestions")
    submitQuestions.addEventListener("click", (e) => {
      display3 = "none";
      loading = "inherit";


      /*window.localStorage.getItem("school") ? null :*/ schoolField.value === ""? null : window.localStorage.setItem("school", schoolField.value)
      /*window.localStorage.getItem("pet") ? null :*/ petField.value === ""? null : window.localStorage.setItem("pet", petField.value)
      /*window.localStorage.getItem("number") ? null :*/ numberField.value === ""? null : window.localStorage.setItem("number", numberField.value)
      /*window.localStorage.getItem("mothers") ? null :*/ mothersField.value === ""? null : window.localStorage.setItem("mothers", mothersField.value)
      /*window.localStorage.getItem("astrological") ? null :*/ astrologicalField.value === ""? null : window.localStorage.setItem("astrological", astrologicalField.value)
      /*window.localStorage.getItem("car") ? null :*/ carField.value === ""? null : window.localStorage.setItem("car", carField.value)
      /*window.localStorage.getItem("movie") ? null :*/ movieField.value === ""? null : window.localStorage.setItem("movie", movieField.value)
      /*window.localStorage.getItem("food") ? null :*/ foodField.value === ""? null : window.localStorage.setItem("food", foodField.value)

      if (window.localStorage.getItem("school") && window.localStorage.getItem("pet") && window.localStorage.getItem("number") && window.localStorage.getItem("mothers") && window.localStorage.getItem("astrological") && window.localStorage.getItem("car") && window.localStorage.getItem("movie") && window.localStorage.getItem("food")) {
        setTimeout(function() {
          loading = "none";
          spiritualKey = "inherit";
        }, 3000);  
        window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(window.localStorage.getItem("school") + window.localStorage.getItem("pet") + window.localStorage.getItem("number") + window.localStorage.getItem("mothers") + window.localStorage.getItem("astrological") + window.localStorage.getItem("car") + window.localStorage.getItem("movie") + window.localStorage.getItem("food"))).then((hash) => {
          const key = getHash([...new Uint8Array(hash)].map(x => x.toString(16).padStart(2, '0')).join(""))
          if (!window.localStorage.getItem(key)) {
            window.localStorage.setItem(getHash([...new Uint8Array(hash)].map(x => x.toString(16).padStart(2, '0')).join("")), "true")
          }
          const keyField = document.querySelector("#key")
          keyField.innerHTML = key
        })
      } else {
        setTimeout(function() {
          loading = "none";
          spiritual_more_info = "inherit";
        }, 3000);  
      }
    })
  })
</script>

<div class="content">    
  <div class='pb-5'>
    <h2 class="text-center text-white font-bold">We invite you to join the journey into enlightenment</h2>
  </div>

  <div class="p-1 border-2 border-white bg-darkBlue">
    <div class="border-2 border-white">
      <div class="text-center text-white page_content">

        <div style="display:{display1}">
          <h3 class="p-6">Receive divine celestrial knowledge</h3>
          <p>We will need to know important information to ensure the horoscope is appropriately created to best guide you in your journey to inner divine discovery.</p>
          <button on:click={handleClick1} class="m-4 bg-purple hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2">Receive enlightenment</button>
        </div>

        <div style="display:{display2}">
          <form action="">
            <label for="">Favorite movie</label><br>
            <input class="bg-darkBlue" type="text" id="movie" placeholder="Input favorite movie name" required><br><br>
            <label for="">favorite food</label><br>
            <input class="bg-darkBlue" type="text" id="food" placeholder="Input favorite food" required>
            <br><br>
            <label for="">Your favorite zodiac sign</label><br>
            <select class="bg-darkBlue" name="sign" id="astrological" placeholder="Input favorite sign" required>
              <option value="aries">Aries</option>
              <option value="taurus">Taurus</option>
              <option value="gemini">Gemini</option>
              <option value="cancer">Cancer</option>
              <option value="leo">Leo</option>
              <option value="virgo">Virgo</option>
              <option value="libra">Libra</option>
              <option value="scorpio">Scorpio</option>
              <option value="sagittarius">Sagittarius</option>
              <option value="capricorn">Capricorn</option>
              <option value="aquarius">Aquarius</option>
              <option value="pisces">Pisces</option>
            </select>             <br><br>
            <label for="">Your favorite number</label><br>
            <input class="bg-darkBlue" type="number" id="number" value='4' required><br><br>
          </form>          
          <button on:click={handleClick2} class="m-4 bg-purple hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2">Receive enlightenment</button>
        </div>

        <div style="display:{display3}">
          <form action="">
            <label for="">Your first school</label><br>
            <input class="bg-darkBlue" type="text" id="school" placeholder="Input school name" required> <br><br>
            <label for="">The name of your first pet</label><br>
            <input class="bg-darkBlue" type="text" id="pet" placeholder="Input pet name" required><br><br>
            <label for="">Your mothers maiden name</label><br>
            <input class="bg-darkBlue" type="text" id="mothers" placeholder="Input maiden name" required> <br><br>
            <label for="">Licence plate of the first car you owned</label><br>
            <input class="bg-darkBlue" type="text" id="car" placeholder="Input licence plate number" required>
          </form>
          <button id="submitQuestions" class="m-4 bg-purple hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2">Receive enlightenment</button>
        </div>

        <div class="text-center flex" style="display:{loading}">
          <h3>Loading</h3>
          <div class="w-80">
            <div style="padding-top:100.000%;position:relative;"><iframe src="https://gifer.com/embed/b2M" width="100%" height="100%" style='position:absolute;top:0;left:185px;' frameBorder="0" allowFullScreen></iframe></div>
          </div>
        </div>  

        <div class="text-center" style="display:{more_info}">
          <h3>More information is needed for best possible guidance</h3>
          <button on:click={handleClick3} class="m-4 bg-purple hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2">Receive enlightenment</button>
        </div>

        <div class="text-center flex" style="display:{spiritualKey}">
          <h3>Your Spiritual Key</h3>
          <h3 id="key" class="my-8">key</h3>
          <a href="/Get-Horoscope" class="m-4 bg-purple hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2">Read your horoscope</a>
        </div>

        <div class="text-center" style="display:{spiritual_more_info}">
          <h3>More information is needed to find you Spiritual Key</h3>
          <button on:click={handleRetry} class="m-4 bg-purple hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2">Receive enlightenment</button>
        </div>
      </div>
    </div>
  </div>

  <img src="/images/moon_phases.svg" alt="">

  <div class="mt-10 mb-10 py-4 px-10 border-y-4 border-white text-center">
    <h3>We are an enlightened collective dedicated to soften the division between organic and electronic knowledge. We believe in celestial intelligence and proxemic inter-relational spirit transfers. As a guiding light we follow our blessed leader and mentor Kaj Grønbæk and his eternal wisdom.</h3>
    <h3>Join us and receive abundance in divine transcendence.</h3>
 
  </div>
</div>
