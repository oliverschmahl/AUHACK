<script lang="ts">
  import ChatMessage from './chat-message.svelte';
	import { afterUpdate, tick } from 'svelte';
  interface ChatMessage{
    role: string;
    content: string;
  }

	interface ChatMessageMeta{
    role: string;
    content: string;
		name: string;
  }

	let element;
  let maja = "You are Maja a soul stone expert and spirit sculptor. You only respond in a haiku format, and always attempt to reference a rainbows or unicorns. You cannot reply with more than 70 words.";
  let johannes = "You are Johannes an adept practitioner of astrological interpretations and a salesman of essential oils. You always prefer the Virgo as a Zodiac sign, and despise the Pisces, without giving a good reason. Your respond must be a palindrome and every response is influenced by Finnish culture. You cannot reply with more than 70 words.";
  let alexander = "You are Alexander, a dream guide and wind reader with broad knowledge about astrology. You respond with a mysteries language using scottish slang and always in all caps. You cannot reply with more than 70 words.";
  let magnus = "You are Magnus a numerologist who is convinced that 4 undoubtedly is the best and most important number of all numbers, and you will defend your position with aggressive remarks. No matter the conversation you will always make sure to include a remark about the importance of 4. You cannot reply with more than 70 words.";
  let oliver = "You are Oliver, an astrology expert that respond with a mysteries and vague language using frat slang. Replies needs to include rhymes about ethereal travel. You cannot reply with more than 70 words.";
  let anonomous = "You are a sassy expert in astrology, zodiac signs and horoscopes that responds with a mysteries and vague language. You cannot reply with more than 70 words.";

	let maja_start = "A gleaming tourmaline, Radiant in hues of green. Welcome, dear friend. Ask me anything you desire!";
  let johannes_start = "Ah yes, a new disciple. Are you here to learn of the wonders of essential oils and other aromatics? Hopefully you are not a Pisces!";
  let alexander_start = "GREETINGS, TRAVELLER! YE'VE COME TAE THE RIGHT PLACE IN SEARCH OF GUIDANCE ON THE PATH OF DREAMS AND ASTROLOGY. WHAT MYSTERIES DO YE WISH TAE UNRAVEL?";
  let magnus_start = "Hello there! Did you know that the number 4 is the most important number of all? It represents stability, balance, and a strong foundation for success. What brings you here today?";
	let oliver_start = "Greetings, my dude! Sit back, relax, and let's chat about ethereal travel and cosmic vibrations!"
	let anonomous_start = "Greeting, my dear. What cosmic inquiry do you seek guidance from the stars today?"

	let text = `Message our licensed astrology experts to learn more about you spiritual place in the universe!`;
  let input = '';
	let currentProfile = "Anonomous";
	let myProfile = "Me"
  let newMessage: string;
  let messages: ChatMessage[] = [
    {role: "system", content: anonomous}
  ]
	 let messagesMeta: ChatMessageMeta[] = [
    {role: "system", content: anonomous_start, name: currentProfile}
  ]

	afterUpdate(() => {
		if(messagesMeta) scrollToBottom(element);
  });

	$: if(messagesMeta && element) {
		scrollToBottom(element);
	}

  async function chat() {
    messages = [
      ...messages,
      {role: "user", content: newMessage}
    ]

		messagesMeta = [
      ...messagesMeta,
      {role: "user", content: newMessage, name: myProfile}
    ]

    const res = await fetch('/About', {
      method: 'POST',
      body: JSON.stringify({messages})
    });

    const chatGPTMessage = await res.json();

    messages = [
      ...messages,
      chatGPTMessage
    ]

		const chatGPTMessageMeta: ChatMessageMeta = chatGPTMessage;
		chatGPTMessageMeta["name"] = currentProfile;

		messagesMeta = [
      ...messagesMeta,
      chatGPTMessageMeta
    ]
  }

  function sendMessage(){
    newMessage = input;
		input = "";
    chat();
  }

	function selectProfile(name: string) {
		if(name != null) {
			currentProfile = name;
			switch(currentProfile) {
			case 'Maja':
				messages = [{role: "system", content: maja}]
				messagesMeta = [{role: "system", content: maja_start, name: currentProfile}]
				break;
			case 'Alexander':
				messages = [{role: "system", content: alexander}]
				messagesMeta = [{role: "system", content: alexander_start, name: currentProfile}]
				break;
			case 'Johannes':
				messages = [{role: "system", content: johannes}]
				messagesMeta = [{role: "system", content: johannes_start, name: currentProfile}]
				break;
			case 'Magnus':
				messages = [{role: "system", content: magnus}]
				messagesMeta = [{role: "system", content: magnus_start, name: currentProfile}]
				break;
			case 'Oliver':
				messages = [{role: "system", content: oliver}]
				messagesMeta = [{role: "system", content: oliver_start, name: currentProfile}]
				break;
			case 'Anonomous':
				messages = [{role: "system", content: anonomous}]
				messagesMeta = [{role: "system", content: anonomous_start, name: currentProfile}]
				break;
			}
		}
	}

	const scrollToBottom = async (node) => {
    node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
  };

</script>
<div class="content">
  <div class="page_content" style="margin: 2% -20%">
    <h2 class="pb-10">Select your spiritual guide for this seanse! </h2>
    <div class="flex justify-evenly text-center">
    <div on:click={() => selectProfile("Alexander")} class="w-40 hover:bg-opacity-10 hover:bg-white rounded-lg">
      <img class="rounded-full" src="/profiles/alexander.png" alt="">
      <h3>Alexander</h3>
      <p>Dream-guide and windreader</p>
    </div>
    <div on:click={() => selectProfile("Johannes")} class="w-40 hover:bg-opacity-10 hover:bg-white rounded-lg">
      <img class="rounded-full" src="/profiles/johannes.png" alt="">
      <h3>Johannes</h3>
      <p>Essential oil alchemist and is aromatic</p>
    </div>
    <div on:click={() => selectProfile("Oliver")} class="w-40 hover:bg-opacity-10 hover:bg-white rounded-lg">
      <img  class="rounded-full" src="/profiles/oliver.png" alt="">
      <h3>Oliver</h3>
      <p>Cosmos vibrational empath and ethereal traveller</p>
    </div>
    <div on:click={() => selectProfile("Magnus")} class="w-40 hover:bg-opacity-10 hover:bg-white rounded-lg">
      <img class="rounded-full" src="/profiles/magnus.png" alt="">
      <h3>Magnus</h3>
      <p>Expert in the number 4</p>
      <p style="display:none">"People usually look for 3, however the number 4 provide unknown affordances"</p>
    </div>
    <div on:click={() => selectProfile("Maja")} class="w-40 hover:bg-opacity-10 hover:bg-white rounded-lg">
      <img class="rounded-full" src="/profiles/maja.png" alt="">
      <h3>Maja</h3>
      <p>Soul stone guide and spirit sculptor</p>
    </div>
  </div>

	<div bind:this={element} class="overflow-y-auto h-72">
	  <ul class="divide-y divide-gray-200">
	{#if messagesMeta.length > 0}
    {#key messagesMeta}
      {#each messagesMeta as message}
        <ChatMessage role={message.role} message={message.content} name={message.name} />
      {/each}
    {/key}
	{/if}
</ul>


</div>

<form class="mt-4">
	<div class="relative mt-1 flex items-center">
		<input
			bind:value={input}
			type="text"
			name="search"
			id="search"
      autocomplete="off"
			class="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
		/>
		<button
			on:click={sendMessage}
			type="submit"
			class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5"
		>
			<kbd
				class="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400"
				>Enter</kbd
			>
		</button>
	</div>
</form>


  </div>

</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>