<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import AutoScroll from 'embla-carousel-auto-scroll';

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
		},

		// === NEW 25 DATA ===
		{
			name: 'Zhang Min',
			role: 'Conversation Expert',
			exp: '7+ Tahun Mengajar',
			students: '450+ Siswa',
			rating: '4.8',
			desc: 'Fokus meningkatkan kepercayaan diri dalam percakapan sehari-hari.'
		},
		{
			name: 'Liu Fang',
			role: 'Grammar Specialist',
			exp: '9+ Tahun Pengalaman',
			students: '600+ Siswa',
			rating: '4.9',
			desc: 'Ahli dalam menjelaskan grammar dengan cara sederhana.'
		},
		{
			name: 'Wang Lei',
			role: 'Business Chinese Coach',
			exp: '10+ Tahun Mengajar',
			students: '700+ Siswa',
			rating: '5.0',
			desc: 'Spesialis bahasa Mandarin untuk kebutuhan profesional.'
		},
		{
			name: 'Dewi',
			role: 'Beginner Mentor',
			exp: '4+ Tahun Mengajar',
			students: '350+ Siswa',
			rating: '4.7',
			desc: 'Cocok untuk kamu yang baru mulai belajar dari nol.'
		},
		{
			name: 'Huang Jie',
			role: 'Pronunciation Coach',
			exp: '6+ Tahun Pengalaman',
			students: '420+ Siswa',
			rating: '4.8',
			desc: 'Fokus pada pelafalan dan tone Mandarin yang tepat.'
		},
		{
			name: 'Rina',
			role: 'Daily Conversation Coach',
			exp: '5+ Tahun Mengajar',
			students: '380+ Siswa',
			rating: '4.9',
			desc: 'Belajar Mandarin praktis untuk kehidupan sehari-hari.'
		},
		{
			name: 'Sun Hao',
			role: 'HSK Advanced Trainer',
			exp: '8+ Tahun Pengalaman',
			students: '550+ Siswa',
			rating: '4.9',
			desc: 'Membantu siswa mencapai level HSK tinggi dengan cepat.'
		},
		{
			name: 'Mei Lin',
			role: 'Kids Specialist',
			exp: '7+ Tahun Mengajar',
			students: '300+ Siswa',
			rating: '4.8',
			desc: 'Pendekatan fun dan interaktif untuk anak-anak.'
		},
		{
			name: 'Budi',
			role: 'Speaking Coach',
			exp: '6+ Tahun Pengalaman',
			students: '410+ Siswa',
			rating: '4.7',
			desc: 'Latihan intensif untuk meningkatkan skill berbicara.'
		},
		{
			name: 'Zhao Yun',
			role: 'Intensive Trainer',
			exp: '9+ Tahun Mengajar',
			students: '620+ Siswa',
			rating: '4.9',
			desc: 'Program belajar cepat dengan hasil maksimal.'
		},
		{
			name: 'Siti',
			role: 'Friendly Tutor',
			exp: '4+ Tahun Pengalaman',
			students: '290+ Siswa',
			rating: '4.8',
			desc: 'Gaya mengajar santai dan mudah dipahami.'
		},
		{
			name: 'Guo Ming',
			role: 'Listening Expert',
			exp: '7+ Tahun Mengajar',
			students: '500+ Siswa',
			rating: '4.9',
			desc: 'Melatih kemampuan listening hingga level native.'
		},
		{
			name: 'Kevin',
			role: 'Exam Coach',
			exp: '5+ Tahun Pengalaman',
			students: '360+ Siswa',
			rating: '4.7',
			desc: 'Strategi jitu menghadapi ujian Mandarin.'
		},
		{
			name: 'Tang Wei',
			role: 'Fluency Coach',
			exp: '8+ Tahun Mengajar',
			students: '540+ Siswa',
			rating: '4.9',
			desc: 'Membantu siswa berbicara lebih lancar dan natural.'
		},
		{
			name: 'Nina',
			role: 'Beginner Friendly',
			exp: '3+ Tahun Pengalaman',
			students: '250+ Siswa',
			rating: '4.7',
			desc: 'Mentor ramah untuk pemula tanpa pengalaman.'
		},
		{
			name: 'Lin Tao',
			role: 'Accent Trainer',
			exp: '6+ Tahun Mengajar',
			students: '430+ Siswa',
			rating: '4.8',
			desc: 'Fokus pada aksen dan intonasi yang tepat.'
		},
		{
			name: 'Agus',
			role: 'Casual Coach',
			exp: '4+ Tahun Pengalaman',
			students: '300+ Siswa',
			rating: '4.6',
			desc: 'Belajar santai tanpa tekanan tapi tetap efektif.'
		},
		{
			name: 'Zhou Li',
			role: 'Writing Specialist',
			exp: '9+ Tahun Mengajar',
			students: '600+ Siswa',
			rating: '4.9',
			desc: 'Ahli dalam penulisan karakter Mandarin.'
		},
		{
			name: 'Clara',
			role: 'Speaking Partner',
			exp: '5+ Tahun Pengalaman',
			students: '370+ Siswa',
			rating: '4.8',
			desc: 'Partner latihan speaking yang interaktif.'
		},
		{
			name: 'Chen Hao',
			role: 'Advanced Coach',
			exp: '10+ Tahun Mengajar',
			students: '750+ Siswa',
			rating: '5.0',
			desc: 'Mentor untuk level advanced dan profesional.'
		},
		{
			name: 'Yuni',
			role: 'Motivation Coach',
			exp: '4+ Tahun Pengalaman',
			students: '310+ Siswa',
			rating: '4.7',
			desc: 'Membantu siswa tetap konsisten belajar.'
		},
		{
			name: 'Feng Li',
			role: 'Vocabulary Expert',
			exp: '7+ Tahun Mengajar',
			students: '520+ Siswa',
			rating: '4.9',
			desc: 'Fokus memperkaya kosakata secara cepat.'
		},
		{
			name: 'Dian',
			role: 'Interactive Tutor',
			exp: '5+ Tahun Pengalaman',
			students: '400+ Siswa',
			rating: '4.8',
			desc: 'Metode belajar interaktif dan tidak membosankan.'
		},
		{
			name: 'Xu Jian',
			role: 'Professional Trainer',
			exp: '11+ Tahun Mengajar',
			students: '800+ Siswa',
			rating: '5.0',
			desc: 'Pengalaman luas dalam mengajar berbagai level.'
		},
		{
			name: 'Aulia',
			role: 'Flexible Coach',
			exp: '3+ Tahun Pengalaman',
			students: '280+ Siswa',
			rating: '4.6',
			desc: 'Jadwal fleksibel dan metode adaptif sesuai siswa.'
		}
	];
</script>

<section class="bg-white bg-linear-to-r from-red-400 to-rose-500 px-6 py-12 md:px-8">
	<div class="mb-14 flex flex-col items-start justify-between sm:flex-row sm:items-end">
		<div class="max-w-2xl">
			<h3 class="mb-4 text-3xl font-bold text-neutral-100 md:text-4xl">
				Diajar oleh Mentor yang <span class="text-red-700">Terbukti Berpengalaman</span>
			</h3>
			<p class="text-neutral-100">
				Setiap mentor kami memiliki pengalaman nyata dan track record yang jelas.
			</p>
		</div>

		<a
			href="/mentors"
			class="mt-5 flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
		>
			Lihat Semua
			<span class="transition group-hover:translate-x-1">→</span>
		</a>
	</div>

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
						class="mt-4 w-full rounded-xl bg-red-50 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
					>
						Lihat Profil
					</button>
				</div>
			{/each}
		</div>
	</div>
</section>
