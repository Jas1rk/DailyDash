import { useState, useEffect } from "react";

const TEST_FILE_URL = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"; // Small file (2KB)

const useNetworkSpeed = () => {
  const [speed, setSpeed] = useState<number | null>(null);
  const [loadingTime, setLoadingTime] = useState(1000); // Default 1s spinner

  useEffect(() => {
    const measureSpeed = async () => {
      const startTime = performance.now();
      try {
        const response = await fetch(TEST_FILE_URL, { cache: "no-store" }); // Prevent cached results
        const blob = await response.blob();
        const endTime = performance.now();

        const fileSizeKB = blob.size / 1024; // Convert bytes to KB
        const durationSec = (endTime - startTime) / 1000;
        const speedMbps = (fileSizeKB / 1024) / durationSec * 8; // Convert to Mbps

        setSpeed(speedMbps);

        // Adjust spinner time based on speed
        if (speedMbps > 50) setLoadingTime(300); // Super fast (300ms)
        else if (speedMbps > 10) setLoadingTime(800); // Medium (800ms)
        else setLoadingTime(1500); // Slow (1.5s)
      } catch (error) {
        console.error("Failed to measure speed:", error);
      }
    };

    measureSpeed();
  }, []);

  return { speed, loadingTime };
};

export default useNetworkSpeed;
