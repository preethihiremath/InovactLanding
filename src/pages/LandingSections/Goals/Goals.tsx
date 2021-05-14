import { FC } from 'react';
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Box, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

const data = [
	{
		id: 1,
		text: 'Help students to expand their network with students , mentors and Investors.',
	},
	{
		id: 2,
		text: 'Enable students in developing latest tools and skills as per industry requirements through various technical training programs and placement training programs.',
	},
	{
		id: 3,
		text: 'Build a community inside engineering colleges which encourage students to develop their soft skills and hard skills.',
	},
];

const Goals: FC = () => {
	const styles = useStyles();
	return (
		<Box className={styles.container}>
			<Box>
				<h2 className={styles.webtitle}>What we want to do?</h2>
			</Box>

			<Grid className={styles.grid}>
				{data.map((item) => (
					<div className={styles.card} key={item.id}>
						<div className={styles.iconBox}>{`0${item.id}`}</div>

						<div className={styles.wrapper}>
							<Typography className={styles.description}>
								{/* <FiberManualRecordIcon className={styles.iconBox2} /> */}
								{item.text}
							</Typography>
						</div>
					</div>
				))}
			</Grid>
		</Box>
	);
};

export default Goals;
