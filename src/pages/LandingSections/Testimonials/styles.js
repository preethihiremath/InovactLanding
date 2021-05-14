import { makeStyles} from '@material-ui/core/styles';

export default  makeStyles({
    testimonials :{
      marginTop:'40px',
      paddingTop:'30px',
    },

      carouselWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'flex-end',
        mt: '35px',
        px: '15px',
       
        '.carousel-container': {
          width: '100%',
          maxWidth: '100%',
          marginRight:'40px',
          '.react-multi-carousel-item': {
            transition: 'all 0.25s',
          },
          '.react-multi-carousel-item--active:nth-of-type(4n)': {
            opacity: '0.5',
            '@media screen and (max-width: 1200px)': {
              opacity: 1,
            },
          },
        },
      },
      reviewCard: {
        boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.1)',
        transition: 'all 0.3s',
        maxWidth:'400px',
        borderRadius: '15%',
        alignItems:'center',
        padding: '0px 30px 40px 40px',     
        background: 'white',
        textAlign: 'left',
        margin: '28px 15px 30px 15px',
        '&:hover': {
          boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.1)',
        },
     
      },
      footer:{
        display:'flex',
        justifyContent:'center',
      },
      webTitle:{
        marginTop:'60px',
         display:'flex',
         justifyContent:'center',
         fontWeight:'400',
         fontSize:'50px',
         '@media screen and (max-width: 600px)':{
          paddingTop:'0px',
          fontSize:'40px',
          fontWeight:'450',
          marginTop:'40px',
         }
      },
   
      name:{
        fontSize: '14px',
        fontWeight: 700,
        marginBottom: '22px',
        color: 'text',
        lineHeight: 1.6,
        display:'flex',
        justifyContent:'center',
        marginTop:'10px',
        '@media screen and (max-width: 600px)':{
        marginTop:['10px'],
        },
      },
      description: {
        marginTop:'60px',
        paddingTop:'40px',
        fontSize: '16px',
     
        lineHeight: 1.85,
      },
     ratings:{
       marginTop:'30px',
       marginRight:'40px',
     },
     

    });
  