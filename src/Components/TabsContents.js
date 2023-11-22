import "./TabsContents.css";
export const TabsContents = ({ contentTitle, content }) => {
  return (
    <div className="hoverTabs-content-container">
      <h2 className="content-title">{contentTitle}</h2>
      <p className="hover-tabs-content">{content}</p>
    </div>
  );
};
