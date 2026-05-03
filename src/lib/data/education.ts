import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor of Science in Computing Science',
		description: '',
		location: 'Edmonton, AB, Canada',
		logo: Assets.UofA,
		name: 'University of Alberta',
		organization: 'UofA',
		period: { from: new Date(2022, 8, 1), to: new Date(2025, 5, 30) },
		shortDescription: '',
		slug: 'uofa',
		subjects: ['Web Design & Development', 'Software Engineering', 'Networks & Security', 'Data Structures and Algorithms', 'Calculus', 'Python', 'C++', 'Java', 'Databases', 'Computer Architecture']
	},
	{
		degree: 'High School',
		description: '',
		location: 'Ukraine',
		logo: Assets.Garmonia,
		name: 'Harmoni',
		organization: 'Harmoni',
		period: { from: new Date(2015, 9, 0), to: new Date(2021, 6, 0)},
		shortDescription: '',
		slug: 'harmoni',
		subjects: ['Programing', 'Calculus', 'Geometry', 'Algebra']
	}
];

export const title = 'Education';
