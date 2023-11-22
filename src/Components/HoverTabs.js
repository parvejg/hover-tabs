import "./HoverTabs.css";
export const HoverTabs = () => {
  return (
    <div className="main-container">
      <div className="hover-tabs-wrapper">
        <div className="hover-tabs-links-wrapper">
          <button className="hover-tabs-links">London</button>
          <button className="hover-tabs-links">Paris</button>
          <button className="hover-tabs-links">Tokyo</button>
        </div>
      </div>
      <div className="tabs-links-contents"></div>
    </div>
  );
};
