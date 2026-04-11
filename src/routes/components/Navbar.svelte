<script lang="ts">
	import { cn } from '$lib/utils';
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { afterNavigate } from '$app/navigation';
	import {
		GraduationCap,
		House,
		MessageCircle,
		Phone,
		Tags,
		TextAlignEnd,
		X
	} from '@lucide/svelte';
	import { browser } from '$app/environment';
	import { slide, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

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
		{ label: 'Contact', icon: Phone, url: '/contactus' },
		{ label: 'Pricing', icon: Tags, url: '/pricing' }
	];

	let open = $state(false);
	$effect(() => {
		if (!browser) return;

		document.body.style.overflow = open ? 'hidden' : '';
	});

	onDestroy(() => {
		if (browser) {
			document.body.style.overflow = '';
		}
	});

	onMount(() => {
		if (window.location.hash) {
			const el = document.querySelector(window.location.hash);
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	});
</script>

<nav
	class={cn(
		'sticky top-0 z-50 items-center justify-between px-8 py-4 transition-all duration-300 md:flex',
		scrolled ? 'bg-white/85 shadow-md backdrop-blur-md' : 'bg-white shadow-sm'
	)}
>
	<div class="flex w-full flex-row justify-between">
		<h1 class="text-xl font-bold tracking-tight">
			<span class="bg-gradient-to-r from-red-600 to-rose-400 bg-clip-text text-transparent">
				MandarinPals
			</span>
		</h1>

		<div class="hidden items-center space-x-8 text-sm font-medium md:flex">
			{#each navItems as item}
				<button
					on:click={() => navigateTo(item.url)}
					class="group relative transition hover:cursor-pointer hover:text-red-600"
				>
					{item.label}
					<span
						class="absolute -bottom-1 left-0 h-[2px] w-0 bg-red-600 transition-all group-hover:w-full"
					></span>
				</button>
			{/each}

			<button
				class="cursor-pointer rounded-xl bg-gradient-to-r from-red-600 to-rose-500 px-5 py-2.5 font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
			>
				Join Now
			</button>
		</div>
		<button
			class="relative flex h-6 w-6 items-center justify-center md:hidden"
			on:click={() => (open = !open)}
		>
			{#if open}
				<span
					class="absolute"
					in:scale={{ duration: 160, easing: cubicOut }}
					out:scale={{ duration: 120 }}
				>
					<X size={20} />
				</span>
			{:else}
				<span
					class="absolute"
					in:scale={{ duration: 160, easing: cubicOut }}
					out:scale={{ duration: 120 }}
				>
					<TextAlignEnd size={20} />
				</span>
			{/if}
		</button>
	</div>
	{#if open}
		<div
			class="h-screen border-t border-neutral-200 md:hidden"
			transition:slide={{ duration: 220, easing: cubicOut }}
		>
			<div class="flex h-full flex-col justify-between px-5 py-6">
				<nav class="mx-auto flex w-full flex-col">
					{#each navItems as menu, i}
						<button
							on:click={() => goto(menu.url)}
							class="flex items-center gap-3 py-3 text-base font-medium text-neutral-700"
							on:click={() => (open = false)}
						>
							{#if typeof menu.icon === 'string'}
								<span class="text-lg">{menu.icon}</span>
							{:else}
								{@const Icon = menu.icon}
								<Icon class="h-7 w-7" />
							{/if}
							{menu.label}
						</button>

						<div class="border-b border-neutral-200"></div>
					{/each}
				</nav>
			</div>
		</div>
	{/if}
</nav>
