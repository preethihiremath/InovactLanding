import { makeStyles} from '@material-ui/core/styles';

export default  makeStyles({
    container: {
        background: '#ECF4FF',
        width:'100%',
        marginTop: "150px",
        marginBottom:"70px",
        padding:'70px 0px 100px 0px',
        '@media screen and (max-width :900px)':{
        paddingY: "50px",
        marginTop: '50px'
        }
      },

      webtitle:{
        fontSize: '50px',
        fontWeight: 400,
        display:'flex',
        justifyContent:'center',       
        textAlign:'center',
        '@media screen and (max-width :900px)':{
          fontSize: '30px',
          fontWeight: 450,
        }
      },
   
      grid :{
        display:'grid',
        width:'100%',
        gridTemplateColumns: 'repeat(3, 1fr)',
        marginTop:"40px",
        padding:'10px 30px 10px 30px',
       
        '@media screen and (max-width :900px)':{
          gridTemplateColumns: 'repeat(1, 1fr)',
         
        }
      },
      card: {
        display: 'flex',
        flexDirection: 'row',
        textAlign:'center',
        '@media screen and (max-width :900px)':{
          textAlign: 'left',
          flexDirection:'column'
        }
      },
      iconBox: {
        flexShrink: 0,
        fontSize: '40px',
        letterSpacing: 'heading',
        margin: '0px 20px 0px 30px',
        '@media screen and (max-width :900px)':{
          display:'none'
        }
      },
      iconBox2 :{
        display:'none',
        position:'relative',
        top:'15px',
        right:'12px',
        fontSize: '10px',
        '@media screen and (max-width :900px)':{
          display:'block'
        },
    },
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
    },
    description: {
      fontSize: '16px',
      fontWeight:300,
      textAlign:'left',
      '@media screen and (max-width :900px)':{
    margin:'10px 30px',
      },
    },
  });
  
  