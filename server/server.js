const express = require("express");
const dotenv = require("dotenv");
const {Leap} = require("@leap-ai/sdk");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
const port = 8000;

const leap = new Leap(process.env.LEAP_API_KEY);



app.post("/generate",async (req, res) => {
  const prompt = req.body.prompt;
  try {
   // leap.usePublicModel("sd-1.5");
    const response = await leap.generate.generateImage({
      prompt: prompt,
      numberOfImages: 1,
      width: 512,
      height: 512,
      steps: 60,
    });

    res.status(200).json({
      status: "success",
      image: response.data?.images[0].uri,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "failure",
      message: "failed to generate image",
      error:err
    });
  }
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
