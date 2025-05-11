module.exports = {
  apps: [
    {
      name: "weather-man-backend",
      script: "dist/main.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 8000
      }
    }
  ]
};
