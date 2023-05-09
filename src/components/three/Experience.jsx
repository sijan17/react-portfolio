import {
    ContactShadows,
    Environment,
    PresentationControls,
} from "@react-three/drei";
import ComputerModel from "./ComputerModel";

export default function Experience() {
    return (
        <>
            <Environment preset="city" />

            <PresentationControls
                global
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]} // vertical rotation limits
                azimuth={[-1, 0.85]} // horizontal rotation limits
                config={{ mass: 2, tension: 400 }} // config is based on Spring lib
                snap={{ mass: 4, tension: 100 }} // snaps back to og position
            >
                <ComputerModel />
            </PresentationControls>

            <ContactShadows
                position-y={-1.4}
                scale={5}
                blur={2.4}
                opacity={0.6}
            />
        </>
    );
}
