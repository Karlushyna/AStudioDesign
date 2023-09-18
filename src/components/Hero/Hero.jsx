import React from 'react';
import styles from './Hero.module.scss';
import { FaAngleRight } from 'react-icons/fa';

const Hero = () => {
	return (
		<section name="home" className={styles.section}>
			<div className="container">
					<h1 className={styles.title}>A STUDIO</h1>
					<h2 className={styles.text}>
						DESIGN PRODUCTION
					</h2>
					{/* <div className={styles.circle}>
      <div className={styles.text_rotate}>Hello, World!</div>
    </div> */}
					<button className={styles.button} type="button">
						<FaAngleRight style={{width: 9, height: 18 }}/>
						Read More
					</button>
				</div>
		</section>
	);
};
export default Hero;
