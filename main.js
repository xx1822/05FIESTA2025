/* ----- ENHANCED PREMIUM STYLES ----- */
/* Base Improvements */
:root {
    --body-color: #f8f9fa;
    --color-white: #ffffff;
    --text-color-second: #2d3748;
    --text-color-third: #1e9fab;
    --first-color: #4f46e5;
    --first-color-hover: #4338ca;
    --second-color: #3b82f6;
    --third-color: #f59e0b;
    --first-shadow-color: rgba(0, 0, 0, 0.1);
    --box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

body {
    background: var(--body-color);
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--text-color-second);
    overflow-x: hidden;
}

/* ----- PREMIUM NAVIGATION BAR ----- */
nav {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    height: 90px;
    line-height: 90px;
}

.nav-link {
    position: relative;
    transition: var(--transition);
    font-weight: 600;
    color: var(--text-color-second);
}

.nav-link:hover {
    color: var(--first-color);
}

.active-link {
    color: var(--first-color);
}

.active-link::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -15px;
    left: 0;
    background: var(--first-color);
    border-radius: 3px;
}

/* ----- PREMIUM HERO SECTION ----- */
.featured-box {
    background: linear-gradient(135deg, rgba(239, 246, 255, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%);
}

.featured-text-card span {
    background: var(--first-color);
    color: white;
    padding: 6px 15px;
    border-radius: 30px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 14px;
    box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
}

.featured-name {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    background: linear-gradient(to right, var(--text-color-second), var(--text-color-third));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 20px 0;
}

.featured-text-info {
    font-size: 1.1rem;
    max-width: 600px;
    color: #4a5568;
}

.btn {
    padding: 12px 28px;
    border-radius: 50px;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: var(--transition);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.blue-btn {
    background: var(--first-color);
    color: white;
}

.blue-btn:hover {
    background: var(--first-color-hover);
    color: white;
}

.social_icons .icon {
    width: 45px;
    height: 45px;
    transition: var(--transition);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.social_icons .icon:hover {
    transform: translateY(-5px);
    color: var(--first-color);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* ----- PREMIUM IMAGE STYLING ----- */
.image {
    border: 8px solid white;
    box-shadow: var(--box-shadow);
    animation: imgFloat 7s ease-in-out infinite;
}

@keyframes imgFloat {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
        transform: translateY(-20px) rotate(5deg);
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
}

/* ----- PREMIUM SECTION STYLING ----- */
.section {
    padding: 100px 0;
}

.top-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    position: relative;
    display: inline-block;
    margin-bottom: 20px;
}

.top-header h1::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 4px;
    background: var(--first-color);
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
}

.top-header span {
    font-size: 1.1rem;
    color: #718096;
}

/* ----- PREMIUM ABOUT BOX ----- */
.about-info, .skills-box {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
}

.about-info:hover, .skills-box:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.about-info p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #4a5568;
}

/* ----- PREMIUM TEAMS SECTION ----- */
.teams-section {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: var(--box-shadow);
    margin: 40px auto;
}

.team {
    background: white;
    border-radius: 15px;
    padding: 25px;
    transition: var(--transition);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.03);
}

.team:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(79, 70, 229, 0.2);
}

.team img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 15px;
    transition: var(--transition);
}

.team:hover img {
    transform: scale(1.1);
}

.team h3 {
    font-size: 1.3rem;
    margin: 10px 0 5px;
    color: var(--text-color-second);
}

.team p {
    color: #718096;
    font-size: 0.95rem;
}

/* ----- PREMIUM COMMITTEE SECTION ----- */
.project-box {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    transition: var(--transition);
    box-shadow: var(--box-shadow);
    border: none;
}

.project-box img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border: 5px solid white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
}

.project-box:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.project-box:hover img {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.project-box h3 {
    font-size: 1.3rem;
    margin-top: 20px;
}

.project-box label {
    font-size: 0.95rem;
    color: #718096;
}

/* ----- PREMIUM CONTACT FORM ----- */
.contact-info {
    background: linear-gradient(135deg, var(--second-color) 0%, #2563eb 100%);
    color: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: var(--box-shadow);
}

.form-control {
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: var(--box-shadow);
}

.input-field, textarea {
    border: 2px solid #e2e8f0;
    transition: var(--transition);
    font-size: 1rem;
}

.input-field:focus, textarea:focus {
    border-color: var(--first-color);
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}

.form-button .btn {
    background: var(--first-color);
    color: white;
    width: 100%;
    padding: 15px;
    font-size: 1.1rem;
}

/* ----- PREMIUM FOOTER ----- */
footer {
    background: #1a202c;
    color: white;
    padding: 60px 0 30px;
}

.top-footer p {
    font-size: 2rem;
    font-weight: 700;
    color: white;
}

.footer_menu_list a {
    color: #cbd5e0;
    transition: var(--transition);
}

.footer_menu_list a:hover {
    color: var(--first-color);
}

.footer-social-icons .icon {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transition: var(--transition);
}

.footer-social-icons .icon:hover {
    background: var(--first-color);
    transform: translateY(-5px);
}

.bottom-footer {
    margin-top: 30px;
    color: #a0aec0;
    font-size: 0.9rem;
}

/* ----- ENHANCED RESPONSIVENESS ----- */
@media (max-width: 1200px) {
    .featured-name {
        font-size: 3rem;
    }
}

@media (max-width: 992px) {
    .featured-name {
        font-size: 2.5rem;
    }
    
    .team {
        width: calc(50% - 20px);
    }
    
    .project-box {
        width: calc(50% - 20px);
    }
}

@media (max-width: 768px) {
    nav {
        height: 80px;
        line-height: 80px;
        padding-inline: 5vw;
    }
    
    .featured-name {
        font-size: 2.2rem;
    }
    
    .featured-text, .featured-image {
        width: 100%;
        text-align: center;
    }
    
    .featured-text-btn {
        justify-content: center;
    }
    
    .social_icons {
        justify-content: center;
    }
    
    .team, .project-box {
        width: 100%;
    }
    
    .section {
        padding: 70px 0;
    }
}

@media (max-width: 576px) {
    .featured-name {
        font-size: 2rem;
    }
    
    .top-header h1 {
        font-size: 2rem;
    }
    
    .btn {
        padding: 10px 20px;
    }
    
    .about-info, .skills-box, .teams-section, .contact-info, .form-control {
        padding: 25px;
    }
    
    .footer-menu {
        flex-direction: column;
        align-items: center;
    }
    
    .footer_menu_list {
        margin: 10px 0;
    }
}

@media (max-width: 400px) {
    .featured-name {
        font-size: 1.8rem;
    }
    
    .featured-text-btn {
        flex-direction: column;
        gap: 15px;
    }
    
    .btn {
        width: 100%;
    }
}
