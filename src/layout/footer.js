import React from "react"
import styled from "styled-components"

export default function Footer() {
  return <MyFooter>Footer</MyFooter>
}

const MyFooter = styled.div`
  width: 100%;
  background: gray;
  position: fixed;
  bottom: 0;
  height: 30px;
`
