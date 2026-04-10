<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { afterNavigate } from '$app/navigation';
	import { GraduationCap, House, MessageCircle, Phone } from '@lucide/svelte';

	let pendingHash: string | null = null;
	function scrollToHash(hash: string) {
		const el = document.getElementById(hash);
		if (!el) return;

		const yOffset = -80;
		const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

		window.scrollTo({ top: y, behavior: 'smooth' });
	}

	function navigateTo(url: string) {
		if (url.includes('#')) {
			const [path, hash] = url.split('#');

			if (page.url.pathname !== path) {
				pendingHash = hash;
				goto(path);
				return;
			}

			scrollToHash(hash);
		} else {
			goto(url);
		}
	}

	let scrolled = $state(false);

	onMount(() => {
		const unsubscribe = afterNavigate(() => {
			if (pendingHash) {
				const hash = pendingHash;
				pendingHash = null;

				setTimeout(() => {
					scrollToHash(hash);
				}, 200);
			}
		});

		return unsubscribe;
	});

	const navItems = [
		{ label: 'Home', icon: House, url: '/#home' },
		{ label: 'Mentor', icon: GraduationCap, url: '/mentors' },
		{ label: 'Testimoni', icon: MessageCircle, url: '/#testimonials' },
		{ label: 'Contact', icon: Phone, url: '/contactus' }
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
			<button
				on:click={() => navigateTo(item.url)}
				class="group relative transition hover:text-red-600"
			>
				{item.label}
				<span
					class="absolute -bottom-1 left-0 h-[2px] w-0 bg-red-600 transition-all group-hover:w-full"
				></span>
			</button>
		{/each}

		<button
			class="rounded-xl bg-gradient-to-r from-red-600 to-rose-500 px-5 py-2.5 font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
				on:click={() => navigateTo(item.url)}
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
