import casesData from '@/data/casesData';

const useRandomFace = () => {
  const getRandomCase = () => {
    const randomIndex = Math.floor(Math.random() * casesData.length);
    return casesData[randomIndex];
  };

  return { getRandomCase };
};

export default useRandomFace;
