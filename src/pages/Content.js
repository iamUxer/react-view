import React from "react";

export default function Content({ match }) {
  return (
    <div>
      <h1>Content {match.params.post}</h1>
    </div>
  );
}
