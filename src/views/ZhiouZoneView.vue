<template>
  <div class="bg-[#FBF1E0] min-h-screen pb-0 pt-6">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <div class="flex items-center text-sm font-medium text-[#8C7A6B]">
        <Home class="w-4 h-4 mr-1.5" />
        <span @click="router.push('/')" class="cursor-pointer hover:text-[#B24A42] transition-colors">首页</span>
        <span class="mx-2 text-[#EEDBC0]">/</span>
        <span class="text-[#3A2A20] font-bold">指偶专区</span>
      </div>
    </div>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div class="flex gap-10 items-center">
        <div class="w-[380px] flex-shrink-0 relative">
          <div class="w-full aspect-square rounded-[2rem] border-8 border-white shadow-lg overflow-hidden bg-[#FDF6EA]">
            <img :src="heroZhiouImg" alt="指偶专区大图" class="w-full h-full object-cover" @error="handleImgError" />
          </div>
        </div>

        <div class="flex-1">
          <h1 class="text-4xl font-extrabold text-[#3A2A20] mb-4 flex items-center tracking-wide font-brand">
            指偶专区 <Sparkles class="w-6 h-6 text-[#E5A03E] ml-3 drop-shadow-sm" />
          </h1>
          <h3 class="text-xl text-[#B24A42] font-bold mb-4 tracking-wider">来自世界的可爱指偶，陪伴你的小小剧场。</h3>
          <p class="text-[#5C4D43] leading-relaxed mb-6 font-medium max-w-2xl text-sm">
            精心挑选的海外中古指偶，每一只都有独特的表情与故事。<br/>
            无论是动物、角色还是童话系列，都是时光里温暖的小可爱。
          </p>

          <div class="inline-block bg-[#FDF6EA] border border-[#F2DEB4] rounded-2xl p-4 pr-10 mb-8 shadow-sm">
            <div class="flex items-center text-[#D3875E] font-extrabold mb-1.5">
              <Star class="w-5 h-5 mr-1.5" fill="currentColor" />
              本店不使用购物车与支付模块
            </div>
            <p class="text-xs text-[#8C7A6B] font-medium leading-relaxed">
              本店所有商品均为私域交易，不支持在线下单与付款。<br/>
              看中商品后请联系店主，我们会私信沟通确认后为您预留。
            </p>
          </div>

          <div class="flex items-center gap-4 flex-wrap">
            <button class="flex items-center px-6 py-2.5 rounded-full bg-[#B24A42] text-white font-bold hover:bg-[#9E4038] transition-all shadow-md hover:shadow-lg">
              <MessageCircle class="w-4 h-4 mr-2" />
              联系店主咨询
            </button>
            <button class="flex items-center px-6 py-2.5 rounded-full border-2 border-[#D3875E]/30 text-[#8C4639] font-bold hover:bg-[#FDF6EA] transition-all">
              <FileSearch class="w-4 h-4 mr-2" />
              查看联系方式
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <div class="flex items-center justify-between border-b border-[#EEDBC0]/60 pb-4">
        <div class="flex items-center gap-3">
          <button class="bg-[#B24A42] text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-sm">全部</button>
          <button class="bg-white text-[#5C4D43] px-6 py-1.5 rounded-full text-sm font-medium border border-[#EEDBC0] hover:border-[#D3875E] transition-colors">现货</button>
          <button class="bg-white text-[#5C4D43] px-6 py-1.5 rounded-full text-sm font-medium border border-[#EEDBC0] hover:border-[#D3875E] transition-colors">中古</button>
          <button class="bg-white text-[#5C4D43] px-6 py-1.5 rounded-full text-sm font-medium border border-[#EEDBC0] hover:border-[#D3875E] transition-colors">新品到店</button>
          <div class="w-px h-5 bg-[#EEDBC0] mx-2"></div>
          <button class="flex items-center text-[#5C4D43] px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white transition-colors">
            按价格 <ChevronDown class="w-4 h-4 ml-1 opacity-60" />
          </button>
          <button class="flex items-center text-[#5C4D43] px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white transition-colors">
            按人气 <ChevronDown class="w-4 h-4 ml-1 opacity-60" />
          </button>
        </div>
        <div class="text-[#8C7A6B] text-sm font-medium">共 {{ products.length }} 件商品</div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex gap-8 items-stretch">

        <div class="w-[73%]">
          <div class="grid grid-cols-4 gap-5 h-full">
            <div v-for="(item, i) in products" :key="i" class="bg-[#FBF5ED] rounded-[1.25rem] p-4 border border-[#F2E8DB]/60 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div class="aspect-square bg-white/60 rounded-xl mb-3 relative overflow-hidden flex items-center justify-center border border-[#F2E8DB]/40 shadow-inner">
                <div :class="[
                  'absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-md z-10 shadow-sm border',
                  item.badge === '仅一件' ? 'bg-white/95 text-[#3A2A20] border-[#F2E8DB]' : 'bg-[#D3875E] text-white border-[#C4764D]'
                ]">
                  {{ item.badge }}
                </div>
                <img
                  :src="`https://invalid-url.com/simulated-product-${i}.jpg`"
                  alt="商品图片"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  @error="handleImgError"
                />
              </div>

              <div class="flex items-center gap-1.5 mb-2.5">
                <span v-for="tag in item.tags" :key="tag" class="text-[10px] bg-white text-[#8C7A6B] px-1.5 py-0.5 rounded shadow-sm border border-[#E8E0D5]/50">{{ tag }}</span>
              </div>

              <h3 class="font-bold text-[#3A2A20] text-sm mb-3 line-clamp-2 group-hover:text-[#B24A42] transition-colors flex-1">{{ item.title }}</h3>

              <div class="flex justify-between items-center mt-auto">
                <span class="text-[#B24A42] font-extrabold text-lg">¥ {{ item.price }}</span>
                <button class="text-[#B24A42]/40 hover:text-[#B24A42] hover:scale-110 transition-all">
                  <Heart class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-[27%]">
          <div class="bg-[#FDF6EA] rounded-[2rem] p-6 border border-[#EEDBC0] shadow-sm relative overflow-hidden h-full flex flex-col">

            <h3 class="text-xl font-extrabold text-[#3A2A20] mb-4 mt-2 text-center tracking-widest flex-shrink-0">购买方式</h3>
            <div class="w-full h-[2px] mb-6 flex-shrink-0" style="background-image: repeating-linear-gradient(to right, #F1D0AB 0px, #F1D0AB 12px, transparent 12px, transparent 24px);"></div>

            <div class="relative px-2 flex-1 flex flex-col justify-between py-2 mb-6">
              <div class="absolute left-7 top-10 bottom-10 w-px border-l-2 border-dashed border-[#EEDBC0]"></div>

              <div class="relative flex items-start gap-5" v-for="(step, index) in steps" :key="index">
                <div class="w-10 h-10 rounded-full bg-white border-2 border-[#D3875E] text-[#D3875E] flex items-center justify-center font-bold text-base shadow-sm flex-shrink-0 z-10 relative mt-0.5">
                  <component :is="step.icon" class="w-4 h-4" />
                </div>
                <div class="pt-1.5">
                  <h4 class="font-extrabold text-[#3A2A20] text-base mb-1.5 tracking-wide">
                    <span class="mr-1.5 text-[#D3875E] text-lg">{{ index + 1 }}</span> {{ step.title }}
                  </h4>
                  <p class="text-[#8C7A6B] text-[13px] font-medium leading-relaxed">{{ step.desc }}</p>
                </div>
              </div>
            </div>

            <div class="mt-auto bg-[#FBF1E0] border border-[#EEDBC0] rounded-xl p-4 relative shadow-inner flex-shrink-0">
              <div class="flex items-start gap-2 relative z-10 pr-10">
                <Star class="w-5 h-5 text-[#E5A03E] flex-shrink-0 mt-0.5 drop-shadow-sm" fill="currentColor" />
                <p class="text-xs text-[#5C4D43] font-bold leading-relaxed">
                  每一只指偶都独一无二，<br/>先到先得，遇见即是缘分！
                </p>
              </div>
              <img
                :src="robotImg"
                class="absolute -right-2 -bottom-1 w-20 pointer-events-none object-contain transition-opacity duration-300"
                style="mix-blend-mode: multiply; filter: contrast(110%) brightness(105%);"
                alt="机器人装饰"
                @error="handleImgError"
              />
            </div>
          </div>
        </div>

      </div>

      <div class="w-[73%] flex justify-center items-center gap-4 mt-12 mb-12">
        <button class="w-8 h-8 rounded-full flex items-center justify-center text-[#C4B5A5] hover:bg-[#FDF6EA] transition-colors"><ChevronLeft class="w-4 h-4" /></button>
        <button class="w-8 h-8 rounded-full flex items-center justify-center bg-[#B24A42] text-white font-bold shadow-md">1</button>
        <button class="w-8 h-8 rounded-full flex items-center justify-center text-[#8C7A6B] hover:bg-[#FDF6EA] transition-colors font-medium">2</button>
        <button class="w-8 h-8 rounded-full flex items-center justify-center text-[#8C7A6B] hover:bg-[#FDF6EA] transition-colors"><ChevronRight class="w-4 h-4" /></button>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
      <div class="relative bg-[#F8E5C7] rounded-[2.5rem] p-8 px-16 flex justify-between items-center shadow-md">
        <svg class="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="38" fill="none" stroke="rgba(215,166,111,0.5)" stroke-width="2" stroke-dasharray="12 12" />
        </svg>

        <div class="relative z-10 flex items-center gap-4">
          <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#B24A42] shadow-sm border border-white/20">
            <Heart class="w-7 h-7" />
          </div>
          <div>
            <h4 class="font-bold text-[#3A2A20] text-lg">精心挑选</h4>
            <p class="text-xs text-[#8C7A6B] mt-0.5 font-medium leading-relaxed">每一件都是店主亲自从海外<br/>精挑细选的中古好物。</p>
          </div>
        </div>

        <div class="relative z-10 h-14 w-[2px] opacity-80" style="background-image: repeating-linear-gradient(to bottom, #D7A66F 0px, #D7A66F 10px, transparent 10px, transparent 20px);"></div>

        <div class="relative z-10 flex items-center gap-4">
          <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#B24A42] shadow-sm border border-white/20">
            <MessageCircle class="w-7 h-7" />
          </div>
          <div>
            <h4 class="font-bold text-[#3A2A20] text-lg">私域沟通</h4>
            <p class="text-xs text-[#8C7A6B] mt-0.5 font-medium leading-relaxed">不使用购物车与支付模块，<br/>私信沟通更安心、更灵活。</p>
          </div>
        </div>

        <div class="relative z-10 h-14 w-[2px] opacity-80" style="background-image: repeating-linear-gradient(to bottom, #D7A66F 0px, #D7A66F 10px, transparent 10px, transparent 20px);"></div>

        <div class="relative z-10 flex items-center gap-4 pr-16">
          <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#B24A42] shadow-sm border border-white/20">
            <Globe class="w-7 h-7" />
          </div>
          <div>
            <h4 class="font-bold text-[#3A2A20] text-lg">海淘中古玩具</h4>
            <p class="text-xs text-[#8C7A6B] mt-0.5 font-medium leading-relaxed">从世界各地淘来的温暖玩具，<br/>带来不一样的童年回忆。</p>
          </div>
        </div>

        <img
          :src="rabbitImg"
          class="absolute right-10 bottom-0 w-[120px] z-20 pointer-events-none object-contain"
          style="mix-blend-mode: multiply; filter: brightness(1.1) contrast(1.15);"
          alt="兔子装饰"
          @error="handleImgError"
        />
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  Home, Sparkles, Star, MessageCircle, FileSearch,
  ChevronDown, ChevronLeft, ChevronRight,
  Heart, Eye, ClipboardList, Globe, BookHeart, Copy, Check
} from 'lucide-vue-next'

import heroZhiouImg from '../assets/hero_zhiou.jpg'
import robotImg from '../assets/robot_deco.png'
import rabbitImg from '../assets/rabbit_deco.png'
import defaultImg from '../assets/default_product.png'
import wechatQrCode from '../assets/wechat_qr.png'
import xhsQrCode from '../assets/xhs_qr.png'

const router = useRouter()

const handleImgError = (e) => {
  e.target.src = defaultImg
}

const products = [
  { title: '森林动物指偶套装 (6只)', price: '128.00', tags: ['中古', '现货'], badge: '仅一件' },
  { title: '童话故事指偶套装 (5只)', price: '118.00', tags: ['中古', '现货'], badge: '仅一件' },
  { title: '马戏团指偶套装 (5只)', price: '118.00', tags: ['新品到店', '现货'], badge: '现货' },
  { title: '可爱动物指偶套装 (6只)', price: '128.00', tags: ['中古', '现货'], badge: '仅一件' },
  { title: '农场小伙伴指偶 (5只)', price: '128.00', tags: ['中古', '现货'], badge: '现货' },
  { title: '经典小熊指偶套装 (4只)', price: '98.00', tags: ['中古', '现货'], badge: '仅一件' },
  { title: '海洋生物指偶套装 (5只)', price: '118.00', tags: ['新品到店', '现货'], badge: '现货' },
  { title: '恐龙世界指偶套装 (5只)', price: '128.00', tags: ['中古', '现货'], badge: '仅一件' }
]

const steps = [
  { title: '看中商品', desc: '浏览专区，找到心仪的指偶', icon: Eye },
  { title: '联系店主', desc: '点击“联系店主咨询”发送私信', icon: MessageCircle },
  { title: '私域确认', desc: '确认商品细节、成色、库存与价格', icon: ClipboardList },
  { title: '下单预留', desc: '店主为您预留商品，安心等待', icon: Heart }
]

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
@import url('https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap');

.font-brand {
  font-family: 'ZCOOL KuaiLe', 'YouYuan', '幼圆', 'STHupo', cursive;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>
