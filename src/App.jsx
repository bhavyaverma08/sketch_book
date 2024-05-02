import "./App.css";
import ReactPainter from "react-painter";

function App() {

  return (
    <>
      <ReactPainter
        width={1000}
        height={600}
        render={({
          canvas,
          triggerSave,
          setColor,
          initialColor = "#fff",
          setLineWidth,
          setLineCap,
          setLineJoin,
          imageDownloadUrl,
        }) => (
          <div>
            <h1>Sketchbook</h1>
            <div className="toolbox">
              <div className="flex">
                <label>Brush</label>
                <input
                  defaultValue={"#ffffff"}
                  type="color"
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                />
              </div>
              <div className="flex">
                <label>Brush Size</label>
                <input
                  defaultValue={"1"}
                  type="range"
                  min={"1"}
                  max={"50"}
                  onChange={(e) => {
                    setLineWidth(e.target.value);
                  }}
                />
              </div>
              <div className="flex">
                <label>Line Join</label>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setLineJoin(e.target.value);
                  }}
                >
                  <option value="round">Round</option>
                  <option value="bevel">Bevel</option>
                  <option value="miter">Miter</option>
                </select>
              </div>
              <div className="flex">
                <label>Line Cap</label>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setLineCap(e.target.value);
                  }}
                >
                  <option value="round">Round</option>
                  <option value="butt">Butt</option>
                  <option value="sqaure">Square</option>
                </select>
              </div>
              {imageDownloadUrl ? (
                <a href={imageDownloadUrl}>Download</a>
              ) : (
                <button onClick={triggerSave}>Save sketch</button>
              )}
            </div>
            <div className="awesomeContainer">{canvas}</div>
          </div>
        )}
      />
    </>
  );
}

export default App;
