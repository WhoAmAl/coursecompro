<script>
	import { Check } from '@lucide/svelte';
	const levels = ['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5'];

	const commonBenefits = [
		'FREE E-Book materi HSK',
		'Kelas Interaktif & Full Online',
		'FREE Simulasi Ujian HSK',
		'FREE E-Certificate'
	];

	const classes = [
		{
			title: 'Private',
			tagline: 'Fokus penuh 1-on-1 dengan mentor',
			participants: '1 Orang',
			duration: '60-90 Menit',
			prices: ['385K', '395K', '405K', '415K', '425K'],
			specificBenefits: [
				'Jadwal fleksibel',
				'Materi personal',
				'Progress cepat',
				'Personalisasi kemampuan'
			],
			isPopular: false
		},
		{
			title: 'Semi Private',
			tagline: 'Balance antara harga & fokus belajar',
			participants: '2-3 Orang',
			duration: '60 Menit',
			prices: ['300K', '310K', '320K', '330K', '340K'],
			specificBenefits: ['Lebih hemat', 'Tetap interaktif', 'Cocok 2-3 orang'],
			isPopular: true
		},
		{
			title: 'Group',
			tagline: 'Belajar bersama suasana lebih aktif',
			participants: '5-8 Orang',
			duration: '60 Menit',
			prices: ['250K', '260K', '270K', '280K', '290k'],
			specificBenefits: ['Lebih terjangkau', 'Diskusi aktif', 'Community learning'],
			isPopular: false
		}
	];
</script>

<section class="bg-linear-to-b from-white to-red-50/20 px-6 py-24 md:px-8">
	<div class="mx-auto mb-16 max-w-2xl text-center">
		<h3 class="mb-4 text-3xl font-bold md:text-4xl">
			Pilih Model Kelas yang <span class="text-red-600">Paling Cocok</span>
		</h3>
		<p class="text-gray-500">Setiap model dirancang untuk gaya belajar yang berbeda.</p>
	</div>

	<div class="mx-auto grid max-w-6xl items-stretch gap-8 md:grid-cols-3">
		{#each classes as item}
			<div
				class="relative rounded-3xl transition-all duration-300 {item.isPopular
					? 'scale-105 shadow-xl'
					: 'hover:-translate-y-1 hover:shadow-xl'}"
			>
				<div
					class="h-full rounded-3xl {item.isPopular
						? 'bg-gradient-to-br from-red-500 to-rose-400 p-[2px]'
						: 'border border-gray-200'}"
				>
					<div class="flex h-full flex-col rounded-[22px] bg-white p-8">
						{#if item.isPopular}
							<div
								class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-4 py-1 text-xs text-white shadow"
							>
								Paling Populer
							</div>
						{/if}

						<h4
							class="mb-2 text-center text-xl font-semibold {item.isPopular ? 'text-red-600' : ''}"
						>
							{item.title}
						</h4>
						<p class="mb-6 text-center text-sm text-gray-500">{item.tagline}</p>

						<div
							class="mb-6 grid grid-cols-3 gap-3 rounded-xl bg-linear-to-r from-red-500 via-rose-500 to-rose-600 p-3 text-center text-white"
						>
							<div>
								<p class="text-[10px] opacity-80">Peserta</p>
								<p class="text-xs font-semibold">{item.participants}</p>
							</div>
							<div>
								<p class="text-[10px] opacity-80">Durasi</p>
								<p class="text-xs font-semibold">{item.duration}</p>
							</div>
							<div>
								<p class="text-[10px] opacity-80">Mode</p>
								<p class="text-xs font-semibold">Online</p>
							</div>
						</div>

						<div class="mb-8 grid grid-cols-3 gap-1">
							{#each levels as level, i}
								<div
									class="flex flex-col items-center border-b border-mauve-100 py-2 text-center text-sm"
								>
									<span class="font-semibold text-gray-800">{item.prices[i]}</span>
									<span class="text-[10px] text-gray-400">{level}</span>
								</div>
							{/each}
						</div>

						<ul class="mb-8 flex-grow space-y-3 text-sm">
							{#each item.specificBenefits as spec}
								<li class="flex items-start gap-2 text-gray-800">
									<Check size={16} class="mt-[2px] text-red-500" />
									<span class="leading-relaxed">{spec}</span>
								</li>
							{/each}

							{#each commonBenefits as benefit}
								<li class="flex items-start gap-2 text-gray-500">
									<Check size={14} class="mt-[2px] text-gray-400" />
									<span class="leading-relaxed">{benefit}</span>
								</li>
							{/each}
						</ul>

						<button
							class="w-full rounded-xl py-3 font-semibold transition
                            {item.isPopular
								? 'bg-gradient-to-r from-red-600 to-rose-400 text-white shadow hover:scale-105'
								: 'border border-gray-200 hover:border-red-400 hover:text-red-600'}"
						>
							Pilih Kelas
						</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
