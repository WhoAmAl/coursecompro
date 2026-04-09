<script lang="ts">
	type Plan = {
		label: string;
		price: number;
		meetings: string;
	};

	type ClassType = 'private' | 'semi' | 'group';
	type Pricing = Record<number, Record<ClassType, Plan[]>>;

	const classTypes = ['private', 'semi', 'group'] as const;

	let start = $state(1);
	let end = $state(2);
	let type = $state<(typeof classTypes)[number]>('semi');
	let selectedPlan = $state(0);

	const pricing: Pricing = {
		1: {
			private: [
				{ label: '8x', price: 1300000, meetings: '8x / bulan' },
				{ label: '12x', price: 1800000, meetings: '12x / bulan' }
			],
			semi: [
				{ label: '8x (2 org)', price: 750000, meetings: '8x / bulan' },
				{ label: '12x (2 org)', price: 1000000, meetings: '12x / bulan' }
			],
			group: [
				{ label: '8x', price: 385000, meetings: '8x / bulan' },
				{ label: '12x', price: 480000, meetings: '12x / bulan' }
			]
		},

		2: {
			private: [
				{ label: '8x', price: 1400000, meetings: '8x / bulan' },
				{ label: '12x', price: 1900000, meetings: '12x / bulan' }
			],
			semi: [
				{ label: '8x (2 org)', price: 850000, meetings: '8x / bulan' },
				{ label: '12x (2 org)', price: 1100000, meetings: '12x / bulan' }
			],
			group: [
				{ label: '8x', price: 435000, meetings: '8x / bulan' },
				{ label: '12x', price: 550000, meetings: '12x / bulan' }
			]
		},

		3: {
			private: [
				{ label: '8x', price: 1500000, meetings: '8x / bulan' },
				{ label: '12x', price: 2100000, meetings: '12x / bulan' }
			],
			semi: [
				{ label: '8x (2 org)', price: 950000, meetings: '8x / bulan' },
				{ label: '12x (2 org)', price: 1200000, meetings: '12x / bulan' }
			],
			group: [
				{ label: '8x', price: 500000, meetings: '8x / bulan' },
				{ label: '12x', price: 650000, meetings: '12x / bulan' }
			]
		},

		4: {
			private: [
				{ label: '8x', price: 1700000, meetings: '8x / bulan' },
				{ label: '12x', price: 2300000, meetings: '12x / bulan' }
			],
			semi: [
				{ label: '8x (2 org)', price: 1050000, meetings: '8x / bulan' },
				{ label: '12x (2 org)', price: 1350000, meetings: '12x / bulan' }
			],
			group: [
				{ label: '8x', price: 600000, meetings: '8x / bulan' },
				{ label: '12x', price: 750000, meetings: '12x / bulan' }
			]
		},

		5: {
			private: [
				{ label: '8x', price: 1900000, meetings: '8x / bulan' },
				{ label: '12x', price: 2600000, meetings: '12x / bulan' }
			],
			semi: [
				{ label: '8x (2 org)', price: 1200000, meetings: '8x / bulan' },
				{ label: '12x (2 org)', price: 1500000, meetings: '12x / bulan' }
			],
			group: [
				{ label: '8x', price: 700000, meetings: '8x / bulan' },
				{ label: '12x', price: 900000, meetings: '12x / bulan' }
			]
		}
	};

	function getLevels() {
		return Array.from({ length: end - start + 1 }, (_, i) => start + i);
	}

	function total() {
		let sum = 0;
		for (const lvl of getLevels()) {
			const plan = pricing[lvl]?.[type]?.[selectedPlan];
			if (plan) sum += plan.price;
		}
		return sum;
	}

	function format(n: number) {
		return 'Rp ' + n.toLocaleString('id-ID');
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
						</button>
					{/each}
				</div>

				<!-- PLAN -->
				<div class="grid gap-3">
					{#each pricing[start][type] as plan, i}
						<button
							on:click={() => (selectedPlan = i)}
							class={`flex items-center justify-between rounded-xl border p-4 transition-all
							${selectedPlan === i ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-300'}`}
						>
							<div>
								<p class="font-semibold">{plan.label}</p>
								<p class="text-xs text-gray-400">{plan.meetings}</p>
							</div>
							<p class="font-bold text-red-600">
								{format(plan.price)}
							</p>
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- RIGHT: RESULT -->
		<div class="flex flex-col justify-between rounded-3xl border bg-white p-8 shadow-xl">
			<!-- PATH -->
			<div>
				<p class="mb-4 text-sm text-gray-400">Learning Path</p>
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
