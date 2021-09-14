import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AreaChart from "./components/AreaChart";
import { Paper } from "@material-ui/core";
import { fetchCountries } from "./api";


import covidLogo from "./covidLogo.svg";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: "50px auto",
    minWidth: "50%",
  },
}));

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("turkey");

  useEffect(() => {
    const fetchCountriesData = async () => {
      const countries = await fetchCountries();
      setCountries(countries);
    };

    fetchCountriesData();
  }, []);

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container>
          <img
            src={covidLogo}
            alt="Covid19 Logo"
            style={{
              marginTop: 20,
              width: 100,
              height: 100,
            }}
          />
          <FormControl className={classes.formControl}>
            <Select
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            >
              {countries.map((country) => (
                <MenuItem value={country.Slug}>{country.Country}</MenuItem>
              ))}
            </Select>
          </FormControl>


          {/*Chart */}
          <Grid item xs={12}>
          <Paper>
          <AreaChart country={country} />
          </Paper>
            
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default App;
