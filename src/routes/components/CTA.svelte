<script>
	import { goto } from '$app/navigation';
</script>

<section class="relative overflow-hidden px-6 py-24 md:px-8">
	<div class="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-400"></div>

	<div
		class="absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full bg-white/20 blur-3xl"
	></div>
	<div
		class="absolute -right-20 -bottom-20 h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl"
	></div>

	<div class="relative z-10 mx-auto max-w-3xl text-center text-white">
		<h3 class="mb-4 text-3xl leading-tight font-bold md:text-4xl">
			Mulai Perjalanan Mandarin Kamu Hari Ini
		</h3>

		<p class="mb-8 text-white/90">
			Gabung bersama ratusan siswa lainnya dan rasakan metode belajar yang lebih efektif &
			menyenangkan.
		</p>

		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<button
				on:click={() => goto('/pricing')}
				class="rounded-2xl bg-white px-8 py-4 font-semibold text-red-600 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
			>
				Cek pricing
			</button>

			<button
				class="rounded-2xl border border-white/60 px-8 py-4 font-semibold transition hover:bg-white/10"
			>
				Konsultasi Segera
			</button>
		</div>

		<p class="mt-6 text-xs text-white/70">Tanpa komitmen • Bisa mulai dari nol • Kami siap bantu</p>
	</div>
</section>
