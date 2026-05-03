import{A as e}from"./UIcon.2af42e2f.js";function u(r,...t){const o=Object.assign({},r);return Object.keys(o).forEach(s=>{t.includes(s)&&delete o[s]}),o}const a=r=>r,b=[a({name:"Programming Languages",slug:"pro-lang"}),a({name:"Frameworks",slug:"framework"}),a({name:"Libraries",slug:"library"}),a({name:"Langauges",slug:"lang"}),a({name:"Databases",slug:"db"}),a({name:"ORMs",slug:"orm"}),a({name:"DevOps",slug:"devops"}),a({name:"Testing",slug:"test"}),a({name:"Dev Tools",slug:"devtools"}),a({name:"Markup & Style",slug:"markup-style"}),a({name:"Design",slug:"design"}),a({name:"Soft Skills",slug:"soft"})],n=r=>{const t=u(r,"category");return r.category&&(t.category=b.find(o=>o.slug===r.category)),t},c=[n({slug:"django",color:"green",description:`Django is a high-level Python web framework that enables developers to build secure, scalable, and maintainable web applications rapidly. It follows the Model-View-Template (MVT) architectural pattern and emphasizes reusability, less code, and rapid development. <br>
<br>Key Features of Django: <br>
1. Batteries Included 🔋 – Comes with built-in tools for authentication, ORM, session management, and more.<br>
2. Security Focused 🔒 – Protects against SQL injection, XSS, CSRF, and clickjacking by default.<br>
3. Scalable & Versatile 🚀 – Powers small projects to large-scale applications like Instagram and Disqus.<br>
4. ORM (Object-Relational Mapping) 📊 – Interacts with databases like PostgreSQL, MySQL, and SQLite using Python models.<br>
5. Admin Interface 🛠️ – Auto-generates an admin panel for managing app data.<br>
6. URL Routing 🔗 – Clean, readable URLs via Django’s URL dispatcher.<br>
7. Template Engine 🎨 – Supports dynamic content rendering with Django’s templating system.<br>
8. Built-in Authentication 🛡️ – User authentication, password hashing, and session handling are included.`,logo:e.Django,name:"Django",category:"library"}),n({slug:"flask",color:"black",description:`Flask is a micro web framework for Python that is simple, flexible, and lightweight. It is commonly used for building web applications and RESTful APIs. Unlike Django, Flask does not include built-in tools like an ORM or authentication system, making it minimalistic and modular—you can add only the components you need. <br>
<br>Key Features of Flask:<br>
1. Lightweight – Minimal overhead, easy to set up <br>
2. Flexible – No strict project structure, customizable <br>
3. Modular – Add only what you need (ORM, authentication, etc.) <br>
4. Fast Development – Great for prototyping and small projects <br>
5. Built-in Development Server – Includes debugging tools`,logo:e.Flask,name:"Flask",category:"library"}),n({slug:"mongodb",color:"green",description:`MongoDB is a NoSQL, document-oriented database designed for high performance, scalability, and flexibility. Unlike traditional relational databases (SQL), MongoDB stores data in JSON-like BSON (Binary JSON) documents, making it highly adaptable for applications with dynamic or unstructured data.
<br><br>Key Features of MongoDB:
<br>1. Schema-less (Flexible Data Model) – No need for fixed table structures
<br>2. Scalable & High Performance – Supports horizontal scaling with sharding
<br>3. Document-Oriented – Stores data in JSON-like documents, making it easy to use
4. Supports Indexing – Ensures fast query performance
<br>5. Geo-Location & Full-Text Search – Ideal for real-time applications
<br>6. Integrates with Modern Stacks – Works well with Node.js, Python, Django, Flask, Express.js, Java, etc.`,logo:e.MongoDB,name:"MongoDB",category:"db"}),n({slug:"postgres",color:"blue",description:`PostgreSQL (often called Postgres) is an open-source, relational database management system (RDBMS) known for its scalability, reliability, and advanced features. It is a strong competitor to MySQL and is widely used in enterprise applications, web development, and data science.<br>
<br>
Key Features of PostgreSQL:<br>
1. ACID-Compliant – Ensures data integrity and reliability<br>
2. SQL & NoSQL Support – Handles structured & semi-structured data<br>
3. Extensible – Supports custom functions, data types, and procedural languages<br>
4. Scalable & Performance-Oriented – Ideal for large-scale applications<br>
5. Advanced Querying – Includes CTEs (Common Table Expressions), JSONB, and full-text search<br>
6. Strong Security Features – Supports role-based access control (RBAC)<br>
7. Open-Source & Free – No licensing fees, unlike Oracle or SQL Server`,logo:e.PostgreSQL,name:"PostgreSQL",category:"db"}),n({slug:"git",color:"red",description:`Git is a distributed version control system (VCS) that allows developers to track changes in code, collaborate efficiently, and manage projects seamlessly. It is widely used in software development, open-source projects, and DevOps workflows.<br>
<br>
Key Features of Git:<br>
1. Version Control – Tracks changes in code and allows rollback to previous versions<br>
2. Collaboration – Multiple developers can work on the same project without conflicts<br>
3. Branching & Merging – Work on different features in isolated branches and merge them<br>
4. Distributed System – Every developer has a local copy of the repository<br>
5. Fast & Efficient – Optimized for speed and performance<br>
6. Works with GitHub, GitLab, Bitbucket – Supports cloud-based collaboration`,logo:e.Git,name:"Git",category:"devops"}),n({slug:"aws",color:"yellow",description:`Amazon Web Services (AWS) is the world’s largest cloud computing platform, providing on-demand computing, storage, networking, databases, AI/ML, security, and more. It allows businesses and developers to deploy applications globally without managing physical infrastructure.<br>
<br>
Key Features of AWS:<br>
1. Scalability – Scale up/down resources as needed<br>
2. Pay-As-You-Go Pricing – No upfront costs, only pay for what you use<br>
3. Global Reach – 30+ regions and 100+ availability zones<br>
4. Security & Compliance – Highly secure with encryption and compliance certifications<br>
5. Machine Learning & AI – Ready-to-use AI/ML tools (AWS SageMaker, Rekognition)<br>
6. Serverless Computing – Run applications without managing servers (AWS Lambda)<br>
7. IoT & Big Data – Tools for IoT, analytics, and real-time data processing`,logo:e.AWS,name:"AWS",category:"devops"}),n({slug:"docker",color:"blue",description:`Docker is an open-source platform that enables developers to build, ship, and run applications inside lightweight, portable containers. These containers include everything needed to run an application—code, libraries, dependencies—ensuring that software runs consistently across different environments.<br>
<br>
Key Features of Docker:<br>
1. Eliminates “Works on My Machine” Issues – Consistent environments across development, testing, and production<br>
2. Lightweight & Fast – Containers share the OS kernel, unlike VMs (which require full OS)<br>
3. Portable & Scalable – Run applications anywhere (laptops, cloud, servers)<br>
4. Rapid Deployment – Start a container in milliseconds<br>
5. Microservices Ready – Ideal for breaking applications into modular services<br>
6. Works with Kubernetes – Orchestrate large-scale container deployments`,logo:e.Docker,name:"Docker",category:"devops"}),n({slug:"python",color:"blue",description:`Python is a high-level, interpreted, general-purpose programming language known for its simplicity, readability, and versatility. It is widely used in web development, data science, AI/ML, automation, and more.<br>
<br>
Key Features of Python:<br>
1. Easy to Learn & Readable – Uses simple, human-like syntax<br>
2. Multi-Purpose – Used for web apps, AI, data science, automation, scripting, and more<br>
3. Huge Community & Libraries – Thousands of pre-built libraries for fast development<br>
4. Cross-Platform – Runs on Windows, macOS, Linux, and even mobile devices<br>
5. Object-Oriented & Functional – Supports both programming paradigms<br>
6. Great for Beginners & Experts – Used by students, startups, and big companies like Google, Netflix, NASA`,logo:e.Python,name:"Python",category:"lang"}),n({slug:"selenium",color:"blue",description:`Selenium is an open-source framework used for automating web browsers. It allows developers and testers to interact with web pages just like a human would—by clicking buttons, filling out forms, navigating through pages, and even scraping data.
<br><br>Key Features of Selenium: <br>
1. Automates Browser Actions – Simulates user interactions (clicks, form submissions, scrolling, etc.)<br>
2. Supports Multiple Browsers – Works with Chrome, Firefox, Edge, Safari<br>
3. Cross-Platform – Runs on Windows, macOS, and Linux<br>
4. Integrates with Python, Java, C# & More – Works with various programming languages<br>
5. Useful for Web Scraping & Testing – Extracts data and tests web apps efficiently<br>
6. Works with Headless Mode – Runs automation in the background (without UI)`,logo:e.Selenium,name:"Selenium",category:"library"}),n({slug:"java",color:"orange",description:`Java is a high-level, object-oriented, platform-independent programming language. It is widely used for web applications, mobile apps (Android), enterprise software, and backend development.
Java is compiled into bytecode, which runs on the Java Virtual Machine (JVM), making it write once, run anywhere (WORA).<br>
<br>
Key Features of Java:<br>
1. Cross-Platform – Runs on Windows, macOS, Linux, Android<br>
2. Object-Oriented – Supports encapsulation, inheritance, and polymorphism<br>
3. Stable & Secure – Used by banks, governments, and big enterprises<br>
4. Scalable & High-Performance – Used for large-scale systems, games, and real-time applications<br>
5. Multi-Threading – Supports concurrent execution<br>
6. Huge Ecosystem – Many frameworks (Spring, Hibernate) and libraries<br>
7. Used for Android Development – Powers Android apps via Android SDK`,logo:e.Java,name:"Java",category:"lang"}),n({slug:"fastapi",color:"green",description:`FastAPI is a modern, high-performance web framework for building RESTful APIs with Python 3.7+. It is based on Starlette for async web services and Pydantic for data validation.<br>
<br>
Key Features of FastAPI:<br>
1. Blazing Fast – As fast as Node.js and Go (thanks to ASGI and async support)<br>
2. Automatic Documentation – Generates Swagger UI & ReDoc<br>
3. Built-in Data Validation – Uses Pydantic for automatic request validation<br>
4. Asynchronous by Default – Supports async/await for high-performance APIs<br>
5. Easy to Use & Learn – Simple, declarative syntax like Flask but more powerful<br>
6. Dependency Injection – Clean, modular code structure`,logo:e.FastApi,name:"FastAPI",category:"library"}),n({slug:"xml",color:"green",description:`XML (Extensible Markup Language) in Android Studio is used to define the UI layout and resources of an Android app. It acts as a declarative language for structuring user interfaces, similar to HTML.<br>
<br>
Key Features of XML:<br>
1. Separation of UI & Logic – UI is written in XML, while logic is handled in Java/Kotlin.<br>
2. Consistency – Helps maintain a structured and readable UI design<br>
3. Flexibility – Works with different screen sizes and orientations easily.<br>
`,logo:e.XML,name:"XML",category:"markup-style"}),n({slug:"JS",color:"yellow",description:`JavaScript (JS) is a high-level, interpreted programming language widely used to add interactivity and dynamic behavior to websites. It runs directly in the browser and allows developers to create responsive, engaging user experiences.<br>
<br>
Key Features of JavaScript:<br>
1. Client-Side Interactivity – Enables real-time updates, animations, and form validations without reloading the page.<br>
2. Versatility – Works seamlessly with HTML and CSS, and is supported by all modern browsers.<br>
3. Event-Driven – Responds to user actions like clicks, input, and keyboard events.<br>
4. Expansive Ecosystem – Supports frameworks like React, Angular, and Vue for building complex applications.<br>`,logo:e.JavaScript,name:"JS",category:"pro-lang"}),n({slug:"SendGrid",color:"blue",description:`SendGrid is a cloud-based email delivery service that enables businesses to send transactional and marketing emails reliably at scale. It provides APIs and SMTP integration to simplify email sending from applications.<br>
<br>
Key Features of SendGrid:<br>
1. Reliable Delivery – Ensures high deliverability rates with built-in tools to avoid spam filters.<br>
2. Scalable Infrastructure – Handles email sending for small apps to enterprise-level systems.<br>
3. Analytics & Reporting – Tracks email performance with detailed stats like open rates, clicks, and bounces.<br>
4. API & SMTP Support – Offers flexible integration options using RESTful APIs or traditional SMTP.<br>`,logo:e.Sendgrid,name:"SendGrid",category:"library"}),n({slug:"react",color:"cyan",description:`React is a JavaScript library for building user interfaces, maintained by Meta. It uses a component-based architecture and a virtual DOM to deliver fast, interactive web experiences.<br>
<br>
Key Features of React:<br>
1. Component-Based – Build encapsulated components that manage their own state.<br>
2. Virtual DOM – Efficient UI updates through diffing and reconciliation.<br>
3. Declarative – Describe what the UI should look like; React handles updates.<br>
4. Rich Ecosystem – Works with React Router, Redux, Next.js, and more.<br>
5. Reusable Components – Share components across projects for consistent UIs.<br>`,logo:e.ReactJs,name:"React",category:"framework"}),n({slug:"celery",color:"green",description:`Celery is a distributed task queue for Python that handles asynchronous job processing and scheduled tasks. It integrates with brokers like Redis and RabbitMQ to offload work from the main request/response cycle.<br>
<br>
Key Features of Celery:<br>
1. Async Task Processing – Offload long-running tasks from the web request path.<br>
2. Scheduled Tasks – Run periodic jobs with Celery Beat.<br>
3. Retry Mechanism – Automatically retry failed tasks with configurable back-off.<br>
4. Scalable – Distribute tasks across multiple workers and machines.<br>
5. Broker Agnostic – Works with Redis, RabbitMQ, and more.<br>`,logo:e.Celery,name:"Celery",category:"library"}),n({slug:"redis",color:"red",description:`Redis is an open-source, in-memory data store used as a cache, message broker, and database. Its sub-millisecond latency makes it ideal for session storage, queuing, and real-time data use cases.<br>
<br>
Key Features of Redis:<br>
1. In-Memory Speed – Extremely fast reads and writes from RAM.<br>
2. Versatile Data Structures – Supports strings, lists, sets, hashes, sorted sets, and more.<br>
3. Pub/Sub Messaging – Built-in publish/subscribe for real-time communication.<br>
4. Persistence Options – RDB snapshots and AOF logging for durability.<br>
5. Celery & Django Integration – Widely used as a Celery broker and Django cache backend.<br>`,logo:e.Redis,name:"Redis",category:"db"}),n({slug:"stripe",color:"purple",description:`Stripe is a payments infrastructure platform that enables businesses to accept online payments, manage subscriptions, and handle complex financial flows via a developer-friendly API.<br>
<br>
Key Features of Stripe:<br>
1. Payment Processing – Accept cards, wallets, and bank transfers globally.<br>
2. Webhooks – React to payment events (success, failure, dispute) in real time.<br>
3. Subscriptions & Billing – Built-in recurring billing and invoice management.<br>
4. Fraud Prevention – Radar ML-based fraud detection out of the box.<br>
5. Developer-Friendly – Clean REST API with SDKs for Python, Node, and more.<br>`,logo:e.Stripe,name:"Stripe",category:"library"}),n({slug:"twilio",color:"red",description:`Twilio is a cloud communications platform that provides APIs for SMS, voice, email, and more. It enables developers to embed real-time communication features directly into applications.<br>
<br>
Key Features of Twilio:<br>
1. SMS & WhatsApp – Send and receive text messages programmatically.<br>
2. Voice Calls – Build IVR systems and voice applications via API.<br>
3. Two-Factor Auth – Simple OTP and verification workflows.<br>
4. Global Reach – Communicate with users in 180+ countries.<br>
5. Webhooks & Events – React to inbound messages and call status updates.<br>`,logo:e.Twilio,name:"Twilio",category:"library"}),n({slug:"ts",color:"blue",description:`TypeScript is a strongly-typed superset of JavaScript that compiles to plain JavaScript. It adds static type checking to catch errors at compile time and improve developer productivity across large codebases.<br>
<br>
Key Features of TypeScript:<br>
1. Static Typing – Catch type errors before runtime.<br>
2. IDE Support – Rich autocompletion, refactoring, and navigation.<br>
3. Interfaces & Generics – Expressive, reusable type definitions.<br>
4. ES Next Support – Use modern JavaScript features with broad compatibility.<br>
5. Seamless JS Interop – Gradually adopt TypeScript in existing JS projects.<br>`,logo:e.TypeScript,name:"TypeScript",category:"pro-lang"}),n({slug:"nextjs",color:"black",description:`Next.js is a React framework for building production-grade web applications with server-side rendering, static generation, and API routes out of the box.<br>
<br>
Key Features of Next.js:<br>
1. SSR & SSG – Server-side rendering and static site generation.<br>
2. App Router – File-system-based routing with layouts and nested routes.<br>
3. API Routes – Build backend endpoints inside the same project.<br>
4. Image Optimization – Automatic image resizing and lazy loading.<br>
5. Edge Runtime – Deploy globally with minimal latency.<br>`,logo:e.Nuxt,name:"Next.js",category:"framework"}),n({slug:"tailwind",color:"cyan",description:`Tailwind CSS is a utility-first CSS framework that enables rapid UI development by composing small, single-purpose classes directly in markup.<br>
<br>
Key Features of Tailwind CSS:<br>
1. Utility-First – Build designs without leaving your HTML.<br>
2. Responsive Design – Mobile-first breakpoint utilities out of the box.<br>
3. Dark Mode – Built-in dark mode support.<br>
4. Customizable – Extend via tailwind.config for design tokens.<br>
5. PurgeCSS – Ships only the CSS classes you actually use.<br>`,logo:e.Tailwind,name:"Tailwind CSS",category:"markup-style"}),n({slug:"redux",color:"purple",description:`Redux is a predictable state container for JavaScript apps, commonly used with React to manage global application state in a consistent, debuggable way.<br>
<br>
Key Features of Redux:<br>
1. Single Source of Truth – All state in one store.<br>
2. Predictable – State changes only through pure reducer functions.<br>
3. DevTools – Time-travel debugging and action replay.<br>
4. Middleware – Extend with thunks, sagas, or custom logic.<br>
5. Redux Toolkit – Official opinionated toolset that reduces boilerplate.<br>`,logo:e.Unknown,name:"Redux",category:"library"}),n({slug:"react-query",color:"red",description:`React Query (TanStack Query) is a powerful data-fetching and server-state management library for React that handles caching, background refetching, and synchronization automatically.<br>
<br>
Key Features of React Query:<br>
1. Automatic Caching – Cache server responses and deduplicate requests.<br>
2. Background Refetching – Keep UI fresh without manual polling.<br>
3. Optimistic Updates – Update UI instantly before server confirms.<br>
4. Pagination & Infinite Scroll – Built-in support for paginated queries.<br>
5. DevTools – Inspect query state and cache in real time.<br>`,logo:e.Unknown,name:"React Query",category:"library"}),n({slug:"nodejs",color:"green",description:`Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to run JavaScript on the server side, enabling fast, scalable network applications.<br>
<br>
Key Features of Node.js:<br>
1. Non-Blocking I/O – Event-driven architecture for high concurrency.<br>
2. npm Ecosystem – Access to millions of packages.<br>
3. Full-Stack JS – Share code between frontend and backend.<br>
4. Streams – Efficient handling of large data transfers.<br>
5. Cross-Platform – Runs on Windows, macOS, and Linux.<br>`,logo:e.NodeJs,name:"Node.js",category:"framework"}),n({slug:"express",color:"black",description:`Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications and APIs.<br>
<br>
Key Features of Express.js:<br>
1. Minimal & Flexible – Unopinionated, add only what you need.<br>
2. Middleware – Chain request/response processors easily.<br>
3. Routing – Powerful route definitions with parameters and query strings.<br>
4. REST API Ready – Ideal for building RESTful services.<br>
5. Large Ecosystem – Works with countless npm packages.<br>`,logo:e.ExpressJs,name:"Express.js",category:"framework"}),n({slug:"graphql",color:"pink",description:`GraphQL is a query language and runtime for APIs that allows clients to request exactly the data they need, reducing over-fetching and under-fetching compared to REST.<br>
<br>
Key Features of GraphQL:<br>
1. Flexible Queries – Clients specify exactly what data they need.<br>
2. Single Endpoint – All queries and mutations go through one URL.<br>
3. Strongly Typed Schema – Self-documenting API via type definitions.<br>
4. Real-Time – Native subscriptions for live data.<br>
5. Introspection – Tools can auto-discover available queries and types.<br>`,logo:e.Unknown,name:"GraphQL",category:"library"}),n({slug:"mysql",color:"blue",description:`MySQL is an open-source relational database management system widely used in web applications. It offers strong ACID compliance, rich SQL support, and excellent performance.<br>
<br>
Key Features of MySQL:<br>
1. ACID Compliant – Reliable transactions and data integrity.<br>
2. High Performance – Optimized for read-heavy workloads.<br>
3. Replication – Primary-replica setup for scalability and redundancy.<br>
4. Full-Text Search – Built-in text indexing and search capabilities.<br>
5. Wide Adoption – Powers countless web apps including WordPress and Shopify.<br>`,logo:e.Unknown,name:"MySQL",category:"db"}),n({slug:"elasticsearch",color:"yellow",description:`Elasticsearch is a distributed, RESTful search and analytics engine built on Apache Lucene, designed for horizontal scalability and near-real-time search.<br>
<br>
Key Features of Elasticsearch:<br>
1. Full-Text Search – Powerful relevance-based search across large datasets.<br>
2. Distributed – Shards and replicas for high availability and scale.<br>
3. Near Real-Time – Indexes and makes documents searchable within seconds.<br>
4. REST API – Simple HTTP-based interface for all operations.<br>
5. Aggregations – Complex analytics and faceted search capabilities.<br>`,logo:e.Unknown,name:"Elasticsearch",category:"db"}),n({slug:"kubernetes",color:"blue",description:`Kubernetes (K8s) is an open-source container orchestration platform that automates deploying, scaling, and managing containerized applications across clusters of hosts.<br>
<br>
Key Features of Kubernetes:<br>
1. Auto-Scaling – Scale pods up/down based on resource usage.<br>
2. Self-Healing – Restart failed containers and reschedule on healthy nodes.<br>
3. Service Discovery – Built-in DNS and load balancing for services.<br>
4. Rolling Updates – Zero-downtime deployments with rollback support.<br>
5. Config Management – Secrets and ConfigMaps for environment configuration.<br>`,logo:e.Kubernetes,name:"Kubernetes",category:"devops"}),n({slug:"github-actions",color:"black",description:`GitHub Actions is a CI/CD platform integrated directly into GitHub that automates build, test, and deployment workflows triggered by repository events.<br>
<br>
Key Features of GitHub Actions:<br>
1. Event-Driven – Trigger workflows on push, PR, schedule, or custom events.<br>
2. Marketplace – Thousands of reusable community actions.<br>
3. Matrix Builds – Test across multiple OS/runtime combinations in parallel.<br>
4. Secrets Management – Securely inject credentials into workflows.<br>
5. Self-Hosted Runners – Run jobs on your own infrastructure.<br>`,logo:e.Git,name:"GitHub Actions",category:"devops"}),n({slug:"jest",color:"red",description:`Jest is a JavaScript testing framework maintained by Meta, designed for simplicity and speed. It works with React, TypeScript, Node.js, and more out of the box.<br>
<br>
Key Features of Jest:<br>
1. Zero Config – Works immediately for most JS/TS projects.<br>
2. Snapshot Testing – Capture and compare UI component output.<br>
3. Mocking – Built-in module, function, and timer mocking.<br>
4. Code Coverage – Built-in coverage reporting with Istanbul.<br>
5. Watch Mode – Re-runs only affected tests on file change.<br>`,logo:e.Jest,name:"Jest",category:"test"}),n({slug:"cypress",color:"green",description:`Cypress is a modern end-to-end testing framework that runs directly in the browser, enabling fast, reliable, and debuggable integration and E2E tests.<br>
<br>
Key Features of Cypress:<br>
1. Real Browser Testing – Runs inside the browser, not a wrapper.<br>
2. Time Travel – Snapshot every command step for easy debugging.<br>
3. Auto-Wait – Automatically waits for elements and assertions.<br>
4. Network Stubbing – Intercept and mock API calls in tests.<br>
5. Component Testing – Test React/Vue/Svelte components in isolation.<br>`,logo:e.Unknown,name:"Cypress",category:"test"}),n({slug:"postman",color:"orange",description:`Postman is an API platform for building, testing, and documenting HTTP APIs. It provides a GUI for crafting requests, writing test scripts, and managing API collections.<br>
<br>
Key Features of Postman:<br>
1. Request Builder – Easily craft GET, POST, PUT, DELETE requests.<br>
2. Collections – Organize and share API request groups.<br>
3. Automated Tests – Write JavaScript test scripts per request.<br>
4. Environments – Switch between dev, staging, and prod configs.<br>
5. API Documentation – Auto-generate and publish API docs.<br>`,logo:e.Unknown,name:"Postman",category:"test"}),n({slug:"sentry",color:"purple",description:`Sentry is an application monitoring platform that provides real-time error tracking, performance monitoring, and alerting for web, mobile, and backend applications.<br>
<br>
Key Features of Sentry:<br>
1. Error Tracking – Capture and group exceptions with full stack traces.<br>
2. Performance Monitoring – Trace slow transactions and N+1 queries.<br>
3. Alerts – Notify on-call teams when error rates spike.<br>
4. Source Maps – Map minified JS errors back to original source.<br>
5. Integrations – Works with Slack, GitHub, Jira, and more.<br>`,logo:e.Unknown,name:"Sentry",category:"devtools"}),n({slug:"datadog",color:"purple",description:`Datadog is a cloud monitoring and observability platform offering APM, infrastructure metrics, log management, and dashboards for modern distributed systems.<br>
<br>
Key Features of Datadog:<br>
1. APM – Distributed tracing across microservices.<br>
2. Infrastructure Monitoring – Metrics from servers, containers, and cloud services.<br>
3. Log Management – Centralized log ingestion, parsing, and search.<br>
4. Dashboards – Custom real-time visualization of all observability data.<br>
5. Alerting – Threshold and anomaly-based alerts with on-call routing.<br>`,logo:e.Unknown,name:"Datadog",category:"devtools"})],p="Skills",m=(...r)=>c.filter(t=>r.includes(t.slug)),y=r=>{const t=[],o=[];return c.forEach(s=>{if(r.trim()&&!s.name.toLowerCase().includes(r.trim().toLowerCase()))return;if(!s.category){o.push(s);return}let i=t.find(d=>{var l;return d.category.slug===((l=s.category)==null?void 0:l.slug)});i||(i={items:[],category:s.category},t.push(i)),i.items.push(s)}),o.length!==0&&t.push({category:{name:"Others",slug:"others"},items:o}),t};export{y as a,m as g,c as i,p as t};
