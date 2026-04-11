<script>
	import ClassMenu from './components/ClassMenu.svelte';
	import CTA from './components/CTA.svelte';
	import FAQ from './components/FAQ.svelte';
	import Herosection from './components/Herosection.svelte';
	import Mentors from './components/Mentors.svelte';
	import Personalisation from './components/Personalisation.svelte';
	import Studysteps from './components/Studysteps.svelte';
	import Testimonials from './components/Testimonials.svelte';
	import UserPersonalisation from './components/UserPersonalisation.svelte';
	import USP from './components/USP.svelte';
</script>

<main class="font-sans text-gray-800">
	<Herosection />
	<USP />
	<Personalisation />
	<ClassMenu />
	<!-- <Studysteps /> -->
	<Mentors />
	<Testimonials />
	<FAQ />
	<CTA />
</main>
