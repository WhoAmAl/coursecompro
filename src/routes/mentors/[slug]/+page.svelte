<script lang="ts">
	import Mentorshowcase from '../../components/Mentorshowcase.svelte';

	const { data } = $props();
</script>

<section
	id="specified-mentor"
	class="to-r-500 bg-linear-to-r from-red-500 to-rose-500 px-6 py-5 sm:py-10 md:px-8 md:py-20"
>
	<div class="mx-auto max-w-6xl">
		<div class="grid items-center gap-12 md:grid-cols-2">
			<div class="relative flex flex-col justify-between">
				<div
					class="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-red-500 to-rose-400"
				></div>
				<div class="mt-10 pl-6">
					<img
						src={data.mentor.pict}
						alt=""
						class="aspect-[4.5/5] h-auto w-30 rounded-lg object-cover"
					/>
				</div>

				<div class="pl-6">
					<h1 class="text-6xl leading-tight font-bold text-neutral-100">
						{data.mentor.name}
					</h1>
					<p class="mt-2 text-2xl text-neutral-100">
						{data.mentor.role}
					</p>
					<p class="mt-6 text-sm leading-relaxed text-neutral-100 md:text-lg">
						Membantu siswa mencapai kemampuan Mandarin secara natural, terstruktur, dan percaya diri
						melalui pendekatan praktis.
					</p>
				</div>
			</div>
			<div
				class="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg
		transition-all duration-300 hover:shadow-xl"
			>
				<div>
					<h3 class="mb-3 text-sm font-semibold tracking-wide text-gray-400 uppercase md:text-lg">
						About
					</h3>

					<p class="text-sm leading-relaxed text-gray-600 md:text-lg">
						{data.mentor.desc}
					</p>
				</div>

				<div class="mt-2 grid grid-cols-3 gap-6 border-t pt-4">
					<div>
						<p class="text-xs text-gray-400">Experience</p>
						<p class="text-lg font-semibold text-gray-900">
							{data.mentor.exp}
						</p>
					</div>

					<div>
						<p class="text-xs text-gray-400">Students</p>
						<p class="text-lg font-semibold text-gray-900">
							{data.mentor.students}
						</p>
					</div>

					<div>
						<p class="text-xs text-gray-400">Rating</p>
						<p class="text-lg font-semibold text-red-500">
							{data.mentor.rating}★
						</p>
					</div>
				</div>

				<div class="mt-10">
					<h3 class="mb-3 text-sm font-semibold tracking-wide text-gray-400 uppercase">
						Expertise
					</h3>

					<div class="flex flex-wrap gap-2">
						<span class="rounded-full border px-3 py-1 text-xs text-gray-600"> HSK Training </span>
						<span class="rounded-full border px-3 py-1 text-xs text-gray-600"> Speaking </span>
						<span class="rounded-full border px-3 py-1 text-xs text-gray-600"> Pronunciation </span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<div class="flex flex-col items-center pb-10">
	<Mentorshowcase />
	<a
		href="/mentors"
		class="mt-5 flex gap-2 rounded-full bg-red-500 px-6 py-2 text-sm font-semibold text-neutral-100 shadow-md transition-all hover:-translate-y-1 hover:text-neutral-50"
	>
		Lihat Semua Mentor
		<span class="transition group-hover:translate-x-1">→</span>
	</a>
</div>
