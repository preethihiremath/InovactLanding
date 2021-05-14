import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
	container: {
		// margin: '30px',
		padding: '60px',
		'@media screen and (max-width:700px )': {
			margin: '0px',
			padding: '0px',
		},
	},
	leftContent: {
		display: 'grid',
		gridGap: '5px',
		margin: '30px',
		paddingLeft: '230px',
		paddingRight: '230px',
		gridTemplateColumns: 'repeat(3, 1fr)',
		'&:nth-child(3)': {
			marginLeft: '450px',
		},
		'@media screen and (max-width:1200px )': {
			paddingLeft: '40px',
			paddingRight: '0px',
		},
	},
	webTitle: {
		marginTop: '40px',
		marginBottom: '40px',
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
		fontWeight: '500',
		fontSize: '40px',
		'@media screen and (max-width: 600px)': {
			paddingTop: '0px',
			fontSize: '30px',
			fontWeight: '400',
			marginTop: '40px',
		},
	},
});
