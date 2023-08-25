<script>
    let moon1 = "none";
    let moon2 = "none";
    let moon3 = "none";
    let moon4 = "none";

    function displayMoon1(){
        moon1 = "inherit";
        moon2 = "none";
        moon3 = "none";
        moon4 = "none";
    }
    function displayMoon2(){
        moon2 = "inherit";
        moon3 = "none";
        moon4 = "none";
        moon1 = "none";
    }
    function displayMoon3(){
        moon3 = "inherit";
        moon4 = "none";
        moon1 = "none";
        moon2 = "none";
    }
    function displayMoon4(){
        moon4 = "inherit";
        moon1 = "none";
        moon2 = "none";
        moon3 = "none";
    }
</script>

<div class="content text-white text-center">
    <h2>Your spot to spend time with the Moon</h2>
    <h3>Reflect on your position in the world my Moon Child</h3>
    <button on:click={displayMoon1} class="m-4 bg-purple hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2">Representation 1</button>
    <button on:click={displayMoon2} class="m-4 bg-purple hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2">Representation 2</button>
    <button on:click={displayMoon3} class="m-4 bg-purple hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2">Representation 3</button>
    <button on:click={displayMoon4} class="m-4 bg-purple hover:bg-pink text-lightgrey focus:ring-4 focus:ring-blue-300 font-medium rounded-fancyRadius text-sm px-5 py-2.5 mr-2 mb-2">Representation 4</button>
    
    <div class="w-80 flex justify-center">
        <div style="display:{moon1}">
            <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/l3978y5HqiEtqupiM" width="480" height="422" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
        </div>
        <div style="display:{moon2}; width:200%">
        <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/aN9GqoR7OD3nq" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> </div>  
        </div> 
        <div style="display:{moon3}">
        <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/l0HU7Cs5D0Gbo7G3S" width="480" height="367" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
        </div>
        <div style="display:{moon4}">
        <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/10IIs7CN98Skw0" width="480" height="298" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
        </div>
    </div>
</div>

<p class="p-10">    </p>
<p class="p-10">    </p>
<p class="p-10">    </p>