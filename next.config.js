module.exports = {
  async redirects() {
    return [
      {
        source: "/app",
        destination: "/app/dashboard",
        permanent: true
      }
    ];
  }
};
