<template>
  <div
    id="jameda-widget-container1662778"
    ref="target"
  >
    <div class="top">
      <a
        href="https://www.jameda.de/schweinfurt/zahnaerzte/aesthetische-zahnmedizin/dr-sabine-hugo/uebersicht/81235641_1/?utm_content=Top5&amp;utm_source=Kunden-Homepages&amp;utm_medium=Badges&amp;utm_term=81235641&amp;utm_campaign=Badges"
        target="_blank"
      >
        Dr. med. Sabine Hugo
      </a>
    </div>
    <div class="bottom">
      <strong>Zahn&auml;rzte</strong><br />
      in Schweinfurt auf
      <a
        href="https://www.jameda.de/schweinfurt/zahnaerzte/gruppe/?utm_content=Top5&amp;utm_source=Kunden-Homepages&amp;utm_medium=Badges&amp;utm_term=81235641&amp;utm_campaign=Badges"
        class="jam_link_check"
        target="_blank"
      >
        jameda
      </a>
    </div>
  </div>
</template>

<script setup>
import { useScriptTag } from '@vueuse/core';

const target = ref(null);

useScriptTag(
  'https://cdn1.jameda-elements.de/widgets/siegel/81235641_1/1662778/',
  (script) => {
    target.value.appendChild(script);
  },
);
</script>

<style scoped>
#jameda-widget-container1662778 {
  background-image: url('https://cdn1.jameda-elements.de/premium/widgets/_images/top10-top20-bg.png');
  background-repeat: no-repeat;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  height: 168px;
  line-height: 15px;
  position: relative;
  width: 272px;
}

#jameda-widget-container1662778 > div.top {
  height: 58px;
  left: 108px;
  overflow: hidden;
  position: absolute;
  top: 25px;
  white-space: normal;
  width: 148px;
}

#jameda-widget-container1662778 > div.top a {
  border: 0;
  color: hsl(194deg 99% 42%);
  font-size: 15px;
  font-weight: bold;
  line-height: 18px;
  text-decoration: none;
}

#jameda-widget-container1662778 > div.top a:hover {
  background-color: transparent;
}

#jameda-widget-container1662778 > div.bottom {
  color: hsl(0deg 0% 53%);
  font-size: 11px;
  height: 53px;
  left: 108px;
  line-height: 13px;
  overflow: hidden;
  position: absolute;
  top: 98px;
  width: 152px;
}

#jameda-widget-container1662778 > div.bottom a {
  background-color: transparent !important;
  border: 0;
  color: hsl(196deg 94% 42%);
  font-size: 11px;
  text-decoration: none;
}
</style>
