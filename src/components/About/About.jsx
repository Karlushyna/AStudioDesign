import React from 'react';
import styles from './About.module.scss';
const About = () => {
	return (
		<section name='about' className={styles.section}>
			<div className={`${styles.box} ${styles.container}`}>
				<div className={styles.img}>
				</div>
				<div className={styles.description}>
					<p className={`${styles.text} ${styles.txt}`}>Who We Are</p>
					<h1 className={styles.title}>we believe in the power of design to transform ideas into captivating visual stories. We are a passionate team of creative minds dedicated to delivering innovative and visually stunning solutions. Explore our portfolio and discover how we can bring your ideas to life.</h1>
					<p className={styles.text}>
					As a leading graphic design studio with a relentless commitment to creativity and excellence. Our journey began with a simple idea: to make design accessible, engaging, and effective. 
					Since our inception, we've grown into a tight-knit team of talented designers who are passionate about what we do.
					Our mission is to craft design solutions that not only look incredible but also resonate with your audience. 
					We understand that great design goes beyond aesthetics; it's about conveying a message, telling a story, and evoking emotions. Whether it's branding, print, digital, or packaging design, we're here to make your vision a reality.
					</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</section>
	);
};

export default About;
