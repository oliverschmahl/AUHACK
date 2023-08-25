<script>
	import {onMount} from "svelte"
	export let item;
	export let index;
	onMount(()=>console.log("creating component item=",item,"key=",index))
</script>

<style>
    p{
        margin: 0;
        padding: 0.5rem;
		border: 1px solid white;
		cursor: move;
    }
</style>

<p>
	<span>{item.content}</span>
	{item.name}
</p>