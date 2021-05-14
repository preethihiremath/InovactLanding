import React from 'react';
import { Box, Container, Grid, Card, Typography } from '@material-ui/core';
import { SOCIAL, LEARNING } from './features-data';
import useStyles from './styles.js';

const Features: React.FC = () => {
	const styles = useStyles();
	return (
		<section>
			<Box className={styles.features}>
				<Typography variant='h3' className={styles.title}>
					Our Exciting Features
				</Typography>
				<Container style={{ padding: '0px 20px' }}>
					<Grid className={styles.social}>
						<Container>
							<h2 className={styles.learningTitle}>
								Inovact
								<span
									style={{
										color: '#F94962',
										fontStyle: 'italic',
									}}
								>
									Social
								</span>
							</h2>

							<Grid className={`${styles.grid1}`}>
								{SOCIAL.map((feature) => (
									<Box className={`${styles.featureCards} `}>
										<Card className={`${styles.featureEachCard} `}>
											<Box className={`${styles.icon} `}>
												<img
													src={feature.icon}
													alt=''
													width='40px'
													height='40px'
												/>
											</Box>
											<p className={styles.featureTitle}>{feature.title}</p>
										</Card>
									</Box>
								))}
							</Grid>
						</Container>

						<Container>
							<h2 className={styles.learningTitle}>
								Inovact
								<span style={{ color: '#F94962', fontStyle: 'italic' }}>
									learning <span style={{ color: '#000' }}>&#38; </span>
									placements
								</span>
							</h2>
							<Grid className={`${styles.grid2}`}>
								{LEARNING.map((feature) => (
									<Box className={`${styles.featureCardsL}`}>
										<Card className={styles.featureEachCard}>
											<Box className={`${styles.icon} feature-icon`}>
												<img
													src={feature.icon}
													alt={feature.title}
													width='40'
												/>
											</Box>
											<Typography className={styles.featureTitle}>
												{feature.title}
											</Typography>
										</Card>
									</Box>
								))}
							</Grid>
						</Container>
					</Grid>
				</Container>
			</Box>
		</section>
	);
};

export default Features;
