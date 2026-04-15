<script lang="ts">
	import '../layout.css';
	import Logo from '../../../static/LogoScribtware.avif';
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={Logo} /></svelte:head>
{@render children()}
