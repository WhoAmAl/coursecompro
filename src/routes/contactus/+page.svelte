<script lang="ts">
	import Contactsection from '$lib/components/contactus/Contactsection.svelte';
	import Channel from '../../lib/components/contactus/Channel.svelte';
	import Footer from '../../lib/components/contactus/Footer.svelte';

	const phone = '6281234567890';
	const message = encodeURIComponent('Halo, saya ingin bertanya tentang program belajar.');

	const whatsappLink = `https://wa.me/${phone}?text=${message}`;
	const instagramLink = 'https://instagram.com/eye.on.palestine';
	const emailLink = 'mailto:support@yourbrand.com';

	const channels = [
		{
			index: '01',
			platform: 'WhatsApp',
			hanzi: '聊天',
			romanized: 'liáotiān',
			meaning: 'Diskusi',
			cta: 'Mulai Chat →',
			note: 'Respon tercepat',
			href: whatsappLink,
			external: true
		},
		{
			index: '02',
			platform: 'Instagram',
			hanzi: '关注',
			romanized: 'guānzhù',
			meaning: 'Ikuti Kami',
			cta: 'Buka DM →',
			note: 'Konten & Update',
			href: instagramLink,
			external: true
		},
		{
			index: '03',
			platform: 'Email',
			hanzi: '邮件',
			romanized: 'yóujiàn',
			meaning: 'Surat Elektronik',
			cta: 'Tulis Pesan →',
			note: 'Formal & Kerjasama',
			href: emailLink,
			external: false
		}
	];
</script>

<section class="mx-auto max-w-5xl">
	<Contactsection />
	{#each channels as channel, i (channel.index)}
		<Channel ch={channel} delay={i * 20} isLast={i === channels.length - 1} />
	{/each}
	<Footer />
</section>
