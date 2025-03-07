import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'backend-developer',
		company: 'Silktronic',
		description:
			'<h2>🖥️ Backend Developer – Web & Database Solutions 🚀</h2>' +
			'' +
			'    <p>' +
			'        As a <strong>Backend Developer</strong>, I worked on building and optimizing server-side applications, ensuring ' +
			'        <strong>efficient data management, API integrations, and seamless application performance</strong>.' +
			'    </p>' +
			'' +
			'    <h3>🔧 Key Responsibilities:</h3>' +
			'    <ul>' +
			'        <li>⚙️ <strong>Developed backend logic</strong> and APIs for web applications using Flask and Django.</li>' +
			'        <li>🗄️ <strong>Designed and managed databases</strong> for efficient data storage and retrieval.</li>' +
			'        <li>🔄 <strong>Integrated third-party services</strong> and APIs for extended functionality.</li>' +
			'        <li>🚀 <strong>Optimized server performance</strong> by improving query efficiency and caching strategies.</li>' +
			'        <li>🛠️ <strong>Implemented authentication & security measures</strong> to protect user data.</li>' +
			'    </ul>' +
			'' +
			'    <h3>🛠️ Technologies & Tools Used:</h3>' +
			'    <ul>' +
			'        <li>🐍 <strong>Programming:</strong> Python</li>' +
			'        <li>🌐 <strong>Web Frameworks:</strong> Flask, Django</li>' +
			'        <li>🗄️ <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB</li>' +
			'        <li>🔗 <strong>API Development:</strong> REST, GraphQL</li>' +
			'        <li>🔧 <strong>Server Management:</strong> Docker, AWS, Nginx</li>' +
			'        <li>📂 <strong>Version Control:</strong> Git, GitHub</li>' +
			'    </ul>' +
			'' +
			'    <h3>🌟 Impact & Achievements:</h3>' +
			'    <ul>' +
			'        <li>✅ <strong>Improved database performance</strong> by optimizing queries and indexing.</li>' +
			'        <li>📈 <strong>Developed scalable APIs</strong> that handled high traffic efficiently.</li>' +
			'        <li>🔒 <strong>Enhanced application security</strong> by implementing authentication and encryption techniques.</li>' +
			'        <li>💡 <strong>Streamlined backend architecture</strong> for better maintainability and scalability.</li>' +
			'    </ul>' +
			'' +
			'    <p>' +
			'        Through my expertise in <strong>backend development, database management, and web frameworks</strong>, ' +
			'        I built robust, scalable, and efficient applications that powered seamless user experiences. 🚀' +
			'    </p>'
		,
		contract: ContractType.PartTime,
		type: 'Back-End Development',
		location: 'Remote',
		period: { from: new Date(2023, 10, 0), to: new Date(Date.now()) },
		skills: getSkills('flask', 'mongodb', 'python', 'selenium', 'aws'),
		name: 'Back-End Developer',
		color: 'red',
		links: [],
		logo: Assets.Silkronic,
		shortDescription: 'Working with databases and Web Frameworks like Flask and Django'
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
		company: 'Self-employed',
		description:
			'<h2>⚙️ Automation Script Development 🌍</h2>' +
			'' +
			'    <p>' +
			'        I worked on <strong>creating fast and efficient automation scripts</strong> for customers worldwide, ' +
			'        helping streamline workflows, reduce manual tasks, and enhance productivity.' +
			'    </p>' +
			'' +
			'    <h3>🔧 Key Contributions:</h3>' +
			'    <ul>' +
			'        <li>🚀 <strong>Developed high-performance automation scripts</strong> to optimize various business processes.</li>' +
			'        <li>⚡ <strong>Improved execution speed</strong> and reduced processing time through optimized scripting techniques.</li>' +
			'        <li>🔍 <strong>Debugged and refined existing automation workflows</strong> to eliminate errors and enhance efficiency.</li>' +
			'        <li>🌍 <strong>Worked with international clients</strong> to customize automation solutions to their specific needs.</li>' +
			'        <li>🔄 <strong>Integrated automation with APIs, databases, and external services</strong> for seamless functionality.</li>' +
			'    </ul>' +
			'' +
			'    <h3>🛠️ Technologies & Tools Used:</h3>' +
			'    <ul>' +
			'        <li>💻 <strong>Programming & Scripting:</strong> Python, Bash, PowerShell</li>' +
			'        <li>⚙️ <strong>Automation Frameworks:</strong> Selenium, Puppeteer, UiPath</li>' +
			'        <li>🖥️ <strong>API Integration:</strong> REST, JSON, Webhooks</li>' +
			'        <li>🔧 <strong>Version Control:</strong> Git, GitHub Actions</li>' +
			'        <li>📂 <strong>Deployment & Cloud Services:</strong> AWS, Docker</li>' +
			'    </ul>' +
			'' +
			'    <h3>🌟 Impact & Achievements:</h3>' +
			'    <ul>' +
			'        <li>📈 <strong>Reduced manual workload</strong> for clients by automating repetitive tasks.</li>' +
			'        <li>⏳ <strong>Improved efficiency</strong> by optimizing script execution time.</li>' +
			'        <li>💡 <strong>Enhanced automation reliability</strong> by implementing robust error-handling mechanisms.</li>' +
			'        <li>🌍 <strong>Delivered scalable solutions</strong> adaptable to different industries and workflows.</li>' +
			'    </ul>' +
			'' +
			'    <p>' +
			'        My work in automation scripting has helped businesses and individuals ' +
			'        <strong>save time, improve accuracy, and optimize their workflows</strong>. 🚀' +
			'    </p>',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2021, 0, 1), to: new Date(2023,10, 27) },
		skills: getSkills('python', 'selenium', 'aws', 'docker'),
		name: 'Junior Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating fast and efficient automation scripts for customers around the world.',
	}
];

export const title = 'Experience';
