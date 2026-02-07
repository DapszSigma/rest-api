import axios from "axios";

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({
      status: false,
      message: "Parameter url diperlukan"
    });
  }

  try {
    // API scraping unofficial TikTok
    const api = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`;

    const { data } = await axios.get(api);

    if (!data || data.code !== 0) {
      return res.status(500).json({
        status: false,
        message: "Gagal mengambil data TikTok"
      });
    }

    return res.status(200).json({
      status: true,
      author: data.data.author.nickname,
      username: data.data.author.unique_id,
      title: data.data.title,
      cover: data.data.cover,
      video: data.data.play,
      video_hd: data.data.hdplay,
      music: data.data.music
    });

  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err.message
    });
  }
        }
        
