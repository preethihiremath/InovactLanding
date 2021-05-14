import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../components/LandingSections/About/About';
import Achivements from '../components/LandingSections/Achivement/Achivement';
import logo from './components/LandingSections/assets/img/logo.png';
import { Banner } from '../components/LandingSections/Banner/Banner';
import Features from '../components/LandingSections/Features/Features';
import Footer from '../components/LandingSections/Footer/Footer';
import Goals from '../components/LandingSections/Goals/Goals';
import '../components/LandingSections/Navbar/styles.css';
import Testimonial from '../components/LandingSections/Testimonials/Testimonials';

const getDimensions = (ele: any) => {
	const { height } = ele.getBoundingClientRect();
	const offsetTop = ele.offsetTop;
	const offsetBottom = offsetTop + height;
	return {
		height,
		offsetTop,
		offsetBottom,
	};
};

const scrollTo = (ele: any) => {
	ele.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
};
const Landing: React.FC = ({ match, url }: any): JSX.Element => {
	const [visibleSection, setVisibleSection] = useState<Boolean | string>();

	const headerRef = useRef<HTMLElement>(null);
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const serviceRef = useRef(null);
	const testimonialRef = useRef(null);
	const contactRef = useRef(null);
	const sectionRefs = [
		{ section: 'home', ref: homeRef },
		{ section: 'about', ref: aboutRef },
		{ section: 'service', ref: serviceRef },
		{ section: 'testimonial', ref: testimonialRef },
		{ section: 'contact', ref: contactRef },
	];

	useEffect(() => {
		const handleScroll = () => {
			const { height: headerHeight } = getDimensions(headerRef.current);
			const scrollPosition = window.scrollY + headerHeight;
			const selected = sectionRefs.find(({ section, ref }): any => {
				const ele = ref.current;
				if (ele) {
					const { offsetBottom, offsetTop } = getDimensions(ele);
					return scrollPosition > offsetTop && scrollPosition < offsetBottom;
				}
			});

			if (selected && selected.section !== visibleSection) {
				setVisibleSection(selected.section);
			} else if (!selected && visibleSection) {
				setVisibleSection(undefined);
			}
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	window.addEventListener('scroll', function () {
		let header: HTMLElement | null;
		header = document.querySelector('header');
		if (header === null) {
			alert('oops');
		} else {
			header.classList.toggle('sticky', window.scrollY > 0);
		}
	});

	function toggle() {
		let header = document.querySelector('header')!;
		header.classList.toggle('active');
	}

	return (
		<div>
			<header className='header' ref={headerRef} id='header'>
				<Link to='/' className='logo'>
					<img src={logo} alt='Logo' />
					<span className='logoname'>Inovact</span>
				</Link>

				<ul>
					<li className='home'>
						<a
							className={`header_link ${
								visibleSection === 'home' ? 'selected' : ''
							}`}
							onClick={() => {
								scrollTo(homeRef.current);
								toggle();
							}}
							href='#home'
						>
							Home
						</a>
					</li>

					<li>
						<a
							className={`header_link ${
								visibleSection === 'about' ? 'selected' : ''
							}`}
							onClick={() => {
								scrollTo(aboutRef.current);
								toggle();
							}}
							href='#about'
						>
							About
						</a>
					</li>

					<li>
						<a
							className={`header_link ${
								visibleSection === 'service' ? 'selected' : ''
							}`}
							onClick={() => {
								scrollTo(serviceRef.current);
								toggle();
							}}
							href='#service'
						>
							Services
						</a>
					</li>
					<li>
						<a
							className={`header_link ${
								visibleSection === 'testimonial' ? 'selected' : ''
							}`}
							onClick={() => {
								scrollTo(testimonialRef.current);
								toggle();
							}}
							href='#testimonial'
						>
							Testimonials
						</a>
					</li>
					<li>
						<a
							className={`header_link ${
								visibleSection === 'contact' ? 'selected' : ''
							}`}
							onClick={() => {
								scrollTo(contactRef.current);
								toggle();
							}}
							href='#contact'
						>
							Contact
						</a>
					</li>

					<li>
						<Link
							to={{ pathname: match.url, search: '?login=true' }}
							onClick={toggle}
						>
							Login
						</Link>
					</li>

					<li>
						<Link to='/register' onClick={toggle}>
							SignUp
						</Link>
					</li>
				</ul>
				<div className='toggle' onClick={toggle} />
			</header>

			<section className='banner' id='home' ref={homeRef}>
				<Banner />
			</section>

			<section className='active' id='about' ref={aboutRef}>
				<About />
				<Goals />
			</section>

			<section className='achivement' id='service' ref={serviceRef}>
				<Features />
				<Achivements />
			</section>

			<section className='testimonial' id='testimonial' ref={testimonialRef}>
				<Testimonial />
			</section>

			<section id='contact' ref={contactRef}>
				<Footer />
			</section>
		</div>
	);
};

export default Landing;
