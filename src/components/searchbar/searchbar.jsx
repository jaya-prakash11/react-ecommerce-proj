import { Select, Spin } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

function Searchbar({ ...props }) {
  let [searchValue, setSearchValue] = useState(null);
  let [fetching, setFetching] = useState(false);
  let [selectedValue, setSelectedValue] = useState("");
  let [options, setOptions] = useState([]);
  let a = ["vishal", "mohan", "divya", "samuktha", "dilip"];

  useEffect(() => {
    setFetching(false);
    setOptions([]);
    if (searchValue && searchValue.length > 0) {
      setFetching(true);
      let getData = setTimeout(() => {
        a.map((res) => {
          let a = res.toLowerCase();
          if (a.includes(searchValue.toLowerCase())) {
            setOptions((prev) => [...prev, { label: res, value: res }]);
            setFetching(false);
          }
        });
      }, 800);
      return () => clearTimeout(getData);
    }
    setSearchValue(null);
  }, [searchValue]);
  return (
    <Select
      suffixIcon={
        <SearchOutlined style={{ fontSize: "16px", color: "black" }} />
      }
      showSearch
      value={searchValue}
      filterOption={false}
      onChange={(value) => {
        setSelectedValue(value);
      }}
      placeholder="Search"
      notFoundContent={fetching ? <Spin /> : null}
      className=" xs:hidden 2xl:w-[1000px] xl:w-[800px] lg:w-[600px]  md:w-[400px]  sm:flex w-[400px] h-10"
      options={options}
      onSearch={(value) => setSearchValue(value)}
      {...props}
    />
  );
}

export default Searchbar;
