<script lang="ts">
	import { onMount } from 'svelte';

	const steps = [
		{
			title: 'Mengenal Hanzi',
			desc: 'Memahami karakter dasar Mandarin, stroke, dan cara membaca.',
			tag: 'STEP 1'
		},
		{
			title: 'Gramatikal Mandarin',
			desc: 'Mempelajari struktur kalimat dan pola grammar dasar.',
			tag: 'STEP 2'
		},
		{
			title: 'Latihan Percakapan',
			desc: 'Melatih speaking agar natural dan percaya diri.',
			tag: 'STEP 3'
		},
		{
			title: 'Persiapan HSK Lanjutan',
			desc: 'Fokus ke ujian resmi dan target akademik.',
			tag: 'STEP 4'
		}
	];

	let progress = $state(0);

	onMount(() => {
		const handleScroll = () => {
			const totalHeight = document.body.scrollHeight - window.innerHeight;
			const current = window.scrollY;
			progress = Math.min(current / totalHeight, 1);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section class="bg-white px-6 py-24">
	<div class="mx-auto max-w-6xl">
		<!-- HEADER -->
		<div class="mb-20 text-center">
			<h2 class="text-3xl font-bold md:text-4xl">
				Tahapan Belajar <span class="text-red-500">Mandarin</span>
			</h2>
			<p class="mt-3 text-gray-500">
				Perjalanan terstruktur dari nol sampai siap HSK
			</p>
		</div>

		<div class="relative grid grid-cols-1 gap-y-24 md:grid-cols-3">
			<!-- CENTER LINE -->
			<div class="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gray-200 md:block">
				<div
					class="w-full bg-red-500 transition-all duration-300"
					style={`height: ${progress * 100}%`}
				></div>
			</div>

			{#each steps as step, i}
				<!-- LEFT (ILUSTRASI) -->
				<div class="hidden justify-end md:flex">
					<div class="w-[260px]">
						<div
							class="rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 p-6 shadow-md"
						>
							<div class="h-32 rounded-xl bg-gray-200"></div>
							<p class="mt-4 text-sm text-gray-400">
								Visual step {i + 1}
							</p>
						</div>
					</div>
				</div>

				<!-- CENTER DOT -->
				<div class="relative hidden items-center justify-center md:flex">
					<div
						class="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-500 bg-white text-sm font-semibold text-red-500 shadow"
					>
						{i + 1}
					</div>
				</div>

				<!-- RIGHT CONTENT -->
				<div>
					<div class="max-w-md">
						<span class="text-xs font-semibold tracking-wide text-red-400">
							{step.tag}
						</span>

						<h3 class="mt-2 text-xl font-semibold text-gray-900">
							{step.title}
						</h3>

						<p class="mt-3 text-gray-500 leading-relaxed">
							{step.desc}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>