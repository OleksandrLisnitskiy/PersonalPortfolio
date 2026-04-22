import{A as e}from"./UIcon.054ccf66.js";function u(n,...t){const s=Object.assign({},n);return Object.keys(s).forEach(o=>{t.includes(o)&&delete s[o]}),s}const r=n=>n,b=[r({name:"Programming Languages",slug:"pro-lang"}),r({name:"Frameworks",slug:"framework"}),r({name:"Libraries",slug:"library"}),r({name:"Langauges",slug:"lang"}),r({name:"Databases",slug:"db"}),r({name:"ORMs",slug:"orm"}),r({name:"DevOps",slug:"devops"}),r({name:"Testing",slug:"test"}),r({name:"Dev Tools",slug:"devtools"}),r({name:"Markup & Style",slug:"markup-style"}),r({name:"Design",slug:"design"}),r({name:"Soft Skills",slug:"soft"})],a=n=>{const t=u(n,"category");return n.category&&(t.category=b.find(s=>s.slug===n.category)),t},c=[a({slug:"django",color:"green",description:`Django is a high-level Python web framework that enables developers to build secure, scalable, and maintainable web applications rapidly. It follows the Model-View-Template (MVT) architectural pattern and emphasizes reusability, less code, and rapid development. <br>
<br>Key Features of Django: <br>
1. Batteries Included 🔋 – Comes with built-in tools for authentication, ORM, session management, and more.<br>
2. Security Focused 🔒 – Protects against SQL injection, XSS, CSRF, and clickjacking by default.<br>
3. Scalable & Versatile 🚀 – Powers small projects to large-scale applications like Instagram and Disqus.<br>
4. ORM (Object-Relational Mapping) 📊 – Interacts with databases like PostgreSQL, MySQL, and SQLite using Python models.<br>
5. Admin Interface 🛠️ – Auto-generates an admin panel for managing app data.<br>
6. URL Routing 🔗 – Clean, readable URLs via Django’s URL dispatcher.<br>
7. Template Engine 🎨 – Supports dynamic content rendering with Django’s templating system.<br>
8. Built-in Authentication 🛡️ – User authentication, password hashing, and session handling are included.`,logo:e.Django,name:"Django",category:"library"}),a({slug:"flask",color:"black",description:`Flask is a micro web framework for Python that is simple, flexible, and lightweight. It is commonly used for building web applications and RESTful APIs. Unlike Django, Flask does not include built-in tools like an ORM or authentication system, making it minimalistic and modular—you can add only the components you need. <br>
<br>Key Features of Flask:<br>
1. Lightweight – Minimal overhead, easy to set up <br>
2. Flexible – No strict project structure, customizable <br>
3. Modular – Add only what you need (ORM, authentication, etc.) <br>
4. Fast Development – Great for prototyping and small projects <br>
5. Built-in Development Server – Includes debugging tools`,logo:e.Flask,name:"Flask",category:"library"}),a({slug:"mongodb",color:"green",description:`MongoDB is a NoSQL, document-oriented database designed for high performance, scalability, and flexibility. Unlike traditional relational databases (SQL), MongoDB stores data in JSON-like BSON (Binary JSON) documents, making it highly adaptable for applications with dynamic or unstructured data.
<br><br>Key Features of MongoDB:
<br>1. Schema-less (Flexible Data Model) – No need for fixed table structures
<br>2. Scalable & High Performance – Supports horizontal scaling with sharding
<br>3. Document-Oriented – Stores data in JSON-like documents, making it easy to use
4. Supports Indexing – Ensures fast query performance
<br>5. Geo-Location & Full-Text Search – Ideal for real-time applications
<br>6. Integrates with Modern Stacks – Works well with Node.js, Python, Django, Flask, Express.js, Java, etc.`,logo:e.MongoDB,name:"MongoDB",category:"db"}),a({slug:"postgres",color:"blue",description:`PostgreSQL (often called Postgres) is an open-source, relational database management system (RDBMS) known for its scalability, reliability, and advanced features. It is a strong competitor to MySQL and is widely used in enterprise applications, web development, and data science.<br>
<br>
Key Features of PostgreSQL:<br>
1. ACID-Compliant – Ensures data integrity and reliability<br>
2. SQL & NoSQL Support – Handles structured & semi-structured data<br>
3. Extensible – Supports custom functions, data types, and procedural languages<br>
4. Scalable & Performance-Oriented – Ideal for large-scale applications<br>
5. Advanced Querying – Includes CTEs (Common Table Expressions), JSONB, and full-text search<br>
6. Strong Security Features – Supports role-based access control (RBAC)<br>
7. Open-Source & Free – No licensing fees, unlike Oracle or SQL Server`,logo:e.PostgreSQL,name:"PostgreSQL",category:"db"}),a({slug:"git",color:"red",description:`Git is a distributed version control system (VCS) that allows developers to track changes in code, collaborate efficiently, and manage projects seamlessly. It is widely used in software development, open-source projects, and DevOps workflows.<br>
<br>
Key Features of Git:<br>
1. Version Control – Tracks changes in code and allows rollback to previous versions<br>
2. Collaboration – Multiple developers can work on the same project without conflicts<br>
3. Branching & Merging – Work on different features in isolated branches and merge them<br>
4. Distributed System – Every developer has a local copy of the repository<br>
5. Fast & Efficient – Optimized for speed and performance<br>
6. Works with GitHub, GitLab, Bitbucket – Supports cloud-based collaboration`,logo:e.Git,name:"Git",category:"devops"}),a({slug:"aws",color:"yellow",description:`Amazon Web Services (AWS) is the world’s largest cloud computing platform, providing on-demand computing, storage, networking, databases, AI/ML, security, and more. It allows businesses and developers to deploy applications globally without managing physical infrastructure.<br>
<br>
Key Features of AWS:<br>
1. Scalability – Scale up/down resources as needed<br>
2. Pay-As-You-Go Pricing – No upfront costs, only pay for what you use<br>
3. Global Reach – 30+ regions and 100+ availability zones<br>
4. Security & Compliance – Highly secure with encryption and compliance certifications<br>
5. Machine Learning & AI – Ready-to-use AI/ML tools (AWS SageMaker, Rekognition)<br>
6. Serverless Computing – Run applications without managing servers (AWS Lambda)<br>
7. IoT & Big Data – Tools for IoT, analytics, and real-time data processing`,logo:e.AWS,name:"AWS",category:"devops"}),a({slug:"docker",color:"blue",description:`Docker is an open-source platform that enables developers to build, ship, and run applications inside lightweight, portable containers. These containers include everything needed to run an application—code, libraries, dependencies—ensuring that software runs consistently across different environments.<br>
<br>
Key Features of Docker:<br>
1. Eliminates “Works on My Machine” Issues – Consistent environments across development, testing, and production<br>
2. Lightweight & Fast – Containers share the OS kernel, unlike VMs (which require full OS)<br>
3. Portable & Scalable – Run applications anywhere (laptops, cloud, servers)<br>
4. Rapid Deployment – Start a container in milliseconds<br>
5. Microservices Ready – Ideal for breaking applications into modular services<br>
6. Works with Kubernetes – Orchestrate large-scale container deployments`,logo:e.Docker,name:"Docker",category:"devops"}),a({slug:"python",color:"blue",description:`Python is a high-level, interpreted, general-purpose programming language known for its simplicity, readability, and versatility. It is widely used in web development, data science, AI/ML, automation, and more.<br>
<br>
Key Features of Python:<br>
1. Easy to Learn & Readable – Uses simple, human-like syntax<br>
2. Multi-Purpose – Used for web apps, AI, data science, automation, scripting, and more<br>
3. Huge Community & Libraries – Thousands of pre-built libraries for fast development<br>
4. Cross-Platform – Runs on Windows, macOS, Linux, and even mobile devices<br>
5. Object-Oriented & Functional – Supports both programming paradigms<br>
6. Great for Beginners & Experts – Used by students, startups, and big companies like Google, Netflix, NASA`,logo:e.Python,name:"Python",category:"lang"}),a({slug:"selenium",color:"blue",description:`Selenium is an open-source framework used for automating web browsers. It allows developers and testers to interact with web pages just like a human would—by clicking buttons, filling out forms, navigating through pages, and even scraping data.
<br><br>Key Features of Selenium: <br>
1. Automates Browser Actions – Simulates user interactions (clicks, form submissions, scrolling, etc.)<br>
2. Supports Multiple Browsers – Works with Chrome, Firefox, Edge, Safari<br>
3. Cross-Platform – Runs on Windows, macOS, and Linux<br>
4. Integrates with Python, Java, C# & More – Works with various programming languages<br>
5. Useful for Web Scraping & Testing – Extracts data and tests web apps efficiently<br>
6. Works with Headless Mode – Runs automation in the background (without UI)`,logo:e.Selenium,name:"Selenium",category:"library"}),a({slug:"java",color:"orange",description:`Java is a high-level, object-oriented, platform-independent programming language. It is widely used for web applications, mobile apps (Android), enterprise software, and backend development.
Java is compiled into bytecode, which runs on the Java Virtual Machine (JVM), making it write once, run anywhere (WORA).<br>
<br>
Key Features of Java:<br>
1. Cross-Platform – Runs on Windows, macOS, Linux, Android<br>
2. Object-Oriented – Supports encapsulation, inheritance, and polymorphism<br>
3. Stable & Secure – Used by banks, governments, and big enterprises<br>
4. Scalable & High-Performance – Used for large-scale systems, games, and real-time applications<br>
5. Multi-Threading – Supports concurrent execution<br>
6. Huge Ecosystem – Many frameworks (Spring, Hibernate) and libraries<br>
7. Used for Android Development – Powers Android apps via Android SDK`,logo:e.Java,name:"Java",category:"lang"}),a({slug:"fastapi",color:"green",description:`FastAPI is a modern, high-performance web framework for building RESTful APIs with Python 3.7+. It is based on Starlette for async web services and Pydantic for data validation.<br>
<br>
Key Features of FastAPI:<br>
1. Blazing Fast – As fast as Node.js and Go (thanks to ASGI and async support)<br>
2. Automatic Documentation – Generates Swagger UI & ReDoc<br>
3. Built-in Data Validation – Uses Pydantic for automatic request validation<br>
4. Asynchronous by Default – Supports async/await for high-performance APIs<br>
5. Easy to Use & Learn – Simple, declarative syntax like Flask but more powerful<br>
6. Dependency Injection – Clean, modular code structure`,logo:e.FastApi,name:"FastAPI",category:"library"}),a({slug:"xml",color:"green",description:`XML (Extensible Markup Language) in Android Studio is used to define the UI layout and resources of an Android app. It acts as a declarative language for structuring user interfaces, similar to HTML.<br>
<br>
Key Features of XML:<br>
1. Separation of UI & Logic – UI is written in XML, while logic is handled in Java/Kotlin.<br>
2. Consistency – Helps maintain a structured and readable UI design<br>
3. Flexibility – Works with different screen sizes and orientations easily.<br>
`,logo:e.XML,name:"XML",category:"markup-style"}),a({slug:"JS",color:"yellow",description:`JavaScript (JS) is a high-level, interpreted programming language widely used to add interactivity and dynamic behavior to websites. It runs directly in the browser and allows developers to create responsive, engaging user experiences.<br>
<br>
Key Features of JavaScript:<br>
1. Client-Side Interactivity – Enables real-time updates, animations, and form validations without reloading the page.<br>
2. Versatility – Works seamlessly with HTML and CSS, and is supported by all modern browsers.<br>
3. Event-Driven – Responds to user actions like clicks, input, and keyboard events.<br>
4. Expansive Ecosystem – Supports frameworks like React, Angular, and Vue for building complex applications.<br>`,logo:e.JavaScript,name:"JS",category:"pro-lang"}),a({slug:"SendGrid",color:"blue",description:`SendGrid is a cloud-based email delivery service that enables businesses to send transactional and marketing emails reliably at scale. It provides APIs and SMTP integration to simplify email sending from applications.<br>
<br>
Key Features of SendGrid:<br>
1. Reliable Delivery – Ensures high deliverability rates with built-in tools to avoid spam filters.<br>
2. Scalable Infrastructure – Handles email sending for small apps to enterprise-level systems.<br>
3. Analytics & Reporting – Tracks email performance with detailed stats like open rates, clicks, and bounces.<br>
4. API & SMTP Support – Offers flexible integration options using RESTful APIs or traditional SMTP.<br>`,logo:e.Sendgrid,name:"SendGrid",category:"library"}),a({slug:"react",color:"cyan",description:`React is a JavaScript library for building user interfaces, maintained by Meta. It uses a component-based architecture and a virtual DOM to deliver fast, interactive web experiences.<br>
<br>
Key Features of React:<br>
1. Component-Based – Build encapsulated components that manage their own state.<br>
2. Virtual DOM – Efficient UI updates through diffing and reconciliation.<br>
3. Declarative – Describe what the UI should look like; React handles updates.<br>
4. Rich Ecosystem – Works with React Router, Redux, Next.js, and more.<br>
5. Reusable Components – Share components across projects for consistent UIs.<br>`,logo:e.ReactJs,name:"React",category:"framework"}),a({slug:"celery",color:"green",description:`Celery is a distributed task queue for Python that handles asynchronous job processing and scheduled tasks. It integrates with brokers like Redis and RabbitMQ to offload work from the main request/response cycle.<br>
<br>
Key Features of Celery:<br>
1. Async Task Processing – Offload long-running tasks from the web request path.<br>
2. Scheduled Tasks – Run periodic jobs with Celery Beat.<br>
3. Retry Mechanism – Automatically retry failed tasks with configurable back-off.<br>
4. Scalable – Distribute tasks across multiple workers and machines.<br>
5. Broker Agnostic – Works with Redis, RabbitMQ, and more.<br>`,logo:e.Celery,name:"Celery",category:"library"}),a({slug:"redis",color:"red",description:`Redis is an open-source, in-memory data store used as a cache, message broker, and database. Its sub-millisecond latency makes it ideal for session storage, queuing, and real-time data use cases.<br>
<br>
Key Features of Redis:<br>
1. In-Memory Speed – Extremely fast reads and writes from RAM.<br>
2. Versatile Data Structures – Supports strings, lists, sets, hashes, sorted sets, and more.<br>
3. Pub/Sub Messaging – Built-in publish/subscribe for real-time communication.<br>
4. Persistence Options – RDB snapshots and AOF logging for durability.<br>
5. Celery & Django Integration – Widely used as a Celery broker and Django cache backend.<br>`,logo:e.Redis,name:"Redis",category:"db"}),a({slug:"stripe",color:"purple",description:`Stripe is a payments infrastructure platform that enables businesses to accept online payments, manage subscriptions, and handle complex financial flows via a developer-friendly API.<br>
<br>
Key Features of Stripe:<br>
1. Payment Processing – Accept cards, wallets, and bank transfers globally.<br>
2. Webhooks – React to payment events (success, failure, dispute) in real time.<br>
3. Subscriptions & Billing – Built-in recurring billing and invoice management.<br>
4. Fraud Prevention – Radar ML-based fraud detection out of the box.<br>
5. Developer-Friendly – Clean REST API with SDKs for Python, Node, and more.<br>`,logo:e.Stripe,name:"Stripe",category:"library"}),a({slug:"twilio",color:"red",description:`Twilio is a cloud communications platform that provides APIs for SMS, voice, email, and more. It enables developers to embed real-time communication features directly into applications.<br>
<br>
Key Features of Twilio:<br>
1. SMS & WhatsApp – Send and receive text messages programmatically.<br>
2. Voice Calls – Build IVR systems and voice applications via API.<br>
3. Two-Factor Auth – Simple OTP and verification workflows.<br>
4. Global Reach – Communicate with users in 180+ countries.<br>
5. Webhooks & Events – React to inbound messages and call status updates.<br>`,logo:e.Twilio,name:"Twilio",category:"library"})],p="Skills",m=(...n)=>c.filter(t=>n.includes(t.slug)),y=n=>{const t=[],s=[];return c.forEach(o=>{if(n.trim()&&!o.name.toLowerCase().includes(n.trim().toLowerCase()))return;if(!o.category){s.push(o);return}let i=t.find(d=>{var l;return d.category.slug===((l=o.category)==null?void 0:l.slug)});i||(i={items:[],category:o.category},t.push(i)),i.items.push(o)}),s.length!==0&&t.push({category:{name:"Others",slug:"others"},items:s}),t};export{y as a,m as g,c as i,p as t};
