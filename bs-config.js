module.exports = {
  files: ["./**/*.{html,php,css,js}"],
  proxy: {
    target: "http://domain.test",
    ws: true,
  },
  ui: false,
};
