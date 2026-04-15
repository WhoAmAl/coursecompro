<script lang="ts">
	import { onMount } from 'svelte';
	import { goto, afterNavigate } from '$app/navigation';
	import { mentors } from '$lib/data/mentors';
	import AutoScroll from 'embla-carousel-auto-scroll';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';

	const options = {
		loop: true
	};

	const plugins = [
		AutoScroll({
			speed: 1,
			stopOnInteraction: false,
			stopOnMouseEnter: true
		})
	];

	let pendingScrollTop = false;

	function scrollToTopSection() {
		const el = document.getElementById('specified-mentor');
		if (!el) return;

		const yOffset = -80;
		const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

		window.scrollTo({
			top: y,
			behavior: 'smooth'
		});
	}

	function navigateToMentor(slug: string) {
		const targetUrl = `/mentors/${slug}`;

		pendingScrollTop = true;

		goto(targetUrl, {
			noScroll: true,
			keepFocus: true
		});
	}

	onMount(() => {
		document.body.classList.add('opacity-0');
		setTimeout(() => {
			scrollToTopSection();
			document.body.classList.remove('opacity-0');
		}, 150);

		const unsubscribe = afterNavigate(() => {
			if (pendingScrollTop) {
				pendingScrollTop = false;

				setTimeout(() => {
					scrollToTopSection();
				}, 150);
			}
		});

		return unsubscribe;
	});

	function getInitials(name: string): string {
		if (!name) return '';

		return name
			.trim()
			.split(/\s+/)
			.filter(Boolean)
			.slice(0, 2)
			.map((word) => word.charAt(0))
			.join('')
			.toUpperCase();
	}
</script>

<div class="mt-8 w-full overflow-hidden" use:emblaCarouselSvelte={{ options, plugins }}>
	<div class="flex w-full">
		{#each mentors as m}
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<div
				onclick={() => navigateToMentor(m.slug)}
				class="group mr-4 flex max-w-105 flex-none basis-[85%] cursor-pointer
		flex-col justify-between rounded-2xl border
		border-gray-300
		bg-neutral-50 p-6 transition-all duration-300
		hover:border-red-300 hover:shadow-lg sm:basis-[70%] md:basis-[45%] lg:basis-[32%]"
			>
				<div class="mb-4 flex items-center gap-4">
					<Avatar>
						<AvatarImage src={m.pict} alt={m.name} />
						<AvatarFallback class="bg-linear-to-br from-red-500 to-rose-500 text-neutral-100"
							>{getInitials(m.name)}</AvatarFallback
						>
					</Avatar>

					<div>
						<h4 class="font-semibold">{m.name}</h4>
						<p class="text-sm text-gray-400">{m.role}</p>
					</div>
				</div>

				<p class="line-clamp-3 text-sm leading-relaxed text-gray-500">
					{m.desc}
				</p>

				<div class="mt-4 grid grid-cols-3 border-t pt-3 text-center">
					<div>
						<p class="text-sm font-semibold text-gray-800">{m.exp}</p>
						<p class="text-xs text-gray-400">Exp</p>
					</div>
					<div>
						<p class="text-sm font-semibold text-gray-800">{m.students}</p>
						<p class="text-xs text-gray-400">Students</p>
					</div>
					<div>
						<p class="text-sm font-semibold text-red-600">{m.rating}★</p>
						<p class="text-xs text-gray-400">Rating</p>
					</div>
				</div>
				<Button
					onclick={() => navigateToMentor(m.slug)}
					class="mt-4 w-full cursor-pointer rounded-xl bg-linear-to-r from-red-500 to-rose-600 py-4 text-center text-sm font-semibold text-neutral-100 transition hover:-translate-y-0.5"
				>
					Lihat Profil
				</Button>
			</div>
		{/each}
	</div>
</div>
