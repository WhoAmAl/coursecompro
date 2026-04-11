<script lang="ts">
	const testimonials = [
		{
			id: 1,
			name: 'Budi Santoso',
			role: 'Management Trainee @ Huawei',
			image: 'https://i.pinimg.com/736x/c0/57/a4/c057a431078be0e99267586d6777d76a.jpg',
			text: 'Lulus HSK 4 dalam 6 bulan bukan lagi mimpi. Kurikulumnya sangat praktis untuk dunia kerja.',
			prestigious: false
		},
		{
			id: 2,
			name: 'Marcel Wijaya',
			role: 'Full CSC Scholar at Tsinghua University',
			image: 'https://i.pinimg.com/736x/d3/6d/f5/d36df5aad5e76920f39b0dcb96f77c96.jpg',
			text: 'Dari tau dasar doang sampai bisa fasih berdebat dalam bahasa Mandarin. Mentor di sini benar-benar membimbing saya menembus salah satu universitas terbaik dunia. Pengalaman yang mengubah hidup!',
			prestigious: true
		},
		{
			id: 3,
			name: 'Kevin Pratama',
			role: 'Professional Business Interpreter',
			image: 'https://i.pinimg.com/736x/c6/93/5f/c6935fc367471cd95ae15f444d953d1b.jpg',
			text: 'Linkage ke industri Tiongkok sangat kuat. Saya langsung dapat project interpreter setelah lulus.',
			prestigious: false
		}
	];

	const mainPerta = testimonials.find((t) => t.prestigious)!;
	const sidePerta = testimonials.filter((t) => !t.prestigious);
</script>

<section id="testimonials" class="overflow-hidden bg-white px-4 py-24">
	<div class="mx-auto max-w-6xl">
		<div class="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
			<div class="max-w-xl">
				<span
					class="absolute -mt-10 text-6xl font-black tracking-tighter text-red-500 opacity-10 select-none"
					>SUCCESS</span
				>
				<h2 class="relative z-10 text-4xl leading-none font-bold text-slate-900 md:text-6xl">
					Alumni yang <br /> <span class="text-red-500 italic">Mendunia.</span>
				</h2>
			</div>
			<p class="max-w-xs border-l-2 border-red-500 pl-4 text-slate-500">
				Bukan sekadar kursus, ini adalah gerbang karier global Kamu. Lihat bagaimana alumni kami
				berhasil.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
			<div class="order-2 hidden flex-col gap-6 lg:order-1 lg:col-span-3 lg:flex">
				<div
					class="flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-neutral-100 p-3 shadow-2xl transition-all duration-300 hover:bg-white hover:shadow-xl md:shadow-none"
				>
					<img
						src={sidePerta[0].image}
						alt=""
						class=" w-full items-start rounded-xl object-cover object-top grayscale transition-all hover:grayscale-0 md:aspect-auto md:h-auto"
					/>
					<p class="mt-5 mb-6 text-sm leading-relaxed text-slate-600 italic">
						"{sidePerta[0].text}"
					</p>
					<div class="flex items-center gap-3">
						<div class="overflow-hidden">
							<p class="truncate text-xs font-bold">{sidePerta[0].name}</p>
							<p class="truncate text-[10px] font-medium text-red-500">{sidePerta[0].role}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="order-3 flex flex-col gap-6 lg:col-span-3 lg:hidden">
				<div
					class="flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:bg-white hover:shadow-xl"
				>
					<p class="mb-6 text-sm leading-relaxed text-slate-600 italic">"{sidePerta[0].text}"</p>
					<div class="flex items-center gap-3">
						<img
							src={sidePerta[0].image}
							alt=""
							class="h-10 w-10 rounded-full object-cover grayscale transition-all hover:grayscale-0"
						/>
						<div class="overflow-hidden">
							<p class="truncate text-xs font-bold">{sidePerta[0].name}</p>
							<p class="truncate text-[10px] font-medium text-red-500">{sidePerta[0].role}</p>
						</div>
					</div>
				</div>
			</div>

			<div class="order-1 transition-all hover:-translate-y-1 lg:order-2 lg:col-span-6">
				<div class="group relative h-full">
					<div
						class="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-red-600 to-red-400 opacity-25 blur transition duration-1000 group-hover:opacity-50"
					></div>

					<div
						class="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-2 shadow-2xl md:flex-row"
					>
						<div class="relative h-64 overflow-hidden rounded-2xl md:h-full md:w-1/2">
							<img
								src={mainPerta.image}
								alt={mainPerta.name}
								class="absolute inset-0 h-full w-full transform rounded-3xl object-cover transition-transform duration-700"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
							<div class="absolute bottom-4 left-4 text-white">
								<span
									class="rounded-md bg-red-500 px-2 py-1 text-[10px] font-bold tracking-widest uppercase"
									>Star Alumni</span
								>
							</div>
						</div>

						<div class="flex flex-col justify-center p-8 md:w-1/2">
							<div class="mb-4">
								<span class="font-serif text-5xl text-red-500">“</span>
								<p class="-mt-4 text-lg leading-relaxed font-medium text-slate-800">
									{mainPerta.text}
								</p>
							</div>
							<div>
								<h3 class="text-2xl font-bold text-slate-900">{mainPerta.name}</h3>
								<p class="mt-1 text-sm leading-tight font-semibold text-red-600">
									{mainPerta.role}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="order-3 flex flex-col gap-6 lg:col-span-3">
				<div class="order-2 hidden flex-col gap-6 lg:order-1 lg:col-span-3 lg:flex">
					<div
						class="flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-neutral-100 p-3 shadow-2xl transition-all duration-300 hover:bg-white hover:shadow-xl md:shadow-none"
					>
						<img
							src={sidePerta[1].image}
							alt=""
							class=" w-full items-start rounded-xl object-cover object-top grayscale transition-all hover:grayscale-0 md:aspect-auto md:h-auto"
						/>
						<p class="mt-5 mb-6 text-sm leading-relaxed text-slate-600 italic">
							"{sidePerta[1].text}"
						</p>
						<div class="flex items-center gap-3">
							<div class="overflow-hidden">
								<p class="truncate text-xs font-bold">{sidePerta[1].name}</p>
								<p class="truncate text-[10px] font-medium text-red-500">{sidePerta[1].role}</p>
							</div>
						</div>
					</div>
				</div>
				<div
					class="flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:bg-white hover:shadow-xl lg:hidden"
				>
					<p class="mb-6 text-sm leading-relaxed text-slate-600 italic">"{sidePerta[1].text}"</p>
					<div class="flex items-center gap-3">
						<img
							src={sidePerta[1].image}
							alt=""
							class="h-10 w-10 rounded-full object-cover grayscale transition-all hover:grayscale-0"
						/>
						<div class="overflow-hidden">
							<p class="truncate text-xs font-bold">{sidePerta[1].name}</p>
							<p class="truncate text-[10px] font-medium text-red-500">{sidePerta[1].role}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-20 flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale">
			<span class="text-xl font-bold tracking-tighter">HUAWEI</span>
			<span class="text-xl font-bold tracking-tighter">TSINGHUA UNIV</span>
			<span class="text-xl font-bold tracking-tighter">BANK OF CHINA</span>
			<span class="text-xl font-bold tracking-tighter">BYTEDANCE</span>
		</div>
	</div>
</section>

<style>
	/* Custom font if you want to push it further */
	:global(body) {
		-webkit-font-smoothing: antialiased;
	}
</style>
