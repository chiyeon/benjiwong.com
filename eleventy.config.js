module.exports = function(cfg) {
   cfg.addPassthroughCopy("./src/assets")

   cfg.addPassthroughCopy("./src/assets/css/")
   cfg.addWatchTarget("./src/css/")

   cfg.addPassthroughCopy("./src/assets/imgs")

   cfg.addPassthroughCopy("./src/resume.pdf")

   return {
      dir: {
         input: "src",
         output: "public"
      }
   }
}
