import styled from '@emotion/styled'

import {Buffer} from 'buffer';

const IconWrapper = styled.i`
  display: inline-block;
`

const Icon = ({
  name,
  size = 16,
  strokWidth = 2,
  rotate,
  color = "#222",
  ...props
}) => {
  const shapeStyle = {
    width: size,
    heigth: size,
    transform: rotate ? `rotate(${rotate}deg)` : undefined
  }
  const iconStyle = {
    "stroke-width": strokWidth,
    stroke: color,
    width: size,
    height: size,
  };
  const icon = require("feather-icons").icons[name];
  const svg = icon ? icon.toSvg(iconStyle) : "";
  const base64 = Buffer.from(svg, "utf8").toString("base64");

  return (
    <IconWrapper {...props} style={shapeStyle}>
      <img src={`data:image/svg+xml;base64,${base64}`} alt={name} />
    </IconWrapper>
  );
};

export default Icon;
