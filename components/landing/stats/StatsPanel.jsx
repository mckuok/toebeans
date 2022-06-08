import Stats from "./Stats";

export default function StatsPanel() {
    return (
        <div className="flex flex-row justify-center">
            <div className="px-5">
                <Stats rotationDegree={0} number={163} unit="Rescued"/>
            </div>
            <div className="px-5">
                <Stats rotationDegree={16.19} number={120} unit="Rehomed"/>
            </div>
            <div className="px-5">
                <Stats rotationDegree={-168.44} number={43} unit="Ready"/>
            </div>
        </div>
    )
}