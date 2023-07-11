import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

const AdressAPI = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
        );
        setCities(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleCityChange = (value) => {
    setSelectedCity(value);
    const selectedCityData = cities.find((city) => city.Id === value);
    setDistricts(selectedCityData?.Districts || []);
    setSelectedDistrict(null);
    setWards([]);
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
    const selectedDistrictData = districts.find(
      (district) => district.Id === value
    );
    setWards(selectedDistrictData?.Wards || []);
  };

  return (
    <View>
      <Picker
        selectedValue={selectedCity}
        onValueChange={(value) => handleCityChange(value)}
      >
        <Picker.Item label="Chọn tỉnh thành" value={null} />
        {cities.map((city) => (
          <Picker.Item key={city.Id} label={city.Name} value={city.Id} />
        ))}
      </Picker>

      <Picker
        selectedValue={selectedDistrict}
        onValueChange={(value) => handleDistrictChange(value)}
      >
        <Picker.Item label="Chọn quận huyện" value={null} />
        {districts.map((district) => (
          <Picker.Item
            key={district.Id}
            label={district.Name}
            value={district.Id}
          />
        ))}
      </Picker>

      <Picker selectedValue={null}>
        <Picker.Item label="Chọn phường xã" value={null} />
        {wards.map((ward) => (
          <Picker.Item key={ward.Id} label={ward.Name} value={ward.Id} />
        ))}
      </Picker>
    </View>
  );
};

export default AdressAPI;
