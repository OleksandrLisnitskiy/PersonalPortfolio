import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Edmonton, AB, Canada',
		logo: Assets.UofA,
		name: 'University of Alberta',
		organization: 'UofA',
		period: { from: new Date(2021, 9, 1), to: new Date(2025, 4, 31) },
		shortDescription: '',
		slug: 'uofa',
		subjects: ['Algorithms and Data structures', 'Calculus', 'Python', 'C++', 'Java', 'Databases', 'Software Engineering', 'Computer Architecture', 'Assembly']
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
