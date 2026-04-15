<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { MentorShowcase } from '.';
</script>

<section class="bg-linear-to-r from-red-400 to-rose-500 py-12">
	<div
		class="mb-14 flex flex-col items-start justify-between px-6 sm:flex-row sm:items-end md:px-8"
	>
		<div class="max-w-2xl">
			<h3 class="mb-4 text-3xl font-bold text-neutral-100 md:text-4xl">
				Diajar oleh Mentor yang <span class="text-rose-900">Terbukti Berpengalaman</span>
			</h3>
			<p class="text-neutral-100">
				Setiap mentor kami memiliki pengalaman nyata dan track record yang jelas.
			</p>
		</div>

		<Button
			onclick={() => goto('/mentors')}
			class="mt-5 flex cursor-pointer items-center gap-2 rounded-md border border-neutral-50 bg-neutral-50 px-6 py-3 text-sm font-semibold
			 text-rose-500 transition hover:-translate-y-0.5 hover:bg-white md:px-8"
		>
			Lihat Semua
			<span class="transition group-hover:translate-x-1">→</span>
		</Button>
	</div>

	<MentorShowcase />
</section>
