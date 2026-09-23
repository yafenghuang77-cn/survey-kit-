import type { UserConfigExport } from "@tarojs/cli"

export default {
   logger: {
    quiet: false,
    stats: true
  },
  mini: {},
  h5: {
    router: {
      mode: "hash",
      basename: "/survey-kit",
      customRoutes: { "/pages/index/index": "/index" },
    },
  },
} satisfies UserConfigExport<'webpack5'>
