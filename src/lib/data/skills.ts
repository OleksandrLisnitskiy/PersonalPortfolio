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
			'Key Features of XML:<br>\n' +
			'1. Separation of UI & Logic – UI is written in XML, while logic is handled in Java/Kotlin.<br>\n' +
			'2. Consistency – Helps maintain a structured and readable UI design<br>\n' +
			'3. Flexibility – Works with different screen sizes and orientations easily.<br>\n',
		logo: Assets.XML,
		name: 'XML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'JS',
		color: 'yellow',
		description:
			'JavaScript (JS) is a high-level, interpreted programming language widely used to add interactivity and dynamic behavior to websites. It runs directly in the browser and allows developers to create responsive, engaging user experiences.<br>\n' +
			'<br>\n' +
			'Key Features of JavaScript:<br>\n' +
			'1. Client-Side Interactivity – Enables real-time updates, animations, and form validations without reloading the page.<br>\n' +
			'2. Versatility – Works seamlessly with HTML and CSS, and is supported by all modern browsers.<br>\n' +
			'3. Event-Driven – Responds to user actions like clicks, input, and keyboard events.<br>\n' +
			'4. Expansive Ecosystem – Supports frameworks like React, Angular, and Vue for building complex applications.<br>',
		logo: Assets.JavaScript,
		name: 'JS',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'SendGrid',
		color: 'blue',
		description:
			'SendGrid is a cloud-based email delivery service that enables businesses to send transactional and marketing emails reliably at scale. It provides APIs and SMTP integration to simplify email sending from applications.<br>\n' +
			'<br>\n' +
			'Key Features of SendGrid:<br>\n' +
			'1. Reliable Delivery – Ensures high deliverability rates with built-in tools to avoid spam filters.<br>\n' +
			'2. Scalable Infrastructure – Handles email sending for small apps to enterprise-level systems.<br>\n' +
			'3. Analytics & Reporting – Tracks email performance with detailed stats like open rates, clicks, and bounces.<br>\n' +
			'4. API & SMTP Support – Offers flexible integration options using RESTful APIs or traditional SMTP.<br>',
		logo: Assets.Sendgrid,
		name: 'SendGrid',
		category: 'library'
	}),
	defineSkill({
		slug: 'react',
		color: 'cyan',
		description:
			'React is a JavaScript library for building user interfaces, maintained by Meta. It uses a component-based architecture and a virtual DOM to deliver fast, interactive web experiences.<br>\n' +
			'<br>\n' +
			'Key Features of React:<br>\n' +
			'1. Component-Based – Build encapsulated components that manage their own state.<br>\n' +
			'2. Virtual DOM – Efficient UI updates through diffing and reconciliation.<br>\n' +
			'3. Declarative – Describe what the UI should look like; React handles updates.<br>\n' +
			'4. Rich Ecosystem – Works with React Router, Redux, Next.js, and more.<br>\n' +
			'5. Reusable Components – Share components across projects for consistent UIs.<br>',
		logo: Assets.ReactJs,
		name: 'React',
		category: 'framework'
	}),
	defineSkill({
		slug: 'celery',
		color: 'green',
		description:
			'Celery is a distributed task queue for Python that handles asynchronous job processing and scheduled tasks. It integrates with brokers like Redis and RabbitMQ to offload work from the main request/response cycle.<br>\n' +
			'<br>\n' +
			'Key Features of Celery:<br>\n' +
			'1. Async Task Processing – Offload long-running tasks from the web request path.<br>\n' +
			'2. Scheduled Tasks – Run periodic jobs with Celery Beat.<br>\n' +
			'3. Retry Mechanism – Automatically retry failed tasks with configurable back-off.<br>\n' +
			'4. Scalable – Distribute tasks across multiple workers and machines.<br>\n' +
			'5. Broker Agnostic – Works with Redis, RabbitMQ, and more.<br>',
		logo: Assets.Celery,
		name: 'Celery',
		category: 'library'
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description:
			'Redis is an open-source, in-memory data store used as a cache, message broker, and database. Its sub-millisecond latency makes it ideal for session storage, queuing, and real-time data use cases.<br>\n' +
			'<br>\n' +
			'Key Features of Redis:<br>\n' +
			'1. In-Memory Speed – Extremely fast reads and writes from RAM.<br>\n' +
			'2. Versatile Data Structures – Supports strings, lists, sets, hashes, sorted sets, and more.<br>\n' +
			'3. Pub/Sub Messaging – Built-in publish/subscribe for real-time communication.<br>\n' +
			'4. Persistence Options – RDB snapshots and AOF logging for durability.<br>\n' +
			'5. Celery & Django Integration – Widely used as a Celery broker and Django cache backend.<br>',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	defineSkill({
		slug: 'stripe',
		color: 'purple',
		description:
			'Stripe is a payments infrastructure platform that enables businesses to accept online payments, manage subscriptions, and handle complex financial flows via a developer-friendly API.<br>\n' +
			'<br>\n' +
			'Key Features of Stripe:<br>\n' +
			'1. Payment Processing – Accept cards, wallets, and bank transfers globally.<br>\n' +
			'2. Webhooks – React to payment events (success, failure, dispute) in real time.<br>\n' +
			'3. Subscriptions & Billing – Built-in recurring billing and invoice management.<br>\n' +
			'4. Fraud Prevention – Radar ML-based fraud detection out of the box.<br>\n' +
			'5. Developer-Friendly – Clean REST API with SDKs for Python, Node, and more.<br>',
		logo: Assets.Stripe,
		name: 'Stripe',
		category: 'library'
	}),
	defineSkill({
		slug: 'twilio',
		color: 'red',
		description:
			'Twilio is a cloud communications platform that provides APIs for SMS, voice, email, and more. It enables developers to embed real-time communication features directly into applications.<br>\n' +
			'<br>\n' +
			'Key Features of Twilio:<br>\n' +
			'1. SMS & WhatsApp – Send and receive text messages programmatically.<br>\n' +
			'2. Voice Calls – Build IVR systems and voice applications via API.<br>\n' +
			'3. Two-Factor Auth – Simple OTP and verification workflows.<br>\n' +
			'4. Global Reach – Communicate with users in 180+ countries.<br>\n' +
			'5. Webhooks & Events – React to inbound messages and call status updates.<br>',
		logo: Assets.Twilio,
		name: 'Twilio',
		category: 'library'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'TypeScript is a strongly-typed superset of JavaScript that compiles to plain JavaScript. It adds static type checking to catch errors at compile time and improve developer productivity across large codebases.<br>\n' +
			'<br>\n' +
			'Key Features of TypeScript:<br>\n' +
			'1. Static Typing – Catch type errors before runtime.<br>\n' +
			'2. IDE Support – Rich autocompletion, refactoring, and navigation.<br>\n' +
			'3. Interfaces & Generics – Expressive, reusable type definitions.<br>\n' +
			'4. ES Next Support – Use modern JavaScript features with broad compatibility.<br>\n' +
			'5. Seamless JS Interop – Gradually adopt TypeScript in existing JS projects.<br>',
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'black',
		description:
			'Next.js is a React framework for building production-grade web applications with server-side rendering, static generation, and API routes out of the box.<br>\n' +
			'<br>\n' +
			'Key Features of Next.js:<br>\n' +
			'1. SSR & SSG – Server-side rendering and static site generation.<br>\n' +
			'2. App Router – File-system-based routing with layouts and nested routes.<br>\n' +
			'3. API Routes – Build backend endpoints inside the same project.<br>\n' +
			'4. Image Optimization – Automatic image resizing and lazy loading.<br>\n' +
			'5. Edge Runtime – Deploy globally with minimal latency.<br>',
		logo: Assets.Nuxt,
		name: 'Next.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'cyan',
		description:
			'Tailwind CSS is a utility-first CSS framework that enables rapid UI development by composing small, single-purpose classes directly in markup.<br>\n' +
			'<br>\n' +
			'Key Features of Tailwind CSS:<br>\n' +
			'1. Utility-First – Build designs without leaving your HTML.<br>\n' +
			'2. Responsive Design – Mobile-first breakpoint utilities out of the box.<br>\n' +
			'3. Dark Mode – Built-in dark mode support.<br>\n' +
			'4. Customizable – Extend via tailwind.config for design tokens.<br>\n' +
			'5. PurgeCSS – Ships only the CSS classes you actually use.<br>',
		logo: Assets.Tailwind,
		name: 'Tailwind CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'redux',
		color: 'purple',
		description:
			'Redux is a predictable state container for JavaScript apps, commonly used with React to manage global application state in a consistent, debuggable way.<br>\n' +
			'<br>\n' +
			'Key Features of Redux:<br>\n' +
			'1. Single Source of Truth – All state in one store.<br>\n' +
			'2. Predictable – State changes only through pure reducer functions.<br>\n' +
			'3. DevTools – Time-travel debugging and action replay.<br>\n' +
			'4. Middleware – Extend with thunks, sagas, or custom logic.<br>\n' +
			'5. Redux Toolkit – Official opinionated toolset that reduces boilerplate.<br>',
		logo: Assets.Unknown,
		name: 'Redux',
		category: 'library'
	}),
	defineSkill({
		slug: 'react-query',
		color: 'red',
		description:
			'React Query (TanStack Query) is a powerful data-fetching and server-state management library for React that handles caching, background refetching, and synchronization automatically.<br>\n' +
			'<br>\n' +
			'Key Features of React Query:<br>\n' +
			'1. Automatic Caching – Cache server responses and deduplicate requests.<br>\n' +
			'2. Background Refetching – Keep UI fresh without manual polling.<br>\n' +
			'3. Optimistic Updates – Update UI instantly before server confirms.<br>\n' +
			'4. Pagination & Infinite Scroll – Built-in support for paginated queries.<br>\n' +
			'5. DevTools – Inspect query state and cache in real time.<br>',
		logo: Assets.Unknown,
		name: 'React Query',
		category: 'library'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description:
			'Node.js is a JavaScript runtime built on Chrome\'s V8 engine that allows developers to run JavaScript on the server side, enabling fast, scalable network applications.<br>\n' +
			'<br>\n' +
			'Key Features of Node.js:<br>\n' +
			'1. Non-Blocking I/O – Event-driven architecture for high concurrency.<br>\n' +
			'2. npm Ecosystem – Access to millions of packages.<br>\n' +
			'3. Full-Stack JS – Share code between frontend and backend.<br>\n' +
			'4. Streams – Efficient handling of large data transfers.<br>\n' +
			'5. Cross-Platform – Runs on Windows, macOS, and Linux.<br>',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'express',
		color: 'black',
		description:
			'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications and APIs.<br>\n' +
			'<br>\n' +
			'Key Features of Express.js:<br>\n' +
			'1. Minimal & Flexible – Unopinionated, add only what you need.<br>\n' +
			'2. Middleware – Chain request/response processors easily.<br>\n' +
			'3. Routing – Powerful route definitions with parameters and query strings.<br>\n' +
			'4. REST API Ready – Ideal for building RESTful services.<br>\n' +
			'5. Large Ecosystem – Works with countless npm packages.<br>',
		logo: Assets.ExpressJs,
		name: 'Express.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'graphql',
		color: 'pink',
		description:
			'GraphQL is a query language and runtime for APIs that allows clients to request exactly the data they need, reducing over-fetching and under-fetching compared to REST.<br>\n' +
			'<br>\n' +
			'Key Features of GraphQL:<br>\n' +
			'1. Flexible Queries – Clients specify exactly what data they need.<br>\n' +
			'2. Single Endpoint – All queries and mutations go through one URL.<br>\n' +
			'3. Strongly Typed Schema – Self-documenting API via type definitions.<br>\n' +
			'4. Real-Time – Native subscriptions for live data.<br>\n' +
			'5. Introspection – Tools can auto-discover available queries and types.<br>',
		logo: Assets.Unknown,
		name: 'GraphQL',
		category: 'library'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description:
			'MySQL is an open-source relational database management system widely used in web applications. It offers strong ACID compliance, rich SQL support, and excellent performance.<br>\n' +
			'<br>\n' +
			'Key Features of MySQL:<br>\n' +
			'1. ACID Compliant – Reliable transactions and data integrity.<br>\n' +
			'2. High Performance – Optimized for read-heavy workloads.<br>\n' +
			'3. Replication – Primary-replica setup for scalability and redundancy.<br>\n' +
			'4. Full-Text Search – Built-in text indexing and search capabilities.<br>\n' +
			'5. Wide Adoption – Powers countless web apps including WordPress and Shopify.<br>',
		logo: Assets.Unknown,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'elasticsearch',
		color: 'yellow',
		description:
			'Elasticsearch is a distributed, RESTful search and analytics engine built on Apache Lucene, designed for horizontal scalability and near-real-time search.<br>\n' +
			'<br>\n' +
			'Key Features of Elasticsearch:<br>\n' +
			'1. Full-Text Search – Powerful relevance-based search across large datasets.<br>\n' +
			'2. Distributed – Shards and replicas for high availability and scale.<br>\n' +
			'3. Near Real-Time – Indexes and makes documents searchable within seconds.<br>\n' +
			'4. REST API – Simple HTTP-based interface for all operations.<br>\n' +
			'5. Aggregations – Complex analytics and faceted search capabilities.<br>',
		logo: Assets.Unknown,
		name: 'Elasticsearch',
		category: 'db'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description:
			'Kubernetes (K8s) is an open-source container orchestration platform that automates deploying, scaling, and managing containerized applications across clusters of hosts.<br>\n' +
			'<br>\n' +
			'Key Features of Kubernetes:<br>\n' +
			'1. Auto-Scaling – Scale pods up/down based on resource usage.<br>\n' +
			'2. Self-Healing – Restart failed containers and reschedule on healthy nodes.<br>\n' +
			'3. Service Discovery – Built-in DNS and load balancing for services.<br>\n' +
			'4. Rolling Updates – Zero-downtime deployments with rollback support.<br>\n' +
			'5. Config Management – Secrets and ConfigMaps for environment configuration.<br>',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug: 'github-actions',
		color: 'black',
		description:
			'GitHub Actions is a CI/CD platform integrated directly into GitHub that automates build, test, and deployment workflows triggered by repository events.<br>\n' +
			'<br>\n' +
			'Key Features of GitHub Actions:<br>\n' +
			'1. Event-Driven – Trigger workflows on push, PR, schedule, or custom events.<br>\n' +
			'2. Marketplace – Thousands of reusable community actions.<br>\n' +
			'3. Matrix Builds – Test across multiple OS/runtime combinations in parallel.<br>\n' +
			'4. Secrets Management – Securely inject credentials into workflows.<br>\n' +
			'5. Self-Hosted Runners – Run jobs on your own infrastructure.<br>',
		logo: Assets.Git,
		name: 'GitHub Actions',
		category: 'devops'
	}),
	defineSkill({
		slug: 'jest',
		color: 'red',
		description:
			'Jest is a JavaScript testing framework maintained by Meta, designed for simplicity and speed. It works with React, TypeScript, Node.js, and more out of the box.<br>\n' +
			'<br>\n' +
			'Key Features of Jest:<br>\n' +
			'1. Zero Config – Works immediately for most JS/TS projects.<br>\n' +
			'2. Snapshot Testing – Capture and compare UI component output.<br>\n' +
			'3. Mocking – Built-in module, function, and timer mocking.<br>\n' +
			'4. Code Coverage – Built-in coverage reporting with Istanbul.<br>\n' +
			'5. Watch Mode – Re-runs only affected tests on file change.<br>',
		logo: Assets.Jest,
		name: 'Jest',
		category: 'test'
	}),
	defineSkill({
		slug: 'cypress',
		color: 'green',
		description:
			'Cypress is a modern end-to-end testing framework that runs directly in the browser, enabling fast, reliable, and debuggable integration and E2E tests.<br>\n' +
			'<br>\n' +
			'Key Features of Cypress:<br>\n' +
			'1. Real Browser Testing – Runs inside the browser, not a wrapper.<br>\n' +
			'2. Time Travel – Snapshot every command step for easy debugging.<br>\n' +
			'3. Auto-Wait – Automatically waits for elements and assertions.<br>\n' +
			'4. Network Stubbing – Intercept and mock API calls in tests.<br>\n' +
			'5. Component Testing – Test React/Vue/Svelte components in isolation.<br>',
		logo: Assets.Unknown,
		name: 'Cypress',
		category: 'test'
	}),
	defineSkill({
		slug: 'postman',
		color: 'orange',
		description:
			'Postman is an API platform for building, testing, and documenting HTTP APIs. It provides a GUI for crafting requests, writing test scripts, and managing API collections.<br>\n' +
			'<br>\n' +
			'Key Features of Postman:<br>\n' +
			'1. Request Builder – Easily craft GET, POST, PUT, DELETE requests.<br>\n' +
			'2. Collections – Organize and share API request groups.<br>\n' +
			'3. Automated Tests – Write JavaScript test scripts per request.<br>\n' +
			'4. Environments – Switch between dev, staging, and prod configs.<br>\n' +
			'5. API Documentation – Auto-generate and publish API docs.<br>',
		logo: Assets.Unknown,
		name: 'Postman',
		category: 'test'
	}),
	defineSkill({
		slug: 'sentry',
		color: 'purple',
		description:
			'Sentry is an application monitoring platform that provides real-time error tracking, performance monitoring, and alerting for web, mobile, and backend applications.<br>\n' +
			'<br>\n' +
			'Key Features of Sentry:<br>\n' +
			'1. Error Tracking – Capture and group exceptions with full stack traces.<br>\n' +
			'2. Performance Monitoring – Trace slow transactions and N+1 queries.<br>\n' +
			'3. Alerts – Notify on-call teams when error rates spike.<br>\n' +
			'4. Source Maps – Map minified JS errors back to original source.<br>\n' +
			'5. Integrations – Works with Slack, GitHub, Jira, and more.<br>',
		logo: Assets.Unknown,
		name: 'Sentry',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'datadog',
		color: 'purple',
		description:
			'Datadog is a cloud monitoring and observability platform offering APM, infrastructure metrics, log management, and dashboards for modern distributed systems.<br>\n' +
			'<br>\n' +
			'Key Features of Datadog:<br>\n' +
			'1. APM – Distributed tracing across microservices.<br>\n' +
			'2. Infrastructure Monitoring – Metrics from servers, containers, and cloud services.<br>\n' +
			'3. Log Management – Centralized log ingestion, parsing, and search.<br>\n' +
			'4. Dashboards – Custom real-time visualization of all observability data.<br>\n' +
			'5. Alerting – Threshold and anomaly-based alerts with on-call routing.<br>',
		logo: Assets.Unknown,
		name: 'Datadog',
		category: 'devtools'
	}),

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
