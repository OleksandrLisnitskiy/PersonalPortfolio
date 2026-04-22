import{A as e}from"./UIcon.054ccf66.js";import{g as n}from"./skills.5f72c4af.js";import{C as t}from"./types.1ebf2f37.js";const r=[{slug:"full-stack-rentino",company:"Rentino",description:`<h2>Full-Stack Developer – Peer-to-Peer Rental Marketplace</h2>

<p>
    <a href="https://rentino.org" target="_blank" rel="noopener noreferrer"><strong>Rentino</strong></a> is a peer-to-peer rental marketplace connecting owners and renters.
    I designed and built the full backend and production infrastructure from the ground up using <strong>Django/DRF</strong>,
    deployed on AWS across a multi-node architecture with Cloudflare for TLS and CDN.
</p>

<h3>Backend & API</h3>
<ul>
    <li>Built the marketplace API with <strong>Django REST Framework</strong>, enforcing clean separation between API, business logic, and persistence layers.</li>
    <li>Designed <strong>PostgreSQL schemas</strong> with atomic transactional writes, eliminating race conditions and partial update failures across bookings and payments.</li>
    <li>Implemented <strong>least-privilege database roles</strong> (<code>rentino_owner</code> for migrations, <code>rentino_app</code> for runtime) with RBAC and role-based access control throughout the API.</li>
    <li>Integrated <strong>Stripe payments and webhooks</strong>, <strong>Twilio SMS</strong>, and <strong>SendGrid email</strong> notifications for end-to-end booking and payment flows.</li>
    <li>Built a <strong>presigned URL upload system</strong> with dual Cloudflare R2 buckets — public bucket for listing photos, private bucket for sensitive documents with short-lived presigned URLs.</li>
    <li>Implemented <strong>PgBouncer</strong> connection pooling (transaction mode) to efficiently manage database connections under load.</li>
</ul>

<h3>Async & Background Jobs</h3>
<ul>
    <li>Integrated <strong>Celery workers and Celery Beat scheduler</strong> to offload long-running tasks from the request path, reducing average API response time by <strong>30%</strong>.</li>
    <li>Used <strong>Redis</strong> as both the Celery broker and Django cache backend for fast in-memory lookups and retry-safe task automation.</li>
    <li>Built a <strong>dynamic sitemap generation service</strong> running on a cron schedule inside Docker, writing sitemaps to a shared nginx volume for SEO.</li>
</ul>

<h3>Infrastructure & DevOps</h3>
<ul>
    <li>Architected a <strong>multi-node AWS deployment</strong>: dedicated EC2 instances for the app (nginx + Gunicorn + Celery), database (Postgres 16 on EBS 100GB gp3), and Redis; ClamAV on ECS Fargate for file scanning.</li>
    <li>Configured <strong>Cloudflare</strong> (Full Strict TLS, origin certificates, DNS proxying) for CDN, DDoS protection, and zero-downtime SSL.</li>
    <li>Set up <strong>CI/CD pipelines</strong> via GitHub Actions: builds Docker images, pushes to GHCR, and deploys to production by SSHing into the EC2 app server on every merge to the deploy branch.</li>
    <li>Implemented <strong>nightly pg_dump backups</strong> with 14-day retention stored on the DB EC2, with structured logging and cron scheduling.</li>
    <li>Applied strict <strong>security group rules</strong> — app server is the only host with access to the DB (5432), Redis (6379), and ClamAV (3310) nodes.</li>
    <li>Used <strong>envsubst-rendered config templates</strong> for PgBouncer to safely inject secrets at deploy time without committing them to git.</li>
</ul>

<h3>Frontend & SEO</h3>
<ul>
    <li>Shipped frontend static assets inside Docker images with <strong>pre-rendering and sitemap generation</strong> baked into the build for production SEO.</li>
    <li>Configured <strong>nginx</strong> for TLS termination, static hosting, reverse proxying to the Django API, and long-term cache headers for hashed assets.</li>
</ul>

<h3>Impact</h3>
<ul>
    <li>Reduced average API response time by <strong>30%</strong> through Celery task offloading and Redis caching.</li>
    <li>Eliminated race conditions across all booking and payment operations via atomic PostgreSQL transactions.</li>
    <li>Delivered a fully observable production system with structured logging, CI/CD, nightly backups, and multi-environment deployments.</li>
</ul>`,contract:t.FullTime,type:"Software Development",location:"Remote",period:{from:new Date(2025,8,1),to:new Date(Date.now())},skills:n("django","python","postgres","celery","redis","docker","aws","stripe","twilio","SendGrid","git"),name:"Full-Stack Developer",color:"blue",links:[{to:"https://rentino.org",label:"Rentino"}],logo:e.Rentino,shortDescription:"Building a peer-to-peer rental marketplace backend with Django/DRF, PostgreSQL, Celery, Redis, and Docker.",screenshots:[{src:"/logos/Rentino_1.PNG",label:"Homepage"},{src:"/logos/Rentino_2.PNG",label:"Listings"},{src:"/logos/Rentino_3.PNG",label:"Booking"},{src:"/logos/Rentino_4.PNG",label:"Dashboard"}]},{slug:"software-developer",company:"Confidential Client (B2B SaaS)",description:`<h2>Software Developer – B2B SaaS Platform</h2>

<p>
    As a <strong>Software Developer</strong> on a B2B SaaS product, I delivered features across multiple release cycles,
    focusing on UI quality, scheduling, payments, and long-term bug reduction.
</p>

<h3>Key Responsibilities:</h3>
<ul>
    <li><strong>Translated product requirements into shippable features</strong> across 3+ release cycles, improving UI consistency and reducing post-release bug reports by an estimated 30% through careful pre-release testing.</li>
    <li><strong>Built interactive scheduling views</strong> with AJAX-style updates and client-side caching, reducing visible UI stalls and cutting average calendar load interactions by over 50%.</li>
    <li><strong>Diagnosed and resolved recurring data and UI bugs</strong> through structured Git workflows and automated checks, reducing repeat issue reports by approximately 40% over 3 months of active maintenance.</li>
    <li><strong>Integrated Stripe payments and webhooks</strong> alongside Twilio SMS and SendGrid email notifications, increasing payment confirmation reliability and on-time attendance rate by 25% within the first month.</li>
</ul>

<h3>Technologies Used:</h3>
<ul>
    <li><strong>Backend:</strong> Python, Flask, Django</li>
    <li><strong>Frontend:</strong> JavaScript, HTML, CSS</li>
    <li><strong>Integrations:</strong> Stripe, Twilio, SendGrid</li>
    <li><strong>DevOps:</strong> Docker, Git, AWS</li>
</ul>

<h3>Impact:</h3>
<ul>
    <li>Reduced post-release bug reports by an estimated <strong>30%</strong> through careful pre-release testing.</li>
    <li>Cut average calendar load interactions by over <strong>50%</strong> with AJAX-style updates and client-side caching.</li>
    <li>Reduced repeat issue reports by approximately <strong>40%</strong> over 3 months of active maintenance.</li>
    <li>Increased payment confirmation reliability and on-time attendance rate by <strong>25%</strong> within the first month.</li>
</ul>`,contract:t.FullTime,type:"Software Development",location:"Remote",period:{from:new Date(2025,6,1),to:new Date(Date.now())},skills:n("flask","python","stripe","twilio","SendGrid","docker","aws","git"),name:"Software Developer",color:"red",links:[],logo:e.Empty,shortDescription:"Delivering features, scheduling views, and payment integrations (Stripe, Twilio, SendGrid) for a B2B SaaS platform."},{slug:"mla-assistant",company:"Legislative Assembly of Alberta",description:"<h2>🏛️ MLA Assistant – Government Administration Support 📜</h2>    <p>        As an <strong>MLA Assistant</strong>, I provided administrative and logistical support to a Member of the Legislative Assembly (MLA),         ensuring smooth operations, effective communication, and efficient handling of governmental responsibilities.    </p>    <h3>🔧 Key Responsibilities:</h3>    <ul>        <li>📑 <strong>Administrative Support:</strong> Managed schedules, correspondence, and documentation for the MLA.</li>        <li>📢 <strong>Public Relations:</strong> Assisted in handling constituent inquiries, complaints, and service requests.</li>        <li>📝 <strong>Legislative Research:</strong> Conducted research on policies, bills, and government initiatives.</li>        <li>🤝 <strong>Community Engagement:</strong> Coordinated meetings, events, and public outreach programs.</li>        <li>🏛️ <strong>Government Liaison:</strong> Communicated with various government departments and officials.</li>    </ul>    <h3>🛠️ Skills & Tools Used:</h3>    <ul>        <li>💻 <strong>Office & Documentation:</strong> MS Office, Google Docs, spreadsheets.</li>        <li>📞 <strong>Communication & Public Relations:</strong> Email drafting, public speaking, official correspondence.</li>        <li>🔍 <strong>Policy & Legislative Research:</strong> Analyzing bills, government reports, and legal documents.</li>        <li>📊 <strong>Data & Case Management:</strong> Tracking constituent concerns and follow-ups.</li>        <li>🗓️ <strong>Event Coordination:</strong> Organizing press conferences, public meetings, and constituency visits.</li>    </ul>    <h3>🌟 Impact & Achievements:</h3>    <ul>        <li>✅ <strong>Streamlined administrative processes</strong> to improve office efficiency.</li>        <li>📈 <strong>Enhanced constituent services</strong> by promptly addressing community concerns.</li>        <li>🤝 <strong>Strengthened public engagement</strong> by organizing community meetings and events.</li>        <li>🏛️ <strong>Supported policy initiatives</strong> through research and documentation.</li>    </ul>    <p>        Through my role as an MLA Assistant, I contributed to <strong>efficient governance, policy research, and community engagement</strong>,         ensuring effective communication between the government and the public. 🚀    </p>",contract:t.FullTime,type:"MLA Assistance",location:"Camrose, AB, Canada",period:{from:new Date(2024,9,1),to:new Date(Date.now())},skills:n("svelte","ts","sass","css","html","js"),name:"MLA Assistant",color:"blue",links:[],logo:e.LogoLAO,shortDescription:"Assisting Camrose MLA with scheduling meetings and communication with public."},{slug:"software-freelance-junior",company:"Self-employed",description:"<h2>⚙️ Automation Script Development 🌍</h2>    <p>        I worked on <strong>creating fast and efficient automation scripts</strong> for customers worldwide,         helping streamline workflows, reduce manual tasks, and enhance productivity.    </p>    <h3>🔧 Key Contributions:</h3>    <ul>        <li>🚀 <strong>Developed high-performance automation scripts</strong> to optimize various business processes.</li>        <li>⚡ <strong>Improved execution speed</strong> and reduced processing time through optimized scripting techniques.</li>        <li>🔍 <strong>Debugged and refined existing automation workflows</strong> to eliminate errors and enhance efficiency.</li>        <li>🌍 <strong>Worked with international clients</strong> to customize automation solutions to their specific needs.</li>        <li>🔄 <strong>Integrated automation with APIs, databases, and external services</strong> for seamless functionality.</li>    </ul>    <h3>🛠️ Technologies & Tools Used:</h3>    <ul>        <li>💻 <strong>Programming & Scripting:</strong> Python, Bash, PowerShell</li>        <li>⚙️ <strong>Automation Frameworks:</strong> Selenium, Puppeteer, UiPath</li>        <li>🖥️ <strong>API Integration:</strong> REST, JSON, Webhooks</li>        <li>🔧 <strong>Version Control:</strong> Git, GitHub Actions</li>        <li>📂 <strong>Deployment & Cloud Services:</strong> AWS, Docker</li>    </ul>    <h3>🌟 Impact & Achievements:</h3>    <ul>        <li>📈 <strong>Reduced manual workload</strong> for clients by automating repetitive tasks.</li>        <li>⏳ <strong>Improved efficiency</strong> by optimizing script execution time.</li>        <li>💡 <strong>Enhanced automation reliability</strong> by implementing robust error-handling mechanisms.</li>        <li>🌍 <strong>Delivered scalable solutions</strong> adaptable to different industries and workflows.</li>    </ul>    <p>        My work in automation scripting has helped businesses and individuals         <strong>save time, improve accuracy, and optimize their workflows</strong>. 🚀    </p>",contract:t.Freelance,type:"Software Development",location:"Home",period:{from:new Date(2021,0,1),to:new Date(2023,10,27)},skills:n("python","selenium","aws","docker"),name:"Junior Freelancer",color:"green",links:[],logo:e.Unknown,shortDescription:"Creating fast and efficient automation scripts for customers around the world."}],a="Experience";export{r as i,a as t};
