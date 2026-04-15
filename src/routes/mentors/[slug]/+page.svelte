<script lang="ts">
	import { goto } from '$app/navigation';
	import { MentorShowcase } from '$lib/components/mentors';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar/index.js';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';

	const { data } = $props();

	function getInitials(name: string): string {
		if (!name) return '';

		return name
			.trim()
			.split(/\s+/)
			.filter(Boolean)
			.slice(0, 2)
			.map((word) => word.charAt(0))
			.join('')
			.toUpperCase();
	}
</script>

<section
	id="specified-mentor"
	class="to-r-500 bg-linear-to-r from-red-500 to-rose-500 px-6 py-5 sm:py-10 md:px-8 md:py-20"
>
	<div class="mx-auto max-w-6xl">
		<div class="grid items-center gap-12 md:grid-cols-2">
			<div class="relative flex flex-col justify-between">
				<div
					class="absolute top-0 left-0 h-full w-0.75 bg-linear-to-b from-red-500 to-rose-400"
				></div>
				<div class="mt-10 pl-6">
					<Avatar class="aspect-4.5/5 h-auto w-30 object-cover">
						<AvatarImage
							src={data.mentor.pict}
							alt={data.mentor.name}
							class="rounded-md object-cover"
						/>
						<AvatarFallback class="rounded-3xl bg-neutral-800 text-3xl text-neutral-100"
							>{getInitials(data.mentor.name)}
						</AvatarFallback>
					</Avatar>
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
			<Card
				class="gap-1 rounded-3xl border border-gray-100 bg-white p-8 shadow-lg
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
						<p class="text-sm font-semibold text-gray-900 md:text-lg">
							{data.mentor.exp}
						</p>
					</div>

					<div>
						<p class="text-xs text-gray-400">Students</p>
						<p class="text-sm font-semibold text-gray-900 md:text-lg">
							{data.mentor.students}
						</p>
					</div>

					<div>
						<p class="text-xs text-gray-400">Rating</p>
						<p class="text-sm font-semibold text-red-500 md:text-lg">
							{data.mentor.rating}★
						</p>
					</div>
				</div>

				<div class="mt-10">
					<h3 class="mb-3 text-sm font-semibold tracking-wide text-gray-400 uppercase">
						Expertise
					</h3>

					<div class="flex flex-wrap gap-2">
						<Badge variant="secondary">HSK Focused</Badge>
						<Badge variant="outline">Speaking</Badge>
						<Badge variant="outline">Pronunciation</Badge>
					</div>
				</div>
			</Card>
		</div>
	</div>
</section>
<div class="flex flex-col items-center pb-10">
	<MentorShowcase />
	<Button
		onclick={() => goto('/mentors')}
		class="mt-5 flex cursor-pointer gap-2 rounded-full bg-red-500 px-6 py-2 text-sm font-semibold text-neutral-100 shadow-md transition-all hover:-translate-y-1 hover:text-neutral-50"
	>
		Lihat Semua Mentor
		<span class="transition group-hover:translate-x-1">→</span>
	</Button>
</div>
