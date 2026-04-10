<script lang="ts">
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

	let start = $state<Level>(1);
	let end = $state<Level>(2);
	let type = $state<ClassType>('semi');
	let selectedPlan = $state(0);

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
		return levels.filter((l) => l >= start && l <= end);
	}

	function total(): number {
		let sum = 0;

		for (const lvl of getLevels()) {
			const plan = pricing[lvl]?.[type]?.[selectedPlan];
			if (plan) {
				sum += plan.price * plan.duration;
			}
		}

		return sum;
	}

	function format(n: number): string {
		return 'Rp ' + n.toLocaleString('id-ID');
	}

	$effect(() => {
		if (start > end) {
			end = start;
		}
	});

	function priceRangeByIndex(index: number) {
		let prices: number[] = [];

		for (const lvl of getLevels()) {
			const plan = pricing[lvl]?.[type]?.[index];
			if (plan) {
				prices.push(plan.price);
			}
		}

		if (prices.length === 0) return null;

		return {
			min: Math.min(...prices),
			max: Math.max(...prices)
		};
	}
</script>

<section class="bg-linear-to-b from-white to-red-50/30 px-6 py-16">
	<div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
		<!-- LEFT: CONFIG -->
		<div>
			<h3 class="mb-6 text-3xl font-bold">
				Custom <span class="text-red-500">Learning Plan</span>
			</h3>
			<p class="mb-8 text-gray-500">
				Atur bagaimana kamu ingin belajar bahasa Mandarin, berikut adalah kalkulator sederhana bagi
				kamu untuk mengestimasikan biaya. Sesuaikan perjalanan belajar kamu secara fleksibel.
			</p>

			<div class="space-y-6 rounded-3xl border bg-white p-6 shadow-lg">
				<!-- LEVEL -->
				<div class="grid grid-cols-2 gap-3">
					<select bind:value={start} class="rounded-xl border p-3">
						{#each [1, 2, 3, 4, 5] as l}
							<option value={l}>Mulai HSK {l}</option>
						{/each}
					</select>

					<select bind:value={end} class="rounded-xl border p-3">
						{#each [1, 2, 3, 4, 5] as l}
							<option value={l} disabled={l < start}>
								Sampai HSK {l}
							</option>
						{/each}
					</select>
				</div>

				<!-- TYPE -->
				<div class="grid grid-cols-3 gap-3">
					{#each classTypes as t}
						<button
							on:click={() => (type = t)}
							class={`rounded-xl border p-4 transition-all
							${
								type === t
									? 'scale-[1.02] border-red-500 bg-red-50 shadow-md'
									: 'border-gray-200 hover:border-red-300'
							}`}
						>
							<p class="font-semibold capitalize">
								{t === 'semi' ? 'Semi Private' : t}
							</p>
							{#if t === 'private'}
								<p class="text-sm text-neutral-400 capitalize">1 Orang</p>
							{:else if t === 'semi'}
								<p class="text-sm text-neutral-400 capitalize">2-3 Orang</p>
							{:else}
								<p class="text-sm text-neutral-400 capitalize">5-8 Orang</p>
							{/if}
						</button>
					{/each}
				</div>

				<!-- PLAN -->
				<div class="grid gap-3">
					{#each pricing[start][type] as plan, i}
						{@const range = priceRangeByIndex(i)}

						<button
							on:click={() => (selectedPlan = i)}
							class={`flex items-center justify-between rounded-xl border p-4 transition-all
			${selectedPlan === i ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-300'}`}
						>
							<div>
								<p class="font-semibold">{plan.label}</p>
								<p class="text-xs text-gray-400">{plan.meetings}</p>
							</div>

							{#if range}
								<p class="font-bold text-red-600">
									{range.min === range.max
										? format(range.min)
										: `${format(range.min)} - ${format(range.max)}`}
								</p>
							{/if}
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- RIGHT: RESULT -->
		<div class="flex flex-col justify-between rounded-3xl border bg-white p-8 shadow-xl">
			<!-- PATH -->
			<div>
				<p class="mb-4 text-lg text-neutral-700">Learning Path</p>
				<p class="mb-4 text-sm text-neutral-400">
					Setiap level terdiri dari 24x pertemuan, program intensif akan selesai lebih cepat
					daripada reguler.
				</p>
				<div class="mb-6 flex flex-wrap gap-2">
					{#each getLevels() as l}
						<span class="rounded-full bg-red-50 px-3 py-1 text-xs text-red-600">
							HSK {l}
						</span>
					{/each}
				</div>

				<!-- BREAKDOWN -->
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

			<!-- TOTAL -->
			<div class="mt-8 border-t pt-6">
				<p class="text-xs text-gray-400">Total Estimasi</p>
				<p class="text-3xl font-bold text-red-600">
					{format(total())}
				</p>

				<button
					class="mt-4 w-full rounded-xl bg-linear-to-r from-red-600 to-rose-400 py-3 font-semibold text-white shadow transition hover:scale-[1.03]"
				>
					Konsultasi Sekarang
				</button>
			</div>
		</div>
	</div>
</section>
