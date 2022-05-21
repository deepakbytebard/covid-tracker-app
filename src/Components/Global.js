import React, { useEffect } from "react";
import { FaVirus } from "react-icons/fa";
import { BsMap, BsSearch } from "react-icons/bs";
import { DiDigitalOcean } from "react-icons/di";
import { MdOutlineDashboard } from "react-icons/md";
import { MdLocalHospital } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getWorldData, getGlobalData } from "../Redux/action";
import { Bar } from "react-chartjs-2";

const Global = () => {
  const dispatch = useDispatch();
  const globals = useSelector((state) => state.myReducer.globalData);
  const worlds = useSelector((state) => state.myReducer.worldData);

  console.log(globals, "===========");
  console.log(worlds, "worlds++++++++");

  useEffect(() => {
    const loadGlobaldata = () => {
      dispatch(getGlobalData());
    };
    loadGlobaldata();
    const loadWorldData = () => {
      dispatch(getWorldData());
    };
    loadWorldData();
  }, [dispatch]);

  useEffect(() => {}, [dispatch]);

  // console.log(globals,"continenoerwfja")
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

  const { deaths, recovered, active } = worlds;

  return (
    <div className="main">
      <div className="sidenav-global">
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
              <FaVirus color="orange" size={30} /> CaronaVirus Covid-10 Global
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
            {/* { globals?.map((data)=>{
                        const {id, deaths, recovered, active, continent} = data
                        return( */}
            <div className="row1-global">
              <div className="first-global">
                <button className="continent">
                  <Link to="/">
                    {" "}
                    <DiDigitalOcean /> Global
                  </Link>
                </button>
              </div>
              <div className="col-global ">
                <h4 className="confirmed">Total active</h4>
                <h3 className="confirmed-number">
                  {numDifferentiation(active)}
                </h3>
                <div className="confirmed-virus">
                  <FaVirus color="red" />
                </div>
              </div>
              <div className="col-global ">
                <h4 className="confirmed">Total Deaths</h4>
                <h3 className="Death-number">{numDifferentiation(deaths)}</h3>
                <div className="confirmed-virus">
                  <FaVirus color="red" />
                </div>
              </div>
              <div className="col-global ">
                <h4 className="confirmed"> Recovered</h4>
                <h3 className="recovered-number">
                  {numDifferentiation(recovered)}
                </h3>
                <div className="confirmed-virus">
                  <FaVirus color="red" />
                </div>
              </div>
            </div>
            {/* ) })}  */}
            <div className="row2">
              <div className="left-row2">
                <div className="toprow">
                  <div className="left-toprow">
                    <h3>Confirmed cases by Continents</h3>
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
                <h5>Continental Wise</h5>

                <div className="scrollbar">
                  {globals?.map((data) => {
                    const { id, continent, cases } = data;
                    return (
                      <div
                        className="count-continential"
                        onClick={() => {
                          navigate(`/continent`, {
                            state: { payload: continent },
                          });
                        }}
                      >
                        <h6 className="country-name">{continent}</h6>
                        <h6>{numDifferentiation(cases)}</h6>
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
              <Bar
                data={{
                  labels: ["deaths", "Active Case", "Recovered"],
                  datasets: [
                    {
                      //label
                      label: "Daily Cases",
                      data: [deaths, active, recovered],
                      backgroundColor: ["red", "yellow", "green"],
                      borderColor: ["black", "black", "black"],
                      borderWidth: 0.5,
                    },
                  ],
                }}
                height={300}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          min: 1000000,
                          max: 700000000,
                          stepSize: 1000000,
                        },
                      },
                    ],
                  },
                  legend: {
                    labels: {
                      fontSize: 15,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Global;
