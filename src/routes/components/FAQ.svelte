<script lang="ts">
	import { slide } from 'svelte/transition';
	let activeIndex = $state<number | null>(null);

	const faqs = [
		{
			q: 'Apakah kelas ini cocok untuk pemula?',
			a: 'Ya, kelas kami dirancang khusus untuk pemula...'
		},
		{
			q: 'Berapa lama sampai saya bisa berbicara Mandarin?',
			a: 'Rata-rata siswa sudah mulai bisa basic conversation dalam 1–2 bulan.'
		},
		{
			q: 'Apakah kelas dilakukan secara online atau offline?',
			a: 'Saat ini kelas dilakukan secara online sehingga fleksibel.'
		},
		{
			q: 'Apakah ada sertifikat setelah selesai?',
			a: 'Ya, kamu akan mendapatkan sertifikat penyelesaian kelas.'
		},
		{
			q: 'Bagaimana jika saya masih ragu untuk mulai?',
			a: 'Kamu bisa mulai dengan konsultasi terlebih dahulu.'
		}
	];

	const toggle = (i: number) => {
		activeIndex = activeIndex === i ? null : i;
	};
</script>

<section
	class="flex flex-col items-center bg-gradient-to-b from-white to-red-50/20 px-6 py-20 sm:flex-row md:px-8"
>
	<div class="mx-auto mb-14 w-full max-w-2xl text-center sm:w-1/3">
		<h3 class="mb-4 text-3xl font-bold md:text-4xl">
			Frequently asked <span class="text-red-600">Questions</span>
		</h3>
		<p class="text-gray-500">
			Kami sudah merangkum beberapa pertanyaan umum untuk membantu kamu memahami program kami lebih
			baik.
		</p>
	</div>

	<div class="mx-auto w-full max-w-3xl space-y-4 sm:w-2/3">
		{#each faqs as item, i}
			<div
				class="overflow-hidden rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm transition-all"
			>
				<button
					on:click={() => toggle(i)}
					class="group flex w-full items-center justify-between px-6 py-5 text-left"
				>
					<span class="font-medium text-gray-800 transition group-hover:text-red-600">
						{item.q}
					</span>

					<span
						class="text-xl text-red-500 transition-transform duration-300 {activeIndex === i
							? 'rotate-45'
							: ''}"
					>
						+
					</span>
				</button>

				{#if activeIndex === i}
					<div transition:slide class="px-6 pb-5 text-sm text-gray-500">
						{item.a}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>
