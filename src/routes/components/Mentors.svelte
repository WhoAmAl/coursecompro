<script>
	import Mentorshowcase from './Mentorshowcase.svelte';
</script>

<section class="bg-linear-to-r from-red-400 to-rose-500 py-12">
	<div class="mb-14 flex flex-col items-start justify-between sm:flex-row sm:items-end">
		<div class="max-w-2xl px-6 md:px-8">
			<h3 class="mb-4 text-3xl font-bold text-neutral-100 md:text-4xl">
				Diajar oleh Mentor yang <span class="text-red-700">Terbukti Berpengalaman</span>
			</h3>
			<p class="text-neutral-100">
				Setiap mentor kami memiliki pengalaman nyata dan track record yang jelas.
			</p>
		</div>

		<a
			href="/mentors"
			class="mt-5 flex items-center gap-2 px-6 text-sm font-semibold text-white/90 transition hover:text-white md:px-8"
		>
			Lihat Semua
			<span class="transition group-hover:translate-x-1">→</span>
		</a>
	</div>

	<Mentorshowcase />
</section>
