import { makeStyles} from '@material-ui/core/styles';

export default  makeStyles({
    containerBox: {
         marginTop:'-190px',
         paddingTop:'40px',
         display: 'flex',
         alignItems: 'center',
         flexDirection : 'row',
         marginBottom:'100px',
         justifyContent: ['flex-Start', null, null, 'space-between'],
         flexWrap: ['wrap', null, null, 'nowrap'],
         '@media screen and (max-width :700px)':{
          flexDirection : 'column',
         marginTop:'30px',
          marginBottom:'0px',
                  },
      },
      thumbnail: {
       position: 'relative',
       margin:' 0 50px 0px 0px',
      
      },
      img: {
        float: 'left',
        height: 'auto',
        width:'100%',
        padding:' 100px 0px 0px 60px',
        '@media screen and (max-width :700px)':{
          padding:'0px'
        }
      },
      contentBox:{
        margin:'30px',
        marginRight:'50px',
        textAlign:'left',
        '@media screen and (max-width :700px)':{
          marginRight:'30px',

        }
      },
      webTitle: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '50px',
        color: '#000',
        padding:'10px',
        margin: '20px 70px 0 70px',
        paddingTop:'0px',
        fontWeight:'400',
        '@media screen and (max-width :1200px)':{
          fontSize: '28px',
          margin: '20px 0 0 0',
        },
      },
      webText:{
          margin: '10px 0 30px 0',
          paddingLeft:'30px',
          fontSize: '18px',
          alignItems: 'left',
          paddingTop:'20px',
          justifyContent: 'left',
          letterSpacing: '2'
      },
      bottomArrow: {
        position: 'absolute',
        bottom: -185,
        left: '1%',
        display: ['none', null, null, null, null, null, null, 'block'],
        '@media screen and (max-width :1200px)':{
          display:'none'
        },
      },
});