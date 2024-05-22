import React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { Link } from "@mui/material";

const actions = [
  { icon: <LinkedInIcon />, name: "LinkedIn.",href:"https://www.linkedin.com/in/anmol-soni-050970157" },
  { icon: <GitHubIcon />, name: "Github",href: "https://github.com/Anmolsoni7910" },
  { icon: <EmailIcon />, name: "Email",href: "mailto:anmolsoni7910@gmail.com" },
  { icon: <AssignmentIndIcon />, name: "Resume", href:"https://res.cloudinary.com/djsbgjc6w/image/upload/v1716399784/qqvrrzjf0agtbfml2jwf.jpg" },
];

const openUrl = (url) => {
    window.open(url, '_blank', 'noreferrer');
}

const SocialLinkMobile = () => {
  return (
    <div className="lg:hidden fixed bottom-5 right-5">
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => openUrl(action?.href)}
          />
        ))}
      </SpeedDial>
    </div>
  );
};

export default SocialLinkMobile;
