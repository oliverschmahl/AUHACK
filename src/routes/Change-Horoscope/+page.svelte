<script lang="ts">

    import SortableList from 'svelte-sortable-list';
    import Component from './component.svelte';
    let loading = 'schild-loading-wide.gif';

    export let myList;
    export let sortList;
    export let newSign; 

    let totalData; 
    let pageOneData; 
    let pageTwoData; 
    let pageThreeData; 
    let zodiacID; 
    let alignment; 
    let price = Math.floor(map_range(Math.random(), 0, 1, 23, 55)); 
    let priceReduction = Math.floor(map_range(Math.random(), 0, 1, 33, 82)); 
    

    let list = [
        {id: 1, name: 'Capricorn',  content: '♑︎'},
        {id: 2, name: 'Aquarius',   content: '♒︎'},
        {id: 3, name: 'Pisces',     content: '♓︎'},
        {id: 4, name: 'Aries',      content: '♈︎'},
        {id: 5, name: 'Taurus',     content: '♉︎'},
        {id: 6, name: 'Gemini',     content: '♊︎'},
        {id: 7, name: 'Cancer',     content: '♋︎'},
        {id: 8, name: 'Leo',        content: '♌︎'},
        {id: 9, name: 'Virgo',      content: '♍︎'},
        {id: 10, name: 'Libra',     content: '♎︎'},
        {id: 11, name: 'Scorpio',   content: '♏︎'},
        {id: 12, name: 'Sagittarius',content: '♐︎'}
    ];

    myList = list;

    // Shuffle array
    myList = myList.sort(() => 0.5 - Math.random());
    // Get sub-array of first n elements after shuffled
    myList = myList.slice(0, 6);

    sortList = ev => {myList = ev.detail};

    function map_range(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    }

    function begin() {
        startCountdown(); 
        document.getElementById("page1").style.display = "block"; 
        document.getElementById('page1').scrollIntoView();
        document.getElementById("page0").style.display = "none"; 
    }

    function pageOneDone() {
        var n = new Array; 
        for (let index = 0; index < myList.length; index++) {
            const element = myList[index];
            console.log(element.id)
            n[index] = element.id
        }
        console.log(n)
        pageOneData = n.slice(3, 5).reduce((a, b) => a + b, 0)-(n.slice(0, 2).reduce((a, b) => a + b, 0));
        console.log(pageOneData)
        totalData = pageOneData; 
        document.getElementById("page2").style.display = "block"; 
        document.getElementById('page2').scrollIntoView();
        document.getElementById("page1").style.display = "none"; 
    };

	let dessertSelected = 'Ice Cream';
	let dessertOptions = [
		'Ice Cream',
		'Chocolate',
		'Liquorice'
	]

	$: console.log('Changed selected:', dessertSelected)
	$: console.log('Updated options:', dessertOptions)


    let beverageSelected = 'Wine';
	let beverageOptions = [
		'Water',
		'Beer',
		'Wine',
        'Tears',
        'Soda',
        'Juice',
        'Cooking oil',
        'Cider',
        'Alcoholfree beer',
        "Nothing, i'll rather die of thirst"

	]

	$: console.log('Changed selected:', beverageSelected)
	$: console.log('Updated options:', beverageOptions)

    let foodSelected = 'Fries';
	let foodOptions = [
		'Fries',
		'Pie',
		'Lasagna',
        'Burger',
        'Pizza',
        'Beef',
        'Steak',
        'Salad',
        'A different kind of salad',
        'Hamburger',
        "Cheeseburger",
        'Hamburger with cheese',
        'Cheeseburger without cheese',
        'Omelet',
        'Frosties',
        'Pasta Carbonara',
        'Pumpkin pie',
        'Potato soup',
        'Tomato soup',
        'Hokaido soup',
        'Carrot soup',
        'Leek soup',
        'Any other kind of soup!'
	]

	$: console.log('Changed selected:', foodSelected)
	$: console.log('Updated options:', foodOptions)


    String.prototype.hashCode = function() {
        var hash = 0,
        i, chr;
        if (this.length === 0) return hash;
        for (i = 0; i < this.length; i++) {
            chr = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
    return hash;
}

function pageTwoDone(){
    let dHash = dessertSelected.hashCode(); 
    let bHash = beverageSelected.hashCode();
    let fHash = foodSelected.hashCode();

    let value = (bHash*fHash) - dHash*2; 
    console.log(value); 
    pageTwoData = Math.floor(Math.sqrt(Math.abs(value)/2)*Math.random()*Math.random())
    console.log(pageTwoData)
    totalData = Math.floor(pageTwoData/(Math.abs(totalData*2)));
    console.log("Total Data", totalData);
    document.getElementById("page3").style.display = "block"; 
    document.getElementById('page3').scrollIntoView();
    document.getElementById("page2").style.display = "none"; 
    calculateZodiacSign(totalData);
    loadingTimer();
    
}
function loadingTimer(){
    setTimeout(function() {
        document.getElementById("page4").style.display = "block"; 
        //document.getElementById('page4').scrollIntoView();
        document.getElementById("page3").style.display = "none"; 
    }, 5000);
}

function calculateZodiacSign(value) {
    let zodiac = Math.floor(map_range(value, 0, 1000000, 0, 11)); 
    console.log(zodiac); 
    if(zodiac > 11) zodiac = 11; 
    if(zodiac < 0) zodiac = 0;
    zodiacID = zodiac; 
    console.log(list[zodiacID].name); 
    newSign = list[zodiacID].name; 
    alignment = Math.floor(map_range(Math.random(), 0, 1, 23, 68)); 
}


var secondsRemaining = 60;
var intervalHandle;


function tick(){
	// grab the h1
	var timeDisplay = document.getElementById("time");
	// concatenate with colon
	var message = secondsRemaining;

	// now change the display
	timeDisplay.innerHTML = message;



	//subtract from seconds remaining
	secondsRemaining--;

    if(message === 0){
        alert("Offer has ended!");
        priceReduction = 0; 
        price = price+100;
        document.getElementById("timer").style.display = "none"; 
        document.getElementById("limitedOffer").style.display = "none"; 
        clearInterval(intervalHandle);

    }
}

function startCountdown(){
	// how many seconds
	secondsRemaining = 4*60;
	
	//every second, call the "tick" function
	// have to make it into a variable so that you can stop the interval later!!!
	    intervalHandle = setInterval(tick, 1000);
}

import { onMount } from 'svelte'

onMount(async () => {
    const buyButton = document.getElementById('buyButton');
    const terms = document.getElementById('terms');
    buyButton?.addEventListener('click', () => {
        if (!terms.checked) {
            return
        }

        window.localStorage.setItem("newSign", newSign);
        window.open('/Get-Certificate', '_self')
    });
})
</script>
<style>
    
    .page{
        margin: 0px, -100px;
        padding: 25px; 
    }

    #page1, #page2, #page3, #page4{
        display: none;
    }

    .container {
    display: flex;
    overflow: hidden !important;
    flex: none;
    width: 100%;
    max-height: 100%;
    flex-flow: column nowrap;
    scroll-snap-type: y mandatory;
    overflow-y: hidden !important; 
    scroll-behavior: auto;
  }

    .container > div {
        scroll-snap-align: start;
        /*height: 100%;
        width: 100%;
        flex: none;
        margin: 10%;*/
    }

    .similar-products{
        display: flex;
        flex-direction: row;
    }

    #timer{
        display: flex;
        flex-direction: row;
        justify-items: end;
    }

    .similar-products > div {
        border: 2px white solid;
        padding: 20px;
        min-width: 250px; 
        min-height: 50px;
    }

    label{
        font-size: 0.8em;
        color: antiquewhite;
    }

    input {
        color: purple;
    }

    .sale{
        border: 2px lightpink solid;
        background-color: darkslateblue;
        width: 50vw;
        margin: 10px;
        padding: 20px;
    }

    #warning{
    border: 3px solid white;
    margin: 3%;
    padding: 5%;
    text-align: center;
    }
</style>








<div class="content text-white">
        <div class="page" id="page0">
            <h2>Zodiac Sign Changer</h2>
            <p>Welcome to the Zodiac Sign Changer</p> 
        
            <p>Here you may change your Zodiac sign, and receive the psychometric benefits of another Zodiac Sign, if you are compatible!</p>
        
            <h3 id="warning" class="bg-purple">
                BEWARE! <br>
                Changing your Zodiac Sign is irreversible. If we find you compatible with a new Zodiac sign and you accept, you may not be able to revert your Zodiac sign unless the cosmos is aligned correctly. 
            </h3>
        
            <p>If you are willing to proceed, press start below</p>
        
            <button on:click={begin} class="m-4 bg-purple hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2">Start</button>
        
        </div>
    <div class="page" id="page1">
        <p>To begin, you must rank the following horoscopes after your preference, so that we may better understand your Ephemeral Proxemics.</p>

        <SortableList 
            list={myList} 
            key="id" 
            on:sort={sortList}
            let:item
            let:index
            >
            <Component {item} {index}/>
        </SortableList>

        <button on:click={pageOneDone} class="m-4 bg-purple hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2">
            Submit
        </button>
    </div>


    <div class="page" id="page2">
        <h2>Choose your preferences</h2>

        <p>Now you must select which of the following foods and beverages you would prefer to consume on a tuesday in february. This will help us understand the amodal properties of your aura</p>

        <label for="">Desserts</label><br>
        <select class="bg-darkBlue text-white" bind:value={dessertSelected}>
            {#each dessertOptions as value}<option {value}>{value}</option>{/each}
        </select><br><br>

        <label for="">Beverages</label><br>
        <select class="bg-darkBlue text-white" bind:value={beverageSelected}>
            {#each beverageOptions as value}<option {value}>{value}</option>{/each}
        </select><br><br>

        <label for="">Main Course</label><br>
        <select class="bg-darkBlue text-white" bind:value={foodSelected}>
            {#each foodOptions as value}<option {value}>{value}</option>{/each}
        </select><br><br>

        <br>
        <br>

        <button on:click={pageTwoDone} class="m-4 bg-purple hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2">
            Submit
        </button>
    </div>

    <div class="page" id="page3">
        <h2>Please wait. We are feeling how your astral planes fit the Zodiac vibrations</h2>

        <img src={loading} alt="Hello">

    </div>

    <div class="page" id="page4">
        <h2>You are {alignment} percent compatible with the {newSign}</h2>
        <p>We have determined that you are compatible with the {newSign}! For a limited time only, while the cosmos is aligned with your astral planes, and you radiate the cosmological energies in the proper frequencies you can change your zodiac sign to the {newSign}</p>
        <br>

        <div class="sale">
            <p style="text-align: right;">limited time only!</p>
            <p style="text-align: right; color: yellow; bacground-color: yellow;">1 left in stock</p>

            <h2 id="limitedOffer" style="text-align: left; color: red;">{priceReduction}% off</h2>
            <h2>One-time offer: Now only ${price}.95</h2> 
            <br><br><br>

            
            <div id="timer">
            <p> Be quick. Offer ends in </p><p id="time">0:00</p> <p> seconds!</p>
            </div>
            <p>{Math.floor(map_range(Math.random(), 0, 1, 2, 5))} people are also looking at this</p>
        

            <button id="buyButton" class="m-4 bg-red-600 text-white hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2">CHANGE NOW</button><br>
            <input type="checkbox" name="terms" id="terms">
            <label id="scummy" for="terms">Accept the terms of purchase and the sharing of your personal information with third parties.</label><br>
            <input type="checkbox" name="newsletter" id="newletter" checked>
            <label id="scummy" for="newletter">Accept to receive our newsletter whenever the cosmos deems it so.</label><br>


        </div>
        <button class="m-4 bg-purple hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2"><a href="http://localhost:5173/">No I prefer to keep my current Zodiac sign</a></button><br>

        <h3>You may also like:</h3>
        <div class="similar-products">
        

            <div class="offer bg-pink">
                Essential Oil <br>
                <input type="checkbox" name="oil" checked>
                <label id="scummy" for="oil">Yes please</label><br>
            </div>

            <div class="offer bg-pink">
                Healing Crystal <br>
                <input type="checkbox" name="crystal">
                <label id="scummy" for="crystal">No thank you</label><br>
            </div>

            <div class="offer bg-pink">
                Dream Catcher <br>
                <input type="checkbox" name="stone">
                <label id="scummy" for="stone">No I do not want to be enlightened!</label><br>
            </div>
        </div>


    </div>
    <div class="page" id="page5">

    </div>
</div>
