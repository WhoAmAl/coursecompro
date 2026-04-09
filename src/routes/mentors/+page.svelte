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

		<div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
			{#each mentors as m}
				<a
					href={`/mentors/${m.slug}`}
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
				</a>
			{/each}
		</div>
	</div>
</section>
