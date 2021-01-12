import SimpleDate from "../interfaces/SimpleDate";
import SpacePoint from "../interfaces/SpacePoint";
import { TimeMachine } from "../entities/TimeMachine";
import calculateSpaceTime from "./CalculateSpaceTime";

const synchronizePulsars = (timeMachine:TimeMachine) => {
    
    /**
     * CALC
     */
    const spaceTime = calculateSpaceTime(timeMachine);
    const SynchronizePulsars = Math.sqrt(Math.pow(timeMachine.currentPosition.x,2) + (Math.pow(timeMachine.currentPosition.y,2) + (Math.pow(timeMachine.currentPosition.z,2)/spaceTime)));
    return SynchronizePulsars;
}

export default synchronizePulsars;
