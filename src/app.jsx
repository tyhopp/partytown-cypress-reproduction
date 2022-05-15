import React from "react";
import { Partytown } from "@builder.io/partytown/react";

function App() {
  return (
    <>
      <Partytown debug={true} />
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            const p = document.createElement('p');
            p.dataset.cy = 'success'
            p.textContent = 'success'
            document.body.appendChild(p)
          `,
        }}
      />
    </>
  );
}

export default App;
