import { error } from '@sveltejs/kit';
import { mentors } from '$lib/data/mentors';

export function load({ params }) {
	const mentor = mentors.find((m) => m.slug === params.slug);

	if (!mentor) {
		throw error(404, 'Mentor not found');
	}

	return { mentor };
}
