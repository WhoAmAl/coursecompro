<script>
	const testimonials = [
		{
			name: 'Rina',
			role: 'Mahasiswa',
			quote: 'Dulu aku ga berani ngomong sama sekali, sekarang udah mulai pede ngobrol Mandarin.',
			highlight: 'Dari nol → bisa basic conversation'
		},
		{
			name: 'Dika',
			role: 'Karyawan',
			quote:
				'Mentornya santai tapi ngajarnya kena banget. Jadi ga berasa belajar tapi tetap masuk.',
			highlight: 'Belajar tanpa tekanan'
		},
		{
			name: 'Sari',
			role: 'Fresh Graduate',
			quote: 'Aku ikut buat persiapan HSK, dan ternyata jauh lebih terarah dari belajar sendiri.',
			highlight: 'Lulus HSK lebih cepat'
		}
	];
</script>

<section class="relative px-6 py-16 md:px-8">
	<!-- Soft gradient background -->
	<div class="absolute inset-0 -z-10 bg-gradient-to-b from-red-50/20 via-white to-red-50/10"></div>

	<!-- Heading -->
	<div class="mx-auto mb-16 max-w-2xl text-center">
		<h3 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
			Cerita dari <span class="text-red-500">Para Siswa</span>
		</h3>
		<p class="text-sm text-gray-500 md:text-base">
			Pengalaman belajar yang dirasakan langsung oleh mereka.
		</p>
	</div>

	<!-- Grid -->
	<div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
		{#each testimonials as t}
			<div
				class="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-white/80 p-7 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
			>
				<div class="mt-auto flex items-center gap-3 border-t border-gray-100 pt-4">
					<div class="h-10 w-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
					<div>
						<p class="text-sm font-semibold text-gray-800">{t.name}</p>
						<p class="text-xs text-gray-400">{t.role}</p>
					</div>
				</div>
				<!-- Highlight -->
				<div class="mt-6">
					<span class="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-500">
						{t.highlight}
					</span>
				</div>
				<!-- Quote -->
				<p class="mt-6 text-sm leading-relaxed text-gray-700">
					{t.quote}
				</p>
			</div>
		{/each}
	</div>
</section>
