<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { GraduationCap, House, MessageCircle, Phone } from '@lucide/svelte';

	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 10;
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const navItems = [
		{ label: 'Home', icon: House },
		{ label: 'Mentor', icon: GraduationCap },
		{ label: 'Testimoni', icon: MessageCircle },
		{ label: 'Contact', icon: Phone }
	];
</script>

<nav
	class={cn(
		'sticky top-0 z-50 items-center justify-between px-8 py-4 transition-all duration-300 md:flex',
		scrolled ? 'bg-white/85 shadow-md backdrop-blur-md' : 'bg-white shadow-sm'
	)}
>
	<h1 class="text-xl font-bold tracking-tight">
		<span class="bg-gradient-to-r from-red-600 to-rose-400 bg-clip-text text-transparent">
			MandarinPals
		</span>
	</h1>

	<div class="hidden items-center space-x-8 text-sm font-medium md:flex">
		{#each navItems as item}
			<a href="#" class="group relative transition hover:text-red-600">
				{item.label}
				<span
					class="absolute -bottom-1 left-0 h-[2px] w-0 bg-red-600 transition-all group-hover:w-full"
				></span>
			</a>
		{/each}

		<button
			class="rounded-xl bg-gradient-to-r from-red-600 to-rose-400 px-5 py-2.5 font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
		>
			Join Now
		</button>
	</div>
</nav>

<div class="fixed bottom-0 left-1/2 z-50 w-full -translate-x-1/2 md:hidden">
	<div
		class="flex items-center justify-between border border-white/40 bg-white/80 px-10 py-3 shadow-lg backdrop-blur-md"
	>
		{#each navItems as item}
			<button
				class="flex flex-col items-center text-xs text-gray-500 transition hover:text-red-600"
			>
				{#if typeof item.icon === 'string'}
					<span class="text-lg">{item.icon}</span>
				{:else}
					{@const Icon = item.icon}
					<Icon class="h-7 w-7" />
				{/if}

				<span class="text-sm">{item.label}</span>
			</button>
		{/each}
	</div>
</div>
