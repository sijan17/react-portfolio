import { Html } from "@react-three/drei";

export default function Screen() {
    return (
        <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
        >
            <iframe src="https://sijan-paudel.com.np" />
        </Html>
    );
}
