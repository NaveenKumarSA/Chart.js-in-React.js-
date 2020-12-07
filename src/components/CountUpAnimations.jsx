import { Box, Button } from "@material-ui/core";
import React from "react";
import CountUp, { useCountUp } from "react-countup";

function CountUpAnimations() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 45,
    start:60,
    end: 0,
    startOnMount: false,
  });
  return (
    <div>
      <Box letterSpacing={111} textAlign="center">
        <h1 className="">{countUp}</h1>
      </Box>

      <Button
        className="col-3"
        variant="outlined"
        color="primary"
        onClick={start}
      >
        Start
      </Button>
      <Button
        className="col-3"
        variant="outlined"
        color="secondary"
        onClick={reset}
      >
        Reset
      </Button>
      <Button
        className="col-3"
        variant="outlined"
        color="primary"
        onClick={pauseResume}
      >
        Pause/Resume
      </Button>
      <Button
        className="col-3"
        variant="outlined"
        color="secndary"
        onClick={() => update(60)}
      >
        +30
      </Button>
      <h1>
        <CountUp end={99} duration={25} suffix={"USD"} />
      </h1>
      <h1>
        <CountUp start={10} end={99} duration={15} prefix={"Rs."} />
      </h1>
    </div>
  );
}

export default CountUpAnimations;
