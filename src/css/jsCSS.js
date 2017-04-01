module.exports={
  //home
  //styles for home component
  home:{
    jumbatron:{
      backgroundColor: "rgba(69,0,91,0.6)",
      border: "4px solid #A20000"
    }
  },
  //NAV
  //Navigation stuff for the navbar
  nav:{
    linkDecoration:{
      textDecoration: "none"
    }
  },
  //CALCULATOR
  //styles for the Calculator component
  calculator:{
    buttons:{
      width:"100%",
      border: "3px solid rgb(173, 16, 16)",
      margin:"2px"
    }
  },
  //TWITCH
  //all the styles for the twitch component including online and offline
  twitch:{
    well:{
      backgroundColor: "rgb(117, 117, 117)",
      border: "4px solid rgb(203, 147, 13)"
    },
    link:{
      textDecoration: "none"
    },
    featured:{
      color: "rgb(74, 186, 37)",
      margin:"0 0 10px 0"
    },
    featBox:{
      online:{
        margin: "6px 0 6px 0",
        width: "100%",
        backgroundColor:"rgb(120, 53, 161)",
        borderRadius:"25px",
        border:"9px solid rgb(119, 181, 27)",
        display:"flex",
        justifyContent:"flex-start",
        textDecoration:"none"
      },
      offline:{
        margin: "6px 0 6px 0",
        width: "100%",
        backgroundColor:"rgb(120, 53, 161)",
        borderRadius:"25px",
        border:"9px solid rgb(177, 58, 58)",
        display:"flex",
        justifyContent:"flex-start",
        textDecoration:"none"
      },
      grey:{
        margin: "6px 0 6px 0",
        width: "100%",
        backgroundColor:"rgb(120, 53, 161)",
        borderRadius:"25px",
        border:"9px solid rgb(56, 56, 56)"
      }
    },
    boxInfo:{
      a:{
        textDecoration:"none"
      },
      box:{
        width:"75%",
        display: "flex",
        justifyContent:"center",
        flexDirection:"column",

      },
      username:{
        color:"rgb(66, 143, 207)",
        fontSize: "24px",
        fontWeight:"800",
        margin:"0"
      },
      status:{
        color:"rgb(221, 160, 26)",
        fontSize: "14px",
        fontWeight:"400",
        margin:"5px 0 0 0"
      }
    },
    picThatFits:{
      height:"55px",
      width:"25%",
      borderRadius:"15px 0 0 15px"
    }
  },
  //SEARCH BOX
  searchBox:{
    well:{
      backgroundColor: "rgb(73, 107, 207)",
      border: "4px solid rgb(191, 47, 47)"
    },
    link:{
      textDecoration:"none"
    },
    featBox:{
      online:{
        margin: "6px 0 6px 0",
        width: "100%",
        backgroundColor:"rgb(120, 53, 161)",
        borderRadius:"25px",
        border:"9px solid rgb(119, 181, 27)",
        display:"flex",
        justifyContent:"flex-start",
        textDecoration:"none"
      },
      offline:{
        margin: "6px 0 6px 0",
        width: "100%",
        backgroundColor:"rgb(120, 53, 161)",
        borderRadius:"25px",
        border:"9px solid rgb(177, 58, 58)",
        display:"flex",
        justifyContent:"flex-start",
        textDecoration:"none"
      },
      grey:{
        margin: "6px 0 6px 0",
        width: "100%",
        backgroundColor:"rgb(120, 53, 161)",
        borderRadius:"25px",
        border:"9px solid rgb(56, 56, 56)"
      },
      boxInfo:{
        box:{
          width:"75%",
          display: "flex",
          justifyContent:"center",
          flexDirection:"column"
        },
        username:{
          color:"rgb(66, 143, 207)",
          fontSize: "24px",
          fontWeight:"800",
          margin:"0"
        },
        status:{
          color:"rgb(221, 160, 26)",
          fontSize: "14px",
          fontWeight:"400",
          margin:"5px 0 0 0"
        }
      },
      picThatFits:{
        height:"110px",
        width:"25%",
        borderRadius:"15px 0 0 15px"
      }
    }
  }
}
