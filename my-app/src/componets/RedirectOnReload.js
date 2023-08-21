import React, { useEffect } from 'react';

const RedirectOnReload = ({ homepageUrl }) => {
  useEffect(() => {
    const handleReload = () => {
      if (performance.navigation.type === 1) {
        window.location.href = homepageUrl;
      }
    };

    window.addEventListener('load', handleReload);

    return () => {
      window.removeEventListener('load', handleReload);
    };
  }, [homepageUrl]);

  return null;
};

export default RedirectOnReload;
