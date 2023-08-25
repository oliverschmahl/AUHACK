<script lang="ts">

  import ChatMessage from './chat-message.svelte';
  interface ChatMessage{
    role: string;
    content: string;
  }
  let maja = "";
  let johannes = "";
  let alexander = "";
  let magnus = "";
  let oliver = "You are Oliver, a very mellow astrology expert. You respond with a mysteries language using frat slang ";
  let expert = "You are a sassy expert in astrology, zodiac signs and horoscopes that responds with a mysteries and vague language.";

	let text = `Message our licensed astrology experts to learn more about you spiritual place in the universe!`;
  let input = '';
  let newMessage: string;
  let messages: ChatMessage[] = [
    {role: "system", content: oliver}
  ]

  async function chat() {
    messages = [
      ...messages,
      {role: "user", content: newMessage}
    ]

    console.log("messages: " + JSON.stringify(messages))

    const res = await fetch('/About', {
      method: 'POST',
      body: JSON.stringify({messages})
    });

    const chatGPTMessage = await res.json();
    console.log("chatGPTmessage: " + JSON.stringify(chatGPTMessage))

    messages = [
      ...messages,
      chatGPTMessage
    ]
  }

  function sendMessage(){
    newMessage = input;
    chat();
  }
</script>

<h1>Welcome to About</h1>
<p> message: {newMessage} </p>
<p> messages: {JSON.stringify(messages)} </p>

<ul class="divide-y divide-gray-200">
	{#if messages.length > 0}
		{#each messages as message}
			<ChatMessage role={message.role} message={message.content} />
		{/each}
	{/if}
</ul>

<form class="mt-4">
	<div class="relative mt-1 flex items-center">
		<input
			bind:value={input}
			type="text"
			name="search"
			id="search"
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






<div class="max-w-2xl mx-auto">
	<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={text} bind:value={input}></textarea>

  <div class="text-right">
    <button on:click={sendMessage} type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">Submit</button>
  </div>
  <p class="mt-5">This textarea bar component is part of a larger, open-source library of Tailwind CSS components. Learn more by going to the official <a class="text-blue-600 hover:underline"
			href="#" target="_blank">Flowbite Documentation</a>.
	</p>
    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
</div>





<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>