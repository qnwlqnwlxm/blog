<template>
  <div id="disqus_thread" style="margin:10px 50px 30px 50px"></div>
</template>

<script>
export default {
  mounted() {
    try {
      let disqus_config = function() {
        this.page.url = location.origin;
        this.page.identifier = location.pathname;
      };
      (function() {
        let d = document,
          s = d.createElement("script");
        s.src = "https://mbio-blog.disqus.com/embed.js";
        s.setAttribute("data-timestamp", +new Date());
        (d.head || d.body).appendChild(s);
      })();
    } catch (e) {
      console.error(e);
    }
  }
};
</script>