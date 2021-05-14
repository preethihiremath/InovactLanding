import { Box, Typography } from '@material-ui/core';
import { rgba } from 'polished';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	featureItem: {
		backgroundColor: '#fff',
		boxShadow: '0px 25px 100px rgba(69, 88, 157, 0.08)',
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		padding: '0px 60px',
		textAlign: 'center',
		minHeight: '200px',
		maxWidth: '250px',
		marginTop: '10px',
		marginRight: '10px',
		'@media screen and (max-width:1200px )': {
			minHeight: '10%',
			maxWidth: '10%',
			padding: '0px 10px',
		},
		'&:nth-child(7)': {
			position: 'relative',
			left: '110px',
			'@media screen and (max-width:600px )': {
				left: '60px',
			},
		},
		'&:nth-child(8)': {
			marginLeft: '10px',
			position: 'relative',
			left: '100px',
			'@media screen and (max-width:600px )': {
				left: '30px',
			},
		},
	},
	value: {
		fontWeight: 700,
		fontSize: 40,
		lineHeight: 1.83,
		letterSpacing: '-1.5px',
		'@media screen and (max-width:600px )': {
			fontSize: '18px',
		},
	},
	title: {
		fontSize: '16px',
		lineHeight: 1.62,
		letterSpacing: '-0.2px',
		color: rgba('#0F2137', 0.7),
		'@media screen and (max-width:600px )': {
			fontSize: '8px',
		},
	},
});

const Feature = ({ feature }) => {
	const styles = useStyles();
	return (
		<Box className={styles.featureItem}>
			<Typography
				as='p'
				className={styles.value}
				style={{ color: feature?.color }}
			>
				{feature.value}
			</Typography>
			<Typography as='p' className={styles.title}>
				{feature.title}
			</Typography>
		</Box>
	);
};
export default Feature;
