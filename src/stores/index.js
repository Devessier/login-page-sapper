import { writable } from 'svelte/store';

function createToastsList() {
    const { subscribe, update } = writable([]);

    let id = 0;

    return {
        subscribe,
        trigger({ text, type = 'success', timeout = 3000 }) {
            const toastId = id++;

            update(toasts => [...toasts, { id: toastId, text, type }]);

            // Dismiss the toast automatically after `timeout` milliseconds.
            setTimeout(() => {
                update(toasts => toasts.filter(({ id }) => id !== toastId));
            }, timeout);
        },
        dismiss(id) {
            update(toasts =>
                toasts.filter(({ id: toastId }) => toastId !== id)
            );
        },
    };
}

export const toasts = createToastsList();
