import React from "react";
import PinDropIcon from "@mui/icons-material/PinDrop";

import Typography from "@mui/material/Typography";
import StoreIcon from "@mui/icons-material/Store";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import IconButton from "@mui/material/IconButton";
import appstore from "../assets/images/appstore.png"
import hawei from "../assets/images/hawei.png";
import googleplay from "../assets/images/googleplay.png"

export default function landing() {
  return (
    <div className="landing">
      <div className="landingheader">
        {" "}
        <div className="landingtext">
          <Typography
            variant="h2"
            gutterBottom
            fontFamily="ojuju"
            fontWeight="800"
          >
            Experience Home Abroad:
          </Typography>

          {/* <div className="landingtext2">
          <Typography variant="h4" gutterBottom>
            Unlock Authentic Flavors, Seamless Connections
          </Typography>
        </div> */}
          <Typography variant="h6" fontFamily="ojuju">
            Connect with Dealer and Vendors of your native spices and cuisine
          </Typography>

          <Typography variant="h4" gutterBottom fontFamily="ojuju">
            Find shops and Vendors near you.
          </Typography>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Location | city..."
          />
          <button type="button" className="search-button">
            Search
          </button>
        </div>
      </div>

      <div className="landing1">
        <div>
          <Typography variant="h4" gutterBottom fontFamily="ojuju">
            Unlock Authentic Flavors, Seamless Connections
          </Typography>
          <Typography variant="h5" gutterBottom fontFamily="ojuju">
            How to order
          </Typography>
        </div>
        <div className="landinghow">
          <div>
            <PinDropIcon fontSize="large" />
            <Typography variant="h5" fontFamily="ojuju">
              Enter your Location
            </Typography>
          </div>
          <div>
            <StoreIcon fontSize="large" />
            <Typography variant="h5" fontFamily="ojuju">
              Find a list of vendors
            </Typography>
          </div>
          <div>
            <IconButton>
              <RoomServiceIcon fontSize="large" />
            </IconButton>
            <Typography variant="h5" fontFamily="ojuju">
              Order for delivery or pickup
            </Typography>
          </div>
        </div>
      </div>

      <div className="downloadapplanding">
        <h1>Download the app</h1>

        <div className="downloaddiv">
          <img src={appstore} alt="app store" className="downloadlink" />
          <img src={hawei} alt="app store" className="downloadlink" />
          <img src={googleplay} alt="app store" className="downloadlink" />
        </div>
      </div>
    </div>
  );
}
