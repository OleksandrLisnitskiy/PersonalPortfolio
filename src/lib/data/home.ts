import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Oleksandr';

export const lastName = 'Lisnytskyi';

export const description =
	'Full-stack developer with a strong backend focus, specializing in building production-grade APIs and cloud infrastructure. Experienced delivering features across the full stack using React/TypeScript and Django REST Framework, with deep expertise in PostgreSQL, Redis, Celery, and AWS. Proven track record of reducing infrastructure costs, improving system reliability, and shipping observable, well-tested software — including 99.5% uptime deployments, 85%+ test coverage on critical flows, and 50% AWS cost reductions. Holds a Bachelor of Science in Computing Science from the University of Alberta.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/OleksandrLisnitskiy' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/oleksandr-lisnitskyi/'
	},
	{
		platform: Platform.Email,
		link: 'oleksandrl1009@gmail.com'
	},
];

export const skills = getSkills('django', 'react', 'postgres', 'aws', 'docker');
