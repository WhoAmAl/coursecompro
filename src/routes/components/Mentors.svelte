<script>
	const mentors = [
		{
			name: 'Li Wei',
			role: 'Native Speaker',
			exp: '8+ Tahun Mengajar',
			students: '500+ Siswa',
			rating: '4.9',
			desc: 'Spesialis membantu siswa berbicara natural seperti penutur asli.'
		},
		{
			name: 'Chen Yu',
			role: 'HSK Specialist',
			exp: '6+ Tahun Pengalaman',
			students: '300+ Siswa',
			rating: '4.8',
			desc: 'Fokus pada strategi cepat dan efektif untuk lulus HSK.'
		},
		{
			name: 'Andi',
			role: 'Bilingual Coach',
			exp: '5+ Tahun Mengajar',
			students: '400+ Siswa',
			rating: '4.9',
			desc: 'Pendekatan santai dan mudah dipahami untuk pemula.'
		}
	];
</script>

<section class="bg-white px-6 py-12 md:px-8">
	<div class="mb-14 max-w-2xl">
		<h3 class="mb-4 text-3xl font-bold md:text-4xl">
			Diajar oleh Mentor yang <span class="text-red-600">Terbukti Berpengalaman</span>
		</h3>
		<p class="text-gray-500">
			Setiap mentor kami memiliki pengalaman nyata dan track record yang jelas dalam membantu siswa
			berkembang.
		</p>
	</div>

	<div class="grid gap-6 md:grid-cols-3">
		{#each mentors as m}
			<div
				class="group rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:border-red-300 hover:shadow-lg"
			>
				<div class="mb-5 flex items-center gap-4">
					<div class="h-14 w-14 rounded-full bg-gray-200"></div>

					<div>
						<h4 class="font-semibold">{m.name}</h4>
						<p class="text-sm text-gray-400">{m.role}</p>
					</div>
				</div>

				<p class="mb-6 text-sm leading-relaxed text-gray-500">
					{m.desc}
				</p>

				<div class="mb-6 grid grid-cols-3 border-t pt-4 text-center">
					<div>
						<p class="text-sm font-semibold text-gray-800">{m.exp}</p>
						<p class="text-xs text-gray-400">Experience</p>
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
					class="w-full rounded-xl bg-red-50 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
				>
					Lihat Profil Mentor
				</button>
			</div>
		{/each}
	</div>
</section>
