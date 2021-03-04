import { useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  makeStyles,
  createStyles,
  Button,
  Typography,
} from "@material-ui/core";
import lanbrosLogotype from "../assets/lbrs_logotype_with_mascot.png";

const useStyles = makeStyles(() =>
  createStyles({
    jumboButton: {
      borderRadius: "0px",
      borderColor: "white",
      color: "white",
      "&:hover": {
        // beak color on logo is '#f59219',
        background: "white",
        color: "black",
      },
    },
  })
);

function Frontpage() {
  const classes = useStyles();

  const history = useHistory();
  const routeToGameservers = () => history.push("/gameservers");
  const routeToDiscord = () => {
    window.location.assign("http://discord.lanbros.net");
  };
  const routeToShop = () => {
    window.location.assign("https://shop.spreadshirt.se/lanbros/");
  };

  return (
    <Box mt={"20vh"}>
      <Grid container>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <img
            height="auto"
            width="100%"
            style={{ maxWidth: "600px" }}
            src={lanbrosLogotype}
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center", color: "white" }}>
          <Typography component="span" variant="body1">
            Vi spelar spel. Tillsammans.
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Box mt={5}>
            <Button
              onClick={routeToDiscord}
              style={{ marginRight: "5px" }}
              variant="outlined"
              size="large"
              className={classes.jumboButton}
            >
              Discord
            </Button>
            <Button
              onClick={routeToShop}
              style={{ marginRight: "5px" }}
              variant="outlined"
              size="large"
              className={classes.jumboButton}
            >
              Merch
            </Button>
{/*             <Button
              onClick={routeToGameservers}
              style={{ marginLeft: "5px" }}
              variant="outlined"
              size="large"
              className={classes.jumboButton}
            >
              Spelservrar
            </Button> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Frontpage;
