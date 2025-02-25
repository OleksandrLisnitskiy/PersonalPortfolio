import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Oleksandr';

export const lastName = 'Lisnytskyi';

export const description =
	'Backend developer specializing in cloud-native applications and database management. Experienced in designing and optimizing scalable APIs using Flask, Go, and MongoDB Atlas, with strong proficiency in BigQuery SQL, PostgreSQL, and NoSQL solutions. Skilled in deploying and managing cloud infrastructure on AWS using Docker and Terraform, ensuring high availability and performance. Thrives in agile environments, solving complex system architecture challenges, and adapting to new technologies like distributed and event-driven systems. Holds a Computer Science degree from the University of Alberta, eager to contribute to innovative security and risk prevention solutions.';

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

export const skills = getSkills('django', 'flask', 'mongodb', 'postgres','git');
