// chat-message.svelte
<script lang="ts">
	export let role = '';
	export let message = '';
  export let name = '';

	const imgSrc = role === 'assistant' ? '/alfred-headshot.png' : '/batman-headshot.png';

</script>

<li class="flex py-4">
	<img class="h-10 w-10 rounded-full" src={imgSrc} alt="" />
	<div class="ml-3">
		<p class="text-sm font-medium text-gray-900">{name}</p>
		<p class="text-sm text-gray-500">{message}</p>
	</div>
</li>