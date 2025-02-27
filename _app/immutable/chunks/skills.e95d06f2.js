import{A as n}from"./UIcon.818f1031.js";function u(e,...o){const t=Object.assign({},e);return Object.keys(t).forEach(s=>{o.includes(s)&&delete t[s]}),t}const a=e=>e,g=[a({name:"Programming Languages",slug:"pro-lang"}),a({name:"Frameworks",slug:"framework"}),a({name:"Libraries",slug:"library"}),a({name:"Langauges",slug:"lang"}),a({name:"Databases",slug:"db"}),a({name:"ORMs",slug:"orm"}),a({name:"DevOps",slug:"devops"}),a({name:"Testing",slug:"test"}),a({name:"Dev Tools",slug:"devtools"}),a({name:"Markup & Style",slug:"markup-style"}),a({name:"Design",slug:"design"}),a({name:"Soft Skills",slug:"soft"})],r=e=>{const o=u(e,"category");return e.category&&(o.category=g.find(t=>t.slug===e.category)),o},c=[r({slug:"django",color:"green",description:`Django is a high-level Python web framework that enables developers to build secure, scalable, and maintainable web applications rapidly. It follows the Model-View-Template (MVT) architectural pattern and emphasizes reusability, less code, and rapid development. <br>
<br>Key Features of Django: <br>
1. Batteries Included 🔋 – Comes with built-in tools for authentication, ORM, session management, and more.<br>
2. Security Focused 🔒 – Protects against SQL injection, XSS, CSRF, and clickjacking by default.<br>
3. Scalable & Versatile 🚀 – Powers small projects to large-scale applications like Instagram and Disqus.<br>
4. ORM (Object-Relational Mapping) 📊 – Interacts with databases like PostgreSQL, MySQL, and SQLite using Python models.<br>
5. Admin Interface 🛠️ – Auto-generates an admin panel for managing app data.<br>
6. URL Routing 🔗 – Clean, readable URLs via Django’s URL dispatcher.<br>
7. Template Engine 🎨 – Supports dynamic content rendering with Django’s templating system.<br>
8. Built-in Authentication 🛡️ – User authentication, password hashing, and session handling are included.`,logo:n.Django,name:"Django",category:"library"}),r({slug:"flask",color:"black",description:`Flask is a micro web framework for Python that is simple, flexible, and lightweight. It is commonly used for building web applications and RESTful APIs. Unlike Django, Flask does not include built-in tools like an ORM or authentication system, making it minimalistic and modular—you can add only the components you need. <br>
<br>Key Features of Flask:<br>
1. Lightweight – Minimal overhead, easy to set up <br>
2. Flexible – No strict project structure, customizable <br>
3. Modular – Add only what you need (ORM, authentication, etc.) <br>
4. Fast Development – Great for prototyping and small projects <br>
5. Built-in Development Server – Includes debugging tools`,logo:n.Flask,name:"Flask",category:"library"}),r({slug:"mongodb",color:"green",description:`MongoDB is a NoSQL, document-oriented database designed for high performance, scalability, and flexibility. Unlike traditional relational databases (SQL), MongoDB stores data in JSON-like BSON (Binary JSON) documents, making it highly adaptable for applications with dynamic or unstructured data.
<br><br>Key Features of MongoDB:
<br>1. Schema-less (Flexible Data Model) – No need for fixed table structures
<br>2. Scalable & High Performance – Supports horizontal scaling with sharding
<br>3. Document-Oriented – Stores data in JSON-like documents, making it easy to use
4. Supports Indexing – Ensures fast query performance
<br>5. Geo-Location & Full-Text Search – Ideal for real-time applications
<br>6. Integrates with Modern Stacks – Works well with Node.js, Python, Django, Flask, Express.js, Java, etc.`,logo:n.MongoDB,name:"MongoDB",category:"db"}),r({slug:"postgres",color:"blue",description:`PostgreSQL (often called Postgres) is an open-source, relational database management system (RDBMS) known for its scalability, reliability, and advanced features. It is a strong competitor to MySQL and is widely used in enterprise applications, web development, and data science.<br>
<br>
Key Features of PostgreSQL:<br>
1. ACID-Compliant – Ensures data integrity and reliability<br>
2. SQL & NoSQL Support – Handles structured & semi-structured data<br>
3. Extensible – Supports custom functions, data types, and procedural languages<br>
4. Scalable & Performance-Oriented – Ideal for large-scale applications<br>
5. Advanced Querying – Includes CTEs (Common Table Expressions), JSONB, and full-text search<br>
6. Strong Security Features – Supports role-based access control (RBAC)<br>
7. Open-Source & Free – No licensing fees, unlike Oracle or SQL Server`,logo:n.PostgreSQL,name:"PostgreSQL",category:"db"}),r({slug:"git",color:"red",description:`Git is a distributed version control system (VCS) that allows developers to track changes in code, collaborate efficiently, and manage projects seamlessly. It is widely used in software development, open-source projects, and DevOps workflows.<br>
<br>
Key Features of Git:<br>
1. Version Control – Tracks changes in code and allows rollback to previous versions<br>
2. Collaboration – Multiple developers can work on the same project without conflicts<br>
3. Branching & Merging – Work on different features in isolated branches and merge them<br>
4. Distributed System – Every developer has a local copy of the repository<br>
5. Fast & Efficient – Optimized for speed and performance<br>
6. Works with GitHub, GitLab, Bitbucket – Supports cloud-based collaboration`,logo:n.Git,name:"Git",category:"devops"}),r({slug:"aws",color:"yellow",description:`Amazon Web Services (AWS) is the world’s largest cloud computing platform, providing on-demand computing, storage, networking, databases, AI/ML, security, and more. It allows businesses and developers to deploy applications globally without managing physical infrastructure.<br>
<br>
Key Features of AWS:<br>
1. Scalability – Scale up/down resources as needed<br>
2. Pay-As-You-Go Pricing – No upfront costs, only pay for what you use<br>
3. Global Reach – 30+ regions and 100+ availability zones<br>
4. Security & Compliance – Highly secure with encryption and compliance certifications<br>
5. Machine Learning & AI – Ready-to-use AI/ML tools (AWS SageMaker, Rekognition)<br>
6. Serverless Computing – Run applications without managing servers (AWS Lambda)<br>
7. IoT & Big Data – Tools for IoT, analytics, and real-time data processing`,logo:n.AWS,name:"AWS",category:"devops"}),r({slug:"docker",color:"blue",description:`Docker is an open-source platform that enables developers to build, ship, and run applications inside lightweight, portable containers. These containers include everything needed to run an application—code, libraries, dependencies—ensuring that software runs consistently across different environments.<br>
<br>
Key Features of Docker:<br>
1. Eliminates “Works on My Machine” Issues – Consistent environments across development, testing, and production<br>
2. Lightweight & Fast – Containers share the OS kernel, unlike VMs (which require full OS)<br>
3. Portable & Scalable – Run applications anywhere (laptops, cloud, servers)<br>
4. Rapid Deployment – Start a container in milliseconds<br>
5. Microservices Ready – Ideal for breaking applications into modular services<br>
6. Works with Kubernetes – Orchestrate large-scale container deployments`,logo:n.Docker,name:"Docker",category:"devops"}),r({slug:"python",color:"blue",description:`Python is a high-level, interpreted, general-purpose programming language known for its simplicity, readability, and versatility. It is widely used in web development, data science, AI/ML, automation, and more.<br>
<br>
Key Features of Python:<br>
1. Easy to Learn & Readable – Uses simple, human-like syntax<br>
2. Multi-Purpose – Used for web apps, AI, data science, automation, scripting, and more<br>
3. Huge Community & Libraries – Thousands of pre-built libraries for fast development<br>
4. Cross-Platform – Runs on Windows, macOS, Linux, and even mobile devices<br>
5. Object-Oriented & Functional – Supports both programming paradigms<br>
6. Great for Beginners & Experts – Used by students, startups, and big companies like Google, Netflix, NASA`,logo:n.Python,name:"Python",category:"lang"}),r({slug:"selenium",color:"blue",description:`Selenium is an open-source framework used for automating web browsers. It allows developers and testers to interact with web pages just like a human would—by clicking buttons, filling out forms, navigating through pages, and even scraping data.
<br><br>Key Features of Selenium: <br>
1. Automates Browser Actions – Simulates user interactions (clicks, form submissions, scrolling, etc.)<br>
2. Supports Multiple Browsers – Works with Chrome, Firefox, Edge, Safari<br>
3. Cross-Platform – Runs on Windows, macOS, and Linux<br>
4. Integrates with Python, Java, C# & More – Works with various programming languages<br>
5. Useful for Web Scraping & Testing – Extracts data and tests web apps efficiently<br>
6. Works with Headless Mode – Runs automation in the background (without UI)`,logo:n.Selenium,name:"Selenium",category:"library"}),r({slug:"java",color:"orange",description:`Java is a high-level, object-oriented, platform-independent programming language. It is widely used for web applications, mobile apps (Android), enterprise software, and backend development.
Java is compiled into bytecode, which runs on the Java Virtual Machine (JVM), making it write once, run anywhere (WORA).<br>
<br>
Key Features of Java:<br>
1. Cross-Platform – Runs on Windows, macOS, Linux, Android<br>
2. Object-Oriented – Supports encapsulation, inheritance, and polymorphism<br>
3. Stable & Secure – Used by banks, governments, and big enterprises<br>
4. Scalable & High-Performance – Used for large-scale systems, games, and real-time applications<br>
5. Multi-Threading – Supports concurrent execution<br>
6. Huge Ecosystem – Many frameworks (Spring, Hibernate) and libraries<br>
7. Used for Android Development – Powers Android apps via Android SDK`,logo:n.Java,name:"Java",category:"lang"}),r({slug:"fastapi",color:"green",description:`FastAPI is a modern, high-performance web framework for building RESTful APIs with Python 3.7+. It is based on Starlette for async web services and Pydantic for data validation.<br>
<br>
Key Features of FastAPI:<br>
1. Blazing Fast – As fast as Node.js and Go (thanks to ASGI and async support)<br>
2. Automatic Documentation – Generates Swagger UI & ReDoc<br>
3. Built-in Data Validation – Uses Pydantic for automatic request validation<br>
4. Asynchronous by Default – Supports async/await for high-performance APIs<br>
5. Easy to Use & Learn – Simple, declarative syntax like Flask but more powerful<br>
6. Dependency Injection – Clean, modular code structure`,logo:n.FastApi,name:"FastAPI",category:"library"}),r({slug:"xml",color:"green",description:`XML (Extensible Markup Language) in Android Studio is used to define the UI layout and resources of an Android app. It acts as a declarative language for structuring user interfaces, similar to HTML.<br>
<br>
Key Features of FastAPI:<br>
1. Separation of UI & Logic – UI is written in XML, while logic is handled in Java/Kotlin.<br>
2. Consistency – Helps maintain a structured and readable UI design<br>
3. Flexibility – Works with different screen sizes and orientations easily.<br>
`,logo:n.XML,name:"XML",category:"markup-style"})],b="Skills",m=(...e)=>c.filter(o=>e.includes(o.slug)),y=e=>{const o=[],t=[];return c.forEach(s=>{if(e.trim()&&!s.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!s.category){t.push(s);return}let i=o.find(d=>{var l;return d.category.slug===((l=s.category)==null?void 0:l.slug)});i||(i={items:[],category:s.category},o.push(i)),i.items.push(s)}),t.length!==0&&o.push({category:{name:"Others",slug:"others"},items:t}),o};export{y as a,m as g,c as i,b as t};
