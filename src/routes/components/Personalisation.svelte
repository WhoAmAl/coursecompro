<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';

	const modes = ['study', 'conversation'] as const;

	let selected = $state<(typeof modes)[number]>('study');

	const paths = {
		study: {
			title: 'Persiapan Kuliah ke China',
			desc: 'Kamu akan butuh sertifikasi HSK 4 untuk apply di kebanyakan kampus di Tiongkok, kami akan bantu kamu melakukan persiapan untuk mengambil sertifikasi HSK 4 dan mengatarkan kamu ke Universitas terkenal di Tiongkok.',
			recommendation: 'Target HSK 4',
			duration: '± 6 - 10 bulan',
			price: 'Rp 600.000 - 8.000.000',
			label: 'Kuliah ke China',
			sub: 'Target HSK 4+'
		},
		conversation: {
			title: 'Fokus Percakapan',
			desc: 'Kamu akan dilatih untuk bisa lebih fasih berbicara bahasa Mandarin untuk kebutuhan daily speaking maupun professional communication dalam pekerjaan.',
			recommendation: 'Conversation Class + HSK 2-3',
			duration: '± 3 - 5 bulan',
			price: 'Rp 2.000.000 - 3.500.000',
			label: 'Daily Conversation',
			sub: 'Ngobrol lancar'
		}
	};
</script>

<section class="bg-white px-6 py-24 md:px-8">
	<div class="mx-auto mb-16 max-w-3xl text-center">
		<h3 class="mb-4 text-3xl leading-tight font-bold md:text-4xl">
			Apa itu <span class="text-red-500">HSK?</span>
		</h3>
		<p class="leading-relaxed text-gray-500">
			HSK (Hanyu Shuiping Kaoshi) adalah standar internasional untuk mengukur kemampuan bahasa
			Mandarin. Digunakan untuk kebutuhan akademik, karir, dan studi ke Tiongkok.
		</p>
	</div>

	<div class="mx-auto max-w-4xl">
		<div class="mb-10 grid gap-4 md:grid-cols-2">
			{#each modes as m}
				<Button
					onclick={() => (selected = m)}
					class={`text-md flex cursor-pointer flex-col items-start gap-0 rounded-xl border px-5 py-10 text-left transition-all hover:bg-red-100
					${selected === m ? 'border-red-500 bg-red-50 shadow-sm' : 'border-gray-200 bg-transparent hover:border-red-300'}`}
				>
					<h4 class="font-semibold text-gray-800">
						{paths[m].label}
					</h4>
					<p class="text-xs text-gray-500">{paths[m].sub}</p>
				</Button>
			{/each}
		</div>

		<Card class="text-md rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all">
			<h4 class="mb-2 text-xl font-semibold text-gray-800">
				{paths[selected].title}
			</h4>

			<p class="mb-6 text-gray-500">
				{paths[selected].desc}
			</p>

			<div class="grid gap-6 md:grid-cols-3">
				<div>
					<p class="text-xs text-gray-400">Rekomendasi</p>
					<p class="font-semibold text-gray-800">
						{paths[selected].recommendation}
					</p>
				</div>

				<div>
					<p class="text-xs text-gray-400">Estimasi Durasi</p>
					<p class="font-semibold text-gray-800">
						{paths[selected].duration}
					</p>
				</div>

				<div>
					<p class="text-xs text-gray-400">Estimasi Biaya</p>
					<p class="font-semibold text-red-600">
						{paths[selected].price}
					</p>
				</div>
			</div>

			<Button
				class="mt-8 w-full cursor-pointer rounded-xl bg-linear-to-r from-red-500 to-rose-600 py-3 py-5 text-sm font-semibold text-white shadow transition hover:scale-[1.02]"
			>
				Konsultasi Gratis
			</Button>
		</Card>
	</div>
</section>
