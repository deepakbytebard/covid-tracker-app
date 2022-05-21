import React, { useEffect } from "react";
import { FaVirus } from "react-icons/fa";
import { BsMap, BsSearch } from "react-icons/bs";
import { DiDigitalOcean } from "react-icons/di";
import { FiFlag } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { MdLocalHospital } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  getContinentsData,
  getCountryDataAccordingToContinent,
} from "../Redux/action";

const Content = () => {
  const { state } = useLocation();

  const dispatch = useDispatch();
  const continents = useSelector((state) => state.myReducer.continentData);
  const countryContinent = useSelector(
    (state) => state.myReducer.countryContinentData
  );
  // console.log(countryContinent);
  // console.log(continents, "===========");

  useEffect(() => {
    const loadContinentData = () => {
      dispatch(getContinentsData(state.payload));
    };
    loadContinentData();
    const loadCountryAccordingToContinent = () => {
      dispatch(getCountryDataAccordingToContinent());
    };
    loadCountryAccordingToContinent();
  }, [dispatch]);

  let navigate = useNavigate();

  function numDifferentiation(value) {
    var val = Math.abs(value);
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + " Cr";
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + " Lac";
    }
    return val;
  }
  console.log(numDifferentiation(-50000000));

  const { cases, deaths, countries, recovered, continent } = continents;
  // console.log(countries, "a;sdobv");

  let countryAccordingToContinent = countryContinent.filter(function (country) {
    return country.continent == continent;
  });

  // console.log(countryAccordingToContinent);

  //   console.log(
  //     countryAccordingToContinent?.map((e) => {
  //       const { country, countryInfo } = e;
  //       return countryInfo;
  //     }),
  //     "aosgufgbougr"
  //   );

  //   const countryInfo = countryAccordingToContinent?.map((e) => {
  //     const { countryInfo } = e;
  //     return countryInfo;
  //   });
  //   const flag = countryInfo?.map((e) => {
  //     const { flag } = e;
  //     return flag;
  //   });

  //   console.log(flag);

  return (
    <div className="main">
      <div className="sidenav">
        <div className="icon">
          <h1>
            <FaVirus />
          </h1>
        </div>

        <div className="icon-map">
          <h1>
            <BsMap />
          </h1>
          Map
        </div>

        <div className="icon">
          <h1>
            <MdOutlineDashboard />
          </h1>
          DashBoard
        </div>

        <div className="icon">
          <h1>
            <MdLocalHospital />
          </h1>
          Hospital
        </div>
      </div>
      <div className="container">
        <div className="topbar">
          <div>
            <h3>
              <FaVirus color="orange" size={30} /> CaronaVirus Covid-10 {continent + " "} 
              Cases
            </h3>
          </div>
          <div className="button">
            <button className="location">My location</button>
            <button className="donate">Donate</button>
          </div>
        </div>
        <div className="main-bottom">
          <div className="left-main">
            {/* {renderList} */}
            {/* { continents?.map((data)=>{ */}
            {/* const {id, deaths, recovered, updated} = data */}
            {/* return( */}
            <div className="row1">
              <div className="first">
                <button className="continent">
                  <Link to="/continent">
                    {" "}
                    <DiDigitalOcean /> {continent}
                  </Link>
                </button>
                <br />
                <button className="continent-country">
                  <Link to="/">
                    {" "}
                    <FiFlag /> Global
                  </Link>
                </button>
              </div>
              <div className="col ">
                <h4 className="confirmed">Total Confirmed</h4>
                <h3 className="confirmed-number">
                  {numDifferentiation(cases)}
                </h3>
                <div className="confirmed-virus">
                  <FaVirus color="red" />
                </div>
              </div>
              <div className="col ">
                <h4 className="confirmed">Total Deaths</h4>
                <h3 className="Death-number">{numDifferentiation(deaths)}</h3>
                <div className="confirmed-virus">
                  <FaVirus color="red" />
                </div>
              </div>
              <div className="col ">
                <h4 className="confirmed">Total Recovered</h4>
                <h3 className="recovered-number">
                  {numDifferentiation(recovered)}
                </h3>
                <div className="confirmed-virus">
                  <FaVirus color="red" />
                </div>
              </div>
            </div>
            {/* ) })} */}
            <div className="row2">
              <div className="left-row2">
                <div className="toprow">
                  <div className="left-toprow">
                    <h3>Confirmed cases by Countries of {continent}</h3>
                    <p>27 may 2021</p>
                  </div>
                  <div className="search">
                    <BsSearch />
                    <input
                      type="search"
                      className="search-text"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="world-image">
                  <img
                    className="world-img"
                    src="https://scitechdaily.com/images/COVID-19-Coronavirus-Map-March-19.jpg"
                  />
                </div>
              </div>
              <div className="right-row2">
                <h4>Total Confirmed</h4>
                <h5>{continent} Wise</h5>
                {/* { countries?.map((data)=>{
                            console.log(data,"sgbibgawrubjiwfb")
                        const {index, continent, cases} = data
                        return( */}


                <div className="scrollbar">
                              

                                    
                  {countryAccordingToContinent?.map((e) => {
                    const { country, active, countryInfo } = e;
                    
                    return (
                      <div
                        className="count-continential"
                        onClick={() => {
                          navigate('/country', { state: { payload: country } });
                        }}
                      >
                        
                        <div className="country">
                          <h6 className="country-name">
                            <img className="flag-img" src={countryInfo.flag} />
                            {country}
                           
                          </h6>
                        </div>
                        <h6>{numDifferentiation(active)}</h6>
                      </div>
                    );
                  })}
                
                </div>
              </div>
            </div>
          </div>
          <div className="right-main">
            <div className="first-img">
              <img
                className="first-img"
                src="https://fyi-online.com/wp-content/uploads/2021/01/129713-FYI-Oral-signs-of-COVID-19_V6.png"
              />
            </div>
            <h6> Confirmed (cumulative)</h6>
            <div className="second-img">
              <img
                className="second-img"
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/11A2C/production/_114963227_356632b3-6fef-4fe3-8f33-e5d456597143-1.png"
              />
            </div>
            <h6>Daily cases confirmed</h6>
            <div className="third-img">
              <img
                className="third-img"
                src="https://www.ifpri.org/sites/default/files/Blog/covid_figure1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
