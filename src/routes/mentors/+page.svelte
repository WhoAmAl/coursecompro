<script lang="ts">
	import { mentors } from '$lib/data/mentors';
</script>

<section class="bg-white px-6 py-20">
	<div class="mx-auto max-w-6xl">
		<div class="mb-14 text-center">
			<h1 class="text-3xl font-bold md:text-4xl">
				Mentor <span class="text-red-500">MandarinPals</span>
			</h1>
			<p class="mt-2 text-gray-500">Mentor terbaik bisa kamu temukan di MandarinPals.</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each mentors as m}
				<a
					href={`/mentors/${m.slug}`}
					class="group rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
				>
					<!-- Avatar -->
					<div class="mb-4 h-20 w-20 rounded-xl bg-gray-200"></div>

					<!-- Info -->
					<h3 class="font-semibold">{m.name}</h3>
					<p class="text-sm text-gray-400">{m.role}</p>

					<!-- Stats -->
					<div class="mt-4 flex justify-between text-xs text-gray-500">
						<span>{m.exp}</span>
						<span>{m.rating}★</span>
					</div>

					<!-- CTA -->
					<div
						class="mt-4 text-sm font-medium text-red-500 opacity-0 transition group-hover:opacity-100"
					>
						Lihat Profil →
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
