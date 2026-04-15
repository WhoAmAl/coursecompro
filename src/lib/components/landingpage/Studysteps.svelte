<script lang="ts">
	import { onMount } from 'svelte';

	const steps = [
		{
			label: 'STEP 1',
			title: 'Mengenal Hanzi',
			desc: 'Memahami karakter dasar Mandarin, stroke, dan cara membaca.',
			hanzi: '字',
			pinyin: 'zì',
			meaning: 'Character'
		},
		{
			label: 'STEP 2',
			title: 'Gramatikal Mandarin',
			desc: 'Mempelajari struktur kalimat dan pola grammar dasar.',
			hanzi: '语',
			pinyin: 'yǔ',
			meaning: 'Language'
		},
		{
			label: 'STEP 3',
			title: 'Latihan Percakapan',
			desc: 'Melatih speaking agar natural dan percaya diri.',
			hanzi: '说',
			pinyin: 'shuō',
			meaning: 'To Speak'
		},
		{
			label: 'STEP 4',
			title: 'Persiapan HSK Lanjutan',
			desc: 'Fokus ke ujian resmi dan target akademik.',
			hanzi: '考',
			pinyin: 'kǎo',
			meaning: 'Exam'
		}
	];

	let container: HTMLElement | null = null;
	let innerContainer: HTMLElement | null = null;
	let bgLine: HTMLElement | null = null;
	let progressLine: HTMLElement | null = null;
	let stepElements: (HTMLElement | undefined)[] = [];

	let activeSteps = $state<boolean[]>([true, false, false, false]);

	onMount(() => {
		if (!container || !innerContainer || !bgLine || !progressLine) return;

		let bounds = { start: 0, end: 0, height: 0, left: 0 };
		let stepCenterOffsets: number[] = [];
		let containerOffsetTop = 0;
		let isDesktop = false;

		const calculateBounds = () => {
			if (!innerContainer) return;

			const first = stepElements[0]?.querySelector('.step-box');
			const last = stepElements[stepElements.length - 1]?.querySelector('.step-box');

			if (!first || !last) return;

			const innerRect = innerContainer.getBoundingClientRect();
			const firstRect = first.getBoundingClientRect();
			const lastRect = last.getBoundingClientRect();

			containerOffsetTop = innerRect.top + window.scrollY;

			bounds.start = firstRect.top - innerRect.top + firstRect.height / 2;
			bounds.end = lastRect.top - innerRect.top + lastRect.height / 2;
			bounds.height = bounds.end - bounds.start;

			bounds.left = firstRect.left - innerRect.left + firstRect.width / 2;

			isDesktop = window.matchMedia('(min-width: 1024px)').matches;

			bgLine!.style.top = `${bounds.start}px`;
			bgLine!.style.height = `${bounds.height}px`;
			bgLine!.style.left = `${bounds.left}px`;
			bgLine!.style.transform = 'translateX(-50%)';

			progressLine!.style.top = `${bounds.start}px`;
			progressLine!.style.height = `${bounds.height}px`;
			progressLine!.style.left = `${bounds.left}px`;
			progressLine!.style.transformOrigin = 'top center';
			progressLine!.style.transform = 'translateX(-50%) scaleY(0)';

			stepCenterOffsets = stepElements.map((step) => {
				const icon = step?.querySelector('.step-box');
				if (!icon) return 0;
				const rect = icon.getBoundingClientRect();
				return rect.top - innerRect.top + rect.height / 2;
			});
		};

		const onScroll = () => {
			const scrollY = window.scrollY;
			const vh = window.innerHeight;

			const trigger = vh * (isDesktop ? 0.3 : 0.5);
			const containerTop = containerOffsetTop - scrollY;
			const current = trigger - containerTop;

			let progress = (current - bounds.start) / bounds.height;
			progress = Math.max(0, Math.min(1, progress));

			progressLine!.style.transform = `translateX(-50%) scaleY(${progress})`;

			const tip = bounds.start + progress * bounds.height;

			stepCenterOffsets.forEach((pos, i) => {
				if (i === 0) {
					activeSteps[0] = true;
				} else {
					activeSteps[i] = tip >= pos;
				}
			});
		};

		const resizeObserver = new ResizeObserver(() => {
			calculateBounds();
			onScroll();
		});

		resizeObserver.observe(innerContainer);
		window.addEventListener('scroll', onScroll, { passive: true });

		calculateBounds();
		onScroll();

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<section bind:this={container} class="mx-auto max-w-5xl px-4 py-15 md:px-8">
	<div class="mx-auto mb-16 max-w-2xl text-center">
		<h3 class="mb-4 text-3xl font-bold md:text-4xl">
			Tahapan Belajar <span class="text-red-500">Mandarin</span>
		</h3>
		<p class="text-gray-500">Perjalanan terstruktur dari nol sampai siap HSK.</p>
	</div>

	<div bind:this={innerContainer} class="relative mx-auto max-w-6xl">
		<div bind:this={bgLine} class="absolute w-1 bg-gray-200"></div>

		<div bind:this={progressLine} class="absolute w-1 rounded-full bg-red-500"></div>

		<div class="space-y-24 lg:space-y-48">
			{#each steps as step, i}
				<div
					bind:this={stepElements[i]}
					class="group relative flex items-start gap-8 lg:grid lg:grid-cols-11 lg:items-center"
				>
					<div class="z-10 flex justify-center lg:col-span-1">
						<div
							class="step-box flex h-12 w-12 items-center justify-center rounded-xl border-2 text-sm font-bold lg:h-16 lg:w-16"
							class:step-active={activeSteps[i]}
						>
							<span
								class="text-center text-[10px] leading-none font-bold text-red-700 uppercase"
								class:step-active-font={activeSteps[i]}
							>
								{step.label}<br />学习
							</span>
						</div>
					</div>

					<div class="relative lg:col-span-5">
						<!-- <div
							class="absolute -top-10 right-0 flex h-16 w-16 items-center justify-center border-2 border-red-700 p-1 opacity-20 transition-all duration-700 group-hover:rotate-12 group-hover:opacity-100 lg:top-[-20px] lg:-left-4"
						>
							<span class="text-center text-[10px] leading-none font-bold text-red-700 uppercase">
								{step.label}<br />学习
							</span>
						</div> -->

						<div
							class="relative border-l border-gray-200 pl-8 transition-all duration-500 group-hover:border-red-400"
						>
							<span class="text-sm font-medium tracking-[0.3em] text-red-600 uppercase">
								{step.label}
							</span>

							<h3 class="mt-3 text-4xl font-light tracking-tight text-gray-800 lg:text-5xl">
								{step.title}
							</h3>

							<p class="mt-6 max-w-md text-lg leading-relaxed text-gray-500 italic">
								"{step.desc}"
							</p>

							<div
								class="brush-stroke mt-8 h-1 w-0 bg-linear-to-r from-red-600 to-transparent transition-all duration-1000 group-hover:w-full"
							></div>
						</div>
					</div>

					<div class="relative hidden justify-end lg:col-span-5 lg:flex">
						<div
							class="relative h-100 w-full max-w-sm transform overflow-hidden rounded-sm border border-neutral-300 p-8 shadow-xl transition-all duration-700 hover:rotate-1 lg:h-112.5"
						>
							<div class="relative flex h-full flex-col items-center justify-center">
								<div
									class=" text-9xl text-gray-900 opacity-20 transition-all duration-700 group-hover:scale-110 group-hover:text-red-900 group-hover:opacity-100"
								>
									{step.hanzi}
								</div>
								<div class="mt-8 space-y-2 text-center">
									<span class="block font-mono text-sm tracking-widest text-red-800"
										>{step.pinyin} • {step.meaning}</span
									>
									<div class="flex justify-center gap-1">
										<div class="h-1 w-8 bg-red-900/20"></div>
										<div class="h-1 w-12 bg-red-900"></div>
										<div class="h-1 w-6 bg-red-900/20"></div>
									</div>
								</div>
							</div>
						</div>

						<div
							class="absolute -right-10 -bottom-10 -z-10 h-64 w-64 rounded-full bg-red-50/50 blur-3xl transition-all group-hover:bg-red-100/80"
						></div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.step-box {
		transition: all 0.4s ease;
		background: white;
		border-color: #e5e7eb;
		color: #9ca3af;
	}

	.step-box.step-active {
		background: #ef4444;
		border-color: #ef4444;
		color: white;
		transform: scale(1.1);
		box-shadow: 0 10px 25px rgba(239, 68, 68, 0.4);
	}
	.step-active-font {
		color: white;
		transform: scale(1.1);
	}
	/* Custom Serif for Oriental Feel */
	/* @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200;900&display=swap'); */

	/* h3 {
		font-family: 'Noto Serif SC', serif;
	} */

	.brush-stroke {
		mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0));
		-webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0));
	}
</style>
