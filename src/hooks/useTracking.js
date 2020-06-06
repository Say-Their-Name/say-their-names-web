
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useTracking = () => {
  const trackingId = 'UA-149891372-1';
  const { listen } = useHistory();

  useEffect(() => {
    const unlisten = listen((location) => {
      if (window.gtag) {
        window.gtag('config', trackingId, { page_path: location.pathname });
      }
    });

    return unlisten;
  }, [trackingId, listen]);
};

export default useTracking;
