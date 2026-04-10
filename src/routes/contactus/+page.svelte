<script lang="ts">
	const phone = '6281234567890';
	const message = encodeURIComponent('Halo, saya ingin bertanya tentang program belajar.');

	const whatsappLink = `https://wa.me/${phone}?text=${message}`;
	const instagramLink = 'https://instagram.com/eye.on.palestine';
	const emailLink = 'mailto:support@yourbrand.com';
</script>

<section class="relative min-h-screen overflow-hidden bg-white px-6 py-20">
	<div class="relative mx-auto max-w-5xl">
		<div class="text-center">
			<h1 class="text-4xl font-bold text-gray-900 md:text-5xl">Contact Us!</h1>
			<p class="mx-auto mt-4 max-w-xl text-gray-500">
				Pilih cara tercepat untuk terhubung dengan kami. Kami akan membantu kamu untuk menyesuaikan
				kebutuhan kamu dengan program yang kami miliki.
			</p>
		</div>

		<div class="mt-16 grid gap-6 md:grid-cols-3">
			<a
				href={whatsappLink}
				target="_blank"
				class="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/10"
			>
				<div
					class="absolute top-0 left-0 h-[4px] w-0 bg-red-500 transition-all duration-500 group-hover:w-full"
				></div>

				<div
					class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-red-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				></div>

				<div class="relative z-10">
					<div class="flex items-center space-x-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-colors group-hover:bg-red-500 group-hover:text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
								/>
							</svg>
						</div>
						<h3 class="text-xl font-bold tracking-tight text-gray-900">WhatsApp</h3>
					</div>

					<p class="mt-4 text-sm leading-relaxed text-gray-500">
						Chat langsung dengan tim kami untuk respon yang lebih cepat dan personal.
					</p>

					<div class="mt-8 flex items-center font-semibold text-red-500">
						<span class="text-sm tracking-wider uppercase">Mulai Chat</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</div>
				</div>
			</a>

			<a
				href={instagramLink}
				target="_blank"
				class="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/10"
			>
				<div
					class="absolute top-0 left-0 h-[4px] w-0 bg-red-500 transition-all duration-500 group-hover:w-full"
				></div>
				<div
					class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-red-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				></div>

				<div class="relative z-10">
					<div class="flex items-center space-x-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-colors group-hover:bg-red-500 group-hover:text-white"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388a5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947s.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063s3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388a5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123a5.9 5.9 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0S8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895a3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008"
								/></svg
							>
						</div>
						<h3 class="text-xl font-bold tracking-tight text-gray-900">Instagram</h3>
					</div>

					<p class="mt-4 text-sm leading-relaxed text-gray-500">
						Lihat update terbaru kami dan kirimkan pertanyaan via Direct Message.
					</p>

					<div class="mt-8 flex items-center font-semibold text-red-500">
						<span class="text-sm tracking-wider uppercase">Buka DM</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</div>
				</div>
			</a>

			<a
				href={emailLink}
				class="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/10"
			>
				<div
					class="absolute top-0 left-0 h-[4px] w-0 bg-red-500 transition-all duration-500 group-hover:w-full"
				></div>
				<div
					class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-red-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				></div>

				<div class="relative z-10">
					<div class="flex items-center space-x-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-colors group-hover:bg-red-500 group-hover:text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<h3 class="text-xl font-bold tracking-tight text-gray-900">Email</h3>
					</div>

					<p class="mt-4 text-sm leading-relaxed text-gray-500">
						support@yourbrand.com — Untuk pertanyaan kerjasama atau bantuan teknis.
					</p>

					<div class="mt-8 flex items-center font-semibold text-red-500">
						<span class="text-sm tracking-wider uppercase">Kirim Email</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</div>
				</div>
			</a>
		</div>

		<p class="mt-16 text-center text-sm text-gray-400">
			Kami paling cepat merespon anda pada platform Whatsapp!
		</p>
	</div>
</section>
