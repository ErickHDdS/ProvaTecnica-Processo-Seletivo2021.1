import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateTimeDifferential = (timeMachine:TimeMachine) => {
    /**
     * CALC
     */
    const timeBalance = calculateTimeBalance(timeMachine);
    const TimeDifferential = timeBalance.year * 365 * 24 + timeBalance.month * 30 * 24 + timeBalance.day * 24;
    return TimeDifferential;
}

export default calculateTimeDifferential;
