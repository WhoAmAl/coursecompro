<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Check } from '@lucide/svelte';

	const benefits = [
		'FREE E-Book materi HSK',
		'Video rekaman setiap kelas (bisa review kapan saja)',
		'Simulasi ujian HSK + Speaking test',
		'Sertifikat (opsional by request)',
		'Kelas full online (hemat waktu & transport)',
		'Jadwal malam (tidak ganggu aktivitas utama)',
		'Bebas tanya mentor di luar jam kelas',
		'Kelas interaktif & tidak membosankan'
	];

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		el?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section
	class="relative overflow-hidden bg-linear-to-r from-red-500 to-rose-500 px-6 py-24 text-white md:px-8"
>
	<div class="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/20 blur-3xl"></div>
	<div class="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-white/20 blur-3xl"></div>

	<div class="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
		<div>
			<h3 class="mb-6 text-3xl leading-tight font-bold md:text-5xl">
				Bukan Sekadar Kelas,
				<span class="text-white/80">Ini Investasi Skill Kamu</span>
			</h3>

			<p class="mb-8 leading-relaxed text-white/80">
				MandarinPals dirancang untuk kamu yang serius ingin bisa Mandarin, tanpa ribet, tanpa buang
				waktu, dan tetap enjoyable.
			</p>

			<div class="space-y-4">
				<div class="flex items-start gap-3">
					<div class="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
						<div class="h-2 w-2 rounded-full bg-white"></div>
					</div>
					<p class="text-sm text-white/90">Belajar fleksibel tanpa ganggu aktivitas harian</p>
				</div>

				<div class="flex items-start gap-3">
					<div class="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
						<div class="h-2 w-2 rounded-full bg-white"></div>
					</div>
					<p class="text-sm text-white/90">Dapat akses materi & rekaman selamanya</p>
				</div>

				<div class="flex items-start gap-3">
					<div class="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
						<div class="h-2 w-2 rounded-full bg-white"></div>
					</div>
					<p class="text-sm text-white/90">Dibimbing mentor berpengalaman & suportif</p>
				</div>
			</div>
		</div>

		<Card
			class="mx-auto max-w-3xl rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
		>
			<div class="mb-6">
				<h4 class="mb-2 text-xl font-semibold text-gray-800">Apa yang Akan Kamu Dapatkan</h4>
				<p class="text-sm text-gray-500">
					Kami memastikan setiap sesi belajar memberikan hasil nyata untuk kamu
				</p>
			</div>

			<div class="mb-6 h-px bg-gray-100"></div>

			<ul class="space-y-4">
				{#each benefits as item}
					<li class="flex items-start gap-3">
						<!-- Checkbox -->
						<div class="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-50">
							<Check size={14} class="text-red-600" />
						</div>

						<p class="text-sm leading-relaxed text-gray-600">
							{item}
						</p>
					</li>
				{/each}
			</ul>

			<Button
				onclick={() => scrollTo('jenis-kelas')}
				class="mt-8 w-full cursor-pointer rounded-xl bg-linear-to-r from-red-500 to-rose-600 py-5 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02]"
			>
				Cek Jenis Kelas
			</Button>
		</Card>
	</div>

	<div class="relative mt-20 text-center">
		<p class="mb-4 text-white/80">Gabung sekarang dan rasakan cara belajar yang berbeda</p>

		<Button
			onclick={() => scrollTo('CTA')}
			class="cursor-pointer rounded-xl bg-white px-8 py-5 font-semibold text-red-600 shadow-lg transition hover:scale-105 hover:bg-white"
		>
			Mulai Sekarang
		</Button>
	</div>
</section>
