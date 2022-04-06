const fetchData = async () => {
  const res = await fetch('https://api.spacexdata.com/v3/rockets');
  return res.json();
};

export default fetchData;
