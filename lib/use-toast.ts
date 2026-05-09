"use client";

import { useState, useCallback } from "react";

type ToastVariant = "default" | "success" | "error";

interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastState {
  toasts: Toast[];
}

let listeners: Array<(state: ToastState) => void> = [];
let memoryState: ToastState = { toasts: [] };

function dispatch(toast: Toast) {
  memoryState = { toasts: [toast] };
  listeners.forEach((listener) => listener(memoryState));

  const duration = toast.duration ?? 4000;
  setTimeout(() => {
    memoryState = { toasts: [] };
    listeners.forEach((listener) => listener(memoryState));
  }, duration);
}

export function toast(props: Omit<Toast, "id">) {
  dispatch({ ...props, id: Math.random().toString(36).slice(2) });
}

export function useToast() {
  const [state, setState] = useState<ToastState>(memoryState);

  const subscribe = useCallback((listener: (state: ToastState) => void) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  useState(() => {
    const unsubscribe = subscribe(setState);
    return unsubscribe;
  });

  return { toasts: state.toasts };
}
