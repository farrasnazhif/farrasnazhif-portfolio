import Tooltip from "@/components/ui/Tooltip/Tooltip";

export default function Page() {
  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to right, #000000, #06273d)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tooltip content="This is a 3D glassmorphic tooltip!">Hover Me</Tooltip>
    </div>
  );
}
