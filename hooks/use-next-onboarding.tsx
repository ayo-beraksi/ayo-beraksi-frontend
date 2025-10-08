import { useState } from "react";

const useNextOnboarding = () => {
  type onBoardingContentType = {
    title: string;
    description: string;
  };

  const onBoardingContent: onBoardingContentType[] = [
    {
      title: "Selamat Datang di Mogi",
      description:
        "Aplikasi ini membantu Anda untuk memantau kondisi suhu dan kelembapan tempat jamur Anda tumbuh, langsung dari ponsel.",
    },
    {
      title: "Dapatkan Peringatan Secara Otomatis",
      description:
        "Jika terjadi perubahan penting, seperti suhu yang terlalu panas atau lingkungan yang terlalu kering, Mogi akan langsung memberitahu Anda.",
    },
    {
      title: "Jaga Pertumbuhan Jamur Tetap Optimal",
      description:
        "Dengan pemantauan yang tepat, Anda dapat menjaga kondisi terbaik untuk jamur Anda setiap saat. Mari kita mulai.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleNext = () => {
    setActiveIndex((prevState) => prevState + 1);
  };

  const content = onBoardingContent[activeIndex];

  return {
    handleNext,
    activeIndex,
    content,
  };
};

export default useNextOnboarding;
