module.exports = {
  apps : [{
    name   : "app1",
    script : "./src/index.js",
    env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  }]
}


// pm2 start process.json --env production