module.exports = function(cfg) {
   cfg.addPassthroughCopy("./src/assets/css/")
   cfg.addWatchTarget("./src/css/")

   cfg.addPassthroughCopy("./src/assets/imgs")


   return {
      dir: {
         input: "src",
         output: "public"
      }
   }
}
