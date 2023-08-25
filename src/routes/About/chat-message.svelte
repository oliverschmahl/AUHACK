<script lang="ts">
	export let role = '';
	export let message = '';
  export let name = '';

	let imgSrc = '';

	switch(name) {
		case 'Maja':
			imgSrc = '/profiles/maja.png'
			break;
		case 'Alexander':
			imgSrc = '/profiles/alexander.png'
			break;
		case 'Johannes':
			imgSrc = '/profiles/johannes.png'
			break;
		case 'Magnus':
			imgSrc = '/profiles/magnus.png'
			break;
		case 'Oliver':
			imgSrc = '/profiles/oliver.png'
			break;
		case 'Anonomous':
			imgSrc = '/profiles/anonomous.png'
			break;
		case 'Me':
			imgSrc = '/profiles/myProfile.png'
			break;
	}
</script>

	<li class="flex py-2 px-2 bg-violet-300 bg-opacity-20 rounded-lg">
			<img class="h-12 w-12 rounded-full" src={imgSrc} alt="" />
			<div class="ml-3">
				<p class="text-sm font-medium text-white">{name}</p>
				<p class="text-sm font-thin text-violet-200">{message}</p>
			</div>
	</li>