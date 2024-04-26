import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Omit<Config, "content"> = {
  // add global tailwind configs here.
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
