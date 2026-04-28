<template>
  <div class="bg-[#FBF1E0] min-h-screen pb-0">

    <section class="relative w-full aspect-[21/9] max-h-[500px] min-h-[400px] bg-cover bg-center flex items-center overflow-hidden" :style="{ backgroundImage: `url(${heroBg})` }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div class="max-w-xl -mt-10">
          <div class="flex items-center mb-3">
            <Sparkles class="w-5 h-5 text-[#E5A03E] mr-2" />
            <span class="text-[#B24A42] text-xl font-bold tracking-wider drop-shadow-sm">趣致中古玩具店</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-[#3A2A20] mb-4 tracking-tight drop-shadow-sm">治愈系周边精选</h1>
          <p class="text-[#5C4D43] mb-6 leading-relaxed font-medium drop-shadow-sm text-sm md:text-base">
            精心挑选各类可爱玩偶、挂件和指偶，来自迪士尼、三丽鸥等热门IP，让每一个小可爱陪伴你的日常。
          </p>
          <button class="inline-flex items-center px-7 py-3 rounded-full bg-[#B24A42] text-white font-bold hover:bg-[#9E4038] transition-all shadow-md hover:-translate-y-1 hover:shadow-lg">
            浏览商品 <ArrowRight class="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -top-24 z-20">
      <div class="flex items-start justify-between gap-6">
        <button @click="scrollPrev" class="w-12 h-12 rounded-full bg-[#F5E6D3]/90 backdrop-blur-sm text-[#B24A42] flex items-center justify-center hover:bg-[#EEDBC0] transition-colors shadow-md flex-shrink-0 border border-white/50 mt-40 z-10">
          <ChevronLeft class="w-6 h-6" />
        </button>

        <div class="w-full overflow-hidden rounded-[2.5rem] py-4 -my-4 px-1 -mx-1">
          <div ref="sliderRef" class="flex gap-8 w-full overflow-hidden">
            <div
              v-for="(zone, index) in infiniteZones"
              :key="index"
              class="relative bg-[#FBF4E5] p-2 rounded-[2.5rem] border border-[#FDEEE8] shadow-lg hover:shadow-2xl transition-all group aspect-[1.1/1] cursor-pointer shrink-0 w-[calc((100%-4rem)/3)]"
            >
              <div class="w-full h-full rounded-[2rem] overflow-hidden relative flex items-center justify-center bg-white/30">
                <img :src="zone.img" :alt="zone.name" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>

        <button @click="scrollNext" class="w-12 h-12 rounded-full bg-[#F5E6D3]/90 backdrop-blur-sm text-[#B24A42] flex items-center justify-center hover:bg-[#EEDBC0] transition-colors shadow-md flex-shrink-0 border border-white/50 mt-40 z-10">
          <ChevronRight class="w-6 h-6" />
        </button>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-10 relative z-10">
      <div class="bg-[#FCE4C6] border-2 border-[#EEDBC0] border-dashed rounded-[2rem] p-6 px-8 shadow-sm">

        <div class="flex justify-between items-end mb-6">
          <div class="flex items-center">
            <Tag class="w-7 h-7 text-[#B24A42] mr-2 -rotate-12" fill="currentColor" />
            <h2 class="text-2xl font-extrabold text-[#3A2A20] tracking-wide">特价捡漏</h2>
            <span class="text-[#8C7A6B] ml-4 text-sm font-medium">限时特惠，先到先得！</span>
          </div>
          <button class="text-[#8C7A6B] text-sm font-medium hover:text-[#B24A42] transition-colors flex items-center">
            查看更多 <ArrowRight class="w-4 h-4 ml-1" />
          </button>
        </div>

        <div class="grid grid-cols-4 gap-6">
          <div v-for="(item, i) in specialItems" :key="i" class="bg-[#FBF4E8] rounded-2xl p-4 border border-[#EEDBC0]/60 shadow-[0_4px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgb(178,74,66,0.1)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative">
            <div class="aspect-[4/3] bg-white/60 rounded-xl mb-3 relative overflow-hidden flex items-center justify-center border border-white/50 shadow-inner">
              <div class="absolute top-2 left-2 bg-white/95 text-[#3A2A20] text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm border border-[#F2E8DB]">
                仅一件
              </div>
              <div class="absolute top-0 right-0 bg-[#B24A42] text-white text-[13px] font-bold px-3 py-1 rounded-bl-[14px] rounded-tr-xl z-10 shadow-sm tracking-widest">
                {{ item.discount }}
              </div>
              <img
                :src="`https://invalid-url.com/simulated-error-special-${i}.jpg`"
                alt="特价商品"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                @error="(e) => { e.target.src = defaultImg }"
              />
            </div>
            <h3 class="font-bold text-[#3A2A20] text-sm mb-2 line-clamp-1 group-hover:text-[#B24A42] transition-colors">{{ item.title }}</h3>
            <div class="flex items-center gap-2 mb-3">
              <span v-for="tag in item.tags" :key="tag" class="text-[10px] bg-[#F5EFE6]/80 text-[#7A6A5D] px-2 py-0.5 rounded shadow-sm border border-[#E8E0D5]/50">{{ tag }}</span>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex items-baseline gap-2">
                <span class="text-[#B24A42] font-extrabold text-lg">¥ {{ item.price }}</span>
                <span class="text-[#C4B5A5] text-xs line-through font-medium">¥ {{ item.originalPrice }}</span>
              </div>
              <button class="text-[#B24A42]/40 hover:text-[#B24A42] hover:scale-110 transition-all">
                <Heart class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
      <div class="bg-[#FCE4C6] border-2 border-[#EEDBC0] border-dashed rounded-[2rem] p-6 px-8 shadow-sm">

        <div class="flex justify-between items-end mb-6">
          <div class="flex items-center">
            <h2 class="text-2xl font-extrabold text-[#3A2A20] flex items-center tracking-wide">
              最新掉落 <Sparkles class="w-5 h-5 text-[#E5A03E] ml-2" />
            </h2>
            <span class="text-[#8C7A6B] ml-4 text-sm font-medium">刚刚被淘回来的小可爱们，快到手慢无~</span>
          </div>
          <button class="text-[#5C4D43] text-sm font-medium hover:text-[#B24A42] transition-colors flex items-center">
            查看更多 <ArrowRight class="w-4 h-4 ml-1" />
          </button>
        </div>

        <div class="grid grid-cols-4 gap-6 relative">
          <div v-for="(item, i) in latestItems" :key="i" class="bg-[#FBF4E8] rounded-2xl p-4 border border-[#F2E8DB]/60 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(178,74,66,0.1)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative">
            <div class="aspect-[4/3] bg-white/60 rounded-xl mb-3 relative overflow-hidden flex items-center justify-center border border-[#F2E8DB]/40 shadow-inner">
              <div class="absolute top-2 left-2 bg-white/95 text-[#3A2A20] text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm border border-[#F2E8DB]">
                仅一件
              </div>
              <img
                :src="`https://invalid-url.com/simulated-error-latest-${i}.jpg`"
                alt="最新掉落"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                @error="(e) => { e.target.src = defaultImg }"
              />
            </div>
            <h3 class="font-bold text-[#3A2A20] text-sm mb-2 line-clamp-1 group-hover:text-[#B24A42] transition-colors">{{ item.title }}</h3>
            <div class="flex items-center gap-2 mb-3">
              <span v-for="tag in item.tags" :key="tag" class="text-[10px] bg-[#F5EFE6]/80 text-[#7A6A5D] px-2 py-0.5 rounded shadow-sm border border-[#E8E0D5]/50">{{ tag }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-[#B24A42] font-extrabold text-lg">¥ {{ item.price }}</span>
              <button class="text-[#B24A42]/50 hover:text-[#B24A42] hover:scale-110 transition-all">
                <Heart class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
      <div class="relative bg-[#F8E5C7] rounded-[2.5rem] p-8 px-16 flex justify-between items-center shadow-md hover:shadow-xl transition-shadow">
        <svg class="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="38" fill="none" stroke="rgba(215,166,111,0.5)" stroke-width="2" stroke-dasharray="12 12" />
        </svg>
        <div class="relative z-10 flex items-center gap-4">
          <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#B24A42] shadow-sm border border-white/20">
            <Heart class="w-7 h-7" />
          </div>
          <div>
            <h4 class="font-bold text-[#3A2A20] text-lg">精心挑选</h4>
            <p class="text-xs text-[#8C7A6B] mt-0.5 font-medium">每一件都是治愈好物</p>
          </div>
        </div>
        <div class="relative z-10 h-14 w-[2px] opacity-80" style="background-image: repeating-linear-gradient(to bottom, #D7A66F 0px, #D7A66F 10px, transparent 10px, transparent 20px);"></div>
        <div class="relative z-10 flex items-center gap-4">
          <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#B24A42] shadow-sm border border-white/20">
            <Store class="w-7 h-7" />
          </div>
          <div>
            <h4 class="font-bold text-[#3A2A20] text-lg">多样选择</h4>
            <p class="text-xs text-[#8C7A6B] mt-0.5 font-medium">多种品类，满足喜好</p>
          </div>
        </div>
        <div class="relative z-10 h-14 w-[2px] opacity-80" style="background-image: repeating-linear-gradient(to bottom, #D7A66F 0px, #D7A66F 10px, transparent 10px, transparent 20px);"></div>
        <div class="relative z-10 flex items-center gap-4">
          <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#B24A42] shadow-sm border border-white/20">
            <Tent class="w-7 h-7" />
          </div>
          <div>
            <h4 class="font-bold text-[#3A2A20] text-lg">热门IP</h4>
            <p class="text-xs text-[#8C7A6B] mt-0.5 font-medium">来自世界各地的正版IP</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-[#D3875E] pt-3 pb-2 text-center relative z-20 rounded-t-3xl"
            style="background-image: repeating-linear-gradient(to right, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 12px, transparent 12px, transparent 24px); background-size: 100% 2px; background-position: top; background-repeat: no-repeat;">
      <div class="flex flex-col items-center justify-center gap-1 mt-1">
        <div class="flex items-center justify-center text-white text-sm font-medium drop-shadow-sm">
          <Heart class="w-3.5 h-3.5 mr-1.5" fill="white" />
          在这个快节奏的世界，总有一些可爱值得你停留。
        </div>
        <p class="text-white/80 text-xs tracking-wider font-medium">
          © 2026 趣致中古玩具店 All rights reserved.
        </p>
      </div>
    </footer>

    <div class="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5">

      <div class="relative group">
        <div class="w-12 h-12 bg-[#FDFCF8]/90 backdrop-blur-md rounded-full shadow-lg border border-rose-100 flex items-center justify-center text-[#B24A42] cursor-pointer hover:bg-rose-50 transition-all hover:scale-110 z-10 relative">
          <BookHeart class="w-6 h-6" />
        </div>

        <div class="absolute right-full top-1/2 -translate-y-1/2 pr-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-right scale-95 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto">
          <div class="w-72 h-72 bg-[#FDFCF8]/95 backdrop-blur-xl border border-rose-100 p-6 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-4 relative">
            <div class="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FDFCF8] border-r border-t border-rose-100 rotate-45"></div>
            <div class="w-40 h-40 bg-white rounded-xl border border-rose-100 flex-shrink-0 overflow-hidden flex items-center justify-center p-1 shadow-inner relative border border-gray-100">
              <img :src="xhsQrCode" alt="小红书二维码" class="w-full h-full object-contain" />
            </div>
            <div class="flex flex-col items-center relative z-10 w-full mt-1">
              <h3 class="font-bold text-[#3A2A20] text-sm mb-1">小红书扫码关注</h3>
              <div @click="copyToClipboard('898630566', 'xhs')" class="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FBF1E0] hover:bg-rose-50 rounded-lg text-xs text-[#8C7A6B] hover:text-[#B24A42] cursor-pointer transition-colors border border-[#F2DEB4] hover:border-rose-200 shadow-sm">
                <span class="font-mono font-bold text-sm text-[#5C4D43]">898630566</span>
                <Check v-if="copiedId === 'xhs'" class="w-4 h-4 text-[#B24A42]" />
                <Copy v-else class="w-4 h-4 opacity-60 text-[#8C7A6B]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative group">
        <div class="w-12 h-12 bg-[#FDFCF8]/90 backdrop-blur-md rounded-full shadow-lg border border-emerald-100 flex items-center justify-center text-[#74A37C] cursor-pointer hover:bg-emerald-50 transition-all hover:scale-110 z-10 relative">
          <MessageCircle class="w-6 h-6" />
        </div>

        <div class="absolute right-full top-1/2 -translate-y-1/2 pr-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-right scale-95 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto">
          <div class="w-72 h-72 bg-[#FDFCF8]/95 backdrop-blur-xl border border-emerald-100 p-6 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-4 relative">
            <div class="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FDFCF8] border-r border-t border-emerald-100 rotate-45"></div>
            <div class="w-40 h-40 bg-white rounded-xl border border-emerald-100 flex-shrink-0 overflow-hidden flex items-center justify-center p-1 shadow-inner relative border border-gray-100">
              <img :src="wechatQrCode" alt="微信二维码" class="w-full h-full object-contain" />
            </div>
            <div class="flex flex-col items-center relative z-10 w-full mt-1">
              <h3 class="font-bold text-[#3A2A20] text-sm mb-1">微信扫码添加</h3>
              <div @click="copyToClipboard('yu541605007', 'wechat')" class="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FBF1E0] hover:bg-emerald-50 rounded-lg text-xs text-[#8C7A6B] hover:text-[#74A37C] cursor-pointer transition-colors border border-[#F2DEB4] hover:border-emerald-200 shadow-sm">
                <span class="font-mono font-bold text-sm text-[#5C4D43]">yu541605007</span>
                <Check v-if="copiedId === 'wechat'" class="w-4 h-4 text-[#74A37C]" />
                <Copy v-else class="w-4 h-4 opacity-60 text-[#8C7A6B]" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Sparkles, ArrowRight, Heart, Store, Tent, MessageCircle, ChevronLeft, ChevronRight, BookHeart, Copy, Check, Tag } from 'lucide-vue-next'

import heroBg from '../assets/hero_bg.jpg'
import zhiouImg from '../assets/zone_zhiou.png'
import maorongImg from '../assets/zone_maorong.png'
import guashiImg from '../assets/zone_guashi.png'
import baijianImg from '../assets/zone_baijian.png'
import mingxinpianImg from '../assets/zone_mingxinpian.png'
import zawuImg from '../assets/zone_zawu.png'
import defaultImg from '../assets/default_product.png'
import wechatQrCode from '../assets/wechat_qr.png'
import xhsQrCode from '../assets/xhs_qr.png'

const specialItems = [
  { title: '复古红裙熊玩偶', tags: ['中古玩偶', '复古'], discount: '7折', price: '69.00', originalPrice: '98.00' },
  { title: '复古铁皮机器人', tags: ['铁皮玩具', '收藏'], discount: '6折', price: '78.00', originalPrice: '128.00' },
  { title: '旋转木马音乐盒', tags: ['音乐盒', '摆件'], discount: '5折', price: '99.00', originalPrice: '198.00' },
  { title: '复古挂饰钥匙扣', tags: ['挂件', '中古'], discount: '6.5折', price: '39.00', originalPrice: '60.00' }
]

const latestItems = [
  { title: '复古兔子摆件', tags: ['摆件', '礼物'], price: '128.00' },
  { title: '复古明信片套装', tags: ['明信片', '收藏'], price: '128.00' },
  { title: '复古玩具相机', tags: ['杂物', '摆件'], price: '128.00' },
  { title: '复古铁盒收纳盒', tags: ['杂物', '收藏'], price: '128.00' }
]

const baseZones = [
  { name: '指偶专区', img: zhiouImg },
  { name: '毛绒专区', img: maorongImg },
  { name: '挂饰专区', img: guashiImg },
  { name: '摆件专区', img: baijianImg },
  { name: '明信片专区', img: mingxinpianImg },
  { name: '杂物专区', img: zawuImg }
]

const infiniteZones = [...baseZones, ...baseZones, ...baseZones]
const sliderRef = ref(null)

const getScrollStep = () => {
  const slider = sliderRef.value
  if (!slider || slider.children.length < 2) return 0
  return slider.children[1].offsetLeft - slider.children[0].offsetLeft
}

onMounted(() => {
  setTimeout(() => {
    if (sliderRef.value) {
      const step = getScrollStep()
      sliderRef.value.scrollLeft = step * 6
    }
  }, 100)
})

const scrollNext = () => {
  const slider = sliderRef.value
  if (!slider) return
  const step = getScrollStep()
  if (slider.scrollLeft >= step * 11 - 10) {
    slider.scrollLeft = step * 5
  }
  void slider.offsetWidth
  slider.scrollBy({ left: step, behavior: 'smooth' })
}

const scrollPrev = () => {
  const slider = sliderRef.value
  if (!slider) return
  const step = getScrollStep()
  if (slider.scrollLeft <= step * 6 + 10) {
    slider.scrollLeft = step * 12
  }
  void slider.offsetWidth
  slider.scrollBy({ left: -step, behavior: 'smooth' })
}

const copiedId = ref('')
const copyToClipboard = async (text, type) => {
  try {
    await navigator.clipboard.writeText(text)
    copiedId.value = type
    setTimeout(() => {
      copiedId.value = ''
    }, 2000)
  } catch (err) {
    console.error('复制失败!', err)
  }
}
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>
