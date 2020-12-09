import { Spring } from "react-spring/renderprops";
import Typography from "@material-ui/core/Typography";

export default function CustomTitle(){
  return (
    <Spring
            config={{ tension: 280, friction: 60, duration: 3000 }}
            from={{ color: "#fff" }}
            to={{ color: "#35363a" }}
          >
            {(props) => (
              <Typography
                component="h1"
                variant="h5"
                style={{
                  textAlign: "center",
                  ...props,
                  fontWeight: "600",                  
                }}
              >
                Google Books Search!
              </Typography>
            )}
          </Spring>
  );
}