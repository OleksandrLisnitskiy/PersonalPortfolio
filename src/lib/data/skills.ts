import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'django',
		color: 'green',
		description:
			'Django is a high-level Python web framework that enables developers to build secure, scalable, and maintainable web applications rapidly. It follows the Model-View-Template (MVT) architectural pattern and emphasizes reusability, less code, and rapid development. <br>\n' +
			'<br>' +
			'Key Features of Django: <br>\n' +
			'1. Batteries Included 🔋 – Comes with built-in tools for authentication, ORM, session management, and more.<br>\n' +
			'2. Security Focused 🔒 – Protects against SQL injection, XSS, CSRF, and clickjacking by default.<br>\n' +
			'3. Scalable & Versatile 🚀 – Powers small projects to large-scale applications like Instagram and Disqus.<br>\n' +
			'4. ORM (Object-Relational Mapping) 📊 – Interacts with databases like PostgreSQL, MySQL, and SQLite using Python models.<br>\n' +
			'5. Admin Interface 🛠️ – Auto-generates an admin panel for managing app data.<br>\n' +
			'6. URL Routing 🔗 – Clean, readable URLs via Django’s URL dispatcher.<br>\n' +
			'7. Template Engine 🎨 – Supports dynamic content rendering with Django’s templating system.<br>\n' +
			'8. Built-in Authentication 🛡️ – User authentication, password hashing, and session handling are included.',
		logo: Assets.Django,
		name: 'Django',
		category: 'library'
	}),
	defineSkill({
		slug: 'flask',
		color: 'black',
		description:
			'Flask is a micro web framework for Python that is simple, flexible, and lightweight. It is commonly used for building web applications and RESTful APIs. Unlike Django, Flask does not include built-in tools like an ORM or authentication system, making it minimalistic and modular—you can add only the components you need. <br>\n' +
			'<br>' +
			'Key Features of Flask:<br>\n' +
			'1. Lightweight – Minimal overhead, easy to set up <br>\n' +
			'2. Flexible – No strict project structure, customizable <br>\n' +
			'3. Modular – Add only what you need (ORM, authentication, etc.) <br>\n' +
			'4. Fast Development – Great for prototyping and small projects <br>\n' +
			'5. Built-in Development Server – Includes debugging tools',
		logo: Assets.Flask,
		name: 'Flask',
		category: 'library'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description:
			'MongoDB is a NoSQL, document-oriented database designed for high performance, scalability, and flexibility. Unlike traditional relational databases (SQL), MongoDB stores data in JSON-like BSON (Binary JSON) documents, making it highly adaptable for applications with dynamic or unstructured data.\n<br>' +
			'<br>' +
			'Key Features of MongoDB:\n<br>' +
			'1. Schema-less (Flexible Data Model) – No need for fixed table structures\n<br>' +
			'2. Scalable & High Performance – Supports horizontal scaling with sharding\n<br>' +
			'3. Document-Oriented – Stores data in JSON-like documents, making it easy to use\n' +
			'4. Supports Indexing – Ensures fast query performance\n<br>' +
			'5. Geo-Location & Full-Text Search – Ideal for real-time applications\n<br>' +
			'6. Integrates with Modern Stacks – Works well with Node.js, Python, Django, Flask, Express.js, Java, etc.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'postgres',
		color: 'blue',
		description:
			'PostgreSQL (often called Postgres) is an open-source, relational database management system (RDBMS) known for its scalability, reliability, and advanced features. It is a strong competitor to MySQL and is widely used in enterprise applications, web development, and data science.<br>\n' +
			'<br>\n' +
			'Key Features of PostgreSQL:<br>\n' +
			'1. ACID-Compliant – Ensures data integrity and reliability<br>\n' +
			'2. SQL & NoSQL Support – Handles structured & semi-structured data<br>\n' +
			'3. Extensible – Supports custom functions, data types, and procedural languages<br>\n' +
			'4. Scalable & Performance-Oriented – Ideal for large-scale applications<br>\n' +
			'5. Advanced Querying – Includes CTEs (Common Table Expressions), JSONB, and full-text search<br>\n' +
			'6. Strong Security Features – Supports role-based access control (RBAC)<br>\n' +
			'7. Open-Source & Free – No licensing fees, unlike Oracle or SQL Server',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'git',
		color: 'red',
		description:
		'Git is a distributed version control system (VCS) that allows developers to track changes in code, collaborate efficiently, and manage projects seamlessly. It is widely used in software development, open-source projects, and DevOps workflows.<br>\n' +
			'<br>\n' +
			'Key Features of Git:<br>\n' +
			'1. Version Control – Tracks changes in code and allows rollback to previous versions<br>\n' +
			'2. Collaboration – Multiple developers can work on the same project without conflicts<br>\n' +
			'3. Branching & Merging – Work on different features in isolated branches and merge them<br>\n' +
			'4. Distributed System – Every developer has a local copy of the repository<br>\n' +
			'5. Fast & Efficient – Optimized for speed and performance<br>\n' +
			'6. Works with GitHub, GitLab, Bitbucket – Supports cloud-based collaboration',
		logo: Assets.Git,
		name: 'Git',
		category: 'devops'
	}),
	defineSkill({
		slug: 'aws',
		color: 'yellow',
		description:
			'Amazon Web Services (AWS) is the world’s largest cloud computing platform, providing on-demand computing, storage, networking, databases, AI/ML, security, and more. It allows businesses and developers to deploy applications globally without managing physical infrastructure.<br>\n' +
			'<br>\n' +
			'Key Features of AWS:<br>\n' +
			'1. Scalability – Scale up/down resources as needed<br>\n' +
			'2. Pay-As-You-Go Pricing – No upfront costs, only pay for what you use<br>\n' +
			'3. Global Reach – 30+ regions and 100+ availability zones<br>\n' +
			'4. Security & Compliance – Highly secure with encryption and compliance certifications<br>\n' +
			'5. Machine Learning & AI – Ready-to-use AI/ML tools (AWS SageMaker, Rekognition)<br>\n' +
			'6. Serverless Computing – Run applications without managing servers (AWS Lambda)<br>\n' +
			'7. IoT & Big Data – Tools for IoT, analytics, and real-time data processing',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devops'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description:
			'Docker is an open-source platform that enables developers to build, ship, and run applications inside lightweight, portable containers. These containers include everything needed to run an application—code, libraries, dependencies—ensuring that software runs consistently across different environments.<br>\n' +
			'<br>\n' +
			'Key Features of Docker:<br>\n' +
			'1. Eliminates “Works on My Machine” Issues – Consistent environments across development, testing, and production<br>\n' +
			'2. Lightweight & Fast – Containers share the OS kernel, unlike VMs (which require full OS)<br>\n' +
			'3. Portable & Scalable – Run applications anywhere (laptops, cloud, servers)<br>\n' +
			'4. Rapid Deployment – Start a container in milliseconds<br>\n' +
			'5. Microservices Ready – Ideal for breaking applications into modular services<br>\n' +
			'6. Works with Kubernetes – Orchestrate large-scale container deployments',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description:
			'Python is a high-level, interpreted, general-purpose programming language known for its simplicity, readability, and versatility. It is widely used in web development, data science, AI/ML, automation, and more.<br>\n' +
			'<br>\n' +
			'Key Features of Python:<br>\n' +
			'1. Easy to Learn & Readable – Uses simple, human-like syntax<br>\n' +
			'2. Multi-Purpose – Used for web apps, AI, data science, automation, scripting, and more<br>\n' +
			'3. Huge Community & Libraries – Thousands of pre-built libraries for fast development<br>\n' +
			'4. Cross-Platform – Runs on Windows, macOS, Linux, and even mobile devices<br>\n' +
			'5. Object-Oriented & Functional – Supports both programming paradigms<br>\n' +
			'6. Great for Beginners & Experts – Used by students, startups, and big companies like Google, Netflix, NASA',
		logo: Assets.Python,
		name: 'Python',
		category: 'lang'
	}),
	defineSkill({
		slug: 'selenium',
		color: 'blue',
		description:
			'Selenium is an open-source framework used for automating web browsers. It allows developers and testers to interact with web pages just like a human would—by clicking buttons, filling out forms, navigating through pages, and even scraping data.\n<br>' +
			'<br>' +
			'Key Features of Selenium: <br>\n' +
			'1. Automates Browser Actions – Simulates user interactions (clicks, form submissions, scrolling, etc.)<br>\n' +
			'2. Supports Multiple Browsers – Works with Chrome, Firefox, Edge, Safari<br>\n' +
			'3. Cross-Platform – Runs on Windows, macOS, and Linux<br>\n' +
			'4. Integrates with Python, Java, C# & More – Works with various programming languages<br>\n' +
			'5. Useful for Web Scraping & Testing – Extracts data and tests web apps efficiently<br>\n' +
			'6. Works with Headless Mode – Runs automation in the background (without UI)',
		logo: Assets.Selenium,
		name: 'Selenium',
		category: 'library'
	}),
	defineSkill({
		slug: 'java',
		color: 'orange',
		description:
			'Java is a high-level, object-oriented, platform-independent programming language. It is widely used for web applications, mobile apps (Android), enterprise software, and backend development.\n' +
			'Java is compiled into bytecode, which runs on the Java Virtual Machine (JVM), making it write once, run anywhere (WORA).<br>\n' +
			'<br>\n' +
			'Key Features of Java:<br>\n' +
			'1. Cross-Platform – Runs on Windows, macOS, Linux, Android<br>\n' +
			'2. Object-Oriented – Supports encapsulation, inheritance, and polymorphism<br>\n' +
			'3. Stable & Secure – Used by banks, governments, and big enterprises<br>\n' +
			'4. Scalable & High-Performance – Used for large-scale systems, games, and real-time applications<br>\n' +
			'5. Multi-Threading – Supports concurrent execution<br>\n' +
			'6. Huge Ecosystem – Many frameworks (Spring, Hibernate) and libraries<br>\n' +
			'7. Used for Android Development – Powers Android apps via Android SDK',
		logo: Assets.Java,
		name: 'Java',
		category: 'lang'
	}),
	defineSkill({
		slug: 'fastapi',
		color: 'green',
		description:
			'FastAPI is a modern, high-performance web framework for building RESTful APIs with Python 3.7+. It is based on Starlette for async web services and Pydantic for data validation.<br>\n' +
			'<br>\n' +
			'Key Features of FastAPI:<br>\n' +
			'1. Blazing Fast – As fast as Node.js and Go (thanks to ASGI and async support)<br>\n' +
			'2. Automatic Documentation – Generates Swagger UI & ReDoc<br>\n' +
			'3. Built-in Data Validation – Uses Pydantic for automatic request validation<br>\n' +
			'4. Asynchronous by Default – Supports async/await for high-performance APIs<br>\n' +
			'5. Easy to Use & Learn – Simple, declarative syntax like Flask but more powerful<br>\n' +
			'6. Dependency Injection – Clean, modular code structure',
		logo: Assets.FastApi,
		name: 'FastAPI',
		category: 'library'
	}),
	defineSkill({
		slug: 'xml',
		color: 'green',
		description:
			'XML (Extensible Markup Language) in Android Studio is used to define the UI layout and resources of an Android app. It acts as a declarative language for structuring user interfaces, similar to HTML.<br>\n' +
			'<br>\n' +
			'Key Features of FastAPI:<br>\n' +
			'1. Separation of UI & Logic – UI is written in XML, while logic is handled in Java/Kotlin.<br>\n' +
			'2. Consistency – Helps maintain a structured and readable UI design<br>\n' +
			'3. Flexibility – Works with different screen sizes and orientations easily.<br>\n',
		logo: Assets.XML,
		name: 'XML',
		category: 'markup-style'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
