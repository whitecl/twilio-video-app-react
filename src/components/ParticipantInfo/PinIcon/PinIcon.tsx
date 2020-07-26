import React from "react";
import { PinDrop } from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";
import SvgIcon from "@material-ui/core/SvgIcon";

export default function PinIcon() {
  return (
    <Tooltip title="Participant is pinned. Click to un-pin." placement="top">
      <SvgIcon style={{ float: "right", fontSize: "29px" }}>
        <PinDrop />
      </SvgIcon>
    </Tooltip>
  );
}
