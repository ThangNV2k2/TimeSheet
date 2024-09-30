/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },
      height: {
        70: "70px",
      },
      backgroundImage: () => ({
        "user-img":
          "url('https://training-timesheet.nccsoft.vn/user-img-background.7f354e93c30f9d51fc3a.jpg')",
      }),
    },
    colors: {
      "custom-background-blue": "#00bcd4",
      success: "#67C23A",
      danger: "#F56C6C",
      "bg-error": "#fee2e2",
      error: "#dc2626",
      warning: "#E6A23C",
      orange: "#f44336",
      info: "#909399",
      "regular-text": "#606266",
      primary: "#409EFF",
      "primary-text": "#303133",
      "secondary-text": "#909399",
      placeholder: "#C0C4CC",
      "border-base": "#DCDFE6",
      "border-light": "#E4E7ED",
      "border-lighter": "#EBEEF5",
      blackColor: "#000000",
      whiteColor: "#FFFFFF",
      grayColor: "#CCCCCC",
      gray: "#333",
    },
  },
  plugins: [],
};
