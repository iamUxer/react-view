import React from "react"
import styled from "styled-components"

export default function Header() {
  return <div style={styleHeader}>HEADER</div>
}

const styleHeader = {
  width: "calc(100% - 180px)",
  height: 50,
  background: "dodgerblue",
  position: "fixed",
  top: "0",
  right: "0",
  left: "auto"
}
