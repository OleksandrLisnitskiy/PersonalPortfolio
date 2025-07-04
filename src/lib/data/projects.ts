import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'Booking Management System',
		color: '#0a9e07',
		description:
			'<div style="font-family: Arial, sans-serif; background: #f9f9f9; border-radius: 10px; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 800px; margin: 20px auto;">\n' +
			'  <h2 style="color: #2c3e50;">🚀 Admin Dashboard & Booking Management System</h2>\n' +
			'  <p style="font-size: 1.05rem; color: #555;">\n' +
			'    This is a fully functional web application built with <strong>Flask</strong> 🐍 for managing client bookings, email campaigns, and admin operations for a service-based business.\n' +
			'  </p>\n' +
			'  <ul style="line-height: 1.8; font-size: 1rem; color: #444;">\n' +
			'    <li>👥 <strong>Client & Booking Management</strong> – Admins can filter, view, and manage all bookings and user data through a responsive Bootstrap interface.</li>\n' +
			'    <li>📩 <strong>Email Automation</strong> – Integrated with SendGrid API to send personalized promotional and transactional emails with respect to consent preferences.</li>\n' +
			'    <li>📊 <strong>Visual Dashboard</strong> – Charts display real-time stats on user consent and payment statuses using Chart.js.</li>\n' +
			'    <li>🐳 <strong>Dockerized for Deployment</strong> – Easily portable and deployable using Docker, enabling consistent environments and scalability.</li>\n' +
			'  </ul>\n' +
			'  <p style="margin-top: 20px; color: #777; font-size: 0.95rem;">✨ Clean design, efficient functionality, and modular code make this project easy to expand and maintain.</p>\n' +
			'</div>',
		shortDescription:
			'A Flask-based web application for managing client bookings, sending promotional emails with SendGrid, and visualizing stats using Chart.js.',
		links: [{ to: 'https://github.com/KennethJ1/BookingManagementSystem', label: 'GitHub' }],
		logo: Assets.Calendar,
		name: 'Booking Management System',
		period: {
			from: new Date(2025, 5, 1),
			to: new Date(2025, 6, 6)
		},
		skills: getSkills('flask', 'python', 'docker', 'JS', 'SendGrid'),
		type: 'Web Application',
		screenshots: [
			{
				label: 'Dashboard',
				src: '../../../static/logos/calendar_main.png'
			},
			{
				label: 'Appointment Form',
				src: '../../../static/logos/calendar_form.png'
			},
			{
				label: 'Admin Panel',
				src: '../../../static/logos/booking_admin.png'
			},
			{
				label: 'DB Representation',
				src: '../../../static/logos/booking_db.png'
			}

		]
	},
	{
		slug: 'campusgigs',
		color: '#0a9e07',
		description:
			'<h2>🎓 CampusGigs – Flexible Gig Marketplace for Students 💼</h2>' +
			'' +
			'    <p>' +
			'        <strong>CampusGigs connects students</strong> by offering a flexible gig marketplace where users can:' +
			'    </p>' +
			'' +
			'    <h3>📌 Post Jobs in Three Categories:</h3>' +
			'    <ul>' +
			'        <li>🍔 <strong>Food Delivery</strong> – Students request food pickups and deliveries within campus.</li>' +
			'        <li>📚 <strong>Academic Help</strong> – Tutoring and subject guidance.</li>' +
			'        <li>🎨 <strong>Creative Work</strong> – Graphic design, video editing, and content creation.</li>' +
			'    </ul>' +
			'' +
			'    <h3>💰 Set Your Own Pricing:</h3>' +
			'    <p>' +
			'        There’s <strong>no fixed fee structure</strong>. Students can <strong>negotiate</strong> and adjust pricing based on demand.' +
			'    </p>' +
			'' +
			'    <h3>🔄 Open Market Job Acceptance:</h3>' +
			'    <ul>' +
			'        <li>✅ Other students request to accept jobs, and the job poster selects the most suitable applicant.</li>' +
			'        <li>⏳ If no one accepts a job within a set timeframe, the poster can <strong>increase their offer</strong> to attract more interest.</li>' +
			'    </ul>' +
			'' +
			'    <h3>🔒 Exclusive to Students:</h3>' +
			'    <p>' +
			'        Every user must <strong>register and verify their student status</strong> to create a trusted, campus-only job market.' +
			'    </p>' +
			'' +
			'    <p>' +
			'        By removing price restrictions, promoting flexibility, and keeping it student-exclusive, ' +
			'        <strong>CampusGigs fosters a free-market system</strong> where students set their own rates, accept jobs that fit their schedule, ' +
			'        and build valuable connections within their university. 🚀' +
			'    </p>',
		shortDescription:
			'CampusGigs is a student-run job posting platform where students can post, accept, and complete short-term gigs within their university.',
		links: [{ to: 'https://github.com/kuznimyk/mixed-baddies_fixed', label: 'GitHub' }],
		logo: Assets.CampusGigs,
		name: 'CampusGigs',
		period: {
			from: new Date(2025, 1, 14),
			to: new Date(2025, 1, 17)
		},
		skills: getSkills('mongodb', 'flask', 'python'),
		type: 'Web Application',
		screenshots: [
			{
				label: 'Profile',
				src: 'https://github.com/kuznimyk/mixed-baddies_fixed/blob/main/static/img/Profile/dashboard.png?raw=true'
			},
			{
				label: 'Dark Mode',
				src: 'https://github.com/kuznimyk/mixed-baddies_fixed/blob/main/static/img/Profile/dark-mode.png?raw=true'
			},
			{
				label: 'Job Board',
				src: 'https://github.com/kuznimyk/mixed-baddies_fixed/blob/main/static/img/Profile/home.png?raw=true'
			},
			{
				label: 'Help Form',
				src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/276/860/datas/gallery.jpg'
			}

		]
	},
	{
		slug: 'soccer-betting-bot',
		color: '#f3df00',
		description:
			'<h2>🤖 Devigger Bot – Automated Soccer Betting Odds Comparison ⚽</h2>' +
			'' +
			'    <p>' +
			'        <strong>Devigger Bot</strong> is designed to automatically compare odds across six major soccer leagues:' +
			'    </p>' +
			'' +
			'    <ul>' +
			'        <li>🏴 <strong>English Premier League</strong></li>' +
			'        <li>🇩🇪 <strong>German Bundesliga</strong></li>' +
			'        <li>🇮🇹 <strong>Italian Serie A</strong></li>' +
			'        <li>🇪🇸 <strong>Spanish La Liga</strong></li>' +
			'        <li>🇫🇷 <strong>French Ligue 1</strong></li>' +
			'        <li>🇳🇱 <strong>Dutch Eredivisie</strong></li>' +
			'    </ul>' +
			'' +
			'    <h3>📊 How It Works:</h3>' +
			'    <p>' +
			'        The bot extracts <strong>double-sided line odds</strong> from Kambi and <strong>single-sided final odds</strong> from five other sources. ' +
			'        It processes these odds through a <strong>devigger calculation</strong>, providing outputs for players with acceptable odds.' +
			'    </p>' +
			'' +
			'    <h3>🛠️ Architecture:</h3>' +
			'' +
			'    <h4>📡 Data Collection:</h4>' +
			'    <ul>' +
			'        <li>🔍 <strong>Web Scraping</strong> – Performs HTTP requests to collect betting odds from various sites.</li>' +
			'        <li>📂 <strong>Data Structure</strong> – Organizes scraped data into a nested dictionary, including player names, goals, and odds.</li>' +
			'    </ul>' +
			'' +
			'    <h4>🧮 Calculation Engine:</h4>' +
			'    <ul>' +
			'        <li>⚙️ <strong>Processing</strong> – Computes Expected Value (EV%), Fair Value (FV%), and Market Juice (MJ%).</li>' +
			'        <li>🚀 <strong>Multithreading</strong> – Enhances efficiency by processing scraping and calculations simultaneously.</li>' +
			'    </ul>' +
			'' +
			'    <h4>💬 Discord Integration:</h4>' +
			'    <ul>' +
			'        <li>🔄 <strong>Asynchronous Communication</strong> – Users interact with the bot via Discord, selecting leagues for betting info.</li>' +
			'        <li>☁️ <strong>Server Hosting</strong> – Hosted on an AWS web server for reliability and security.</li>' +
			'    </ul>' +
			'' +
			'    <h3>⚡ Odds Sources:</h3>' +
			'    <ul>' +
			'        <li>🏆 <strong>Primary Source for Leg Odds:</strong> Kambi</li>' +
			'        <li>📌 <strong>Additional Sources for Final Odds:</strong></li>' +
			'        <ul>' +
			'            <li>🎰 Betway</li>' +
			'            <li>🇨🇦 Fanduel Canada</li>' +
			'            <li>🎯 Pointsbet</li>' +
			'            <li>💵 Betonline Props</li>' +
			'        </ul>' +
			'    </ul>' +
			'' +
			'    <p>' +
			'        By leveraging advanced scraping, calculation, and real-time Discord interaction, ' +
			'        <strong>Devigger Bot</strong> offers a powerful tool for analyzing and comparing soccer betting odds. ⚽📈' +
			'    </p>',
		shortDescription:
			'Devigger Bot is designed to automatically compare odds across six major soccer leagues',
		links: [{ to: 'https://github.com/rcc00n/WebScrapper.git', label: 'GitHub' }],
		logo: Assets.Empty,
		name: 'Soccer Betting Bot',
		period: {
			from: new Date(2023, 10, 1),
			to: new Date(2024, 2, 0)
		},
		skills: getSkills('selenium', 'docker', 'aws', 'python'),
		type: 'Discord bot'
	},
	{
		slug: 'c-ads',
		color: '#4089f6',
		description:
			'<h2>🌐 A Social Network for Programmers 👨‍💻</h2>' +
			'' +
			'    <p>' +
			'        Social networks mean different things to different people. For some, they are <strong>a challenge</strong>, ' +
			'        for others, <strong>a way to stay connected</strong>. Some see them as <strong>a source of negativity</strong>, ' +
			'        while others use them as <strong>a tool to grow their business</strong>.' +
			'    </p>' +
			'' +
			'    <p>' +
			'        Our project aims to build a <strong>dedicated social network for programmers</strong>. ' +
			'        Traditional social media platforms make it difficult for developers to find like-minded individuals. ' +
			'        With our network, <strong>finding friends, mentors, and collaborators</strong> will be much easier.' +
			'    </p>' +
			'' +
			'    <h3>🛠️ Features:</h3>' +
			'    <ul>' +
			'        <li>📄 <strong>Create a Profile</strong> – Add your name, age, gender, and programming skills.</li>' +
			'        <li>🖼️ <strong>Upload Photos</strong> – Showcase your projects and achievements.</li>' +
			'        <li>✍️ <strong>Write Posts</strong> – Share thoughts, experiences, and code snippets.</li>' +
			'        <li>📞 <strong>Connect with Others</strong> – Leave contact details to network with peers and mentors.</li>' +
			'    </ul>' +
			'' +
			'    <p>' +
			'        By creating a community <strong>exclusively for programmers</strong>, ' +
			'        we provide a space where developers can grow, share knowledge, and build meaningful connections. 🚀' +
			'    </p>',
		shortDescription:
			'Social network where programmers can connect, share skills, and find mentors.',
		links: [{ to: 'https://github.com/c-ads/c-ads', label: 'GitHub' }],
		logo: Assets.Saprgram,
		name: 'C-ADS',
		period: {
			from: new Date(2021, 9, 20),
			to: new Date(2021, 12, 18)
		},
		skills: getSkills('django', 'postgres', 'docker', 'aws', 'python'),
		type: 'Social Network'
	},
	{
		slug: 'marvel-flip',
		color: '#9727ff',
		description:
			' <h2>🧠 Educational Memory Card Game for Android 🎮</h2>' +
			'' +
			'    <p>' +
			'        <strong>This project is an educational Memory Card Game</strong> for the Android platform, developed using ' +
			'        <strong>Java</strong> and <strong>Android Studio</strong>. The game is designed to enhance ' +
			'        <strong>memory and cognitive skills</strong>, particularly among children, by providing an interactive ' +
			'        and engaging learning experience.  ' +
			'    </p>' +
			'' +
			'    <p>' +
			'        The core gameplay involves <strong>matching pairs of cards</strong> by remembering their positions, helping users ' +
			'        improve their <strong>concentration and recall abilities</strong>. The game adopts a ' +
			'        <strong>"learning through play"</strong> approach, ensuring that players enhance their cognitive proficiency while having fun. ' +
			'        To accommodate different skill levels, the game offers <strong>multiple difficulty settings</strong>, making it ' +
			'        suitable for both beginners and advanced players.  ' +
			'    </p>' +
			'' +
			'    <h3>✨ Key Features:</h3>' +
			'    <ul>' +
			'        <li>🖥️ <strong>Developed with Java & Android Studio</strong> for a smooth experience.</li>' +
			'        <li>🎨 <strong>Simple, child-friendly UI</strong> with bright and engaging visuals.</li>' +
			'        <li>🧩 <strong>Multiple difficulty levels</strong> to cater to all players.</li>' +
			'        <li>⏳ <strong>Customizable game modes</strong> (play with or without a timer).</li>' +
			'        <li>🎮 <strong>Fun & engaging gameplay</strong> for continuous learning.</li>' +
			'    </ul>' +
			'' +
			'    <p>' +
			'        While the primary goal is <strong>education</strong>, the game also aims to be ' +
			'        <strong>entertaining</strong>, ensuring that players stay motivated and engaged. ' +
			'        By balancing <strong>fun and learning</strong>, this project offers a valuable tool for cognitive development.  ' +
			'    </p>',
		shortDescription:
			'Memory Card Game for Android, designed to enhance memory and cognitive skills, especially in children. It features an intuitive interface and engaging gameplay.',
		links: [{ to: 'https://github.com/OleksandrLisnitskiy/AUCSC220_Project6', label: 'GitHub' }],
		logo: Assets.MarvelFlip,
		name: 'Marvel Flip',
		period: {
			from: new Date(2023, 10, 23),
			to: new Date(2023, 12, 22)
		},
		skills: getSkills('java', 'xml', 'postgres'),
		type: 'Mobile Game',
		screenshots: [
			{
				label: 'Dashboard',
				src: '/logos/dashboard.png'
			},
			{
				label: 'Levels',
				src: '/logos/levels.png'
			},
			{
				label: 'Level 1',
				src: '/logos/level1.png'
			},
			{
				label: 'Level 2',
				src: '/logos/level2.png'
			},
			{
				label: 'Level 3',
				src: '/logos/level3.png'
			},
			{
				label: 'Top Score',
				src: '/logos/top_score.png'
			},


		]
	}
];

export const title = 'Projects';
