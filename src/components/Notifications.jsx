import { useAppStore } from "../store/useAppStore";

export default function Notifications() {
    const notifications = useAppStore((state) => state.notifications);

    return (
        <div className="fixed top-5 right-5 z-50 flex flex-col gap-2">
            {notifications.map((notif) => (
                <div 
                    key={notif.id} 
                    className={`p-3 text-white rounded shadow-lg ${notif.type === "error" ? "bg-red-500" : notif.type === "info" ? "bg-red-500" : "bg-green-500"}`}>
                    {notif.message}
                </div>
            ))}
        </div>
    );
}
