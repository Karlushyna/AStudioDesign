import React from 'react';
import { Link } from 'react-scroll';
import styles from './Hero.module.scss';
import { FaAngleRight } from 'react-icons/fa';

const Hero = () => {
	return (
		<section name="home" className={styles.section}>
			<div className="container">
					<h1 className={styles.title}>DESIGN STUDIO</h1>
					<div className={styles.text_container}>
						<ul className={styles.text_list}>
						<li className={styles.text}>
						welcome to
						</li>
						<li className={styles.text}>
						A.PRODUCTION
						</li>
						</ul>
					</div>
					
					{/* <div className={styles.circle}>
      <div className={styles.text_rotate}>Hello, World!</div>
    </div> */}
					<Link to='about' smooth={true} duration={500}>
					<button className={styles.button}  type="button">
						
						<FaAngleRight style={{width: 9, height: 18 }}/>
						Read More
					</button>
					</Link>
				</div>
		</section>
	);
};
export default Hero;
