import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Menu() {
  return (
    <SideMenu className={"nav"}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/content">Content</Link>
        </li>
        <li>
          <Link to="/content:post">Content Post</Link>
        </li>
      </ul>
    </SideMenu>
  )
}

const SideMenu = styled.div`
  width: 180px;
`
