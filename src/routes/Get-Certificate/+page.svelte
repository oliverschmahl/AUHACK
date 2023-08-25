<svelte:head>
    <script src="https://unpkg.com/pdf-lib/dist/pdf-lib.min.js"></script>
    <script src="https://unpkg.com/@pdf-lib/fontkit/dist/fontkit.umd.min.js"></script>
    <script defer src="/js/signature.js"></script>
    <script defer type="module" src="/js/pdf-lib.js"></script>
</svelte:head>

<div style="text-align: center;">
    <h3>Congratulations on changing your Zodiac Sign.</h3>
    <p>Please keep this certificate at your person at all times.</p>
    <p>You have been billed through your IP-address.</p>
</div>
<h2>Signing certificate...</h2>
<svg id="canvas" style="width:100%;height:30vh;background-color:white;" class="rounded-3xl">
    <path d="M 50,250 h650" pathLength="10" style="fill:none;stroke:black;stroke-width:3;"/>
    <path id="path" d=""></path>
</svg>


