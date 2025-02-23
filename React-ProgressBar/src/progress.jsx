import './progress.css'

export default function ProgressBar(props) {

  return (
  <div>
    <h1>Progress Bar</h1>
    <div style={{ width: "100%", backgroundColor: "#f5f5f5", borderRadius: "4px" }}>
    <div
      style={{
        width: `${props.progress}%`,
        backgroundColor: "#ff89f3",
        height: "24px",
        borderRadius: "4px",
      }}
    ></div>
    </div>
    <p>{props.progress}% Complete</p>
  </div>
  );
}
