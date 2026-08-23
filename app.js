/* ==========================================================================
   FUTURE HUD LOGIC SYSTEM - MOHIM DAS PORTFOLIO
   ========================================================================== */

/* ============================================================
   SITE CONFIG — edit these values to update site-wide settings
   ============================================================ */
const SITE_CONFIG = {
    // FormSubmit.co destination email, split to reduce scraping.
    // Replace with your own email, or set FORMSUBMIT_EMAIL_PART_1 / _2 directly.
    FORMSUBMIT_EMAIL_PART_1: "mohimdas300",
    FORMSUBMIT_EMAIL_PART_2: "gmail.com",
    // GitHub username used to build repository / profile links across the site.
    GITHUB_USERNAME: "MOHIM-GIT"
};
SITE_CONFIG.FORMSUBMIT_EMAIL = `${SITE_CONFIG.FORMSUBMIT_EMAIL_PART_1}@${SITE_CONFIG.FORMSUBMIT_EMAIL_PART_2}`;

/* ============================================================
   PROJECT DATA — single source of truth for the project explorer
   and featured projects grid. Add new GitHub repos here.
   Categories: ai, education, productivity, finance, healthcare, web, tools, experiments
   ============================================================ */
const EXCLUDED_REPO_KEYWORDS = ["munu", "sristi", "tuhin", "megha"];

const PROJECT_DATA = [
    {
        id: "codelx-platform",
        name: "CodeLX",
        repo: "CodeLX-1.4",
        description: "A student-focused technology and education ecosystem offering accessible courses, developer tools, and AI-powered learning resources.",
        problem: "Quality technology education and practical building resources are often expensive or hard for students to access.",
        tech: ["MERN", "Node.js", "MongoDB"],
        category: "education",
        status: "Active",
        demo: null
    },
    {
        id: "codelx-discipline-rank",
        name: "CodeLX Discipline Rank",
        repo: "Workshop",
        description: "A discipline and productivity application where users create tasks, track completion, build streaks, and monitor monthly growth.",
        problem: "Turning daily task completion into a measurable, motivating ranking system.",
        tech: ["React", "Node.js"],
        category: "productivity",
        status: "In Development",
        demo: null
    },
    {
        id: "money-mind-pro",
        name: "Money Mind Pro",
        repo: "moneyMind",
        description: "A personal finance and money management application for tracking expenses, income, and savings, with financial insights and reports.",
        problem: "Giving students and early professionals a clear, simple view of their personal finances.",
        tech: ["React", "Firebase"],
        category: "finance",
        status: "Active",
        demo: null
    },
    {
        id: "codelx-music",
        name: "CodeLX Music",
        repo: "CodeLX-1.4",
        description: "A music-focused application and digital listening experience built as part of the CodeLX product family.",
        problem: "Exploring media and audio experiences within the CodeLX ecosystem.",
        tech: ["JavaScript", "Web Audio API"],
        category: "experiments",
        status: "Experimental",
        demo: null
    },
    {
        id: "ai-mode",
        name: "AI Mode",
        repo: "AI-MODE",
        description: "An AI-powered application exploring automation and intelligent tooling within the CodeLX ecosystem.",
        problem: "Applying AI models to real, practical student and developer workflows.",
        tech: ["Python", "AI/ML"],
        category: "ai",
        status: "In Development",
        demo: null
    },
    {
        id: "student-admin-platform",
        name: "Student Administration Platform",
        repo: "student-admin-platform",
        description: "An administrative platform for managing student data, records, and academic operations.",
        problem: "Streamlining administrative workflows for education platforms.",
        tech: ["MERN", "Node.js"],
        category: "education",
        status: "Active",
        demo: null
    },
    {
        id: "student-codelx",
        name: "Student CodeLX",
        repo: "Student_CodeLx",
        description: "A student-facing module of the CodeLX ecosystem focused on learning workflows and course access.",
        problem: "Giving students a dedicated interface to access CodeLX courses and tools.",
        tech: ["JavaScript", "Node.js"],
        category: "education",
        status: "In Development",
        demo: null
    },
    {
        id: "pharma",
        name: "Pharma",
        repo: "Pharma",
        description: "A healthcare-focused application exploring pharmacy and medicine-related data management.",
        problem: "Organizing and managing pharmacy-related information digitally.",
        tech: ["JavaScript"],
        category: "healthcare",
        status: "Experimental",
        demo: null
    },
    {
        id: "smart-upi-qr-system",
        name: "Smart UPI QR System",
        repo: "upi-qr-code",
        description: "A tool for generating and managing UPI QR codes for digital payments.",
        problem: "Simplifying UPI QR code generation for small transactions and personal use.",
        tech: ["JavaScript", "UPI API"],
        category: "finance",
        status: "Active",
        demo: null
    },
    {
        id: "portfolio",
        name: "Portfolio",
        repo: "portfolio",
        description: "This personal portfolio website — a futuristic, cyberpunk-inspired developer showcase.",
        problem: "Presenting projects, skills, and the CodeLX mission in one cohesive experience.",
        tech: ["HTML", "CSS", "JavaScript"],
        category: "web",
        status: "Active",
        demo: null
    },
    {
        id: "fileforge",
        name: "FileForge",
        repo: "fileForge",
        description: "A file utility tool for processing, converting, or managing files.",
        problem: "Handling common file operations through a simple, unified tool.",
        tech: ["JavaScript", "Node.js"],
        category: "tools",
        status: "Experimental",
        demo: null
    },
    {
        id: "food",
        name: "Food",
        repo: "food",
        description: "A food-related web application exploring ordering, listing, or discovery features.",
        problem: "Experimenting with food-service style web application patterns.",
        tech: ["HTML", "CSS", "JavaScript"],
        category: "web",
        status: "Experimental",
        demo: null
    },
    {
        id: "edtech-platform",
        name: "Education Technology Platform",
        repo: "ED-tech",
        description: "An education technology platform exploring digital learning tools and course delivery.",
        problem: "Making structured learning content easier to deliver and access online.",
        tech: ["MERN"],
        category: "education",
        status: "In Development",
        demo: null
    },
    {
        id: "orbit",
        name: "Orbit",
        repo: "orbit",
        description: "An experimental project exploring new product ideas and interface concepts.",
        problem: "Prototyping and testing new product directions.",
        tech: ["JavaScript"],
        category: "experiments",
        status: "Experimental",
        demo: null
    },
    {
        id: "codelx-admin",
        name: "CodeLX Admin",
        repo: "ADMIN_CodeLx",
        description: "The admin dashboard for managing CodeLX courses, users, and platform content.",
        problem: "Giving the CodeLX team a central place to manage the platform's content and users.",
        tech: ["React", "Node.js"],
        category: "tools",
        status: "Active",
        demo: null
    },
    {
        id: "cash-manager",
        name: "Cash Manager",
        repo: "cash-manager",
        description: "A lightweight cash and expense management tool for tracking day-to-day spending.",
        problem: "Keeping simple, fast records of daily cash flow.",
        tech: ["JavaScript"],
        category: "finance",
        status: "Experimental",
        demo: null
    }
].filter(project => !EXCLUDED_REPO_KEYWORDS.some(keyword =>
    project.repo.toLowerCase().includes(keyword) || project.name.toLowerCase().includes(keyword)
));

// Featured project ids shown in the "Featured Projects" grid, in priority order.
const FEATURED_PROJECT_IDS = [
    "codelx-platform",
    "codelx-discipline-rank",
    "money-mind-pro",
    "codelx-music",
    "ai-mode",
    "student-admin-platform"
];

document.addEventListener('DOMContentLoaded', () => {
    
    // Check if libraries are loaded
    const hasThree = typeof THREE !== 'undefined';
    const hasGSAP = typeof gsap !== 'undefined';

    // Register GSAP ScrollTrigger if available
    if (hasGSAP && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    /* --- 1. HUD LIVE SYSTEM TIME --- */
    function updateHUDTime() {
        const hudTimeEl = document.getElementById('hud-live-time');
        if (hudTimeEl) {
            const now = new Date();
            const timeStr = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
            hudTimeEl.textContent = timeStr;
        }
    }
    updateHUDTime();
    setInterval(updateHUDTime, 1000);

    /* --- ANIMATE MOTIVATION TICKER (LOOPING ENHANCED SYSTEM) --- */
    const motivationEl = document.getElementById('motivation-ticker');
    if (motivationEl) {
        const motivationLines = [
            "\"No connections. No funding. No shortcuts. Just a laptop, a dream, and an obsession to build something that matters.\" — MOHIM DAS // The future belongs to builders.",
            "\"They ignored the beginner. They laughed at the dream. They doubted the vision. Now the vision is becoming reality.\" — MOHIM DAS // Building today what others will use tomorrow.",
            "\"While others were waiting for opportunities, I was creating them.\" — MOHIM DAS // Every line of code is a step closer to the future.",
            "\"They said I was too young. So I decided to let my work speak louder than my age.\" — MOHIM DAS 🚀 // The mission is bigger than the obstacles."
        ];
        
        let lineIdx = 0;
        let charIdx = 0;
        let isDeleting = false;
        
        function tickMotivation() {
            const currentLine = motivationLines[lineIdx];
            
            if (isDeleting) {
                charIdx--;
            } else {
                charIdx++;
            }
            
            motivationEl.textContent = currentLine.substring(0, charIdx);
            
            let speed = isDeleting ? 15 : 30;
            
            if (!isDeleting && charIdx === currentLine.length) {
                speed = 5000; // Pause at full line for 5 seconds
                isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                lineIdx = (lineIdx + 1) % motivationLines.length;
                speed = 800; // Pause before typing next line
            }
            
            setTimeout(tickMotivation, speed);
        }
        // Start typing after loader closes
        setTimeout(tickMotivation, 2500);
    }

    /* --- 2. DUAL-RING CUSTOM CURSOR --- */
    const cursor = document.getElementById('custom-cursor');
    const cursorDot = document.getElementById('custom-cursor-dot');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Instant cursor dot tracking
        if (cursorDot) {
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        }
    });

    // Interpolated cursor outer ring tracking for smooth trailing
    if (cursor) {
        function updateCursorOuter() {
            // GSAP-like manual interpolation if GSAP is not running
            const dx = mouseX - currentX;
            const dy = mouseY - currentY;
            currentX += dx * 0.15;
            currentY += dy * 0.15;
            
            cursor.style.left = `${currentX}px`;
            cursor.style.top = `${currentY}px`;
            
            requestAnimationFrame(updateCursorOuter);
        }
        updateCursorOuter();
    }

    // Hover detection for interactive items
    const interactiveSelectors = 'a, button, input, textarea, .project-card, .social-icon-box, .nav-link, .achievement-badge';
    function attachCursorHovers() {
        const elements = document.querySelectorAll(interactiveSelectors);
        elements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('hovered-link');
            });
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('hovered-link');
            });
        });
    }
    attachCursorHovers();

    /* --- 3. CINEMATIC ENTRANCE LOADER --- */
    const loaderEl = document.getElementById('loader');
    const percentageEl = document.getElementById('loader-percentage');
    const logoContainerEl = document.querySelector('.loader-logo-container');
    
    let loadCount = 0;
    
    function runSimulatedLoader() {
        const interval = setInterval(() => {
            // Dynamic loading increments
            const step = Math.floor(Math.random() * 8) + 2;
            loadCount = Math.min(100, loadCount + step);
            
            if (percentageEl) {
                percentageEl.textContent = `${loadCount.toString().padStart(2, '0')}%`;
            }
            
            // Show Logo reveal halfway
            if (loadCount >= 60 && logoContainerEl) {
                logoContainerEl.style.opacity = '1';
                logoContainerEl.style.transform = 'translateY(0)';
            }
            
            if (loadCount >= 100) {
                clearInterval(interval);
                setTimeout(closeLoaderOverlay, 600);
            }
        }, 80);
    }
    runSimulatedLoader();

    function closeLoaderOverlay() {
        if (!loaderEl) return;
        
        const panelLeft = document.querySelector('.panel-left');
        const panelRight = document.querySelector('.panel-right');
        
        // Animate panels split open using GSAP
        if (hasGSAP) {
            gsap.timeline({
                onComplete: () => {
                    loaderEl.style.display = 'none';
                    // Trigger entrance animations for Hero Section
                    triggerHeroAnimations();
                }
            })
            .to('.loader-hud-container', { duration: 0.5, opacity: 0, scale: 0.9, ease: 'power2.in' })
            .to(panelLeft, { duration: 1, x: '-100%', ease: 'power3.inOut' }, '-=0.2')
            .to(panelRight, { duration: 1, x: '100%', ease: 'power3.inOut' }, '-=1');
        } else {
            // Fallback without GSAP
            panelLeft.style.transform = 'translateX(-100%)';
            panelRight.style.transform = 'translateX(100%)';
            loaderEl.style.opacity = '0';
            setTimeout(() => {
                loaderEl.style.display = 'none';
            }, 1000);
        }
    }

    /* --- 4. HERO SECTION ENTRANCE ANIMATIONS --- */
    function triggerHeroAnimations() {
        if (!hasGSAP) return;
        
        // Setup initial states
        gsap.set('.hero-bg-image', { opacity: 0, scale: 1.05 });
        gsap.set('.animate-fade', { opacity: 0, y: 20 });
        gsap.set('.animate-title', { opacity: 0, x: -50 });
        gsap.set('.animate-subtitle', { opacity: 0, x: -30 });
        gsap.set('.animate-portrait', { opacity: 0, scale: 0.9, rotateY: 15 });
        
        const tl = gsap.timeline();
        tl.to('.hero-bg-image', { duration: 1.8, opacity: 1, scale: 1, ease: 'power2.out' })
          .to('.animate-title', { duration: 0.8, opacity: 1, x: 0, ease: 'power3.out' }, '-=1.4')
          .to('.animate-subtitle', { duration: 0.6, opacity: 1, x: 0, ease: 'power3.out' }, '-=0.4')
          .to('.animate-fade', { duration: 0.6, opacity: 1, y: 0, stagger: 0.15, ease: 'power2.out' }, '-=0.3')
          .to('.animate-portrait', { duration: 1, opacity: 1, scale: 1, rotateY: 0, ease: 'power4.out' }, '-=0.8')
          .from('.floating-element', { duration: 1, opacity: 0, stagger: 0.1, y: 30, ease: 'back.out(1.7)' }, '-=0.5')
          .from('.hud-header', { duration: 0.6, opacity: 0, y: -20, ease: 'power2.out' }, '-=0.8');
    }

    /* --- 5. DYNAMIC TYPING TERMINAL TEXT --- */
    const typingTexts = [
        "Developer.",
        "Builder.",
        "Founder.",
        "Explorer.",
        "Future AI Engineer."
    ];
    
    const typingSpan = document.getElementById('typing-text');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        if (!typingSpan) return;
        
        const currentText = typingTexts[textIndex];
        
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }
        
        typingSpan.textContent = currentText.substring(0, charIndex);
        
        let typeSpeed = isDeleting ? 40 : 80;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at full word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            typeSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    setTimeout(typeEffect, 2000); // Wait for loader

    /* --- 6. FLOATING HUD DEPTH (PARALLAX EFFECT) --- */
    window.addEventListener('mousemove', (e) => {
        const floatEls = document.querySelectorAll('.floating-element');
        const xOffset = (window.innerWidth / 2 - e.clientX) * 0.03;
        const yOffset = (window.innerHeight / 2 - e.clientY) * 0.03;
        
        floatEls.forEach(el => {
            const depth = parseFloat(el.getAttribute('data-depth')) || 0.3;
            const moveX = xOffset * depth * 10;
            const moveY = yOffset * depth * 10;
            el.style.transform = `translate(${moveX}px, ${moveY}px) translateY(${Math.sin(Date.now() * 0.0015 + depth * 10) * 8}px)`;
        });
    });

    /* --- 7. THREE.JS STARFIELD BACKGROUND --- */
    if (hasThree) {
        initStarfieldBackground();
    }
    
    function initStarfieldBackground() {
        const canvas = document.getElementById('bg-canvas');
        if (!canvas) return;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 1;
        
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Resize Handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
        
        // Particles setup
        const particleCount = 800;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = [];
        
        for (let i = 0; i < particleCount; i++) {
            // Position
            positions[i * 3] = (Math.random() - 0.5) * 5;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
            
            // Velocity
            velocities.push({
                x: (Math.random() - 0.5) * 0.002,
                y: (Math.random() - 0.5) * 0.002,
                z: (Math.random() - 0.5) * 0.002
            });
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        // Glowing red particle material
        const material = new THREE.PointsMaterial({
            color: new THREE.Color(0xff3333),
            size: 0.008,
            transparent: true,
            opacity: 0.6,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
        
        const starPoints = new THREE.Points(geometry, material);
        scene.add(starPoints);
        
        // Interactive Mouse Position coordinates
        let targetX = 0;
        let targetY = 0;
        
        window.addEventListener('mousemove', (e) => {
            targetX = (e.clientX - window.innerWidth / 2) * 0.0003;
            targetY = (e.clientY - window.innerHeight / 2) * 0.0003;
        });
        
        // Render loop
        function animate() {
            requestAnimationFrame(animate);
            
            // Subtle rotation
            starPoints.rotation.y += 0.0005;
            starPoints.rotation.x += 0.0002;
            
            // Follow mouse slightly
            starPoints.rotation.y += (targetX - starPoints.rotation.y) * 0.05;
            starPoints.rotation.x += (targetY - starPoints.rotation.x) * 0.05;
            
            const posAttr = geometry.getAttribute('position');
            const arr = posAttr.array;
            
            // Move particles slowly in random directions
            for (let i = 0; i < particleCount; i++) {
                arr[i * 3] += velocities[i].x;
                arr[i * 3 + 1] += velocities[i].y;
                arr[i * 3 + 2] += velocities[i].z;
                
                // Boundary check
                if (Math.abs(arr[i * 3]) > 2.5) velocities[i].x *= -1;
                if (Math.abs(arr[i * 3 + 1]) > 2.5) velocities[i].y *= -1;
                if (Math.abs(arr[i * 3 + 2]) > 2.5) velocities[i].z *= -1;
            }
            
            posAttr.needsUpdate = true;
            renderer.render(scene, camera);
        }
        animate();
    }

    /* --- 8. THREE.JS 3D SCI-FI WIREFRAME GLOBE --- */
    if (hasThree) {
        initThreeGlobe();
    }
    
    function initThreeGlobe() {
        const container = document.getElementById('canvas3d-container');
        if (!container) return;
        
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 1, 100);
        camera.position.z = 22;
        
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);
        
        // Resizing
        const resizeObserver = new ResizeObserver(() => {
            const w = container.clientWidth;
            const h = container.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        });
        resizeObserver.observe(container);
        
        // 1. Globe wireframe geometry
        const globeGroup = new THREE.Group();
        scene.add(globeGroup);
        
        const globeGeo = new THREE.SphereGeometry(6, 30, 30);
        const globeMat = new THREE.MeshBasicMaterial({
            color: 0x111115,
            transparent: true,
            opacity: 0.8
        });
        const globeMesh = new THREE.Mesh(globeGeo, globeMat);
        globeGroup.add(globeMesh);
        
        // 2. Wireframe grid contours
        const wireframe = new THREE.WireframeGeometry(globeGeo);
        const lineMat = new THREE.LineBasicMaterial({
            color: 0xff3333,
            transparent: true,
            opacity: 0.15
        });
        const lines = new THREE.LineSegments(wireframe, lineMat);
        globeGroup.add(lines);
        
        // 3. Latitude & longitude ring lines
        const ringsGroup = new THREE.Group();
        globeGroup.add(ringsGroup);
        
        for (let i = -5; i <= 5; i++) {
            const rad = 6 * Math.cos((i * 15 * Math.PI) / 180);
            const y = 6 * Math.sin((i * 15 * Math.PI) / 180);
            const ringGeo = new THREE.BufferGeometry();
            const points = [];
            
            for (let j = 0; j <= 64; j++) {
                const theta = (j * 2 * Math.PI) / 64;
                points.push(new THREE.Vector3(rad * Math.cos(theta), y, rad * Math.sin(theta)));
            }
            ringGeo.setFromPoints(points);
            
            const ringLineMat = new THREE.LineBasicMaterial({
                color: 0xff3333,
                transparent: true,
                opacity: 0.2
            });
            const ringLine = new THREE.Line(ringGeo, ringLineMat);
            ringsGroup.add(ringLine);
        }

        // Helper to convert lat/lon to 3D Cartesian coordinates
        function latLonToVector3(lat, lon, radius) {
            const phi = (90 - lat) * (Math.PI / 180);
            const theta = (lon + 180) * (Math.PI / 180);
            
            return new THREE.Vector3(
                -radius * Math.sin(phi) * Math.sin(theta),
                radius * Math.cos(phi),
                radius * Math.sin(phi) * Math.cos(theta)
            );
        }
        
        // Cities Data
        const cities = {
            Kolkata: { lat: 22.5726, lon: 88.3639, name: "Kolkata, IN", size: 0.18, color: 0xff3333 },
            SiliconValley: { lat: 37.7749, lon: -122.4194, name: "Silicon Valley, US", size: 0.08, color: 0xffffff },
            London: { lat: 51.5074, lon: -0.1278, name: "London, UK", size: 0.08, color: 0xffffff },
            Singapore: { lat: 1.3521, lon: 103.8198, name: "Singapore, SG", size: 0.08, color: 0xffffff },
            Dubai: { lat: 25.2048, lon: 55.2708, name: "Dubai, UAE", size: 0.08, color: 0xffffff },
            Tokyo: { lat: 35.6762, lon: 139.6503, name: "Tokyo, JP", size: 0.08, color: 0xffffff }
        };
        
        const pins = [];
        
        // Place Pins on Globe
        Object.keys(cities).forEach(key => {
            const city = cities[key];
            const pos = latLonToVector3(city.lat, city.lon, 6);
            
            const pinGeo = new THREE.SphereGeometry(city.size, 16, 16);
            const pinMat = new THREE.MeshBasicMaterial({
                color: city.color,
                transparent: true,
                opacity: 0.9
            });
            const pinMesh = new THREE.Mesh(pinGeo, pinMat);
            pinMesh.position.copy(pos);
            globeGroup.add(pinMesh);
            
            pins.push(pinMesh);
        });

        // 4. Bezier curve connections from Kolkata to others
        const curvesGroup = new THREE.Group();
        globeGroup.add(curvesGroup);
        const flightPackets = [];
        
        const kolkataPos = latLonToVector3(cities.Kolkata.lat, cities.Kolkata.lon, 6);
        
        Object.keys(cities).forEach(key => {
            if (key === 'Kolkata') return;
            const targetPos = latLonToVector3(cities[key].lat, cities[key].lon, 6);
            
            // Calculate height control point
            const mid = new THREE.Vector3().addVectors(kolkataPos, targetPos).multiplyScalar(0.5);
            const dist = kolkataPos.distanceTo(targetPos);
            // Push control point outwards along normal from globe center
            const midNormalized = mid.clone().normalize();
            const controlPoint = midNormalized.multiplyScalar(6 + dist * 0.25);
            
            // Bezier Curve
            const curve = new THREE.QuadraticBezierCurve3(kolkataPos, controlPoint, targetPos);
            const curvePoints = curve.getPoints(50);
            const curveGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
            
            const curveMat = new THREE.LineBasicMaterial({
                color: 0xff3333,
                transparent: true,
                opacity: 0.3
            });
            const curveLine = new THREE.Line(curveGeo, curveMat);
            curvesGroup.add(curveLine);
            
            // Add a data packet particle flowing along curve
            const packetGeo = new THREE.SphereGeometry(0.06, 8, 8);
            const packetMat = new THREE.MeshBasicMaterial({
                color: 0xff3333,
                transparent: true,
                opacity: 0.9
            });
            const packetMesh = new THREE.Mesh(packetGeo, packetMat);
            globeGroup.add(packetMesh);
            
            flightPackets.push({
                mesh: packetMesh,
                curve: curve,
                progress: Math.random() // Start at random progress point
            });
        });
        
        // Initial rotation to show Kolkata
        globeGroup.rotation.y = -1.2;
        globeGroup.rotation.x = 0.35;
        
        let mouseOnGlobe = false;
        let prevMouseX = 0;
        let prevMouseY = 0;
        
        container.addEventListener('mouseenter', () => mouseOnGlobe = true);
        container.addEventListener('mouseleave', () => mouseOnGlobe = false);
        
        // Drag rotation support
        let isDragging = false;
        container.addEventListener('mousedown', (e) => {
            isDragging = true;
            prevMouseX = e.clientX;
            prevMouseY = e.clientY;
        });
        
        window.addEventListener('mouseup', () => isDragging = false);
        
        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaX = e.clientX - prevMouseX;
                const deltaY = e.clientY - prevMouseY;
                
                globeGroup.rotation.y += deltaX * 0.005;
                globeGroup.rotation.x += deltaY * 0.005;
                
                prevMouseX = e.clientX;
                prevMouseY = e.clientY;
            }
        });
        
        // Render Loop
        function draw() {
            requestAnimationFrame(draw);
            
            // Auto-rotate if not interacting
            if (!mouseOnGlobe && !isDragging) {
                globeGroup.rotation.y += 0.0018;
            }
            
            // Animate flying data packets along Bezier curves
            flightPackets.forEach(packet => {
                packet.progress += 0.008;
                if (packet.progress > 1) packet.progress = 0;
                
                const pos = packet.curve.getPointAt(packet.progress);
                packet.mesh.position.copy(pos);
            });
            
            // Pulse the Kolkata marker scale
            const time = Date.now() * 0.003;
            const pulseScale = 1 + Math.sin(time) * 0.15;
            pins[0].scale.set(pulseScale, pulseScale, pulseScale);
            
            renderer.render(scene, camera);
        }
        draw();
    }

    /* --- 9. 3D CARD TILT EFFECT ON MOUSE HOVER --- */
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position inside element
            const y = e.clientY - rect.top;  // y position inside element
            
            const width = rect.width;
            const height = rect.height;
            
            // Calculate tilt degrees (-10 to 10 deg)
            const rotateX = -10 * ((y - height / 2) / (height / 2));
            const rotateY = 10 * ((x - width / 2) / (width / 2));
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            
            // Dynamic lens shine reflection mapping
            const glow = card.querySelector('.card-glow, .badge-glow');
            if (glow) {
                glow.style.top = `${y - 75}px`;
                glow.style.left = `${x - 75}px`;
                glow.style.opacity = '0.9';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            
            const glow = card.querySelector('.card-glow, .badge-glow');
            if (glow) {
                glow.style.opacity = '0.4';
                glow.style.top = '-75px';
                glow.style.left = 'unset';
                glow.style.right = '-75px';
            }
        });
    });

    /* --- 10. GSAP SCROLLTRIGGER PROGRESS TIMELINE & METRICS --- */
    if (hasGSAP) {
        
        // 1. Navbar active page indicator highlighting
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        sections.forEach(sec => {
            const id = sec.getAttribute('id');
            ScrollTrigger.create({
                trigger: sec,
                start: 'top 40%',
                end: 'bottom 40%',
                onEnter: () => activateNavLink(id),
                onEnterBack: () => activateNavLink(id)
            });
        });
        
        function activateNavLink(id) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
        
        // 2. Global page scrolling header progress indicator
        gsap.to('.scroll-progress-indicator', {
            width: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true
            }
        });
        
        // 3. About section grid reveal
        gsap.from('.about-card', {
            duration: 0.8,
            opacity: 0,
            y: 40,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#about',
                start: 'top 75%'
            }
        });
        
        // 4. Vision statement filling bars indicator
        gsap.utils.toArray('.v-fill').forEach(bar => {
            const width = bar.style.width;
            gsap.set(bar, { width: '0%' });
            
            gsap.to(bar, {
                width: width,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.vision-graph-container',
                    start: 'top 80%'
                }
            });
        });

        // 5. Timeline line filling scroll animation
        gsap.to('.timeline-progress-bar', {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: '.timeline-container',
                start: 'top 20%',
                end: 'bottom 80%',
                scrub: true
            }
        });
        
        // 6. Timeline cards slide-in triggers
        const timelineItems = gsap.utils.toArray('.animate-timeline');
        timelineItems.forEach(item => {
            const card = item.querySelector('.timeline-card');
            const isLeft = item.classList.contains('left');
            
            // Set initial offscreen positions
            gsap.set(card, { opacity: 0, x: isLeft ? -50 : 50 });
            
            gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: 'top 70%',
                    onEnter: () => item.classList.add('active-item')
                }
            })
            .to(card, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power2.out'
            })
            .call(() => {
                // Animate progress circles inside cards if any
                const circleProgress = card.querySelector('.metric-progress');
                const percentContainer = card.querySelector('.metric-circle');
                
                if (circleProgress && percentContainer) {
                    const targetPercent = parseFloat(percentContainer.getAttribute('data-target'));
                    // Circle circumference = 2 * PI * r = 2 * 3.14 * 15.9155 = 100
                    gsap.to(circleProgress, {
                        strokeDasharray: `${targetPercent}, 100`,
                        duration: 1.5,
                        ease: 'power2.out'
                    });
                }
            });
        });
        
        // 7. Projects section stagger cards
        gsap.from('.project-card', {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#projects',
                start: 'top 70%'
            }
        });

        // 8. Achievements grid badges slide-in
        gsap.from('.achievement-badge', {
            opacity: 0,
            scale: 0.8,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.5)',
            scrollTrigger: {
                trigger: '#achievements',
                start: 'top 75%'
            }
        });
        
        // 9. Skills progress bar widths fill
        gsap.from('.skill-fill', {
            width: '0%',
            duration: 1.2,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.skills-list',
                start: 'top 80%'
            }
        });
        
        // 10. Skills soft progress rings circles fill
        gsap.utils.toArray('.circle-fill').forEach(circle => {
            const dashArray = circle.getAttribute('stroke-dasharray');
            circle.setAttribute('stroke-dasharray', '0, 100');
            
            gsap.to(circle, {
                attribute: { 'stroke-dasharray': dashArray },
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.skills-circle-grid',
                    start: 'top 85%'
                }
            });
        });

        // 11. CodeLX roadmap nodes and tracks scroll triggers
        gsap.to('.roadmap-fill', {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: '.roadmap-wrapper',
                start: 'top 60%',
                end: 'bottom 40%',
                scrub: true
            }
        });
        
        gsap.from('.roadmap-node', {
            opacity: 0,
            x: 30,
            stagger: 0.2,
            duration: 0.6,
            scrollTrigger: {
                trigger: '.roadmap-wrapper',
                start: 'top 70%'
            }
        });

    }

    /* --- 11. PROJECTS CARD DYNAMIC CANVAS BACKGROUND PARTICLES --- */
    const projectCanvases = document.querySelectorAll('.canvas-project-particles');
    projectCanvases.forEach(container => {
        const type = parseInt(container.getAttribute('data-type')) || 1;
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        container.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        let width = canvas.width = container.clientWidth;
        let height = canvas.height = container.clientHeight;
        
        // Resize listener
        window.addEventListener('resize', () => {
            if (container.clientWidth > 0) {
                width = canvas.width = container.clientWidth;
                height = canvas.height = container.clientHeight;
            }
        });
        
        const particles = [];
        const count = 18;
        
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 2 + 1,
                // Different project colors
                color: type === 1 ? 'rgba(255, 51, 51, 0.2)' : type === 2 ? 'rgba(0, 255, 204, 0.15)' : 'rgba(255, 255, 255, 0.15)'
            });
        }
        
        function render() {
            ctx.clearRect(0, 0, width, height);
            
            // Draw floating tech particle nodes
            particles.forEach((p, idx) => {
                p.x += p.vx;
                p.y += p.vy;
                
                // Wrap boundaries
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
                
                // Draw connecting lines between nearby points
                for (let j = idx + 1; j < count; j++) {
                    const p2 = particles[j];
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                    if (dist < 60) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = type === 1 ? `rgba(255, 51, 51, ${0.08 * (1 - dist/60)})` : `rgba(255, 255, 255, ${0.05 * (1 - dist/60)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(render);
        }
        render();
    });

    /* --- 12. MOBILE HUD NAVIGATION TOGGLING --- */
    const mobileToggle = document.querySelector('.mobile-hud-toggle');
    const hudNav = document.querySelector('.hud-nav');
    const navLinksList = document.querySelectorAll('.nav-link');
    
    if (mobileToggle && hudNav) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('open');
            hudNav.classList.toggle('open');
            
            // Disable scroll when menu is open
            if (hudNav.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
        
        navLinksList.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('open');
                hudNav.classList.remove('open');
                document.body.style.overflow = 'auto';
            });
        });
    }

    /* --- 13. PREMIUM GLASSMORPHIC CONTACT FORM (AJAX via FormSubmit) --- */
    const contactForm = document.getElementById('hud-contact-form');
    if (contactForm) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnHTML = submitBtn ? submitBtn.innerHTML : '';
        const statusEl = document.getElementById('form-submit-status');
        const successOverlay = document.getElementById('form-success-overlay');
        const errorOverlay = document.getElementById('form-error-overlay');
        const mailtoLink = document.getElementById('mailto-fallback');
        let isSubmitting = false;

        // Wire up mailto fallback + form action from central config
        if (mailtoLink) {
            mailtoLink.textContent = SITE_CONFIG.FORMSUBMIT_EMAIL;
            mailtoLink.href = `mailto:${SITE_CONFIG.FORMSUBMIT_EMAIL}`;
        }
        contactForm.action = `https://formsubmit.co/ajax/${SITE_CONFIG.FORMSUBMIT_EMAIL}`;
        contactForm.setAttribute('method', 'POST');

        function clearFieldErrors() {
            contactForm.querySelectorAll('.form-error-msg').forEach(el => el.textContent = '');
            contactForm.querySelectorAll('input, textarea').forEach(el => el.classList.remove('field-invalid'));
        }

        function showFieldError(fieldName, message) {
            const field = contactForm.querySelector(`[name="${fieldName}"]`);
            const errorEl = contactForm.querySelector(`.form-error-msg[data-error-for="${fieldName}"]`);
            if (field) field.classList.add('field-invalid');
            if (errorEl) errorEl.textContent = message;
        }

        function validateForm(data) {
            clearFieldErrors();
            let valid = true;

            if (!data.name || data.name.trim().length < 2) {
                showFieldError('name', 'Please enter your name.');
                valid = false;
            }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!data.email || !emailPattern.test(data.email.trim())) {
                showFieldError('email', 'Please enter a valid email address.');
                valid = false;
            }
            if (!data.subject || data.subject.trim().length < 2) {
                showFieldError('subject', 'Please add a subject.');
                valid = false;
            }
            if (!data.message || data.message.trim().length < 5) {
                showFieldError('message', 'Message is too short.');
                valid = false;
            }
            return valid;
        }

        function resetOverlays() {
            if (successOverlay) successOverlay.classList.remove('active');
            if (errorOverlay) errorOverlay.classList.remove('active');
        }

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (isSubmitting) return; // Prevent accidental multiple submissions

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            // Honeypot: if filled, silently drop (likely a bot)
            if (data._honey) return;

            if (!validateForm(data)) {
                if (statusEl) statusEl.textContent = 'Please fix the highlighted fields.';
                return;
            }

            isSubmitting = true;
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'ENCRYPTING PACKETS...';
            }
            if (statusEl) statusEl.textContent = '';
            resetOverlays();

            try {
                if (submitBtn) submitBtn.innerHTML = 'TRANSMITTING PACKETS...';

                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    headers: { 'Accept': 'application/json' },
                    body: formData
                });

                if (!response.ok) throw new Error('Network response was not ok');

                if (successOverlay) successOverlay.classList.add('active');
                if (statusEl) statusEl.textContent = 'Message sent successfully.';
                contactForm.reset();
            } catch (err) {
                if (errorOverlay) errorOverlay.classList.add('active');
                if (statusEl) statusEl.textContent = 'Transmission failed. Please try again or email me directly.';
            } finally {
                isSubmitting = false;
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnHTML;
                }
            }
        });

        const successCloseBtn = document.getElementById('form-success-close');
        if (successCloseBtn) successCloseBtn.addEventListener('click', resetOverlays);
        const errorCloseBtn = document.getElementById('form-error-close');
        if (errorCloseBtn) errorCloseBtn.addEventListener('click', resetOverlays);
    }

    /* --- 14. OUTRO LOGO CANVAS: CODELX logo reveal --- */
    initOutroLogoReveal();
    
    function initOutroLogoReveal() {
        const canvas = document.getElementById('outro-logo-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const container = canvas.parentElement;
        
        let width = canvas.width = container.clientWidth;
        let height = canvas.height = container.clientHeight;
        
        window.addEventListener('resize', () => {
            if (container.clientWidth > 0) {
                width = canvas.width = container.clientWidth;
                height = canvas.height = container.clientHeight;
            }
        });
        
        const dots = [];
        
        // Define letters pattern nodes representing "CodeLX" text outline
        // Coordinates normalized between 0-1 (we'll scale them in canvas coordinates)
        const codeLXOutline = [
            // C
            {x: 0.15, y: 0.35}, {x: 0.13, y: 0.4}, {x: 0.12, y: 0.45}, {x: 0.12, y: 0.5}, {x: 0.12, y: 0.55}, {x: 0.13, y: 0.6}, {x: 0.15, y: 0.65},
            {x: 0.18, y: 0.7}, {x: 0.22, y: 0.72}, {x: 0.26, y: 0.72}, {x: 0.29, y: 0.7},
            {x: 0.18, y: 0.3}, {x: 0.22, y: 0.28}, {x: 0.26, y: 0.28}, {x: 0.29, y: 0.3},
            
            // o
            {x: 0.34, y: 0.45}, {x: 0.33, y: 0.5}, {x: 0.33, y: 0.55}, {x: 0.34, y: 0.6}, {x: 0.36, y: 0.65}, {x: 0.4, y: 0.67}, {x: 0.44, y: 0.65},
            {x: 0.46, y: 0.6}, {x: 0.47, y: 0.55}, {x: 0.47, y: 0.5}, {x: 0.46, y: 0.45}, {x: 0.44, y: 0.4}, {x: 0.4, y: 0.38}, {x: 0.36, y: 0.4},
            
            // d
            {x: 0.52, y: 0.45}, {x: 0.51, y: 0.5}, {x: 0.51, y: 0.55}, {x: 0.52, y: 0.6}, {x: 0.54, y: 0.65}, {x: 0.58, y: 0.67}, {x: 0.61, y: 0.65},
            {x: 0.62, y: 0.6}, {x: 0.62, y: 0.55}, {x: 0.62, y: 0.5}, {x: 0.62, y: 0.45}, {x: 0.62, y: 0.4}, {x: 0.62, y: 0.35}, {x: 0.62, y: 0.3}, {x: 0.62, y: 0.25}, {x: 0.62, y: 0.2},
            {x: 0.58, y: 0.38}, {x: 0.54, y: 0.4},
            
            // e
            {x: 0.67, y: 0.5}, {x: 0.71, y: 0.5}, {x: 0.74, y: 0.5}, {x: 0.75, y: 0.47}, {x: 0.74, y: 0.42}, {x: 0.72, y: 0.39}, {x: 0.69, y: 0.39}, {x: 0.67, y: 0.42},
            {x: 0.66, y: 0.47}, {x: 0.66, y: 0.52}, {x: 0.67, y: 0.57}, {x: 0.69, y: 0.62}, {x: 0.72, y: 0.64}, {x: 0.75, y: 0.64},
            
            // L
            {x: 0.8, y: 0.2}, {x: 0.8, y: 0.25}, {x: 0.8, y: 0.3}, {x: 0.8, y: 0.35}, {x: 0.8, y: 0.4}, {x: 0.8, y: 0.45}, {x: 0.8, y: 0.5}, {x: 0.8, y: 0.55}, {x: 0.8, y: 0.60}, {x: 0.8, y: 0.65},
            {x: 0.82, y: 0.65}, {x: 0.84, y: 0.65}, {x: 0.86, y: 0.65},
            
            // X
            {x: 0.9, y: 0.35}, {x: 0.91, y: 0.39}, {x: 0.93, y: 0.44}, {x: 0.95, y: 0.49}, {x: 0.97, y: 0.54}, {x: 0.98, y: 0.59}, {x: 1.0, y: 0.65},
            {x: 0.9, y: 0.65}, {x: 0.92, y: 0.60}, {x: 0.93, y: 0.55}, {x: 0.96, y: 0.45}, {x: 0.98, y: 0.40}, {x: 1.0, y: 0.35}
        ];
        
        // Spawn particles
        const particleCount = codeLXOutline.length * 4;
        
        for (let i = 0; i < particleCount; i++) {
            // Pick a target outline coordinate
            const outlinePointIndex = i % codeLXOutline.length;
            const targetPoint = codeLXOutline[outlinePointIndex];
            
            dots.push({
                // Start scattered
                x: Math.random() * width,
                y: Math.random() * height,
                // Target coordinates
                tx: targetPoint.x,
                ty: targetPoint.y,
                vx: 0,
                vy: 0,
                radius: Math.random() * 1.5 + 1,
                // Color variation
                color: Math.random() > 0.45 ? '#ff3333' : '#ffffff',
                originX: 0,
                originY: 0
            });
        }
        
        let mouseInCanvas = false;
        let cMouseX = 0;
        let cMouseY = 0;
        
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            cMouseX = e.clientX - rect.left;
            cMouseY = e.clientY - rect.top;
            mouseInCanvas = true;
        });
        canvas.addEventListener('mouseleave', () => {
            mouseInCanvas = false;
        });
        
        let scrollTriggered = false;
        
        if (hasGSAP) {
            ScrollTrigger.create({
                trigger: '.outro-section',
                start: 'top 50%',
                onEnter: () => scrollTriggered = true
            });
        } else {
            scrollTriggered = true; // Fallback
        }
        
        function renderOutro() {
            ctx.clearRect(0, 0, width, height);
            
            const textWidth = Math.min(width * 0.7, 450);
            const textHeight = 120;
            const startX = (width - textWidth) / 2;
            const startY = (height - textHeight) / 2;
            
            dots.forEach(d => {
                // Scale target coordinate to current canvas size
                // Offset target coordinate so that L/X coordinates are mapped properly
                d.originX = startX + d.tx * textWidth - (textWidth * 0.1);
                d.originY = startY + d.ty * textHeight;
                
                if (scrollTriggered) {
                    // Converge towards targets (flocking particles)
                    const dx = d.originX - d.x;
                    const dy = d.originY - d.y;
                    
                    // Simple spring physics convergence
                    d.vx += dx * 0.003;
                    d.vy += dy * 0.003;
                    
                    d.vx *= 0.92;
                    d.vy *= 0.92;
                    
                    // React to mouse cursor repulsion
                    if (mouseInCanvas) {
                        const mDist = Math.hypot(d.x - cMouseX, d.y - cMouseY);
                        if (mDist < 45) {
                            const angle = Math.atan2(d.y - cMouseY, d.x - cMouseX);
                            const force = (45 - mDist) * 0.15;
                            d.vx += Math.cos(angle) * force;
                            d.vy += Math.sin(angle) * force;
                        }
                    }
                } else {
                    // Drift randomly before trigger
                    d.vx += (Math.random() - 0.5) * 0.05;
                    d.vy += (Math.random() - 0.5) * 0.05;
                    d.vx *= 0.98;
                    d.vy *= 0.98;
                }
                
                d.x += d.vx;
                d.y += d.vy;
                
                // Draw particle node
                ctx.beginPath();
                ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
                ctx.fillStyle = d.color;
                
                // Add soft neon drop shadow glow to red logo points
                if (d.color === '#ff3333') {
                    ctx.shadowBlur = 4;
                    ctx.shadowColor = '#ff3333';
                } else {
                    ctx.shadowBlur = 0;
                }
                
                ctx.fill();
            });
            
            // Clear shadow settings
            ctx.shadowBlur = 0;
            
            requestAnimationFrame(renderOutro);
        }
        renderOutro();
    }

    /* --- 15. PROJECT EXPLORER: render, search, filter, modal --- */
    function slugToTitle(str) {
        return str.replace(/[-_]/g, ' ');
    }

    function buildTechTags(tech) {
        return tech.map(t => `<span>${t}</span>`).join('');
    }

    function projectCardHTML(project, index) {
        const num = String(index + 1).padStart(2, '0');
        const repoUrl = `https://github.com/${SITE_CONFIG.GITHUB_USERNAME}/${project.repo}`;
        return `
            <div class="project-card glass-card tilt-card explorer-card" data-category="${project.category}" data-name="${project.name.toLowerCase()}" data-id="${project.id}" tabindex="0" role="button" aria-label="View details for ${project.name}">
                <div class="project-card-inner">
                    <div class="card-glow"></div>
                    <div class="project-visual">
                        <div class="project-overlay">
                            <div class="project-tech-tags">${buildTechTags(project.tech)}</div>
                            <div class="preview-btn-container">
                                <a href="${repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary sm-btn" onclick="event.stopPropagation();">
                                    View on GitHub <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                            </div>
                        </div>
                        <div class="project-img-placeholder">
                            <i class="fa-solid fa-cube proj-icon"></i>
                            <div class="proj-grid-overlay"></div>
                        </div>
                    </div>
                    <div class="project-content">
                        <span class="project-num">PROJECT_${num} //</span>
                        <span class="project-status-badge status-${project.status.toLowerCase().replace(/\s+/g, '-')}">${project.status}</span>
                        <h3 class="project-title">${project.name}</h3>
                        <p class="project-description">${project.description}</p>
                    </div>
                </div>
            </div>`;
    }

    function renderFeaturedGrid() {
        const grid = document.getElementById('featured-projects-grid');
        if (!grid) return;
        const featured = FEATURED_PROJECT_IDS
            .map(id => PROJECT_DATA.find(p => p.id === id))
            .filter(Boolean);
        grid.innerHTML = featured.map((p, i) => projectCardHTML(p, i)).join('');
    }

    let explorerState = { filter: 'all', query: '' };

    function renderExplorerGrid() {
        const grid = document.getElementById('explorer-grid');
        const counter = document.getElementById('explorer-count');
        const emptyState = document.getElementById('explorer-empty-state');
        if (!grid) return;

        const filtered = PROJECT_DATA.filter(p => {
            const matchesFilter = explorerState.filter === 'all' || p.category === explorerState.filter;
            const matchesQuery = !explorerState.query ||
                p.name.toLowerCase().includes(explorerState.query) ||
                p.description.toLowerCase().includes(explorerState.query) ||
                p.tech.join(' ').toLowerCase().includes(explorerState.query);
            return matchesFilter && matchesQuery;
        });

        grid.innerHTML = filtered.map((p, i) => projectCardHTML(p, i)).join('');
        if (counter) counter.textContent = filtered.length;
        if (emptyState) emptyState.hidden = filtered.length !== 0;

        // Re-attach tilt effect + click-to-open-modal for freshly rendered cards
        attachExplorerCardEvents();
    }

    function openProjectModal(project) {
        const overlay = document.getElementById('project-modal-overlay');
        const body = document.getElementById('project-modal-body');
        if (!overlay || !body) return;
        const repoUrl = `https://github.com/${SITE_CONFIG.GITHUB_USERNAME}/${project.repo}`;

        body.innerHTML = `
            <span class="project-modal-category">${project.category.toUpperCase()}</span>
            <h3 id="project-modal-title">${project.name}</h3>
            <p class="project-modal-desc">${project.description}</p>
            <div class="project-modal-row">
                <span class="project-modal-label">Problem Solved</span>
                <p>${project.problem}</p>
            </div>
            <div class="project-modal-row">
                <span class="project-modal-label">Technologies</span>
                <div class="project-tech-tags">${buildTechTags(project.tech)}</div>
            </div>
            <div class="project-modal-row">
                <span class="project-modal-label">Status</span>
                <p>${project.status}</p>
            </div>
            <div class="project-modal-actions">
                <a href="${repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary sm-btn">
                    <i class="fa-brands fa-github"></i> View Repository
                </a>
                ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary sm-btn">Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
            </div>
        `;
        overlay.hidden = false;
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        const overlay = document.getElementById('project-modal-overlay');
        if (!overlay) return;
        overlay.hidden = true;
        document.body.style.overflow = 'auto';
    }

    function attachExplorerCardEvents() {
        document.querySelectorAll('.explorer-card').forEach(card => {
            card.addEventListener('click', () => {
                const project = PROJECT_DATA.find(p => p.id === card.dataset.id);
                if (project) openProjectModal(project);
            });
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const project = PROJECT_DATA.find(p => p.id === card.dataset.id);
                    if (project) openProjectModal(project);
                }
            });
        });
    }

    renderFeaturedGrid();
    renderExplorerGrid();

    const projectModalClose = document.getElementById('project-modal-close');
    if (projectModalClose) projectModalClose.addEventListener('click', closeProjectModal);
    const projectModalOverlay = document.getElementById('project-modal-overlay');
    if (projectModalOverlay) {
        projectModalOverlay.addEventListener('click', (e) => {
            if (e.target === projectModalOverlay) closeProjectModal();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeProjectModal();
    });

    // Search input (debounced)
    const searchInput = document.getElementById('project-search-input');
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                explorerState.query = e.target.value.trim().toLowerCase();
                renderExplorerGrid();
            }, 200);
        });
    }

    // Category filter chips
    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            explorerState.filter = chip.dataset.filter;
            renderExplorerGrid();
        });
    });

    /* --- 16. ANIMATED STAT COUNTERS ("WHO I AM" section) --- */
    const statEls = document.querySelectorAll('[data-count-to]');
    if (statEls.length) {
        const animateCount = (el) => {
            const target = parseInt(el.dataset.countTo, 10) || 0;
            let current = 0;
            const duration = 1200;
            const stepTime = Math.max(Math.floor(duration / Math.max(target, 1)), 16);
            const timer = setInterval(() => {
                current += 1;
                el.textContent = current;
                if (current >= target) clearInterval(timer);
            }, stepTime);
        };

        if ('IntersectionObserver' in window) {
            const statObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCount(entry.target);
                        statObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            statEls.forEach(el => statObserver.observe(el));
        } else {
            statEls.forEach(animateCount);
        }
    }
});
