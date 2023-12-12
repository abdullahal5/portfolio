"use client"
import { Box, Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Image from "next/image";

const MyProject = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get("/project.json")
      .then((res) => setData(res.data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  // console.log(data)
    return (
      <div className="bg-slate-100 p-10 lg:h-[100vh]">
        <Container>
          <h1 className="text-center my-10 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9e86b6] to-[#580bb1]">
            My Projects
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {data.map((item) => (
              <Card key={item?.id} sx={{ maxWidth: 500 }}>
                <CardMedia
                  className=" inset-0 hover:brightness-50 transition-all duration-300 hover"
                  sx={{ height: 200, objectFit: "cover" }}
                  image={item?.image}
                  title={item.projectName}
                />
                <CardContent>
                  <Typography
                    fontWeight="bold"
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{width: '100%', mx: 'auto', textAlign: 'center'}}
                  >
                    {item?.projectName}
                  </Typography>
                </CardContent>
                <CardActions sx={{ mx: "auto", width: "100%" }}>
                  <a className="bg-[#6f38ad] px-3 py-2 rounded-lg text-white mx-auto" href={item.githubLink}>
                    View full project
                  </a>
                </CardActions>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    );
};

export default MyProject;