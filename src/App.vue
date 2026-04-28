<template>
  <div class="min-h-screen bg-[#FBF1E0]">

    <div class="w-full h-1.5 bg-[#D3875E]"></div>
    <div class="w-full h-1.5 bg-[#FAF0E0]" style="background-image: repeating-linear-gradient(to right, #D3875E 0px, #D3875E 12px, transparent 12px, transparent 20px); background-size: 20px 100%; background-repeat: repeat-x;"></div>

    <nav class="bg-[#FAF0E0] sticky top-0 z-50 border-b border-[#EEDBC0]/40 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-[80px]">

          <div class="flex items-center cursor-pointer">
            <div class="bg-[#8C4639] text-white w-[42px] h-[42px] rounded-[14px] flex items-center justify-center shadow-inner border border-[#6A3227]">
              <Heart class="w-5 h-5" />
            </div>
            <div class="ml-3.5 flex flex-col justify-center mt-1">
              <span class="font-extrabold text-[22px] leading-none text-[#4A3728] tracking-widest">趣致中古玩具店</span>
              <div class="flex items-center mt-1.5">
                <span class="w-6 h-px bg-[#D3875E]/80 mr-1.5"></span>
                <span class="text-[10px] text-[#C48C64] tracking-[0.15em] font-bold">分享怀旧的美好时光</span>
                <span class="w-6 h-px bg-[#D3875E]/80 ml-1.5 relative"><span class="absolute -left-1 -top-[3px] text-[8px] text-[#D3875E]/80">◀</span></span>
              </div>
            </div>
          </div>

          <div class="hidden lg:flex items-center space-x-10 text-[15px] font-bold text-[#8C7A6B]">
            <a href="#" class="relative text-[#8C4639] transition-colors py-1">
              首页
              <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[110%] h-[2.5px] bg-[#D3875E] rounded-full"></span>
            </a>
            <a href="#" class="hover:text-[#8C4639] transition-colors py-1">所有商品</a>
            <a href="#" class="hover:text-[#8C4639] transition-colors py-1">摆件专区</a>
            <a href="#" class="hover:text-[#8C4639] transition-colors py-1">明信片专区</a>
            <a href="#" class="hover:text-[#8C4639] transition-colors py-1">杂物专区</a>
            <a href="#" class="hover:text-[#8C4639] transition-colors py-1">关于我们</a>
          </div>

          <div class="flex items-center">
            <button class="flex items-center px-4 py-1.5 border border-[#D3875E]/60 text-[#8C4639] rounded-full text-xs font-bold hover:bg-[#D3875E]/10 transition-all shadow-sm">
              <Newspaper class="w-3.5 h-3.5 mr-1.5" />
              店铺公告
            </button>
          </div>

        </div>
      </div>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script setup>
import { Heart, Newspaper } from 'lucide-vue-next'
</script>
