<script lang="ts">
	import './layout.css';
	import Logo from '../../static/LogoScribtware.avif';
	import Navbar from './components/Navbar.svelte';
	import Footer from './components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={Logo} /></svelte:head>
<Navbar />
{@render children()}
<Footer />
