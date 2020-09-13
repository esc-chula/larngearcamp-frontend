import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Button, Box, Grid, Avatar } from "@material-ui/core"
import { CoverComponent } from "../core/components/cover.component"
import { TimelineDisplay } from "../core/components/timeline.component";

const pxToRem = (px: number) => `${px / 16}rem`;

const landingPageContainerStyle = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: '160px',
      marginRight: '160px'
    },
    marginLeft: '32px',
    marginRight: '32px'
  },
}));
const LandingPageContainer: React.FC = (props) => {
  const classes = landingPageContainerStyle();
  return (
    <div className={classes.container}>
      {props.children}
    </div>
  )
}

const useStyle = makeStyles(theme => ({
  white: {
    color: "#FFFFFF"
  },
  titleDisplayContainer: {
    marginTop: "80px"
  },
  timelineTitle: {
    marginBottom: "50px"
  },
  timelineCard: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    width: "max-content",
    margin: "auto",
    padding: "24px 36px 24px 36px",
    textAlign: "center"
  },
  primaryAnnounce: {
    color: theme.palette.primary.main,
    fontSize: pxToRem(52),
    lineHeight: pxToRem(78),
    margin: "0 0 32px 0",
    fontWeight: 500
  },
  subscribeButton: {
    width: "370px",
    height: "60px"
  },
  subscribeButtonText: {
    fontSize: pxToRem(28),
    fontWeight: 500,
    lineHeight: pxToRem(42),
  }
}));

const HomeModule: React.FC = () => {
  const classes = useStyle();
  
  return (
    <>
      <CoverComponent />
      
      <div className={classes.titleDisplayContainer}>
        <TitleDisplay></TitleDisplay>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <WhatIsLarnGear></WhatIsLarnGear>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      TODO
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <LandingPageContainer>
        <QualificationDisplay
        data={[
          {description: 'กำลังศึกษาอยู่ในชั้นมัธยมศึกษาปีที่ 4 - 5 หรือ ปวช. ปีที่ 1-2', src: ''},
          {description: 'สามารถค้างคืนได้ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ตลอดระยะเวลาจัดค่าย', src: ''},
          {description: 'ไม่ป่วยเป็นโรคติดต่อร้ายแรง', src: ''},
          {description: 'ไม่เคยเข้าร่วมค่ายลานเกียร์มาก่อน', src: ''}
        ]}/>
      </LandingPageContainer>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <Typography variant="h2" align="center" className={classes.timelineTitle}>TIMELINE</Typography>
      <TimelineDisplay
        includeFinalLine={true}
        label={[
          {left: '18 กันยายน - 10 ตุลาคม 2563', right: 'รับสมัคร'},
          {left: '24 ตุลาคม 2563', right: 'ประกาศผลผู้มีสิทธิ์สัมภาษณ์'},
          {left: '31 ตุลาคม 2563', right: 'สัมภาษณ์รอบกรุงเทพ'},
          {left: '2 - 8 พฤศจิกายน 2563', right: 'สัมภาษณ์รอบต่างจังหวัด'},
          {left: '14 พฤศจิกายน 2563', right: 'ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมค่าย'},
          {left: '15 พฤศจิกายน - 19 ธันวาคม 2563', right: 'ยืนยันสิทธิ์การเข้าร่วมค่าย'}
        ]}
      />
      <div className={classes.timelineCard}>
          <Typography variant="h6" className="kanit">ค่ายลานเกียร์ครั้งที่ 20</Typography>
          <Typography variant="subtitle1" className="kanit">8 - 11 มกราคม 2564</Typography>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Box textAlign="center">
        <h3 className={classes.primaryAnnounce + ' kanit'}>รับสมัคร 18 กันยายน - 10 ตุลาคม 2563</h3>
        <Button variant="contained" color="secondary" className={classes.subscribeButton}> 
            <Typography variant="subtitle1" className={classes.subscribeButtonText}>สมัครค่ายลานเกียร์</Typography>
        </Button>
      </Box>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  )
}

const titleDisplayStyle = makeStyles(theme => ({
  title: {
    fontSize: pxToRem(64),
    lineHeight: pxToRem(75),
    margin: "0 0 20px 0"
  },
  subtitle: {
    fontWeight: 200,
    lineHeight: pxToRem(42),
    margin: " 0 0 28px 0"
  },
  button: {
    width: "200px",
    height: "50px"
  },
  buttonText: {
    fontWeight: 600,
    fontSize: pxToRem(20),
    lineHeight: pxToRem(23),
  }
}));
const TitleDisplay: React.FC = () => {
  const classes = titleDisplayStyle();
  return (
    <Box textAlign="center">
      <h2 className={classes.title}>LARNGEAR CAMP 20th</h2>
      <Typography variant="subtitle1" className={classes.subtitle}>
        ค้นหาความเป็นวิศวกร ด้วยมือของคุณเอง
      </Typography>
      <Button variant="contained" color="primary" className={classes.button}>
        <p className={classes.buttonText}>Apply Now</p>
      </Button>
    </Box>
  );
};

const whatIsLarnGearStyle = makeStyles(theme => ({
  title: {
    marginBottom: "28px",
  },
  body: {
    fontSize: pxToRem(22),
    lineHeight: pxToRem(33)
  }
}));
const WhatIsLarnGear: React.FC = () => {
  const classes = whatIsLarnGearStyle();
  return (
    <LandingPageContainer>
      <Typography variant="h4" align="right" className={classes.title}>
        What is Larngear Camp?
      </Typography>
      <Grid container justify="flex-end">
        <Grid item sm={12} md={12} lg={9}>
          <Typography variant="body2" align="right" className={classes.body}> 
              ค่ายลานเกียร์เป็นค่ายที่จัดขึ้นในเดือนมกราคมของทุกปี โดยเปิดโอกาสให้นักเรียนระดับชั้น
        มัธยมศึกษาตอนปลายทั่วประเทศที่สนใจศึกษาต่อในสาขาวิศวกรรมศาสตร์ แต่ยังไม่มั่นใจ หรือมีข้อมูล
        ไม่เพียงพอได้เข้ามาสัมผัสการเรียนการสอนในวิชาปฏิบัติการจริงรวมไปถึงการทำกิจกรรมต่าง ๆ ที่สอดแทรก
        เนื้อหาเกี่ยวกับงานทางวิศวกรรม เพื่อเป็นข้อมูลประกอบการตัดสินใจในการเลือกศึกษาต่อในระดับอุดมศึกษา
          </Typography>
        </Grid>
      </Grid>
    </LandingPageContainer>
  )
}


const qualificationStyle = makeStyles(theme => ({
  title: {
    fontWeight: "normal",
    textDecoration: "underline",
    lineHeight: pxToRem(72),
    marginBottom: "40px"
  },
  description: {
    lineHeight: pxToRem(36),
  },
  logoImg: {
    width: "80px",
    height: "80px",
    marginRight: "20px"
  },
  secondCol: {
    [theme.breakpoints.up('lg')]: {
      alignContent: "center"
    },
    alignContent: "left"
  }
}))
const QualificationDisplay: React.FC<{
  data: {description: string, src: string}[]
}> = (props) => {
  const classes = qualificationStyle();

  const qulificationItem = (description: string, imgSrc: string) => 
    <div style={{display: "inline-flex"}}>
      <Avatar src={imgSrc}  className={classes.logoImg}></Avatar>
      <Grid container direction="column" justify="center">
        <Typography variant="body2" align="left" className={classes.description + ' kanit'}>
          {description}
        </Typography>
      </Grid>
    </div>;

  const colGrids = [];
  for (let i = 0; i < props.data.length; i+=2) {
    const ele1 = props.data[i]; 
    const ele2 = props.data[i+1];

    colGrids.push(
      <Grid container item direction="column" className={classes.secondCol} xs={12} md={12} lg={6} spacing={2} key={i}>
        {ele1 && <Grid item>{qulificationItem(ele1.description, ele1.src)}</Grid>}
        {ele2 && <Grid item>{qulificationItem(ele2.description, ele2.src)}</Grid>}
      </Grid>
    );
  }

  return (
    <>
      <Typography variant="h3" className={classes.title}>คุณสมบัติผู้สมัคร</Typography>
      <Grid container spacing={2}>
        {colGrids}
      </Grid>
    </>
  )
};

export { HomeModule }
