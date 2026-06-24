-- Run once in Supabase SQL Editor after creating the tables.
-- Replace the contact details and image URLs with real assets when available.

insert into public.projects (title, description, image_url, github_url, demo_url, stack, featured, visible, order_index) values
('AI Scam Detection System', 'Real-time fraud and scam classification using NLP and gradient boosting. Achieves 94% accuracy on live transaction data with sub-100ms inference via a FastAPI REST endpoint.', '/images/project-scam.png', 'https://github.com/mohitkumara/ai-scam-detection', null, array['Python','scikit-learn','FastAPI','Pandas','NLP'], true, true, 1),
('Real-Time ETL Pipeline Dashboard', 'Automated ETL pipeline that ingests raw CSV and API data, applies transformation rules, and loads into PostgreSQL. Includes a live dashboard with anomaly alerts and row-per-second throughput metrics.', '/images/project-etl.png', 'https://github.com/mohitkumara/etl-pipeline-dashboard', null, array['Python','Pandas','PostgreSQL','Airflow','React'], true, true, 2),
('Natural Language SQL Query Engine', 'Converts plain-English questions into optimised SQL queries using LangChain and an LLM backend. Infers schema automatically, suggests indexes, and explains query plans in plain language.', '/images/project-sql.png', 'https://github.com/mohitkumara/nl-sql-engine', null, array['Python','LangChain','SQLite','OpenAI API','FastAPI'], true, true, 3),
('Portfolio CMS', 'This portfolio site — built with Vite, React, TypeScript, Framer Motion, and Supabase. Features a separate admin CMS on a private port for content management, cinematic canvas background, and full responsive design.', '/images/project-cms.png', 'https://github.com/mohitkumara/portfolio', null, array['React','TypeScript','Supabase','Framer Motion','Vite'], true, true, 4);

insert into public.skills (name, category, order_index) values
('Python','Programming',1),('C','Programming',2),('C++','Programming',3),('Java','Programming',4),('SQL','Programming',5),('Bash','Programming',6),
('PyTorch','AI / Data Science',1),('scikit-learn','AI / Data Science',2),('LangChain','AI / Data Science',3),('HuggingFace','AI / Data Science',4),('Pandas','AI / Data Science',5),('NumPy','AI / Data Science',6),('Matplotlib','AI / Data Science',7),('OpenCV','AI / Data Science',8),
('React','Frontend',1),('TypeScript','Frontend',2),('Tailwind CSS','Frontend',3),('Framer Motion','Frontend',4),('Vite','Frontend',5),('HTML / CSS','Frontend',6),
('FastAPI','Backend',1),('Node.js','Backend',2),('Express','Backend',3),('REST APIs','Backend',4),('JWT Auth','Backend',5),
('PostgreSQL','Databases',1),('Supabase','Databases',2),('MongoDB','Databases',3),('SQLite','Databases',4),('MySQL','Databases',5),('Redis','Databases',6),
('Git','Tools',1),('GitHub','Tools',2),('Docker','Tools',3),('VS Code','Tools',4),('Postman','Tools',5),('Jupyter','Tools',6),('Linux','Tools',7);

insert into public.about (bio, timeline) values (
$$I'm Mohit Kumar A, a final-year B.E. Data Science student in Bengaluru, driven by a simple belief: the best software solves real problems elegantly. I spend most of my time at the intersection of AI, data engineering, and full-stack development — building systems that are not just technically sound but actually useful.

My work ranges from training NLP models for fraud detection to designing relational database architectures and shipping full-stack web applications. I care about clean code, clear thinking, and outcomes that matter.

When I'm not building, I'm solving LeetCode problems (320+ and counting), reading about distributed systems, or experimenting with new model architectures. I'm currently open to internships and full-time roles where I can contribute meaningfully from day one.$$,
$$[{"year":"2022","title":"Started B.E. Data Science","description":"Enrolled in B.E. Data Science. Started with Python, statistics, and database fundamentals. Built first data analysis projects."},{"year":"2023","title":"Deep dive into ML & full-stack","description":"Completed ML specialisation. Built first end-to-end model. Started learning React and FastAPI. Crossed 200 LeetCode problems."},{"year":"2024","title":"First production AI project","description":"Shipped the AI scam detection system achieving 94% accuracy. Built the ETL dashboard and NL-to-SQL engine. Started exploring LangChain and LLM applications."},{"year":"2025","title":"Portfolio live · Open to work","description":"Built this portfolio with a full CMS. 320+ LeetCode problems. Actively looking for AI engineering and data science roles in Bengaluru and remote."},{"year":"2026","title":"B.E. graduation","description":"Expected graduation. Goal: contributing to a team building AI systems that matter at scale."}]$$
);

insert into public.contact (email, linkedin_url, github_url, resume_url) values
('mohitkumara@email.com', 'https://linkedin.com/in/mohitkumara', 'https://github.com/mohitkumara', '/resume/mohit-kumar-a-resume.pdf');
