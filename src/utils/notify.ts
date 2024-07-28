import { ToastContent, ToastOptions, toast } from 'react-toastify';

const defaultOptions: ToastOptions = {
  autoClose: 12000,
  position: 'top-right',
};

export const notify = {
  default: (content: ToastContent<unknown>, options?: ToastOptions) => {
    const successOptions: ToastOptions = {
      ...defaultOptions,
      type: 'default',
      ...options,
    };

    if (typeof content === 'function') {
      return toast(({ ...props }) => content({ ...props }), successOptions);
    }

    return toast(content, options);
  },
  success: (content: ToastContent<unknown>, options?: ToastOptions) => {
    const successOptions: ToastOptions = {
      ...defaultOptions,
      type: 'success',
      ...options,
    };

    if (typeof content === 'function') {
      return toast(({ ...props }) => content({ ...props }), successOptions);
    }

    return toast(content, options);
  },
  info: (content: ToastContent<unknown>, options?: ToastOptions) => {
    const successOptions: ToastOptions = {
      ...defaultOptions,
      type: 'info',
      ...options,
    };

    if (typeof content === 'function') {
      return toast(({ ...props }) => content({ ...props }), successOptions);
    }

    return toast(content, options);
  },
  error: (content?: ToastContent<unknown>, options?: ToastOptions) => {
    const successOptions: ToastOptions = {
      ...defaultOptions,
      type: 'error',
      ...options,
    };

    if (typeof content === 'function') {
      return toast(({ ...props }) => content({ ...props }), successOptions);
    }

    return toast(content || 'Something went wrong', options);
  },
  warning: (content: ToastContent<unknown>, options?: ToastOptions) => {
    const successOptions: ToastOptions = {
      ...defaultOptions,
      type: 'warning',
      ...options,
    };

    if (typeof content === 'function') {
      return toast(({ ...props }) => content({ ...props }), successOptions);
    }

    return toast(content, options);
  },
};
