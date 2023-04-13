import { Center, Float, Html, Text, useGLTF } from "@react-three/drei";
import Screen from "./Screen";

export default function ComputerModel(props) {
    const { scene } = useGLTF("/assets/model/model.gltf");

    return (
        <Float rotationIntensity={0.4}>
            <rectAreaLight
                width={2.5}
                height={1.65}
                intensity={65}
                color="#8b5cf6"
                rotation={[-0.1, Math.PI, 0]}
                position={[0, 0.55, -1.15]}
            />
            <primitive object={scene} position-y={-1.2}>
                <Screen />
            </primitive>
            <Text
                font="./shadows-into-light-v15-latin-regular.woff"
                fontSize={0.9}
                color="#f0dfe0"
                position={[2, 0.75, 0.75]}
                rotation-y={-1.25}
                maxWidth={2}
                lineHeight={1.2}
                castShadow={false}
            >
                Scroll Down
            </Text>
        </Float>
    );
}
