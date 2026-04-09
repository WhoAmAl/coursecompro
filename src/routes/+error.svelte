<script lang="ts">
	import { Home, ArrowLeft } from '@lucide/svelte';
</script>

<section
	class="flex items-center justify-center bg-linear-to-b from-rose-100 to-red-100 px-6 py-20"
>
	<div class="flex max-w-lg flex-col items-center justify-center text-center">
		<div class="mb-6 flex justify-center">
			<div class="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-100">
				<Home class="h-10 w-10 text-red-500" />
			</div>
		</div>

		<h1 class="mb-3 text-3xl font-bold">Halaman Belum Tersedia</h1>

		<p class="mb-6 text-gray-500">
			Halaman yang kamu cari belum tersedia atau sedang kami siapkan. Tapi tenang, kamu masih bisa
			lanjut eksplor page yang tersedia saat ini✨.
		</p>

		<div class="flex flex-col gap-3 sm:flex-row sm:justify-center">
			<a
				href="/"
				class="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-400 px-5 py-3 font-semibold text-white shadow transition hover:scale-[1.03]"
			>
				<Home class="h-4 w-4" />
				Kembali ke Home
			</a>

			<button
				on:click={() => history.back()}
				class="flex items-center justify-center gap-2 rounded-xl border px-5 py-3 font-semibold text-gray-600 transition hover:border-red-300 hover:text-red-500"
			>
				<ArrowLeft class="h-4 w-4" />
				Kembali
			</button>
		</div>
	</div>
</section>
