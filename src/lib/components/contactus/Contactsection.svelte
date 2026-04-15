{#snippet bgitems()}
	<div class="noise-layer pointer-events-none absolute inset-0 z-0 opacity-[0.03]"></div>
	<div class="ink-orb ink-orb--1 pointer-events-none absolute z-0"></div>
	<div class="ink-orb ink-orb--2 pointer-events-none absolute z-0"></div>
{/snippet}

<section
	class="relative flex overflow-hidden px-6 py-8 font-sans text-gray-900 lg:overflow-visible"
>
	{@render bgitems()}
	<div class="relative z-10 w-full">
		<header class="mb-12">
			<div class="mb-8 flex items-center gap-4">
				<span class="h-px flex-1 bg-gray-200"></span>
				<span class="text-[10.5px] font-bold tracking-[0.24em] text-red-600 uppercase">
					Contact Us!
				</span>
				<span class="h-px flex-1 bg-gray-200"></span>
			</div>

			<div class="relative mb-7">
				<h1 class="flex flex-col leading-[0.9] font-bold">
					<span class="title-outline text-[clamp(52px,9.5vw,108px)] tracking-[-0.025em]">
						Bicara
					</span>
					<span class="text-[clamp(52px,9.5vw,108px)] tracking-[-0.025em]"> Dengan Kami </span>
				</h1>

				<span class="title-hanzi pointer-events-none absolute -top-5 -right-4 select-none">
					话
				</span>
			</div>

			<p class="max-w-105 text-[15px] leading-[1.8] text-gray-500">
				Kami tidak hanya mengajar — kami mendengarkan. Pilih saluran yang paling nyaman, dan kami
				akan hadir.
			</p>
		</header>

		<div class="flex justify-center border-t border-gray-200 py-4">
			<span class="text-[10px] tracking-[0.28em] text-gray-400 italic"> — wǒmen zài zhèlǐ — </span>
		</div>
	</div>
</section>

<style>
	/* Noise */
	.noise-layer {
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
		background-size: 256px 256px;
	}

	/* Ink orbs (lighter for white theme) */
	.ink-orb {
		border-radius: 50%;
		filter: blur(90px);
	}

	.ink-orb--1 {
		width: 520px;
		height: 520px;
		background: radial-gradient(circle, rgba(230, 51, 41, 0.08) 0%, transparent 70%);
		top: -180px;
		right: -120px;
		animation: drift1 13s ease-in-out infinite alternate;
	}

	.ink-orb--2 {
		width: 380px;
		height: 380px;
		background: radial-gradient(circle, rgba(230, 51, 41, 0.05) 0%, transparent 70%);
		bottom: -80px;
		left: -60px;
		animation: drift2 16s ease-in-out infinite alternate;
	}

	@keyframes drift1 {
		from {
			transform: translate(0, 0) scale(1);
		}
		to {
			transform: translate(-44px, 28px) scale(1.09);
		}
	}

	@keyframes drift2 {
		from {
			transform: translate(0, 0) scale(1);
		}
		to {
			transform: translate(28px, -18px) scale(1.06);
		}
	}

	/* Outline text */
	.title-outline {
		color: transparent;
		-webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.25);
	}

	.title-hanzi {
		font-family: 'Noto Serif SC', serif;
		font-size: clamp(110px, 20vw, 210px);
		font-weight: 900;
		color: transparent;
		-webkit-text-stroke: 1px rgba(230, 51, 41, 0.15);
		letter-spacing: -0.04em;
		line-height: 1;
	}
</style>
