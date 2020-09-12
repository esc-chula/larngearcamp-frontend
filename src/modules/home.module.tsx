import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Button, Box, Grid, Avatar } from "@material-ui/core"
import { CoverComponent } from "../core/components/cover.component"
import { TimelineDisplay } from "../core/components/timeline.component";

const useStyle = makeStyles(theme => ({
  container: {
    marginLeft: '160px',
    marginRight: '160px'
  },
  halfWidth: {
    width: "calc(50% - 160px)"
  },
  textRight: {
    textAlign: "right",
  },
  rightDescription: {
    fontSize: "22px"
  },
  white: {
    color: "#FFFFFF"
  },
  logoImg: {
    width: "80px",
    height: "80px",
    marginRight: "20px"
  },
  vCenter: {
    verticalAlign: "middle",
  },
  grey: {
    color: "#828282"
  },
  inlineBlock: {
    display: "inline-block"
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
    color: theme.palette.primary.main
  }
}));

const HomeModule: React.FC = () => {
  const classes = useStyle();
  
  return (
    <>
      <CoverComponent />
      
      <Box textAlign="center">
        <Typography variant="h3">LARNGEAR CAMP 20th</Typography>
        <Typography variant="subtitle1">ค้นหาความเป็นวิศวกร ด้วยมือของคุณเอง</Typography>
        <Button variant="contained" color="primary"><b>Apply Now</b></Button>
      </Box>

      <div className={classes.container}>
          <Typography variant="h4" align="right">What is Larngear Camp?</Typography>
          <Grid container justify="flex-end">
            <Grid item sm={12} md={12} lg={9}>
              <Typography variant="body1" align="right"> 
                  ค่ายลานเกียร์เป็นค่ายที่จัดขึ้นในเดือนมกราคมของทุกปี โดยเปิดโอกาสให้นักเรียนระดับชั้น
            มัธยมศึกษาตอนปลายทั่วประเทศที่สนใจศึกษาต่อในสาขาวิศวกรรมศาสตร์ แต่ยังไม่มั่นใจ หรือมีข้อมูล
            ไม่เพียงพอได้เข้ามาสัมผัสการเรียนการสอนในวิชาปฏิบัติการจริงรวมไปถึงการทำกิจกรรมต่าง ๆ ที่สอดแทรก
            เนื้อหาเกี่ยวกับงานทางวิศวกรรม เพื่อเป็นข้อมูลประกอบการตัดสินใจในการเลือกศึกษาต่อในระดับอุดมศึกษา
              </Typography>
            </Grid>
          </Grid>
      </div>

      TODO
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className={classes.container}>
        <u><Typography variant="h3">คุณสมบัติผู้สมัคร</Typography></u>
        <QualificationDisplay
        data={[
          {description: 'กำลังศึกษาอยู่ในชั้นมัธยมศึกษาปีที่ 4 - 5 หรือ ปวช. ปีที่ 1-2', src: ''},
          {description: 'สามารถค้างคืนได้ที่คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ตลอดระยะเวลาจัดค่าย', src: ''},
          {description: 'ไม่ป่วยเป็นโรคติดต่อร้ายแรง', src: ''},
          {description: 'ไม่เคยเข้าร่วมค่ายลานเกียร์มาก่อน', src: ''}
        ]}/>
      </div>

      
      <Typography variant="h2" align="center">TIMELINE</Typography>
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

      <Box textAlign="center">
        <Typography variant="h3" className={classes.primaryAnnounce + ' kanit'}>รับสมัคร 18 กันยายน - 10 ตุลาคม 2563</Typography>
        <Button variant="contained" color="secondary">
            <Typography variant="subtitle1">สมัครค่ายลานเกียร์</Typography>
        </Button>
      </Box>

      <br></br>
      <br></br>
      <br></br>
    </>
  )
}


const QualificationDisplay: React.FC<{
  data: {description: string, src: string}[]
}> = (props) => {
  const classes = useStyle();

  const qulificationItem = (description: string, imgSrc: string) => 
    <div style={{display: "inline-flex"}}>
      <Avatar src={imgSrc}  className={classes.logoImg}></Avatar>
      <Grid container direction="column" justify="center">
        <Typography variant="body1" align="left" className='kanit'>
          {description}
        </Typography>
      </Grid>
    </div>;

  const colGrids = [];
  for (let i = 0; i < props.data.length; i+=2) {
    const ele1 = props.data[i]; 
    const ele2 = props.data[i+1];

    colGrids.push(
      <Grid container item direction="column" alignContent="center" xs={6} spacing={1} key={i}>
        {ele1 && <Grid item>{qulificationItem(ele1.description, ele1.src)}</Grid>}
        {ele2 && <Grid item>{qulificationItem(ele2.description, ele2.src)}</Grid>}
      </Grid>
    );
  }

  return (
    <Grid container>
      {colGrids}
    </Grid>
  )
};

export { HomeModule }
