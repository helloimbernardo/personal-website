module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/spotify",
        destination: "https://open.spotify.com/user/bernardooliveirajb",
        permanent: true,
      },
    ];
  },
};
