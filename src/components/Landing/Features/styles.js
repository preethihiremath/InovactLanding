import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
	title: {
		fontSize: '40px',
		textAlign: 'center',
		fontWeight: '300',
		marginBottom: '50px',
		paddingTop: '50px',
		color: 'black',
		// fontFamily: 'poppins',
		'@media screen and (max-width:1200px )': {
			fontSize: '30px',
		},
	},
	social: {
		display: 'grid',
		margin: '30px',
		gridGap: '10px',
		gridTemplateColumns: 'repeat(2, 1fr)',
		'@media screen and (max-width:1200px )': {
			gridTemplateColumns: 'repeat(1, 1fr)',
		},
	},
	h4: {
		marginTop: '30px',
		marginBottom: '30px',
		marginLeft: '-40px',
	},
	p: {
		margin: 0,
		fontSize: ['14px', null, null, '12px'],
		color: 'heading_secondary',
		width: '100%',
		maxWidth: [null, null, null, null, '84%', '100%'],
		mx: [null, null, null, null, 'auto', '0'],
	},
	features: {
		pt: '140px',
		mt: '30px',
		height: 'auto',
	},
	grid1: {
		display: 'grid',
		justifyContent: 'center',
		marginTop: '30px',
		mx: '0px',
		ml: '60px',
		gridGap: '40px',
		position: 'relative',
		borderRight: '2px solid #DCDCDC',
		'@media screen and (max-width:1200px )': {
			top: '0px',
			left: '0px',
		},
		gridTemplateColumns: 'repeat(2, 1fr)',
		'@media screen and (max-width:800px)': {
			ml: ['0px'],
			border: 'none',
		},
	},

	grid2: {
		display: 'grid',
		flexWrap: 'wrap',
		justifyItems: 'center',
		marginTop: '30px',
		mx: '0px',
		ml: '60px',
		position: 'relative',
		gridGap: '40px',
		'@media screen and (max-width:1200px )': {
			marginTop: '0px',
			ml: '0px',
		},
		gridTemplateColumns: 'repeat(2, 1fr)',
	},
	featureCards: {
		'&:nth-child(2)': {
			position: 'relative',
			right: '25%',
			'@media screen and (max-width:1200px )': {
				right: '0%',
			},
		},
		'&:nth-child(4)': {
			position: 'relative',
			right: '25%',
			'@media screen and (max-width:1200px )': {
				right: '0%',
			},
		},
	},

	featureEachCard: {
		boxShadow: 'none',
	},
	featureCardsL: {
		'&:nth-child(3)': {
			position: 'relative',
			left: '50%',
			'@media screen and (max-width:600px )': {
				left: '30%',
			},
		},
	},
	featureTitle: {
		fontSize: '20px',
		fontWeight: '500',
		zIndex: '10',
		maxWidth: '200px',
		margin: '0 auto',
	},

	learningTitle: {
		fontSize: '30px',
		textAlign: 'center',
		marginBottom: '30px',
		fontWeight: '300',
		'@media screen and (max-width:600px )': {
			top: '0px',
			marginTop: '30px',
			marginBottom: '50px',
			fontSize: '24px',
		},
	},

	icon: {
		display: 'flex',
		width: '80px',
		height: '80px',
		marginLeft: 'auto',
		marginRight: 'auto',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '50%',
		background: '#0F4DA6',
		color: 'white',
		'@media screen and (max-width:600px )': {
			borderRadius: '40px',
		},
	},
});
