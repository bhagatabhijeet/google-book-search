import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { socket } from "../../App";
import InfoIcon from "@material-ui/icons/Info";

export default function DancingBox({ type }) {
  const [conCount, setConCount] = useState(1);

  useEffect(() => {
    socket.on("connections_established", (cons) => {
      setConCount(cons);      
      set({ backgroundColor: "#2ba2ff" });
    });
    socket.on("connection_disconnected", (cons) => {
      setConCount(cons);      
      set({ backgroundColor: "#2ba2ff" });
    });
  });

  const [props, set] = useSpring(() => ({
    from: { backgroundColor: "#fff" },
    to: async (next) => {
      await next({ backgroundColor: "blue" });
      await next({ backgroundColor: "#2ba2ff" });
      await next({ backgroundColor: "white" });
    },

    config: { mass: 1, tension: 500, friction: 10 },
  }));
  return (
    <animated.div
      style={{
        position: "relative",
        color: "#202124",
        width: "100%",
        height: "100%",
        padding: 5,
        textAlign: "center",
        fontSize: 12,
        ...props,
      }}
    >
      <InfoIcon />
      {type === "user"
        ? ` ${conCount} users searching books on this site`
        : `book was saved by user a big name book this is really a long long book name`}
    </animated.div>
  );
}
