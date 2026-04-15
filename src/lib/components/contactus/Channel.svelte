<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	type Channel = {
		index: string;
		platform: string;
		hanzi: string;
		romanized: string;
		meaning: string;
		cta: string;
		note: string;
		href: string;
		external: boolean;
	};

	const {
		ch,
		delay = 0,
		isLast = false
	}: { ch: Channel; delay?: number; isLast?: boolean } = $props();
</script>

<li class="channel-item px-7" style={`--delay: ${delay}ms`}>
	<a
		href={ch.href}
		target={ch.external ? '_blank' : undefined}
		rel={ch.external ? 'noopener noreferrer' : undefined}
		class="group flex items-center gap-6 rounded py-6 transition-all hover:-mx-2 hover:px-2"
	>
		<span class="min-w-5.5 text-[10.5px] font-bold tracking-widest text-red-600">
			{ch.index}
		</span>

		<div class="hidden min-w-17 flex-col items-center md:flex">
			<span class="hanzi text-xl font-bold text-gray-900 opacity-70 transition-all md:text-[30px]">
				{ch.hanzi}
			</span>
			<span class="mt-1 text-[9px] tracking-widest text-gray-400 italic">
				{ch.romanized}
			</span>
		</div>

		<div class="flex flex-col gap-0.5">
			<span
				class="text-lg font-bold tracking-[-0.02em] text-gray-900 transition-colors group-hover:text-red-600 md:text-[clamp(26px,4.8vw,50px)]"
			>
				{ch.platform}
			</span>
			<span class="text-[10.5px] tracking-[0.13em] text-gray-400 uppercase">
				{ch.meaning}
			</span>
			<div class="absolute right-0 bottom-5 flex flex-col items-center opacity-15 md:hidden">
				<span
					class="hanzi text-xl font-bold text-gray-900 opacity-70 transition-all md:text-[30px]"
				>
					{ch.hanzi}
				</span>
			</div>
		</div>

		<div class="flex-1"></div>

		<Badge
			class="hidden rounded-full border border-red-200 bg-red-100 px-3 text-[10.5px] font-semibold tracking-[0.07em] whitespace-nowrap text-red-600 sm:inline-block"
		>
			{ch.note}
		</Badge>

		<span
			class="text-[10px] font-bold tracking-[0.12em] text-gray-400 uppercase transition-all group-hover:tracking-[0.14em] group-hover:text-gray-900 md:text-[12px]"
		>
			{ch.cta}
		</span>
	</a>

	{#if !isLast}
		<div class="h-px bg-gray-200 transition-all group-hover:bg-red-300"></div>
	{/if}
</li>

<style>
	.channel-item {
		animation: fadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
		animation-delay: var(--delay);
	}

	@keyframes fadeUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.group:hover .hanzi {
		opacity: 1;
		transform: scale(1.1) rotate(-3deg);
	}
</style>
