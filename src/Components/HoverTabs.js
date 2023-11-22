import "./HoverTabs.css";
export const HoverTabs = () => {
  return (
    <>
      <div className="hover-tabs-wrapper">
        <div className="hover-tabs-links-wrapper">
          <button>London</button>
          <button>Paris</button>
          <button>Tokyo</button>
        </div>
      </div>
      <div className="tabs-links-contents"></div>
    </>
  );
};
