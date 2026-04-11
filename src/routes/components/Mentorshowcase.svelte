<script lang="ts">
	import { onMount } from 'svelte';
	import { goto, afterNavigate } from '$app/navigation';
	import { mentors } from '$lib/data/mentors';
	import AutoScroll from 'embla-carousel-auto-scroll';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

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

				// delay kecil
				setTimeout(() => {
					scrollToTopSection();
				}, 150);
			}
		});

		return unsubscribe;
	});
</script>

<div class="mt-8 w-full overflow-hidden" use:emblaCarouselSvelte={{ options, plugins }}>
	<div class="flex w-full">
		{#each mentors as m}
			<div
				class="group mr-4 flex max-w-[420px] flex-none basis-[85%]
		flex-col justify-between rounded-2xl border
		border-gray-300
		bg-neutral-50 p-6 transition-all duration-300
		hover:border-red-300 hover:shadow-lg sm:basis-[70%] md:basis-[45%] lg:basis-[32%]"
			>
				<div class="mb-4 flex items-center gap-4">
					<div class="h-12 w-12 rounded-full bg-gray-200"></div>

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
				<button
					on:click={() => navigateToMentor(m.slug)}
					class="mt-4 w-full cursor-pointer rounded-xl bg-linear-to-r from-red-500 to-rose-600 py-2 text-center text-sm font-semibold text-neutral-100 transition hover:-translate-y-0.5"
				>
					Lihat Profil
				</button>
			</div>
		{/each}
	</div>
</div>
