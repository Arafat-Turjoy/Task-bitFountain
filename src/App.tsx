import { useState } from "react";
import { useQuery } from "react-query";

import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import { Wrapper } from "./App.styles";
import Device from "./Models/ModelType";
import Login from "./Login/Login";
import Button from "@material-ui/core/Button";

export type modelItemType = {
  Id: number;
  BrandId: string;
  Name: string;
  TypeId: number;
  Comment: string;
  Description: string;
};

// const deviceType = async () => {
//   try {
//     const response = await fetch(
//       "http://163.47.115.230:30000/api/devicetype?limit=40&page=1",
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           Authorization:
//             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImVtYWlsIjoiTW96ZWxsLkphY29iaUB5YWhvby5jb20iLCJpYXQiOjE2MjM1MTg0MzksImV4cCI6MTYyMzYwNDgzOX0.ih1O2AVOWUCxnm9g5D1d_KP9F4fg54jw5aOYj_fFXdg",
//         },
//       }
//     );
//     const data = await response.json();
//     // enter you logic when the fetch is successful
//     console.log(data);
//   } catch (error) {
//     // enter your logic for when there is an error (ex. error toast)

//     console.log(error);
//   }
// };

const deviceType = async (): Promise<modelItemType[]> =>
  await (
    await fetch("http://163.47.115.230:30000/api/overview/modeltype", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImVtYWlsIjoiTW96ZWxsLkphY29iaUB5YWhvby5jb20iLCJpYXQiOjE2MjM1MTg0MzksImV4cCI6MTYyMzYwNDgzOX0.ih1O2AVOWUCxnm9g5D1d_KP9F4fg54jw5aOYj_fFXdg",
      },
    })
  ).json();

const App = () => {
  const { data, isLoading, error } = useQuery<modelItemType[]>(
    "users",
    deviceType
  );
  // deviceType();
  // console.log(data);

  const selectMedicalDevice = async (selectItem: modelItemType) => {
    try {
      const response = await fetch(
        "http://163.47.115.230:30000/api/overview/modeldata/Hamilton/Galileo",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImVtYWlsIjoiTW96ZWxsLkphY29iaUB5YWhvby5jb20iLCJpYXQiOjE2MjM1MTg0MzksImV4cCI6MTYyMzYwNDgzOX0.ih1O2AVOWUCxnm9g5D1d_KP9F4fg54jw5aOYj_fFXdg",
          },
        }
      );
      const modelData = await response.json();
      // enter you logic when the fetch is successful
      console.log(modelData);
    } catch (error) {
      // enter your logic for when there is an error (ex. error toast)

      console.log(error);
    }
  };

  const DeviceModel = async () => {
    try {
      const response = await fetch(
        "http://163.47.115.230:30000/api/devicemodel",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImVtYWlsIjoiTW96ZWxsLkphY29iaUB5YWhvby5jb20iLCJpYXQiOjE2MjM1MTg0MzksImV4cCI6MTYyMzYwNDgzOX0.ih1O2AVOWUCxnm9g5D1d_KP9F4fg54jw5aOYj_fFXdg",
          },
          body: JSON.stringify({
            // your expected POST request payload goes here
            BrandId: "TestModel12",
            Name: "Test Model12",
            TypeId: 1,
            Comment: "test12",
          }),
        }
      );
      const deviceData = await response.json();
      // enter you logic when the fetch is successful
      console.log(deviceData);
    } catch (error) {
      // enter your logic for when there is an error (ex. error toast)

      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Login />
      <Grid container spacing={3}>
        {data?.map((device) => (
          <Grid item key={device.Id} xs={12} sm={4}>
            <Device device={device} selectMedicalDevice={selectMedicalDevice} />
          </Grid>
        ))}
      </Grid>
      <Button onClick={() => DeviceModel()}>Add New Device</Button>
    </Wrapper>
  );
};

export default App;
