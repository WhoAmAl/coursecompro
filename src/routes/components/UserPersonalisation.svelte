<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';

	type Plan = {
		label: string;
		price: number;
		meetings: string;
		duration: number;
	};

	type ClassType = 'private' | 'semi' | 'group';
	type Level = 1 | 2 | 3 | 4 | 5;
	type Pricing = Record<Level, Record<ClassType, Plan[]>>;

	const classTypes: ClassType[] = ['private', 'semi', 'group'];
	const levels: Level[] = [1, 2, 3, 4, 5];

	let start = $state<string>('1');
	let end = $state<string>('1');
	let type = $state<ClassType>('semi');
	let selectedPlan = $state(0);

	function toLevel(v: string): Level {
		return Number(v) as Level;
	}

	const pricing: Pricing = {
		1: {
			private: [
				{ label: 'Reguler', price: 1300000, meetings: '8x / bulan', duration: 3 },
				{ label: 'Intensif', price: 1800000, meetings: '12x / bulan', duration: 2 }
			],
			semi: [
				{ label: 'Reguler', price: 750000, meetings: '8x / bulan', duration: 3 },
				{ label: 'Intensif', price: 1000000, meetings: '12x / bulan', duration: 2 }
			],
			group: [
				{ label: 'Reguler', price: 385000, meetings: '8x / bulan', duration: 3 },
				{ label: 'Intensif', price: 480000, meetings: '12x / bulan', duration: 2 }
			]
		},

		2: {
			private: [
				{ label: 'Reguler', price: 1400000, meetings: '8x / bulan', duration: 3 },
				{ label: 'Intensif', price: 1900000, meetings: '12x / bulan', duration: 2 }
			],
			semi: [
				{ label: 'Reguler', price: 850000, meetings: '8x / bulan', duration: 3 },
				{ label: 'Intensif', price: 1100000, meetings: '12x / bulan', duration: 2 }
			],
			group: [
				{ label: 'Reguler', price: 435000, meetings: '8x / bulan', duration: 3 },
				{ label: 'Intensif', price: 550000, meetings: '12x / bulan', duration: 2 }
			]
		},

		3: {
			private: [
				{ label: 'Reguler', price: 1500000, meetings: '8x / bulan', duration: 3 },
				{ label: 'Intensif', price: 2100000, meetings: '12x / bulan', duration: 2 }
			],
			semi: [
				{ label: 'Reguler', price: 950000, meetings: '8x / bulan', duration: 3 },
				{ label: 'Intensif', price: 1200000, meetings: '12x / bulan', duration: 2 }
			],
			group: [
				{ label: 'Reguler', price: 500000, meetings: '8x / bulan', duration: 3 },
				{ label: 'Intensif', price: 650000, meetings: '12x / bulan', duration: 2 }
			]
		},

		4: {
			private: [
				{ label: 'Reguler', price: 1700000, meetings: '8x / bulan', duration: 3 },
				{ label: 'Intensif', price: 2300000, meetings: '12x / bulan', duration: 2 }
			],
			semi: [
				{ label: 'Reguler', price: 1050000, meetings: '8x / bulan', duration: 3 },
				{ label: 'Intensif', price: 1350000, meetings: '12x / bulan', duration: 2 }
			],
			group: [
				{ label: 'Reguler', price: 600000, meetings: '8x / bulan', duration: 3 },
				{ label: 'Intensif', price: 750000, meetings: '12x / bulan', duration: 2 }
			]
		},

		5: {
			private: [
				{ label: 'Reguler', price: 1900000, meetings: '8x / bulan', duration: 3 },
				{ label: 'Intensif', price: 2600000, meetings: '12x / bulan', duration: 2 }
			],
			semi: [
				{ label: 'Reguler', price: 1200000, meetings: '8x / bulan', duration: 3 },
				{ label: 'Intensif', price: 1500000, meetings: '12x / bulan', duration: 2 }
			],
			group: [
				{ label: 'Reguler', price: 700000, meetings: '8x / bulan', duration: 3 },
				{ label: 'Intensif', price: 900000, meetings: '12x / bulan', duration: 2 }
			]
		}
	};

	function getLevels(): Level[] {
		const s = toLevel(start);
		const e = toLevel(end);
		return levels.filter((l) => l >= s && l <= e);
	}

	function total(): number {
		let sum = 0;
		for (const lvl of getLevels()) {
			const plan = pricing[lvl]?.[type]?.[selectedPlan];
			if (plan) sum += plan.price * plan.duration;
		}
		return sum;
	}

	function format(n: number): string {
		return 'Rp ' + n.toLocaleString('id-ID');
	}

	$effect(() => {
		if (toLevel(start) > toLevel(end)) {
			end = start;
		}
	});

	function priceRangeByIndex(index: number) {
		const prices = getLevels()
			.map((lvl) => pricing[lvl]?.[type]?.[index]?.price)
			.filter(Boolean) as number[];

		if (!prices.length) return null;

		return {
			min: Math.min(...prices),
			max: Math.max(...prices)
		};
	}

	const startLabel = $derived(`Mulai HSK ${start}`);
	const endLabel = $derived(`Sampai HSK ${end}`);
</script>

<section class="bg-linear-to-b from-white to-red-50/30 px-6 py-16">
	<div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
		<div>
			<h3 class="mb-6 text-3xl font-bold">
				Custom <span class="text-red-500">Learning Plan</span>
			</h3>

			<div class="space-y-6 rounded-3xl border bg-white p-6 shadow-lg">
				<div class="grid grid-cols-2 gap-3">
					<Select type="single" bind:value={start}>
						<SelectTrigger class="w-full cursor-pointer">{startLabel}</SelectTrigger>

						<SelectContent>
							{#each levels as l}
								<SelectItem class="cursor-pointer" value={String(l)}>
									Mulai HSK {l}
								</SelectItem>
							{/each}
						</SelectContent>
					</Select>

					<Select type="single" bind:value={end}>
						<SelectTrigger class="w-full cursor-pointer">{endLabel}</SelectTrigger>

						<SelectContent>
							{#each levels as l}
								<SelectItem class="cursor-pointer" value={String(l)} disabled={l < toLevel(start)}>
									Sampai HSK {l}
								</SelectItem>
							{/each}
						</SelectContent>
					</Select>
				</div>

				<div class="grid grid-cols-3 gap-3">
					{#each classTypes as t}
						<Button
							onclick={() => (type = t)}
							class={`flex cursor-pointer flex-col items-center rounded-xl border px-4 py-8 text-neutral-950 transition-all hover:bg-red-100
							${type === t ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-transparent hover:border-red-300'}`}
						>
							<p class="font-semibold whitespace-break-spaces capitalize">
								{t === 'semi' ? 'Semi Private' : t}
							</p>
							{#if t === 'private'}
								<p class="text-sm text-neutral-400 capitalize">1 Orang</p>
							{:else if t === 'semi'}
								<p class="text-sm text-neutral-400 capitalize">2-3 Orang</p>
							{:else}
								<p class="text-sm text-neutral-400 capitalize">5-8 Orang</p>
							{/if}
						</Button>
					{/each}
				</div>

				<div class="grid gap-3">
					{#each pricing[toLevel(start)][type] as plan, i}
						{@const range = priceRangeByIndex(i)}

						<Button
							onclick={() => (selectedPlan = i)}
							class={`flex cursor-pointer justify-between rounded-xl border border-gray-200 bg-transparent p-4 py-8 hover:border-red-300 hover:bg-red-100
							${selectedPlan === i ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
						>
							<div class="text-neutral-950">
								<p>{plan.label}</p>
								<p class="text-xs text-gray-400">{plan.meetings}</p>
							</div>

							{#if range}
								<p class="md:text-md text-xs font-bold text-red-600">
									{range.min === range.max
										? format(range.min)
										: `${format(range.min)} - ${format(range.max)}`}
								</p>
							{/if}
						</Button>
					{/each}
				</div>
			</div>
		</div>

		<div class="flex flex-col justify-between rounded-3xl border bg-white p-8 shadow-xl">
			<div>
				<p class="mb-4 text-lg text-neutral-700">Learning Path</p>
				<p class="mb-4 text-sm text-neutral-400">
					Setiap level terdiri dari 24x pertemuan, program intensif akan selesai lebih cepat
					daripada reguler.
				</p>
				<div class="mb-6 flex flex-wrap gap-2">
					{#each getLevels() as l}
						<Badge class="rounded-full bg-red-50 px-3 py-1 text-xs text-red-600">HSK {l}</Badge>
					{/each}
				</div>
				<div class="space-y-2 text-sm">
					{#each getLevels() as lvl}
						<div class="flex justify-between">
							<span>HSK {lvl}</span>
							<span class="text-gray-500">
								{format(
									pricing[lvl]?.[type]?.[selectedPlan]?.price ??
										pricing[lvl]?.[type]?.[0]?.price ??
										0
								)}
								{#if selectedPlan === 0}
									<span>x (3)</span>
								{:else if selectedPlan === 1}
									<span>x (2)</span>
								{/if}
							</span>
						</div>
					{/each}
				</div>
			</div>
			<div class="mt-8 border-t pt-6">
				<p class="text-xs text-gray-400">Total Estimasi</p>
				<p class="text-3xl font-bold text-red-600">{format(total())}</p>
				<Button
					class="mt-4 w-full cursor-pointer rounded-xl border border-red-500 bg-transparent py-5 font-semibold text-red-500 shadow transition hover:scale-[1.03] hover:text-neutral-100"
				>
					Konsultasi Sekarang
				</Button>
			</div>
		</div>
	</div>
</section>
