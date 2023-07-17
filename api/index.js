import axios from "axios";

const provideUrl = "https://provinces.open-api.vn/api";

export const getProvide = async () => {
  try {
    const { data } = await axios.get(`${provideUrl}/?depth=1`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDistrict = async (provideId) => {
  try {
    const { data } = await axios.get(`${provideUrl}/p/${provideId}?depth=2`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWard = async (districtId) => {
  try {
    const { data } = await axios.get(`${provideUrl}/d/${districtId}?depth=2`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
