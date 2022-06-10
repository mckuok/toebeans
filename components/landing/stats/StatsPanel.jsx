import Stats from "./Stats";

export default function StatsPanel() {
    return (
        <div className="flex flex-col sm:flex-row justify-center text-center gap-y-1 gap-x-5">
                <Stats rotationDegree={0} number={163} unit="Rescued"/>
                <Stats rotationDegree={16.19} number={120} unit="Rehomed"/>
                <Stats rotationDegree={-168.44} number={43} unit="Ready"/>
        </div>
    )
}