import { makeStyles} from '@material-ui/core/styles';

export default  makeStyles({
    containerBox: {
         marginTop:'-100px',
         paddingTop:'50px',
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
        padding:' 0px 0px 0px 60px',
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
        paddingTop:'20px',
        fontWeight:'400',
        '@media screen and (max-width :1200px)':{
          fontSize: '30px',
          margin: '20px 10px 0 20px',
        },
      },
      webText:{
          margin: '10px 0 30px 0',
          paddingLeft:'30px',
          fontSize: '16px',
          alignItems: 'left',
          paddingTop:'20px',
          justifyContent: 'left',
          letterSpacing: '2'
      },
      webPoint :{
        fontSize: '16px',
        paddingTop:'10px',
        paddingLeft:'30px',
        textAlign:'left'
      },
      icon:{
        position:'relative',
        top:'6px'
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