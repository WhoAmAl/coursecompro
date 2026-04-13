<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Carousel, CarouselContent, CarouselItem } from '$lib/components/ui/carousel';

	let api: any;
	let interval: any;

	const carouselSlides = [
		{
			image: 'https://i.pinimg.com/1200x/54/8f/60/548f6073ddd426818a06ce5c50e8e5e4.jpg',
			hanzi: '你好！',
			pinyin: 'Nǐ hǎo · Halo!',
			badge: 'HSK 1 - 4'
		},
		{
			image: 'https://i.pinimg.com/1200x/54/8f/60/548f6073ddd426818a06ce5c50e8e5e4.jpg', // ganti URL
			hanzi: '谢谢',
			pinyin: 'Xièxiè · Terima Kasih',
			badge: 'HSK 1 - 2'
		},
		{
			image: 'https://i.pinimg.com/1200x/54/8f/60/548f6073ddd426818a06ce5c50e8e5e4.jpg', // ganti URL
			hanzi: '学习',
			pinyin: 'Xuéxí · Belajar',
			badge: 'HSK 2 - 3'
		}
	];

	const students = [
		{
			image: 'https://i.pinimg.com/736x/18/d0/c1/18d0c16862b16f4029edf7fedd592f47.jpg',
			initial: 'CY'
		},
		{
			image: 'https://i.pinimg.com/736x/39/d0/91/39d09176b7f5f4f9e34421c5b43e6a3b.jpg',
			initial: 'JW'
		},
		{
			image: 'https://i.pinimg.com/1200x/13/1d/97/131d97a0ba683cb35744fea353b17789.jpg',
			initial: 'JR'
		}
	];

	const topics = [
		{ hanzi: '你好', pinyin: 'Nǐ hǎo', label: 'Salam & Sapaan' },
		{ hanzi: '数字', pinyin: 'Shùzì', label: 'Angka & Waktu' },
		{ hanzi: '家人', pinyin: 'Jiārén', label: 'Keluarga' }
	];

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		el?.scrollIntoView({ behavior: 'smooth' });
	}

	function setCarouselApi(instance: any) {
		api = instance;

		interval = setInterval(() => {
			api.scrollNext();
		}, 3000);
	}

	onMount(() => {
		interval = setInterval(() => {
			if (api) {
				api.scrollNext();
			}
		}, 3000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<section
	id="home"
	class="relative flex min-h-screen flex-row items-center justify-center overflow-hidden bg-white px-8 py-10"
>
	<div
		class="pointer-events-none absolute -top-40 -left-40 h-125 w-125 rounded-full bg-red-200 opacity-25 blur-3xl"
	></div>
	<div
		class="pointer-events-none absolute top-10 right-0 h-100 w-100 rounded-full bg-rose-300 opacity-15 blur-3xl"
	></div>

	<div
		class="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:-translate-y-10 xl:grid-cols-2"
	>
		<div>
			<h1 class="mb-6 text-4xl leading-tight font-extrabold md:text-6xl">
				Belajar Mandarin <br />
				<span class="bg-linear-to-r from-red-600 to-rose-400 bg-clip-text text-transparent">
					Tanpa Ribet, Tanpa Takut
				</span>
			</h1>

			<p class="mb-8 max-w-lg text-lg text-gray-600">
				Mulai dari nol sampai bisa ngobrol percaya diri. Metode fun, mentor friendly, dan komunitas
				yang support kamu.
			</p>

			<div class="mb-10 flex flex-wrap gap-3">
				<Button
					onclick={() => scrollTo('CTA')}
					size="lg"
					class="cursor-pointer rounded-xl bg-red-600 px-7 text-white shadow-lg shadow-red-200 transition-all duration-300 hover:bg-red-700 hover:shadow-red-300"
				>
					Mulai Sekarang
				</Button>
				<Button
					onclick={() => scrollTo('jenis-kelas')}
					variant="outline"
					size="lg"
					class="cursor-pointer rounded-xl border-red-300 px-7 text-red-600 transition-all duration-300 hover:border-red-400 hover:bg-red-50 hover:text-rose-500"
				>
					Lihat Program
				</Button>
			</div>

			<div class="flex items-center gap-3.5">
				<div class="flex -space-x-2.5">
					{#each students as student}
						<Avatar size="lg">
							<AvatarImage src={student.image} alt={student.initial} />
							<AvatarFallback class="bg-linear-to-br from-red-500 to-rose-500 text-neutral-100"
								>{student.initial}</AvatarFallback
							>
						</Avatar>
					{/each}
				</div>
				<p class="text-sm text-slate-500">
					Bergabung bersama <span class="font-semibold text-slate-800">500+ siswa</span> aktif
				</p>
			</div>
		</div>

		<Card class="overflow-hidden border-0 shadow-[0_20px_64px_rgba(0,0,0,0.10)]">
			<Carousel
				setApi={setCarouselApi}
				class="relative h-62 overflow-hidden"
				style="clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);"
				opts={{ align: 'start', loop: true }}
				orientation="vertical"
			>
				<CarouselContent class="-mt-1 h-60">
					{#each carouselSlides as slide}
						<CarouselItem class="relative h-52 basis-full overflow-hidden">
							<img
								src={slide.image}
								alt="Preview kelas Mandarin"
								class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
							/>

							<div
								class="absolute inset-0 bg-linear-to-t from-red-900/70 via-red-900/20 to-transparent"
							></div>

							<div class="absolute bottom-8 left-5 font-serif leading-none text-white">
								<p
									class="text-5xl font-black tracking-tight drop-shadow-xl"
									style="font-family: 'Noto Serif SC', 'Songti SC', serif;"
								>
									{slide.hanzi}
								</p>
								<p class="mt-1 text-[11px] font-medium tracking-[0.12em] text-white/70 uppercase">
									{slide.pinyin}
								</p>
							</div>

							<div class="absolute top-4 right-4">
								<Badge
									class="border border-white/20 bg-black/40 text-[11px] tracking-wide text-white backdrop-blur-md"
								>
									{slide.badge}
								</Badge>
							</div>
						</CarouselItem>
					{/each}
				</CarouselContent>
			</Carousel>

			<CardContent class="px-5 pt-3">
				<div class="mb-4 flex items-start justify-between gap-3">
					<div class="flex w-full flex-col gap-2">
						<h3 class="text-[15px] leading-snug font-bold text-slate-900">
							Mandarin untuk Anak, Pemula hingga Lanjut
						</h3>
						<p class=" text-[13px] text-slate-500">Belajar dari dasar hingga lanjut</p>
						<p class=" mt-3 text-[13px] text-neutral-800">
							Kurikulum kami dipastikan akan membantu anda mempersiapkan diri untuk bisa studi ke
							Tiongkok ataupun memulai karir di Tiongkok, dari 0 ataupun dari kemampuan yang sudah
							anda miliki.
						</p>
					</div>
					<div class="flex shrink-0 flex-col items-end gap-0.5">
						<span class="text-sm font-bold text-amber-500">★ 4.9</span>
						<span class="text-[11px] text-slate-400">312 ulasan</span>
					</div>
				</div>

				<Button
					class="w-full cursor-pointer rounded-xl bg-red-600 py-5 text-sm font-bold text-white shadow-md shadow-red-200 transition-colors duration-200 hover:bg-red-700"
				>
					Daftar Kelas Sekarang →
				</Button> -->
			</CardContent>
		</Card>
	</div>
</section>
