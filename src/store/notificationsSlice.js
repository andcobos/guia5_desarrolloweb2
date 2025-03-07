export const createNotificationsSlice = (set) => ({
    notifications: [],

    addNotification: (message, type = "success") => {
        const id = Date.now();
        set((state) => ({
            notifications: [...state.notifications, { id, message, type }]
        }));

        setTimeout(() => {
            set((state) => ({
                notifications: state.notifications.filter((n) => n.id !== id)
            }));
        }, 3000);
    },
});
