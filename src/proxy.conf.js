const PROXY_CONFIG = {
    '/api/proxy': {
      "target": 'http://localhost:8000/games',
      "secure": false,
      "pathRewrite": {
        "http://localhost:8000/games": "/mocks"
      },
      "bypass": function (req, res, proxyOptions) {
        return [
            "EEEEEE",
            "EEEEEEE"
        ]
      }
    }
  };

  module.exports = PROXY_CONFIG;