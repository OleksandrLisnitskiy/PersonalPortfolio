import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'full-stack-rentino',
		company: 'Rentino',
		description:
			'<h2>Full-Stack Developer – Peer-to-Peer Rental Marketplace</h2>\n' +
			'\n' +
			'<p>\n' +
			'    <a href="https://rentino.org" target="_blank" rel="noopener noreferrer"><strong>Rentino</strong></a> is a peer-to-peer rental marketplace connecting owners and renters.\n' +
			'    I architected and built the backend API and production infrastructure from the ground up using <strong>Django/DRF</strong>,\n' +
			'    deployed on AWS with Docker and Cloudflare.\n' +
			'</p>\n' +
			'\n' +
			'<h3>Backend & API</h3>\n' +
			'<ul>\n' +
			'    <li>Architected the backend API using <strong>Django/DRF</strong>, applying clean layered separation (API → service → repository) that reduced onboarding time for new contributors by <strong>~40%</strong> and cut code-review churn by <strong>30%</strong>.</li>\n' +
			'    <li>Designed <strong>PostgreSQL schemas</strong> with ACID-compliant transactional writes, eliminating race conditions across booking, payment, and inventory operations — reducing data-integrity incidents to zero since launch.</li>\n' +
			'    <li>Implemented <strong>OAuth 2.0 / JWT authentication</strong> with role-based access control (RBAC), securing multi-tenant data access and passing an internal security audit with zero critical findings.</li>\n' +
			'</ul>\n' +
			'\n' +
			'<h3>Async & Background Jobs</h3>\n' +
			'<ul>\n' +
			'    <li>Integrated <strong>Celery + Redis</strong> task queue with a beat scheduler for asynchronous job processing, cutting average API response time by <strong>30%</strong> and enabling retry-safe automation for time-sensitive operations.</li>\n' +
			'</ul>\n' +
			'\n' +
			'<h3>Infrastructure & DevOps</h3>\n' +
			'<ul>\n' +
			'    <li>Analysed <strong>AWS CloudWatch</strong> metrics, right-sized EC2 instances, implemented auto-scaling policies, and migrated static assets to S3/CloudFront, collectively reducing monthly AWS infrastructure costs by <strong>50%</strong>.</li>\n' +
			'    <li>Containerised all services with <strong>Docker Compose</strong> for local parity and deployed to <strong>AWS ECS</strong> with structured logging (CloudWatch) and health checks, achieving <strong>99.5% uptime</strong> across staging and production environments.</li>\n' +
			'    <li>Set up <strong>CI/CD pipelines</strong> via GitHub Actions for automated builds, image pushes, and production deployments.</li>\n' +
			'</ul>\n' +
			'\n' +
			'<h3>Testing & Quality</h3>\n' +
			'<ul>\n' +
			'    <li>Wrote unit and integration tests (<strong>pytest, coverage.py</strong>) achieving <strong>85%+ code coverage</strong> on critical payment and booking flows, reducing post-release bug reports by <strong>45%</strong>.</li>\n' +
			'</ul>\n' +
			'\n' +
			'<h3>Impact</h3>\n' +
			'<ul>\n' +
			'    <li>Reduced average API response time by <strong>30%</strong> through Celery task offloading and Redis caching.</li>\n' +
			'    <li>Cut monthly AWS infrastructure costs by <strong>50%</strong> through right-sizing and CDN migration.</li>\n' +
			'    <li>Achieved <strong>99.5% uptime</strong> with zero data-integrity incidents since launch.</li>\n' +
			'</ul>',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2025, 8, 1), to: new Date(Date.now()) },
		skills: getSkills('django', 'python', 'postgres', 'celery', 'redis', 'docker', 'aws', 'git'),
		name: 'Full-Stack Developer',
		color: 'blue',
		links: [{ to: 'https://rentino.org', label: 'Rentino' }],
		logo: Assets.Rentino,
		shortDescription: 'Architected backend API and AWS infrastructure for a peer-to-peer rental marketplace using Django/DRF, PostgreSQL, Celery, and Docker.',
		screenshots: [
			{ src: '/logos/Rentino_1.PNG', label: 'Homepage' },
			{ src: '/logos/Rentino_2.PNG', label: 'Listings' },
			{ src: '/logos/Rentino_3.PNG', label: 'Booking' },
			{ src: '/logos/Rentino_4.PNG', label: 'Dashboard' },
		]
	},
	{
		slug: 'software-developer',
		company: 'Confidential Client (B2B SaaS)',
		description:
			'<h2>Software Developer – B2B SaaS Platform</h2>\n' +
			'\n' +
			'<p>\n' +
			'    As a <strong>Software Developer</strong> on a B2B SaaS product, I delivered production-ready features across multiple release cycles\n' +
			'    using a <strong>React/TypeScript</strong> front-end and <strong>Django REST</strong> back-end.\n' +
			'</p>\n' +
			'\n' +
			'<h3>Key Contributions</h3>\n' +
			'<ul>\n' +
			'    <li>Delivered production-ready features across <strong>3+ release cycles</strong> using a React/TypeScript front-end and Django REST back-end, improving UI consistency and reducing post-release defects by an estimated <strong>30%</strong>.</li>\n' +
			'    <li>Built interactive scheduling views with <strong>optimistic UI updates</strong> and client-side caching (<strong>React Query</strong>), cutting average calendar-load interaction time by over <strong>50%</strong> and reducing perceived latency significantly.</li>\n' +
			'    <li>Diagnosed and resolved recurring data and UI regressions through structured Git workflows, automated linting (<strong>ESLint, Black</strong>), and pre-commit hooks, reducing repeat issue reports by approximately <strong>40%</strong> over three months.</li>\n' +
			'    <li>Introduced <strong>Sentry</strong> error monitoring and <strong>Datadog APM</strong> dashboards, reducing mean time to detection (MTTD) for production issues from hours to under <strong>15 minutes</strong>.</li>\n' +
			'    <li>Migrated legacy REST endpoints to a <strong>versioned API design</strong> with OpenAPI/Swagger documentation, enabling two external partners to self-integrate without engineering support.</li>\n' +
			'</ul>\n' +
			'\n' +
			'<h3>Technologies Used</h3>\n' +
			'<ul>\n' +
			'    <li><strong>Frontend:</strong> React 18, TypeScript, React Query</li>\n' +
			'    <li><strong>Backend:</strong> Python, Django REST Framework</li>\n' +
			'    <li><strong>Monitoring:</strong> Sentry, Datadog APM</li>\n' +
			'    <li><strong>DevOps:</strong> Docker, Git, GitHub Actions</li>\n' +
			'</ul>\n' +
			'\n' +
			'<h3>Impact</h3>\n' +
			'<ul>\n' +
			'    <li>Reduced post-release defects by an estimated <strong>30%</strong> through careful pre-release testing.</li>\n' +
			'    <li>Cut average calendar-load interaction time by over <strong>50%</strong> with optimistic UI updates and React Query caching.</li>\n' +
			'    <li>Reduced MTTD for production issues from hours to under <strong>15 minutes</strong> via Sentry and Datadog.</li>\n' +
			'</ul>',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2024, 7, 1), to: new Date(2025, 8, 1) },
		skills: getSkills('react', 'JS', 'django', 'python', 'docker', 'git'),
		name: 'Software Developer',
		color: 'red',
		links: [],
		logo: Assets.Empty,
		shortDescription: 'Delivered full-stack features with React/TypeScript and Django REST for a B2B SaaS platform, improving UI performance and production observability.'
	},
	{
		slug: 'mla-assistant',
		company: 'Legislative Assembly of Alberta',
		description:
			'<h2>🏛️ MLA Assistant – Government Administration Support 📜</h2>' +
			'' +
			'    <p>' +
			'        As an <strong>MLA Assistant</strong>, I provided administrative and logistical support to a Member of the Legislative Assembly (MLA), ' +
			'        ensuring smooth operations, effective communication, and efficient handling of governmental responsibilities.' +
			'    </p>' +
			'' +
			'    <h3>🔧 Key Responsibilities:</h3>' +
			'    <ul>' +
			'        <li>📑 <strong>Administrative Support:</strong> Managed schedules, correspondence, and documentation for the MLA.</li>' +
			'        <li>📢 <strong>Public Relations:</strong> Assisted in handling constituent inquiries, complaints, and service requests.</li>' +
			'        <li>📝 <strong>Legislative Research:</strong> Conducted research on policies, bills, and government initiatives.</li>' +
			'        <li>🤝 <strong>Community Engagement:</strong> Coordinated meetings, events, and public outreach programs.</li>' +
			'        <li>🏛️ <strong>Government Liaison:</strong> Communicated with various government departments and officials.</li>' +
			'    </ul>' +
			'' +
			'    <h3>🛠️ Skills & Tools Used:</h3>' +
			'    <ul>' +
			'        <li>💻 <strong>Office & Documentation:</strong> MS Office, Google Docs, spreadsheets.</li>' +
			'        <li>📞 <strong>Communication & Public Relations:</strong> Email drafting, public speaking, official correspondence.</li>' +
			'        <li>🔍 <strong>Policy & Legislative Research:</strong> Analyzing bills, government reports, and legal documents.</li>' +
			'        <li>📊 <strong>Data & Case Management:</strong> Tracking constituent concerns and follow-ups.</li>' +
			'        <li>🗓️ <strong>Event Coordination:</strong> Organizing press conferences, public meetings, and constituency visits.</li>' +
			'    </ul>' +
			'' +
			'    <h3>🌟 Impact & Achievements:</h3>' +
			'    <ul>' +
			'        <li>✅ <strong>Streamlined administrative processes</strong> to improve office efficiency.</li>' +
			'        <li>📈 <strong>Enhanced constituent services</strong> by promptly addressing community concerns.</li>' +
			'        <li>🤝 <strong>Strengthened public engagement</strong> by organizing community meetings and events.</li>' +
			'        <li>🏛️ <strong>Supported policy initiatives</strong> through research and documentation.</li>' +
			'    </ul>' +
			'' +
			'    <p>' +
			'        Through my role as an MLA Assistant, I contributed to <strong>efficient governance, policy research, and community engagement</strong>, ' +
			'        ensuring effective communication between the government and the public. 🚀' +
			'    </p>',
		contract: ContractType.FullTime,
		type: 'MLA Assistance',
		location: 'Camrose, AB, Canada',
		period: { from: new Date(2024, 9, 1), to: new Date(Date.now())},
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'MLA Assistant',
		color: 'blue',
		links: [],
		logo: Assets.LogoLAO,
		shortDescription: 'Assisting Camrose MLA with scheduling meetings and communication with public.'
	},
	{
		slug: 'software-freelance-junior',
		company: 'UpWork',
		description:
			'<h2>Junior Freelancer – Web Development</h2>\n' +
			'\n' +
			'<p>\n' +
			'    As a freelance web developer on UpWork, I delivered responsive website builds and feature updates for\n' +
			'    <strong>10+ clients</strong> across diverse industries, focusing on design fidelity, cross-browser compatibility,\n' +
			'    and performance optimisation.\n' +
			'</p>\n' +
			'\n' +
			'<h3>Key Contributions</h3>\n' +
			'<ul>\n' +
			'    <li>Delivered responsive website builds and feature updates for 10+ clients, achieving first- or second-revision approval on <strong>90% of deliverables</strong> through clear scope alignment and design fidelity.</li>\n' +
			'    <li>Resolved <strong>CSS/HTML and cross-browser compatibility issues</strong> across Chrome, Firefox, and Safari, reducing mobile-viewport layout breaks by roughly <strong>60%</strong> on actively maintained client projects.</li>\n' +
			'    <li>Integrated third-party APIs (<strong>Google Analytics 4, Hotjar, Mailchimp</strong>) into 5+ client stacks, enabling new data flows that saved each client several hours per week of manual reporting overhead.</li>\n' +
			'    <li>Optimised <strong>Core Web Vitals</strong> (LCP, CLS, FID) for three e-commerce clients, achieving green Lighthouse scores and contributing to an average <strong>18% increase in organic search traffic</strong> within 90 days.</li>\n' +
			'</ul>\n' +
			'\n' +
			'<h3>Impact</h3>\n' +
			'<ul>\n' +
			'    <li>90% of deliverables approved on first or second revision across 10+ client projects.</li>\n' +
			'    <li>Reduced mobile-viewport layout breaks by <strong>60%</strong> through cross-browser compatibility fixes.</li>\n' +
			'    <li>Contributed to an average <strong>18% increase in organic search traffic</strong> for e-commerce clients within 90 days.</li>\n' +
			'</ul>',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2021, 0, 1), to: new Date(2023, 10, 1) },
		skills: getSkills('JS', 'git'),
		name: 'Junior Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Delivered responsive website builds and performance optimisations for 10+ clients on UpWork, achieving 90% first/second-revision approval rate.',
	}
];

export const title = 'Experience';
