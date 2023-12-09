import { useState } from "react";
import "./HoverTabs.css";
import { TabsContents } from "./TabsContents";
export const HoverTabs = () => {
  const [hovertab, setHoverTab] = useState("London");
  const hoverLondonTabTitle = "London";
  const hoverLondonTabContent = "London is the capital of England";
  const hoverParisTabContent = "Paris is the capital of France";
  const hoverParisTabTitle = "Paris";
  const hoverTokyoTabContent = "Tokyo is the capital of Japan";
  const hoverTokyoTabTitile = "Tokyo";
  const allHoverTabsContent =
    hovertab === "London" ? (
      <TabsContents
        contentTitle={hoverLondonTabTitle}
        content={hoverLondonTabContent}
      />
    ) : hovertab === "Paris" ? (
      <TabsContents
        content={hoverParisTabContent}
        contentTitle={hoverParisTabTitle}
      />
    ) : hovertab === "Tokyo" ? (
      <TabsContents
        content={hoverTokyoTabContent}
        contentTitle={hoverTokyoTabTitile}
      />
    ) : (
      <TabsContents
        contentTitle={hoverLondonTabTitle}
        content={hoverLondonTabContent}
      />
    );
  return (
    <div className="main-container">
      <h1>Hover tabs</h1>

      <div className="hover-tabs-wrapper">
        <div className="hover-tabs-links-wrapper">
          <button
            className="hover-tabs-links"
            value={"London"}
            onMouseOver={(e) => setHoverTab(e.target.value)}
          >
            London
          </button>
          <button
            className="hover-tabs-links"
            value={"Paris"}
            onMouseOver={(e) => setHoverTab(e.target.value)}
          >
            Paris
          </button>

          <button
            className="hover-tabs-links"
            value={"Tokyo"}
            onMouseOver={(e) => setHoverTab(e.target.value)}
          >
            Tokyo
          </button>
        </div>
      </div>
      <div className="tabs-links-contents">{allHoverTabsContent}</div>
    </div>
  );
};
